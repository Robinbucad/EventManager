using backtapping.Model;
using MongoDB.Bson;

namespace backtapping.Controllers
{
    public class EventDTO
    {
        public ObjectId Id { get; set; }
        public string EventName { get; set; }
        public Assistant[] assistants { get; set; }

    }
}
