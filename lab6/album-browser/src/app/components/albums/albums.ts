
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  // inject() — Angular gives us the AlbumService automatically
  private albumService = inject(AlbumService);

  // signal() — MUST use signal for async data in Angular 21
  albums = signal<Album[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    // ngOnInit runs once when the component is first created
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);     // .set() updates the signal → UI re-renders
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load albums. Please try again.');
        this.loading.set(false);
      }
    });
  }

  delete(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        // API doesn't actually delete, but we update the UI as if it did
        // .update() lets us transform the current signal value
        this.albums.update(list => list.filter(a => a.id !== id));
      },
      error: () => {
        alert('Failed to delete album.');
      }
    });
  }
}
