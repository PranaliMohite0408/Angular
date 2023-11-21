import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{

    @Output() public Myevent = new EventEmitter();

    // public SendMessage(Name:any)
    // {
    //   this.Myevent.emit(Name);
    // }

    // public message = "Hello from child";

    // @Input() Data:any;

    // public sendData()
    // {
    //   this.Myevent.emit(this.message);
    // } 

}
