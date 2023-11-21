import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demoo',
  template: `<h1>Inside Demoo Component</h1>

    <h2>Addition of Two Integers is {{x}}</h2>
    <h2>Addition of Two Integers is {{y}}</h2>

  `
})
export class DemooComponent implements OnInit {
  
  public x:any;
  public y:any;

  constructor(private _obj:ArithmeticService)
  {}

  ngOnInit(): void 
  {
     this.x = this._obj.Add(10,11);
     this.y = this._obj.sub(11,10);
  }
}
