import { Component,  OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { IEmployee } from '../interfaces';
import { TestService2 } from '../test.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [``]
})
export class WelcomeComponent implements OnInit {
  public employees: IEmployee[] = []
  public errorMsg: any;
  constructor(private _testService: TestService2) {}

  ngOnInit(): void{ 
    this._testService.getEmployees()
    .subscribe(data => this.employees = data)
              /** */
  
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
  // fireEvent(){
  //   this.childEvent.emit('heyyyy')
  // }
  // @Input('parentData') public name:any;

  // @Output() public childEvent = new EventEmitter();