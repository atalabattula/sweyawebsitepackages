import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sweyawebsitepackages';

  routingdata(event:any){

    console.log(event);

  }

  footerroutingdata(event: any){
    console.log(event)
  }
}
