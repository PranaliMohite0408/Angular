import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  public Add(a:any, b:any) {
    return a+b;
  }
  public sub(a:any, b:any)
  {
    return a-b;
  }


  constructor() { }
}
