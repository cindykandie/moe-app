import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [`
  .text-success{
    color:green;
  }

  .text-danger{
    color:red;
  }

  .text-special{
    font-style: italic;
  }
  
  `]
})
export class WelcomeComponent implements OnInit {

  public name = ""
  public successClass="text-success"
  public hasError = "false"
  public isSpecial = "true"
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  displayName = false;
  public highlightColor = "hotpink"

  constructor() { }

  ngOnInit(): void {  
  }
  greetUser(){
    return "Hello " + this.name
  }
}
