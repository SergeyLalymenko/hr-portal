import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { fetchNotifications, setNotification } from '@store/notificationsSlice';
import NotificationItem from './NotificationItem/NotificationItem';
import classNames from 'classnames';
import './Notifications.scss';

function Notifications({ areNotificationsOpened, toggleNotifications }) {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications.data);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, []);

    function markAllAsRead() {
        notifications.forEach((notification) => {
            markAsRead(notification);
        });
    }

    function markAsRead(notification) {
        if(notification.new) {
            const id = notification.id;

            const newNotification = {
                ...notification,
                new: false,
            }

            dispatch(setNotification({ id, newNotification }));
        }
    }

    function isUnreadNotification() {
        return Boolean(notifications.find((notification) => notification.new === true));
    }

    function getUnreadNotificationsAmount() {
        const unreadNotifications = notifications.filter((notification) => notification.new === true);

        return unreadNotifications.length;
    }

    return (
        <>
            {
                notifications && (
                    <div className={classNames('header__notifications', 'notifications', { open: areNotificationsOpened })}>
                        <div className="notifications__header">
                            <h5>
                                Notification Center
                            </h5>

                            <div className="notifications__close" onClick={toggleNotifications}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className={classNames('notifications__unread', { active: isUnreadNotification() })}>
                            <div className="notifications__unread-amount">
                                <p>
                                    <span>{getUnreadNotificationsAmount()}</span> new
                                </p>
                            </div>

                            <h6 onClick={markAllAsRead}>
                                Mark all as read
                            </h6>
                        </div>

                        <div className="notifications__rows">
                            {
                                notifications && notifications.map((item) => <NotificationItem
                                    key={item.id}
                                    item={item}
                                    markAsRead={markAsRead}
                                />)
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Notifications;
