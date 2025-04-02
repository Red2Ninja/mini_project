import React, { useState, useEffect } from "react";
import Announcements from "./Announcements";
import { members, getNightSlipDetails, markAsApplied } from "./memberData";
import "./styles.css";

function MemberDashboard() {
  const [applied, setApplied] = useState(false);
  const [nightSlipList, setNightSlipList] = useState([]);
  const [memberList, setMemberList] = useState(members);


  useEffect(function () {
    var currentUser = members.find(function (member) {
      return member.name === name;
    });

    if (currentUser && currentUser.applied) {
      setApplied(true);
      alert("You have successfully applied!");
    }
    setMemberList(members);
    setNightSlipList(getNightSlipDetails()); // Fix: Set state correctly

  }, []);

 /* function handleApply() {
    var currentUser = members.find(function (member) {
      return member.name === "CurrentUser";
    });*/

    function handleApply() {
        var updatedMembers = memberList.map(function (member) {
          if (member.name === "CurrentUser") {
            return { ...member, applied: true };
          }
          return member;
        });

        setMemberList(updatedMembers);
    markAsApplied("CurrentUser");
    alert("You have successfully applied!");
  }

    
  
   // Fetch night slips
  
  function renderNightSlipDetails() {
    if (!nightSlipList || nightSlipList.length === 0) {
      return <p>No night slip details available.</p>;
    }

    return nightSlipList.map((nightSlip, index) => ( // Loop through nightSlipDetails instead of treating it as a single object
        <div key={index} className="night-slip-box">
          <p><strong>School:</strong> {nightSlip.school}</p>
          <p><strong>Venue Type:</strong> {nightSlip.venueType}</p>
          <p><strong>Building:</strong> {nightSlip.building}</p>
          <p><strong>Venue:</strong> {nightSlip.venue}</p>
          <p><strong>Faculty Coordinator:</strong> {nightSlip.faculty}</p>
          <p><strong>Work:</strong> {nightSlip.work}</p>
          <p><strong>Brief:</strong> {nightSlip.brief}</p>
          <p><strong>From:</strong> {nightSlip.fromDate}</p>
          <p><strong>To:</strong> {nightSlip.toDate}</p>
          <p><strong>Time:</strong> {nightSlip.time}</p>
        </div>
      ));
  }

  return (
    <div className="dashboard-container">
      <h2>Member Dashboard</h2>
      <Announcements />
      <h3>🌙 Night Slip Details</h3>
      {renderNightSlipDetails()}
      <button onClick={handleApply} className="apply-btn">Applied
        
      </button>
    </div>
  );
}

export default MemberDashboard;
