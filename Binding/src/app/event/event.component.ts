import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent 
{
  public str = "";

  public Fun()
  {
    console.log("Inside Fun Function...");
  }
  public Gun()
  {
    this.str = "Button Clicked";
  }
  public Sun(Data:any)   //void *
  {
    console.log(Data)
  }
}
