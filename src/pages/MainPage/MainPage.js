import './MainPage.css';
import { LeftFilterBar } from "it-events-frontend";
import { CardList } from "it-events-frontend";
import { useEventsContext } from "it-events-frontend";
import { TopFilterBar } from "it-events-frontend";

export default function MainPage() {
    const { popularEvents } = useEventsContext();

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
                    events={popularEvents}
                />
            </div>
        </section>
    )
}