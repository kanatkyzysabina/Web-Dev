import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);  // reads URL params
  private router = inject(Router);         // for programmatic navigation
  private albumService = inject(AlbumService);

  album = signal<Album | undefined>(undefined);
  editTitle = signal('');
  loading = signal(true);
  saved = signal(false);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album.set(data);
        this.editTitle.set(data.title);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  save(): void {
    const current = this.album();
    if (!current) return;

    const updated: Album = { ...current, title: this.editTitle() };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album.set(updated); // update UI locally
        this.saved.set(true);
        setTimeout(() => this.saved.set(false), 2000); // hide message after 2s
      }
    });
  }
}
