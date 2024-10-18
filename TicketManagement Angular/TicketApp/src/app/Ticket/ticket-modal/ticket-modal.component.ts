import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent implements OnInit {

  ticket: any = { description: '', status: 'Open', date: new Date().toISOString().substring(0, 10) };

  constructor(
    public dialogRef: MatDialogRef<TicketModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ticket = { ...data };
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.ticket.description && this.ticket.status && this.ticket.date) {
      this.dialogRef.close(this.ticket);  // Close the dialog and return the ticket data
    }
  }
}
