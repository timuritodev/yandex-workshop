import './SearchPage.css';
import { LeftFilterBar } from "../../it-events-template/src/components/LeftFilterBar/LeftFilterBar";
import { CardList } from "../../it-events-template/src/components/CardList/CardList";
import { useEventsContext } from "../../it-events-template/src/utils/context/EventsContext";
import useIsMobileResolution from "../../it-events-template/src/utils/hooks/useIsMobileResolution";
import { TopFilterBar } from "../../it-events-template/src/components/TopFilterBar/TopFilterBar";

export default function SearchPage() {
    const { recommendedEvents } = useEventsContext();

    const isNotMobile = useIsMobileResolution(1440);
    const recommended = !isNotMobile
        ? recommendedEvents.slice(0, 6)
        : recommendedEvents.slice(0, 4);

    return (
        <section className='search__container'>
            <LeftFilterBar />
            <div className='search__box'>
                <TopFilterBar />
                <CardList
                    title=""
                    listDirection="col"
                    cardDirection="row"
                    style={{ gap: "22px" }}
                    events={recommended}
                />
            </div>
        </section>
    )
}