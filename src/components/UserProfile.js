import React from 'react';
//import '../App.css';

function UserProfile({ user }) {
  return (
    <div className="user-profile container">
      <img src={user.photo} alt={`perfil de ${user.name}`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserProfile;