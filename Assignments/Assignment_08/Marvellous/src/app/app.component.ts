import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';

  public Value:any;// Question  1


  public Message = "Hello from Parent ";
  public Data:any;

  public Name:any;
  public len1:any;

  public gun()
  {
    this.len1 = this.Name.length;
    return this.len1;
  }



 //Question 4
  public len:any
  public fun(data:any)
  {
    this.len = data.length;
  }

}
