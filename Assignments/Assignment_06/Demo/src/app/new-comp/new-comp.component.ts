import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent 
{
    public Name = "Marvellous";

    public data1 = this.Name.toLocaleLowerCase();

    public data2 = this.Name.toUpperCase();

    public data3 = this.Name + "  Infosystem";

}
