import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import FavoriteDestinations from './components/FavoriteDestinations';
import ActivityHistory from './components/ActivityHistory';
import Settings from './components/Settings';
import userData from './data';
import './App.css';

function App() {
  const [user, setUser] = useState(userData.user);
  const [destinations, setDestinations] = useState(userData.destinations);
  const [activities, setActivities] = useState(userData.activities);
  const [theme, setTheme] = useState('light');

  const updateTheme = (newTheme) => setTheme(newTheme);

  return (
    <div className={`app ${theme}`}>
      <UserProfile user={user} />
      <FavoriteDestinations destinations={destinations} />
      <ActivityHistory activities={activities} />
      <Settings theme={theme} updateTheme={updateTheme} />
    </div>
  );
}

export default App;
