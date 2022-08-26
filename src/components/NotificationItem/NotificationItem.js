import fileIcon from '../../assets/img/general/file.svg';
import notificationsUnreadMarkerIcon from '../../assets/img/header/notifications-unread-marker.svg';
import calendarIcon from '../../assets/img/general/calendar.svg';
import './NotificationItem.scss';

function NotificationItem({ item, markAsRead }) {
    function getMarker(type) {
        switch(type) {
            case 'file': return fileIcon;
            case 'calendar': return calendarIcon;
            default: return fileIcon;
        }
    }

    return (
        <div className={`notification ${item.new ? 'new' : ''}`}>
            <img className="notification__type" src={getMarker(item.marker)} width="22" height="22" alt="file" />

            <h6 className="notification__title" title={item.title} onClick={() => markAsRead(item)}>
                {item.title}
            </h6>

            <h6 className="notification__date">
                {item.date}
            </h6>

            <div className="notification__unread-marker">
                <img src={notificationsUnreadMarkerIcon} width="12" height="12" alt="marker"/>
            </div>
        </div>
    );
}

export default NotificationItem;