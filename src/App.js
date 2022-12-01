import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchUser } from '@store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import Dashboard from '@pages/Dashboard/Dashboard';
import Company from '@pages/Company/Company';
import Settings from '@pages/Settings/Settings';
import './App.scss';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    function toggleSidebar() {
        setIsSidebarOpened(!isSidebarOpened);
    }

    function renderUserName() {
        return user ? user[0].name : 'user';
    }

    function renderUserAvatar() {
        return user[0].avatar ? (
            <img src={user[0].avatar} alt="avatar" />
        ) : (
            <h6>{user[0].name[0] + user[0].surname[0]}</h6>
        );
    }

    return (
    <>
        <Header toggleSidebar={toggleSidebar} isSidebarOpened={isSidebarOpened} user={user} renderUserName={renderUserName} renderUserAvatar={renderUserAvatar} />

        <main className="main">
            <Sidebar toggleSidebar={toggleSidebar} isSidebarOpened={isSidebarOpened} user={user} renderUserName={renderUserName} renderUserAvatar={renderUserAvatar} />

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
