import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  template: ` <h1>Inside Child1 Component </h1>
              <h2>{{str}}</h2>
  `,
})
export class Child1Component implements OnInit 
{
  public Data:any;
  public str:any;

  constructor(private _obj : NumberService) { }

  ngOnInit(): void
  {
    this.Data = this._obj.Prime(10)

     if(this.Data == false )
     {
      this.str = "Number is Prime";
     }
     else
     {
      this.str = "Number is not Prime";
     }
  }

}
