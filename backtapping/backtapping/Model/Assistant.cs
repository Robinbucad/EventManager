using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace backtapping.Model
{
    public class Assistant
    {
        public string EventName { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }


    }
}
