import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }


  public CountCapital(str:any):any
  {
    var i:any, cnt:any;

    while(str[i]!= '\0')
    {
      if(str[i] >= 'A' &&  str[i] <= 'Z')
      {
        cnt++;
      }
      i++;
    }
    return cnt;
  }

}
