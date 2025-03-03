import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormComponent } from './form/form.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { MessagesComponent } from './messages/messages.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NewComponentComponent,
    FormComponent,
    ComputerListComponent,
    MessagesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App1';
}
