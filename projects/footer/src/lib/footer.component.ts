import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-footer',
  templateUrl: `./footer.component.html`,
  styleUrl: `./footer.component.scss`
})
export class FooterComponent {

  @Output() footernavigationlinks: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) { }

  navigatetohome(){
    // this.router.navigate(['/home']);
    this.footernavigationlinks.emit(['/home']);
  }
  
  navigatetoabout(){
    // this.router.navigate(['/about']);
    this.footernavigationlinks.emit(['/about']);
  }

  navigatetoblog(){
    // this.router.navigate(['/blog']);
    this.footernavigationlinks.emit(['/blog']);
  }

  navigatetocontact(){
    // this.router.navigate(['/contact']);
    this.footernavigationlinks.emit(['/contact']);
  }

  navigatetojobs(){
    // this.router.navigate(['/jobs']);
    this.footernavigationlinks.emit(['/jobs']);
  }

  // navigatetotwitter(){

  // }

}
