import { LeftFilterBar } from "it-events-frontend";
import { CardList } from "it-events-frontend";
import { useEventsContext } from "it-events-frontend";
import { TopFilterBar } from "it-events-frontend";
import { apiEvents } from "it-events-frontend";

export default function ResultPage() {
    const { popularEvents } = useEventsContext();

    const { searchRequest, setSearchRequest  } = useEventsContext();

    const fetchSelectedEvent = async (id) => {
        try {
          const data = await apiEvents.getSelectedEvent(id);
          setSearchRequest(data)
        } catch (error) {
             console.error("Ошибка при выполнении запроса:", error);
        }
      };

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
                    events={searchRequest}
                />
            </div>
        </section>
    )
}