import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: `./header.component.html`,
  styleUrl: `./header.component.scss`
})
export class HeaderComponent {

  @Output() navigation: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) { }

  navigatetohome(){
    // this.router.navigate(['/home']);
    this.navigation.emit(['/home']);
  }
  
  navigatetoabout(){
    // this.router.navigate(['/about']);
    this.navigation.emit(['/about']);
  }
  navigatetoblog(){
    // this.router.navigate(['/blog']);
    this.navigation.emit(['/blog']);
  }

  navigatetocontact(){
    // this.router.navigate(['/contact']);
    this.navigation.emit(['/contact']);
  }

  navigatetojobs(){
    // this.router.navigate(['/jobs']);
    this.navigation.emit(['/jobs']);
  }

  navigatetotwitter(){


  }

  navigatetolinkedin(){
    

  }

 
}
