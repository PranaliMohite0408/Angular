import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
   @Output() public Myevent = new EventEmitter();
/*
    //Question 1
    public value:any
    public Send(data:any)
    {
      this.value = data;
      this.Myevent.emit(this.value);
    }
*/
  /*
    //Question 2
    @Input() Data:any;

    public Message = "Hello from Child"

    public send()
    {
      return this.Myevent.emit(this.Message);
    }
  */
 
}
