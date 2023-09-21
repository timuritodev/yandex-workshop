import { Event } from "../../it-events-template/src/components/Event/Event";
import { events } from "../../it-events-template/src/utils/events"
import { useParams } from 'react-router-dom';

export default function EventsPage() {
    const { id } = useParams();
    return (
        <section className=''>
            <Event selectedEvent={events[id]} />
        </section>
    )
}