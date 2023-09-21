import { CardList } from "it-events-frontend";
import { useEventsContext } from "it-events-frontend";
import { SortBar } from "it-events-frontend";
import { PageTitle } from "it-events-frontend";

export default function FavoritePage() {
    const { favoriteEvents } = useEventsContext();

    return (
        <section className=''>
            <PageTitle title="Избранное" subtitle="Сохраненные события" size={50}/>
            <SortBar />
            <CardList
                title=""
                listDirection="col"
                cardDirection="row"
                style={{ gap: "22px" }}
                events={favoriteEvents}
            />
        </section>
    )
}