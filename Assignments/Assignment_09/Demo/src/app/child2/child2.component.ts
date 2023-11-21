import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template:`<h1>Inside Chil2 Component</h1>
            <h2>Count of Capital Letters is {{count}}</h2>
  
  `
})

export class Child2Component implements OnInit  {

  constructor(private _obje:StringService)
  {}
  public count:any;
  
  public str:any = "MarveLLous";


  ngOnInit(): void 
  {
    this.count = this._obje.CountCapital(this.str);
  }
}
