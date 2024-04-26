import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'lib-backtotopbutton',
  templateUrl: `./backtotopbutton.component.html`,
  styleUrl: `./backtotopbutton.component.scss`
})
export class BacktotopbuttonComponent {

  constructor(private viewportScroller: ViewportScroller,){

  }

  public showBackToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 100;
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}

