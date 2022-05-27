namespace TrainAPI.Models
{
    public class City
    {
        public City()
        {
            Stations = new HashSet<Station>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Station> Stations { get; set; }
    }
}
