using Microsoft.EntityFrameworkCore;

namespace TrainAPI.Models
{
    public class TrainAPIContext : DbContext
    {
        public virtual DbSet<Station> Stations { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Trip> Trips { get; set; }
        public virtual DbSet<Driver> Drivers { get; set; }
        public virtual DbSet<Train> Trains { get; set; }
        public TrainAPIContext(DbContextOptions<TrainAPIContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
