import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(a:any, b:any)
  {
    return a+b;
  }
  public Sub(a:any, b:any)
  {
    return a-b;
  }
}
