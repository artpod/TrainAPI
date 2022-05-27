namespace TrainAPI.Models
{
    public class Station
    {
        public Station()
        {
            Trips = new HashSet<Trip>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public int? CityId { get; set; }

        public virtual City? City { get; set; }
        public virtual ICollection<Trip> Trips { get; set; }
    }
}
