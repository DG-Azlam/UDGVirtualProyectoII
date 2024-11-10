import React from 'react';
//import '../App.css';

function ActivityHistory({ activities }) {
return (
    <div className="activity-history container">
        <h3>Actividades Pasadas</h3>
        <ul>
        {activities.map((activity) => (
            <li key={activity.id}>{activity.description}</li>
        ))}
        </ul>
    </div>
    );
}

export default ActivityHistory;
