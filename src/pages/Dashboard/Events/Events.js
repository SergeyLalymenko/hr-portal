import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '@store/eventsSlice';
import { useSortable } from '@dnd-kit/sortable';
import EventsItem from './EventsItem/EventsItem';
import AddEventModal from './AddEventModal/AddEventModal';
// import AddEventModal from '@components/Modals/AddEventModal/AddEventModal';
// import SuccessModal from '@components/Modals/SuccessModal/SuccessModal';
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
    const [isModalSuccess, setIsModalSuccess] = useState(false);
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
    }, []);

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

    function toggleIsModalOpened() {
        setIsModalOpened(!isModalOpened);
    }

    function toggleIsModalSuccess() {
        setIsModalSuccess(!isModalSuccess);
    }

    function closeSuccessModal() {
        setIsModalOpened(false);
        setIsModalSuccess(false);
    }

    function onDatepickerChange(dates) {
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end);
    }

    // function renderModal() {
    //     return isModalSuccess ? (
    //         <SuccessModal
    //             title="New event successfully added!"
    //             closeSuccessModal={closeSuccessModal} />
    //     ) : (
    //         <AddEventModal
    //             toggleIsModalOpened={toggleIsModalOpened}
    //             toggleIsModalSuccess={toggleIsModalSuccess}
    //         />
    //     );
    // }

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
                                    <div className="events__add" onClick={toggleIsModalOpened}>
                                        <div></div>
                                        <div></div>
                                    </div>
                                )
                            }

                            <div className="events__datepicker-box form-control active">
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

                            <button onClick={toggleIsModalOpened}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.3333 9.66667H12.3333V3.66667C12.3333 3.29833 12.035 3 11.6667 3H10.3333C9.965 3 9.66667 3.29833 9.66667 3.66667V9.66667H3.66667C3.29833 9.66667 3 9.965 3 10.3333V11.6667C3 12.035 3.29833 12.3333 3.66667 12.3333H9.66667V18.3333C9.66667 18.7017 9.965 19 10.3333 19H11.6667C12.035 19 12.3333 18.7017 12.3333 18.3333V12.3333H18.3333C18.7017 12.3333 19 12.035 19 11.6667V10.3333C19 9.965 18.7017 9.66667 18.3333 9.66667Z"
                                        fill="white"/>
                                </svg>

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

                {
                    console.log('для новой add event модалки нужно придумать переключение на success')
                }

                {/*{*/}
                {/*    isModalOpened && renderModal()*/}
                {/*}*/}

                {
                    <AddEventModal
                        isModalOpened={isModalOpened}
                        setIsModalOpened={setIsModalOpened}
                    />
                }
            </div>
        </Tippy>
    );
}

export default Events;
