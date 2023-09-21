import { LeftFilterBar } from "it-events-frontend";
import { CardList } from "it-events-frontend";
import { useEventsContext } from "it-events-frontend";
import { TopFilterBar } from "it-events-frontend";
import { PageTitle } from "it-events-frontend";

export default function ResultPage() {
    const { searchResult, popularEvents } = useEventsContext();

    return (
        <section className='search__container'>
            <LeftFilterBar />
            <div className='search__box'>
                <TopFilterBar />
                {searchResult.length ? (
                    <CardList
                        title=""
                        listDirection="col"
                        cardDirection="row"
                        style={{ gap: "22px" }}
                        events={searchResult}
                    />
                ) : (
                    <>
                        <PageTitle title="Ничего не нашлось" subtitle="Но нам есть, что предложить" size={50} />
                        <CardList
                            title="Популяроное"
                            listDirection="col"
                            cardDirection="row"
                            style={{ gap: "22px" }}
                            events={popularEvents}
                        />
                    </>
                )}
            </div>
        </section>
    )
}
