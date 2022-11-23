using MongoDB.Driver;

namespace backtapping.Repository
{
    public class MongoDBRepository
    {
        public MongoClient client;
        public IMongoDatabase db;

        public MongoDBRepository()
        {
            client = new MongoClient("mongodb+srv://robinbucad:170622@robincluster.oogpkqd.mongodb.net/?retryWrites=true&w=majority");
            db = client.GetDatabase("Events");
        }
    }
}
