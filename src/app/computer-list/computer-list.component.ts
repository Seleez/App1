import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export interface Computer {
  processor: string;
  ram: number;
  GPU: string;
  Motherboard: string;
}

@Component({
  selector: 'app-computer-list',
  imports: [NgFor, NgIf],
  templateUrl: './computer-list.component.html',
  styleUrl: './computer-list.component.css',
})
export class ComputerListComponent {
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
  selectedComputer?: Computer;
  onSelect(computer: Computer): void {
    this.selectedComputer = computer;
  }
}

// export const Computers
