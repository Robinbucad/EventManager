using backtapping.Model;

namespace backtapping.Service
{
    public interface IEventService
    {
        Task insertEvent(Event ev);
        Task<List<Event>> GetEvents();

        Task updateEvent(Assistant assistant);
    }
}
