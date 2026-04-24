import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected isNavScrolled = false;
  protected currentMiniSlide = 0;
  protected currentChallengeSlide = 0;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isNavScrolled = window.scrollY > 120;
  }

  goToMiniSlide(index: number): void {
    this.currentMiniSlide = index;
  }

  goToChallengeSlide(index: number): void {
    this.currentChallengeSlide = index;
  }
}
