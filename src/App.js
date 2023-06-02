import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchEmployees } from '@store/employeesSlice';
import { useDispatch } from 'react-redux';
import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import Dashboard from '@pages/Dashboard/Dashboard';
import Company from '@pages/Company/Company';
import Settings from '@pages/Settings/Settings';
import './App.scss';

function App() {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    useEffect(() => {
        dispatch(fetchEmployees())
            .then((data) => setUser(data.payload[0]));
    }, [dispatch]);

    function toggleSidebar() {
        setIsSidebarOpened(!isSidebarOpened);
    }

    function renderUserName() {
        return user ? user.name : 'user';
    }

    function renderUserAvatar() {
        return user.avatar ? (
            <img src={user.avatar} alt="avatar" />
        ) : (
            <h6>{user.name[0] + user.surname[0]}</h6>
        );
    }

    return (
    <>
        <Header
            toggleSidebar={toggleSidebar}
            isSidebarOpened={isSidebarOpened}
            user={user}
            renderUserName={renderUserName}
            renderUserAvatar={renderUserAvatar}
        />

        <main className="main">
            <Sidebar
                toggleSidebar={toggleSidebar}
                isSidebarOpened={isSidebarOpened}
                user={user}
                renderUserName={renderUserName}
                renderUserAvatar={renderUserAvatar}
            />

            <div className="content">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard renderUserName={renderUserName} />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Navigate to={'/dashboard'} />} />
                </Routes>
            </div>
        </main>
    </>
    );
}

export default App;
