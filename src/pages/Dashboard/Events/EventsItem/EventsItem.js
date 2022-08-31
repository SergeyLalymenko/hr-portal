import './EventsItem.scss';

function EventsItem({ event }) {
    return (
        <div className="event">
            <img className="event__avatar" src={event.avatar} width="38"
                 height="38"/>

            <div className="event__content">
                <h6 className="event__name" title={event.userFullname}>
                    {event.userFullname}
                </h6>

                <h6 className="event__celebration" title={event.description}>
                    {event.description}
                </h6>
            </div>
        </div>
    );
}

export default EventsItem;