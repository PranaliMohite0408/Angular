import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';

  //public Value:any;// Question  1

  /*
  Question 2
  public Message = "Hello from Parent ";
  public Data:any;*/

  /*
  Question 3
  public len:any;
  public Name:any;
  public fun()
  {
    this.len = this.Name.length;
    return this.len;
  }
  */

 //Question 4
  public len:any
  public fun(data:any)
  {
    this.len = data.length;
  }

}
