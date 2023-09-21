import { CardList } from "it-events-frontend";
import { useEventsContext } from "it-events-frontend";
import { SortBar } from "it-events-frontend";
import { PageTitle } from "it-events-frontend";

export default function FavoritePage() {
    const { favoriteEvents } = useEventsContext();

    return (
        <section className=''>
            <PageTitle title="Избранное" subtitle="Сохраненные события" size={50} />
            <SortBar />
            {favoriteEvents.length ? (
                <CardList
                    title=""
                    listDirection="col"
                    cardDirection="row"
                    style={{ gap: "22px" }}
                    events={favoriteEvents}
                />
            ) : (
                <PageTitle title="Список пуст" subtitle="Вы пока ничего не сохранили в избранное, но вы можете начать пополнять свой список избранного прямо сейчас. Для этого воспользуйтесь поиском на нашем сайте и найдите интересующие вас события." size={35} />
            )}
        </section>
    )
}
