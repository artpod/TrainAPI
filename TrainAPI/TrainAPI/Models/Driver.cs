using System.ComponentModel.DataAnnotations;

namespace TrainAPI.Models
{
    public class Driver
    {
        public Driver()
        {
            Trips = new HashSet<Trip>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        [Range(1955,2004, ErrorMessage="Age should be between 1955 and 2004")]
        public int? Birthday { get; set; }
         
        public virtual ICollection<Trip> Trips { get; set; }
    }
}
