using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backtapping.Model
{
    public class Event
    {

        [BsonId]
        public ObjectId Id { get; set; }
        public string EventName { get; set; }
        
        public  Assistant[] assistants { get; set; }

        
    }
}
