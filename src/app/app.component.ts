import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogine!:boolean ;  
  constructor(){ 
    this.isLogine = false
   }
  ngOnInit():void {}
  login(): void {
    this.isLogine = !this.isLogine
  }
  get loginStatus():string {
    return `user is ${this.isLogine? 'login' :'logout'}`
  }
}
