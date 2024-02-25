import React from 'react';
import './ProfileCard.css'; // Import your CSS file

const ProfileCard = ({ image, name, specialization }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={image} alt={name} />
      <div className="profile-info">
        <div className="profile-name">{name}</div>
        <p className="profile-specialization">{specialization}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
