namespace TrainAPI.Models
{
    public class Train
    {
        public Train()
        {
            Trips = new HashSet<Trip>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Trip> Trips { get; set; }
    }
}
