import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './NotificationItem.scss';

function NotificationItem({ item, markAsRead }) {
    function getMarkerIcon(type) {
        switch(type) {
            case 'file': return faFile;
            case 'calendar': return faCalendar;
            default: return faFile;
        }
    }

    function getNewClass(newItem) {
        return newItem ? 'new' : '';
    }

    return (
        <div className={`notification ${getNewClass(item.new)}`}>
            <FontAwesomeIcon
                className="notification__type"
                icon={getMarkerIcon(item.marker)}
            />

            <h6
                className="notification__title"
                title={item.title}
                onClick={() => markAsRead(item)}
            >
                {item.title}
            </h6>

            <h6 className="notification__date">
                {item.date}
            </h6>

            <div className="notification__unread-marker">
                <FontAwesomeIcon icon={faCircleDot} />
            </div>
        </div>
    );
}

export default NotificationItem;
