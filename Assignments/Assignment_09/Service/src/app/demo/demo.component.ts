import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  template: ` <h1>Inside Demo Component </h1>
  <h2>Addition of Two Number is : {{ans1}} </h2>
  <h2>Substraction of Two Number is : {{ans2}} </h2>
  `,
})
export class DemoComponent implements OnInit 
{
  public ans1:any;
  public ans2:any;
 
  constructor(private _obj : ArithmeticService)
  { }

  ngOnInit(): void 
  {
    this.ans1 = this._obj.Add(30,10);
    this.ans2 = this._obj.Sub(30,10);
  }

}
