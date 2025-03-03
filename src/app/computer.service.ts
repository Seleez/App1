import { Injectable } from '@angular/core';
import { Computer } from './computer-list/computer-list.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor() { }
  computerList: Computer[] = [
      {
        processor: 'Intel I3-12200',
        ram: 16,
        GPU: 'RTX 4090',
        Motherboard: 'Intel',
      },
      {
        processor: 'Intel I5-12200',
        ram: 32,
        GPU: 'RTX 2060',
        Motherboard: 'Intel',
      },
      {
        processor: 'Intel I7-12200',
        ram: 128,
        GPU: 'RTX 4090',
        Motherboard: 'Intel',
      },
      {
        processor: 'Intel I9-12200',
        ram: 64,
        GPU: 'RTX 1030',
        Motherboard: 'Intel',
      },
      {
        processor: 'Intel I3-14020',
        ram: 16,
        GPU: 'RTX 3090',
        Motherboard: 'Intel',
      },
    ];
    
    getComputers():   Observable<Computer[]>{
      return of(this.computerList)
    }
}
