import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionComponent } from "./transaction/transaction.component";

@Component({
  selector: 'app-root',
  imports: [TransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
