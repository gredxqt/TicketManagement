using System;
using System.ComponentModel.DataAnnotations;

namespace TicketManagement.Models
{
    public class Ticket
    {
        [Key]
        public int TicketId { get; set; }

        [Required]
        [StringLength(100)]
        public string Description { get; set; }

        [Required]
        [StringLength(10)]
        public string Status { get; set; } // "Open" or "Closed"

        public DateTime Date { get; set; } = DateTime.Now;
    }
}
