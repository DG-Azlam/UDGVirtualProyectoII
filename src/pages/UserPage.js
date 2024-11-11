import React from 'react';
import UserProfile from '../components/UserProfile';
import FavoriteDestinations from '../components/FavoriteDestinations';
import ActivityHistory from '../components/ActivityHistory';
import Settings from '../components/Settings';
import { UD, FD, AH } from './data';
//import '../App.css';

function UserPage() {
    return (
        <div className="user-page">
            <UserProfile user={UD} />
            <FavoriteDestinations destinations={FD} />
            <ActivityHistory activities={AH} />
            <Settings />
        </div>
    );
}

export default UserPage;
