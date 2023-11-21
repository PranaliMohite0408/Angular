import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template:` <h1>Inside Child1 Component</h1>
            {{Ans}}
  
  `
})
export class Child1Component implements OnInit  {


  public Ans:any;

  constructor(private _obj:NumberService)
  {}

  ngOnInit(): void 
  {
      this.Ans = this._obj.checkPrime(10);
      if(this.Ans == true)
      {
        this.Ans = "Nuber is Prime";
      }
      else{
        this.Ans = "Nuber is Not Prime";
      }
  }

  

}
