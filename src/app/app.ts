import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { onclick } from '@angular/core/directives/onclick';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
closeMenu() {
throw new Error('Method not implemented.');
}
isMenuOpen: any;
toggleMenu() {
throw new Error('Method not implemented.');
}
openlinkedIn: any;
openlinkedin() {
throw new Error('Method not implemented.');
}
toggleDropdown() {
throw new Error('Method not implemented.');
}
closeDropdown() {
throw new Error('Method not implemented.');
}
bookAppointment() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('project');
doctor: any;
}

 
 
   



  

 

  

function toggleDropdown() {
  throw new Error('Function not implemented.');
}

function closeDropdown() {
  throw new Error('Function not implemented.');
}

function openlinkdin(): void {
  throw new Error('Function not implemented.');
}

export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
 


function toggleMenu() {
  throw new Error('Function not implemented.');
}

