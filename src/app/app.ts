import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected isNavScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isNavScrolled = window.scrollY > 120;
  }
}
