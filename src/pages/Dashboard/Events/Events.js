import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '@store/eventsSlice';
import { useSortable } from '@dnd-kit/sortable';
import EventsItem from './EventsItem/EventsItem';
import AddEventModal from './AddEventModal/AddEventModal';
import DatePicker from 'react-datepicker';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import '@styles/reactDatepicker/reactDatepicker.scss';
import './Events.scss';

function Events({ id, isCustomizing, getCustomizingClass, onDeleteComponent }) {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.data);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    function renderEvents() {
        if(JSON.stringify(getFilteredEvents()) !== JSON.stringify(filteredEvents)) {
            setFilteredEvents(getFilteredEvents());
        }

        return filteredEvents.map((event) => <EventsItem key={event.id} event={event} />);
    }

    function getFilteredEvents() {
        const parsedStartDate = Date.parse(startDate.toDateString());
        const parsedEndDate = endDate ? Date.parse(endDate.toDateString()) : parsedStartDate;

        return events.filter((event) => {
            return (
                (event.endDate >= parsedStartDate) &&
                (event.startDate <= parsedEndDate)
            );
        })
    }

    function onModalOpen() {
        isSuccessModal && setIsSuccessModal(false);

        setIsModalOpened(true);
    }

    function onDatepickerChange(dates) {
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end);
    }

    return (
        <Tippy
            className="tip"
            content={<p>Drag the section to your desired spot on the dashboard.<span className="tip-triangle tip-bottom"></span></p>}
            placement="top"
            disabled={!isCustomizing}
        >
            <div
                className={classNames('events', 'dashboard-block', getCustomizingClass())}
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
            >
                {
                    !isCustomizing ? (
                        <div className="events__head">
                            <h5>
                                Events
                            </h5>

                            {
                                !!filteredEvents.length && (
                                    <div className="events__add" onClick={onModalOpen}>
                                        <div></div>
                                        <div></div>
                                    </div>
                                )
                            }

                            <div className="events__datepicker-box datepicker-box active">
                                <DatePicker
                                    className="datepicker"
                                    selected={startDate}
                                    onChange={onDatepickerChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    withPortal
                                    dateFormat="MMM dd, yyyy"
                                />

                                <label>Range</label>
                            </div>
                        </div>
                    ) : (
                        <div className="events__customizing" onClick={() => onDeleteComponent(id)}>
                            <div className="events__delete">
                                <div></div>
                                <div></div>
                            </div>

                            <h6>
                                Remove from Dashboard
                            </h6>
                        </div>
                    )
                }

                {
                    !filteredEvents.length && (
                        <div className="events__empty">
                            <FontAwesomeIcon icon={faCalendarDays} />

                            <h6>
                                No scheduled events for this date/range
                            </h6>

                            <button onClick={onModalOpen}>
                                <div className="events__add-event">
                                    <div></div>
                                    <div></div>
                                </div>

                                <h5>
                                    Add An Event
                                </h5>
                            </button>
                        </div>
                    )
                }

                {
                    events && (
                        <div className="events__list">
                            {
                                renderEvents()
                            }
                        </div>
                    )
                }

                <AddEventModal
                    isModalOpened={isModalOpened}
                    setIsModalOpened={setIsModalOpened}
                    isSuccessModal={isSuccessModal}
                    setIsSuccessModal={setIsSuccessModal}
                />
            </div>
        </Tippy>
    );
}

export default Events;
