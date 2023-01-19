import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(str:string)
  {
    var i:any=0, cnt:any=0;

    while(str[i] != '\0')
    {
      if(str[i]>='A' && str[i]<='Z')
      {
        cnt++;
      }
      i++;
    }
    return cnt;
  }
}
