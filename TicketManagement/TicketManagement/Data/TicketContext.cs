using Microsoft.EntityFrameworkCore;
using TicketManagement.Models;

namespace TicketManagement.Data
{
  
    public class TicketContext : DbContext
    {
        public TicketContext(DbContextOptions<TicketContext> options) : base(options)
        {
        }

        public DbSet<Ticket> Tickets { get; set; }
    }
}
