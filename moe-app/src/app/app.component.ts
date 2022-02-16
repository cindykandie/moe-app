import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moe App';
  
  public name = "katie"; //name to be input from app component to welcome component

  public message= "Moe App"

}
