import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
 /*
  Data:any = "Marvellous Infosystem";

  public fun()  //Question 2
  {
    this.Data = "Marvellous Infosystem";
    return this.Data;
  }
 
  public fun()  //Question 3
  {
    this.Data = "Educating for Better Tomorrow";
    return this.Data;
  }
   */

  public Name = "Marvellous Infosystems";

  public fun()
  {
     this.Name = this.Name.toUpperCase();
  }

  public gun()
  {
    this.Name = this.Name.toLowerCase();
  }

}
