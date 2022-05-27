namespace TrainAPI.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public TimeSpan? Time { get; set; }
        public int? DriverId { get; set; }
        public int? StationId { get; set; }
        public int? TrainId { get; set; }

        public virtual Station? Station { get; set; }
        public virtual Driver? Driver { get; set; }
        public virtual Train? Train { get; set; }
    }
}
