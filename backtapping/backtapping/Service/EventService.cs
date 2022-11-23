using backtapping.Controllers;
using backtapping.Exceptions;
using backtapping.Model;
using backtapping.Repository;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Diagnostics;

namespace backtapping.Service
{
    public class EventService : IEventService
    {

        private MongoDBRepository repository = new MongoDBRepository();
        private IMongoCollection<Event> collection;

        public EventService()
        {
            collection = repository.db.GetCollection<Event>("Events");
        }

        public async Task<List<Event>> GetEvents()
        {
            return await collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task insertEvent(Event ev)
        {
            bool exist = await collection.Find( e => e.EventName == ev.EventName ).AnyAsync(); 
            
            if (exist)
            {
                throw new CustomError("This event already exists!");
            }
            else
            {
                await collection.InsertOneAsync(ev);
            }

        }

        public async Task updateEvent(Assistant assistant)
        {
            bool exist = await collection.Find(e => e.EventName == assistant.EventName).AnyAsync();

            if(exist)
            {
               

                var filter = Builders<Event>
                .Filter
                .Eq(e => e.EventName, assistant.EventName);

                

                var update = Builders<Event>.Update.Push<Assistant>(a => a.assistants, assistant);

                await collection.FindOneAndUpdateAsync(filter, update);
            }
            else
            {
                throw new CustomError("Event doesn't exist");
            }

            
        }
    }
}
