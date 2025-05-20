import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:8080/api/v1/transaction';

  constructor(private httpClient: HttpClient) { }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.baseUrl, transaction);
  }

  getTransactions(type?: string): Observable<Transaction[]> {
    console.log(type);
    console.log(this.baseUrl);
    const url = type ? `${this.baseUrl}?type=${type}` : this.baseUrl;
    return this.httpClient.get<Transaction[]>(url);
  }
}
