import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover) = "showSecretMsg()">
        There is a secret message for you: {{message}}
    </section>
  `,
})
export class App {
  message = '';
  showSecretMsg(){
    this.message = 'Way to go';
  }
}