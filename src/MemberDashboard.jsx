import React, { useState, useEffect } from "react";
import Announcements from "./Announcements";
import { getNightSlipDetails, markAsApplied, getAnnouncements, getMembers } from "./memberData";
import "./styles.css";

function MemberDashboard() {
  const [announcements, setAnnouncements] = useState([]);
  const [applied, setApplied] = useState(false);
  const [nightSlipList, setNightSlipList] = useState([]);
  const [memberList, setMemberList] = useState([]);

  useEffect(function() {
    setAnnouncements(getAnnouncements());

    var currentUser = getMembers().find(function(member) {
      return member.name === "CurrentUser";
    });

    if (currentUser && currentUser.applied) {
      setApplied(true);
    }

    setMemberList(getMembers());
    setNightSlipList(getNightSlipDetails());

    var interval = setInterval(function() {
      setAnnouncements(getAnnouncements());
      setNightSlipList(getNightSlipDetails());
    }, 1000);

    return function() {
      clearInterval(interval);
    };
  }, []);

  function handleApply() {
    if (nightSlipList.length === 0) {
      alert("You cannot apply because there are no night slip details available.");
      return;
    }

    var updatedMembers = memberList.map(function(member) {
      if (member.name === "CurrentUser") {
        return Object.assign({}, member, { applied: true });
      }
      return member;
    });

    setMemberList(updatedMembers);
    markAsApplied("CurrentUser");
    setApplied(true);
    alert("You have successfully applied!");
  }

  function renderNightSlipDetails() {
    if (nightSlipList.length === 0) {
      return React.createElement('p', null, 'No night slip details available.');
    }

    return nightSlipList.map(function(slip) {
      return (
        <div key={slip.id} className="night-slip-box">
          <p><strong>School:</strong> {slip.school}</p>
          <p><strong>Venue Type:</strong> {slip.venueType}</p>
          <p><strong>Building:</strong> {slip.building}</p>
          <p><strong>Venue:</strong> {slip.venue}</p>
          <p><strong>Faculty Coordinator:</strong> {slip.faculty}</p>
          <p><strong>Work:</strong> {slip.work}</p>
          <p><strong>Brief:</strong> {slip.brief}</p>
          <p><strong>From:</strong> {slip.fromDate} at {slip.fromTime}</p>
          <p><strong>To:</strong> {slip.toDate} at {slip.toTime}</p>
        </div>
      );
    });
  }

  return (
    <div className="dashboard-container">
      <h2>Member Dashboard</h2>
      <Announcements announcements={announcements} />
      <h3>🌙 Night Slip Details</h3>
      {renderNightSlipDetails()}
      <button onClick={handleApply} className="apply-btn" disabled={nightSlipList.length === 0}>
        {applied ? "Already Applied" : "Apply"}
      </button>
    </div>
  );
}

export default MemberDashboard;
