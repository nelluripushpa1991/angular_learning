import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transaction',
  imports: [FormsModule, CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit{

  constructor(private transactionService: TransactionService) {}

  transactions: Transaction[] = [];
  newTransaction: Transaction = {amount: 0, type: 'credit'}
  filterType: string = '';

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getTransactions(this.filterType).subscribe(data => this.transactions = data);
  }

  addTransaction() {
    this.transactionService.addTransaction(this.newTransaction).subscribe(data => {
      this.newTransaction = {amount: 0, type: 'credit'};
      this.loadTransactions();
    })
  }

}
