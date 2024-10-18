import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketService } from '../ticket.service';
import { TicketModalComponent } from '../ticket-modal/ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  displayedColumns: string[] = ['ticketId', 'description', 'status', 'date', 'actions'];
  dataSource = new MatTableDataSource<any>([]);  // Initialize as empty
  totalTickets: number = 0;
  openTickets: number = 0;   // Number of open tickets
  closedTickets: number = 0; // Number of closed tickets
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private ticketService: TicketService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(
      (data) => {
        this.dataSource.data = data;  // Assign data to the table dataSource
        this.dataSource.paginator = this.paginator; 
        this.dataSource.sort = this.sort;
        this.totalTickets = this.dataSource.data.length;
        this.openTickets = this.dataSource.data.filter(ticket => ticket.status === 'Open').length;
        this.closedTickets = this.dataSource.data.filter(ticket => ticket.status === 'Closed').length;
      },
      (error) => {
        console.error('Error fetching tickets', error);
      }
    );
  }

  openModal(ticket?: any): void {
    const dialogRef = this.dialog.open(TicketModalComponent, {
      width: '400px',
      data: ticket ? { ...ticket } : { description: '', status: 'Open', date: new Date().toISOString().substring(0, 10) }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitTicket(result);
      }
    });
  }

  submitTicket(ticket: any): void {
    if (ticket.ticketId) {
      this.ticketService.updateTicket(ticket.ticketId, ticket).subscribe(() => {
        this.getTickets();
      });
    } else {
      this.ticketService.createTicket(ticket).subscribe(() => {
        this.getTickets();
      });
    }
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.getTickets();
    }, error => {
      console.error('Error deleting ticket', error);
    });
  }
}
