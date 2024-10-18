import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:5016/api/tickets'; // Use your API URL

  constructor(private http: HttpClient) { }

  // Get all tickets
  getTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get ticket by ID
  getTicket(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new ticket
  createTicket(ticket: any): Observable<any> {
    
    
    return this.http.post<any>(this.apiUrl, ticket);
  }

  // Update an existing ticket
  updateTicket(id: number, ticket: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, ticket);
  }

  // Delete a ticket
  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
