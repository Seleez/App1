import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ComputerService } from '../computer.service';
import { MessageService } from '../message.service';

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
  computerList: Computer[] = [];

  constructor(
    private computerService: ComputerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getComputers();
  }
  selectedComputer?: Computer;
  onSelect(computer: Computer): void {
    this.selectedComputer = computer;
    this.messageService.add(`[Computer: Selected  CPU = ${computer.processor}]`);
  }

  getComputers(): void {
    this.computerService
      .getComputers()
      .subscribe((computer) => (this.computerList = computer));
  }
}

// export const Computers
