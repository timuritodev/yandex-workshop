import { Event } from "../../it-events-template/src/components/Event/Event";
import { events } from "../../it-events-template/src/utils/events"

export default function MainPage() {
    return (
        <section className=''>
            <Event selectedEvent={events[4]} />
        </section>
    )
}