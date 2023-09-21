import { Event } from "it-events-frontend";
// import { useParams } from 'react-router-dom';
import { useEventsContext } from "it-events-frontend";
import { apiEvents } from "it-events-frontend";


export default function EventsPage() {
    // const { id } = useParams();
    const { selectedEvent, setSelectEvent  } = useEventsContext();

    const fetchSelectedEvent = async (id) => {
        try {
          const data = await apiEvents.getSelectedEvent(id);
          setSelectEvent(data)
        } catch (error) {
             console.error("Ошибка при выполнении запроса:", error);
        }
      };

    return (
        <section className=''>
            <Event selectedEvent={selectedEvent} />
        </section>
    )
}