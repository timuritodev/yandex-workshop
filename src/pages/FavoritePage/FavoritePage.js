import { CardList } from "../../it-events-template/src/components/CardList/CardList";
import { useEventsContext } from "../../it-events-template/src/utils/context/EventsContext";
import useIsMobileResolution from "../../it-events-template/src/utils/hooks/useIsMobileResolution";
import { SortBar } from "../../it-events-template/src/components/SortBar/SortBar";
import { PageTitle } from "../../it-events-template/src/UI-kit";

export default function FavoritePage() {
    const { favoriteEvents } = useEventsContext();

    const isNotMobile = useIsMobileResolution(1440);
    const favorites = !isNotMobile
        ? favoriteEvents.slice(0, 6)
        : favoriteEvents.slice(0, 4);

    return (
        <section className=''>
            <PageTitle title="Избранное" subtitle="Сохраненные события" size={50}/>
            <SortBar />
            <CardList
                title=""
                listDirection="col"
                cardDirection="row"
                style={{ gap: "22px" }}
                events={favorites}
            />
        </section>
    )
}