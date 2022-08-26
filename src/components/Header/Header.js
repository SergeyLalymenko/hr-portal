import { useState } from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../Notifications/Notifications';
import logo from '../../assets/img/header/logo.svg';
import searchIcon from '../../assets/img/header/search.svg';
import './Header.scss';

function Header({
        toggleSidebar,
        isSidebarOpened,
        user,
        renderUserName,
        renderUserAvatar,
    }) {
    const [areNotificationsOpened, setAreNotificationsOpened] = useState(false);

    function toggleNotifications() {
        setAreNotificationsOpened(!areNotificationsOpened);
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">
                    <img src={logo} width="126" height="32" alt="logo"/>
                </Link>

                <div className="header__row">
                    <div className="header__search">
                        <input type="search" placeholder="Search"/>

                        <img src={searchIcon} width="22" height="22" alt="search"/>
                    </div>

                    <svg className={`header__notifications-icon ${areNotificationsOpened ? 'open' : ''}`}
                         onClick={toggleNotifications}
                         width="38"
                         height="38"
                         viewBox="0 0 38 38"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="34" height="34" rx="4" fill="none"/>
                        <path d="M18.9993 29.2858C20.4185 29.2858 21.5697 28.1346 21.5697 26.7142H16.4289C16.4289 28.1346 17.5801 29.2858 18.9993 29.2858ZM27.654 23.2702C26.8777 22.436 25.4251 21.1812 25.4251 17.0706C25.4251 13.9485 23.236 11.4492 20.2843 10.8361V9.9987C20.2843 9.28869 19.7089 8.71289 18.9993 8.71289C18.2897 8.71289 17.7143 9.28869 17.7143 9.9987V10.8361C14.7626 11.4492 12.5735 13.9485 12.5735 17.0706C12.5735 21.1812 11.121 22.436 10.3446 23.2702C10.1036 23.5294 9.99668 23.8392 9.99869 24.1425C10.0031 24.8015 10.5202 25.4284 11.2885 25.4284H26.7101C27.4784 25.4284 27.9959 24.8015 28 24.1425C28.002 23.8392 27.8951 23.529 27.654 23.2702Z" fill="#426FB3"/>
                        <circle cx="24.5" cy="12.5" r="2.5" fill="none"/>
                    </svg>

                    <h5 className="header__greetings">
                        Hello, <span>{renderUserName()}</span>!
                    </h5>

                    <div className="header__avatar">
                        {user && renderUserAvatar()}
                    </div>

                    <div className={`header__burger ${isSidebarOpened ? 'active' : ''}`} onClick={toggleSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <Notifications areNotificationsOpened={areNotificationsOpened} toggleNotifications={toggleNotifications} />
                </div>
            </div>
        </header>
    );
}

export default Header;
