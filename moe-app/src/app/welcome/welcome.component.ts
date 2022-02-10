import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

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
  @Input() public parentData:any;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(){  
  }
  fireEvent(){
    this.childEvent.emit('heyyyy')
  }
}

// public colors = ["yellow", "red", "green", "purple"]
// public name = ""
  // public successClass="text-success"
  // public hasError = "false"
  // public isSpecial = "true"
  // public messageClasses ={
  //   "text-success": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }
  // displayName = false;

  // greetUser(){
  //   return "Hello " + this.name
  // }