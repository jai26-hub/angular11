import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'demo';
  
// }


export class AppComponent {
  constructor(
    public router:Router
  ) {
    this.initilizeApp();
  }


  initilizeApp(){
      this.router.navigateByUrl('customer')
  }
}