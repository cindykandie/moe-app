import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public greeting= "manzee";

  // logMessage(value){
  //   alert(value)
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
