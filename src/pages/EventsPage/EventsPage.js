import { Event } from "it-events-frontend";
// import { events } from "../../it-events-template/src/utils/events"
import { useParams } from 'react-router-dom';
import { useEventsContext } from "it-events-frontend";

export default function EventsPage() {
    const { id } = useParams();
    const { popularEvents } = useEventsContext();

    return (
        <section className=''>
            <Event selectedEvent={popularEvents[id]} />
        </section>
    )
}