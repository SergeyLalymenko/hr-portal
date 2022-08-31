import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../../store/eventsSlice';
import EventsItem from './EventsItem/EventsItem';
import AddEventModal from '../../../components/Modals/AddEventModal/AddEventModal';
import eventsCalendarIcon from '../../../assets/img/dashboard/events/calendar.svg';
import AirDatepicker from 'air-datepicker';
import '../../../styles/airDatepicker/airDatepicker.scss';
import './Events.scss';

function Events() {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.data);
    const dateToday = Date.parse(new Date().toDateString());
    const [eventsSelectedDates, setEventsSelectedDates] = useState({startDate: dateToday, endDate: dateToday});
    const [eventsFilteredByDate, setEventsFilteredByDate] = useState([]);
    const [isModalOpened, setIsModalOpened] = useState(false);

    useEffect(() => {
        dispatch(fetchEvents());
        initDatepickers();
    }, []);

    function initDatepickers() {
        new AirDatepicker('#eventsDatepicker', {
            selectedDates: [dateToday],
            isMobile: true,
            range: true,
            multipleDatesSeparator: ' - ',
            navTitles: {
                days: 'MMM yyyy',
            },
            locale: {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'MMM dd, yyyy',
                timeFormat: 'hh:mm aa',
                firstDay: 0,
            },
            onSelect: ({ date }) => {
                setEventsSelectedDates(getEventsSelectedDates(date));
            },
        });
    }

    function getEventsSelectedDates(date) {
        return {
            startDate: getStartDate(date),
            endDate: getEndDate(date),
        };
    }

    function renderEvents() {
        if(JSON.stringify(getEventsFilteredByDate()) !== JSON.stringify(eventsFilteredByDate)) {
            setEventsFilteredByDate(getEventsFilteredByDate());
        }

        return eventsFilteredByDate.map((event) => <EventsItem key={event.id} event={event} />);
    }

    function getEventsFilteredByDate() {
        return events.filter((event) => {
            return (
                (event.startDate >= eventsSelectedDates.startDate) &&
                (event.endDate <= eventsSelectedDates.endDate)
            );
        })
    }

    function getStartDate(date) {
        return date[0] ? Date.parse(date[0]) : null;
    }

    function getEndDate(date) {
        return date[1] ? Date.parse(date[1]) : getStartDate(date);
    }

    function toggleIsModalOpened() {
        setIsModalOpened(!isModalOpened);
    }

    return (
        <div className={`events dashboard-block ${!eventsFilteredByDate.length ? 'empty' : ''}`} id="events">
            <div className="events__head">
                <h5>
                    Events
                </h5>

                <div className="events__add" onClick={toggleIsModalOpened}>
                    <div></div>
                    <div></div>
                </div>

                <input className="events__datepicker" type="text" id="eventsDatepicker"/>
            </div>

            <div className="events__customizing dashboard-delete">
                <div className="events__delete">
                    <div></div>
                    <div></div>
                </div>

                <h6>
                    Remove from Dashboard
                </h6>
            </div>

            <div className="events__empty">
                <img src={eventsCalendarIcon} width="44" height="50" alt="calendar" />

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

            <div className="events__list">
                {
                    events && renderEvents()
                }
            </div>

            {
                isModalOpened && <AddEventModal toggleIsModalOpened={toggleIsModalOpened} />
            }

            {/*<div className="modal fade" id="addEventModal" tabIndex="-1" aria-hidden="true">*/}
            {/*    <div className="modal-dialog modal-dialog-centered modal__dialog">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header modal__header d-flex justify-content-between align-items-center">*/}
            {/*                <h4>Add New Event</h4>*/}

            {/*                <div className="modal__close" data-bs-dismiss="modal">*/}
            {/*                    <div></div>*/}
            {/*                    <div></div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="modal-body modal__body">*/}
            {/*                <form*/}
            {/*                    className="form d-flex justify-content-between align-items-start flex-wrap flex-lg-column"*/}
            {/*                    id="addEventForm" action="./" method="POST" noValidate>*/}
            {/*                    <div className="form__field-box">*/}
            {/*                        <select className="form__field addEventField" id="eventType" required>*/}
            {/*                            <option className="d-none" value="" selected disabled></option>*/}
            {/*                            <option value="*Anniversary">*Anniversary</option>*/}
            {/*                            <option value="*Anniversary2">*Anniversary2</option>*/}
            {/*                        </select>*/}

            {/*                        <label htmlFor="eventType">Event Type</label>*/}
            {/*                    </div>*/}

            {/*                    <div className="form__field-box">*/}
            {/*                        <select className="form__field addEventField" id="sharedWith" required>*/}
            {/*                            <option className="d-none" value="" selected disabled></option>*/}
            {/*                            <option value="*Anniversary">*All Phonexa Employees</option>*/}
            {/*                            <option value="*Anniversary2">*All Phonexa Employees2</option>*/}
            {/*                        </select>*/}

            {/*                        <label htmlFor="sharedWith">Shared With</label>*/}
            {/*                    </div>*/}

            {/*                    <div className="form__field-box">*/}
            {/*                        <input className="form__field" type="text" id="startDateDatepicker"*/}
            {/*                               placeholder="empty" required/>*/}

            {/*                        <label htmlFor="startDateDatepicker">Start Date</label>*/}
            {/*                    </div>*/}

            {/*                    <div className="form__field-box form__field-box--textarea">*/}
            {/*                        <textarea className="form__field form__field--textarea addEventField"*/}
            {/*                                  id="addEventDescription" placeholder="empty" required></textarea>*/}

            {/*                        <label htmlFor="addEventDescription">Description</label>*/}
            {/*                    </div>*/}

            {/*                    <div className="form__field-box form__field-box--end-date">*/}
            {/*                        <input className="form__field" type="text" id="endDateDatepicker"*/}
            {/*                               placeholder="empty" required/>*/}

            {/*                        <label htmlFor="endDateDatepicker">End Date</label>*/}
            {/*                    </div>*/}

            {/*                    <div className="form__submit-box d-flex justify-content-center">*/}
            {/*                        <button className="form__submit disabled" id="addEventBtn" type="submit">*/}
            {/*                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"*/}
            {/*                                 xmlns="http://www.w3.org/2000/svg">*/}
            {/*                                <path*/}
            {/*                                    d="M18.3333 9.66667H12.3333V3.66667C12.3333 3.29833 12.035 3 11.6667 3H10.3333C9.965 3 9.66667 3.29833 9.66667 3.66667V9.66667H3.66667C3.29833 9.66667 3 9.965 3 10.3333V11.6667C3 12.035 3.29833 12.3333 3.66667 12.3333H9.66667V18.3333C9.66667 18.7017 9.965 19 10.3333 19H11.6667C12.035 19 12.3333 18.7017 12.3333 18.3333V12.3333H18.3333C18.7017 12.3333 19 12.035 19 11.6667V10.3333C19 9.965 18.7017 9.66667 18.3333 9.66667Z"*/}
            {/*                                    fill="white"/>*/}
            {/*                            </svg>*/}

            {/*                            <h5>*/}
            {/*                                Add New Event*/}
            {/*                            </h5>*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Events;