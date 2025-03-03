import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormComponent } from './form/form.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponentComponent, FormComponent, ComputerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App1';
}
