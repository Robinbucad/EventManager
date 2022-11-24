using backtapping.Model;
using backtapping.Service;
using Microsoft.AspNetCore.Mvc;

namespace backtapping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : Controller
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> getEvents()
        {

            List<Event> events = await _eventService.GetEvents();
            List<EventDTO> eventsDTO = new List<EventDTO>();

            foreach (Event ev in events)
            {
                EventDTO eventDTO = new EventDTO();
                eventDTO.Id = ev.Id;
                eventDTO.EventName = ev.EventName;

                eventDTO.assistants = ev.assistants;

                eventsDTO.Add(eventDTO);
            }


            return Ok(eventsDTO);
        }

        [HttpPost]
        public async Task<IActionResult> createEvent([FromBody] Event ev)
        {
            if (ev == null) { return BadRequest(); }
            if (ev.EventName == string.Empty) { ModelState.AddModelError("Event name", "Event name should't be empty"); }

            EventDTO eventDTO = new EventDTO();
            eventDTO.EventName = ev.EventName;
            eventDTO.assistants = ev.assistants;

            await _eventService.insertEvent(ev);
            return Created("Created", eventDTO);
        }

        [HttpPut]
        public async Task<IActionResult> updateEvent(Assistant assistant)
        {
            if (assistant == null) { return BadRequest(); }

            Assistant newAssist = new Assistant();
            newAssist.EventName = assistant.EventName;
            newAssist.Name = assistant.Name;
            newAssist.Surname = assistant.Surname;
            newAssist.Phone = assistant.Phone;
            newAssist.Email = assistant.Email;

            await _eventService.updateEvent(newAssist);
            return Created("Created", newAssist);
        }
    }
}
