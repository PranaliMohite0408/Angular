import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public Prime(No:any)
  {
    var i:any, cnt:any;

    for(i=2;i<=No;i++)
    {
      if(No%i==0)
      {
        cnt++;
      }
    }

    if(cnt == 0)
    {
      return false; 
    }
    else
    {
      return true; 
    }

  }
}
