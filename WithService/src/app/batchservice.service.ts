import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService {

  //Connection to server

  public GetBatches()
  {
    return[
      {"Name":"PPA", "Duration":4, "Fees":16500},
      {"Name":"LB", "Duration":3, "Fees":1700},
      {"Name":"Python", "Duration":5, "Fees":15000}
    ]
  }
  constructor() { }
}
