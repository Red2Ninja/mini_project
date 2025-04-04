import React from 'react';
import './styles.css';

function Announcements(props) {
  if (!props.announcements || props.announcements.length === 0) {
    return (
      <div className="announcements-container">
        <h3>📢 Announcements</h3>
        <p>No announcements yet.</p>
      </div>
    );
  }

  return (
    <div className="announcements-container">
      <h3>📢 Announcements</h3>
      <div className="announcements-list">
        {props.announcements.map(function(announcement) {
          return (
            <div key={announcement.id} className="announcement-item">
              <p className="announcement-text">{announcement.text}</p>
              <p className="announcement-time">{announcement.timestamp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Announcements;