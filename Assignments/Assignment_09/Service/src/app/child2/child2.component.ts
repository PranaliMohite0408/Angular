import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: ` <h1>Inside Child2 Component </h1>
              <h2>Count of Capital Letter in Given String is : {{cnt}} </h2>
  `,
})
export class Child2Component implements OnInit
{
  public str = "Marvellous Infosystem";
  public cnt:any;

  constructor(private _obj:StringService) { }

  ngOnInit(): void 
  {
    this.cnt = this._obj.CountCapital(this.str)
  }

}
