import React from "react";
import { announcements } from "./memberData";

function Announcements() {
  return (
    <div className="announcements">
      <h3>Announcements</h3>
      {announcements.length > 0 ? (
        announcements.map((note, index) => <p key={index}>{note}</p>)
      ) : (
        <p>No announcements available.</p>
      )}
    </div>
  );
}

export default Announcements;
