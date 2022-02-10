import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public greeting= "heyyy";
  public password!: string; 


  // logMessage(){
  //   alert(this.password)
  // }

  // validatePassword(){
  //   console.log(this.password)
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
