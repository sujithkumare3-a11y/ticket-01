import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
bookAppointment() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('project');
doctor: any;
}

 
