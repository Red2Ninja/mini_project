import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNightSlip, addAnnouncement } from "./memberData";
import "./styles.css";

function SecretaryDashboard() {
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState("");
  const [nightSlip, setNightSlip] = useState({
    school: "SCOPE",
    venueType: "Classroom",
    building: "Technology Tower",
    venue: "",
    faculty: "",
    work: "",
    brief: "",
    fromDate: "",
    fromTime: "",
    toDate: "",
    toTime: ""
  });
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setMinDate(formattedDate);
  }, []);

  function handlePostAnnouncement() {
    if (announcement.trim() === "") {
      alert("Please enter an announcement!");
      return;
    }
    addAnnouncement(announcement);  // Now using the shared function
    alert("Announcement posted!");
    setAnnouncement("");
  }

  function handleNightSlipChange(event) {
    setNightSlip({
      ...nightSlip,
      [event.target.name]: event.target.value
    });
  }

  function validateTime(time, fieldName) {
    if (!time) return true; // Skip validation if empty
    
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    
    // Valid time is between 21:30 (9:30 PM) and 1:00 (1:00 AM)
    const isValid = (totalMinutes >= 21 * 60 + 30 && totalMinutes <= 23 * 60 + 59) || 
                   (totalMinutes >= 0 && totalMinutes <= 1 * 60);
    
    if (!isValid) {
      alert(`${fieldName} must be between 9:30 PM and 1:00 AM`);
      return false;
    }
    return true;
  }

  function validateDate(date, fieldName) {
    if (!date) return true; // Skip validation if empty
    
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert(`${fieldName} cannot be in the past`);
      return false;
    }
    return true;
  }

  function handleNightSlipSubmit(event) {
    event.preventDefault();

    // Validate all required fields are filled
    for (let key in nightSlip) {
      if (nightSlip[key].trim() === "") {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    // Validate dates
    if (!validateDate(nightSlip.fromDate, "From Date") || 
        !validateDate(nightSlip.toDate, "To Date")) {
      return;
    }

    // Validate times
    if (!validateTime(nightSlip.fromTime, "From Time") || 
        !validateTime(nightSlip.toTime, "To Time")) {
      return;
    }

    // Validate that end datetime is after start datetime
    const startDateTime = new Date(`${nightSlip.fromDate}T${nightSlip.fromTime}`);
    const endDateTime = new Date(`${nightSlip.toDate}T${nightSlip.toTime}`);
    
    if (endDateTime <= startDateTime) {
      alert("End date/time must be after start date/time");
      return;
    }

    addNightSlip(nightSlip);
    alert("Night Slip Details Submitted!");

    // Reset form
    setNightSlip({
      school: "SCOPE",
      venueType: "Classroom",
      building: "Technology Tower",
      venue: "",
      faculty: "",
      work: "",
      brief: "",
      fromDate: "",
      fromTime: "",
      toDate: "",
      toTime: ""
    });
  }

  return (
    <div className="secretary-dashboard">
      <div className="dashboard-header">
        <h2>Secretary Dashboard</h2>
      </div>
      
      <div className="dashboard-content">
        <div className="announcement-section">
          <h3>Post Announcement</h3>
          <textarea
            className="announcement-input"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Enter announcement..."
          />
          <button className="btn btn-announce" onClick={handlePostAnnouncement}>
            Post Announcement
          </button>
        </div>

        <div className="form-section">
          <h3>Night Slip Application</h3>
          <form onSubmit={handleNightSlipSubmit} className="night-slip-form">
            <div className="form-grid">
              {/* School Selection */}
              <div className="form-group">
                <label>School:</label>
                <select name="school" className="form-input" value={nightSlip.school} onChange={handleNightSlipChange}>
                  <option value="SCOPE">SCOPE</option>
                  <option value="SCORE">SCORE</option>
                  <option value="SENSE">SENSE</option>
                  <option value="SMEC">SMEC</option>
                </select>
              </div>

              {/* Venue Type */}
              <div className="form-group">
                <label>Venue Type:</label>
                <select name="venueType" className="form-input" value={nightSlip.venueType} onChange={handleNightSlipChange}>
                  <option value="Classroom">Classroom</option>
                  <option value="Lab">Lab</option>
                </select>
              </div>

              {/* Building Selection */}
              <div className="form-group">
                <label>Building:</label>
                <select name="building" className="form-input" value={nightSlip.building} onChange={handleNightSlipChange}>
                  <option value="Technology Tower">Technology Tower</option>
                  <option value="SMV">SMV</option>
                  <option value="SMV Portico">SMV Portico</option>
                  <option value="Main Building">Main Building</option>
                </select>
              </div>

              {/* Input Fields */}
              <div className="form-group"><label>Venue:</label>
                <input type="text" className="form-input" name="venue" value={nightSlip.venue} onChange={handleNightSlipChange} placeholder="Enter venue name" /></div>

              <div className="form-group"><label>Faculty Coordinator:</label>
                <input type="text" className="form-input" name="faculty" value={nightSlip.faculty} onChange={handleNightSlipChange} placeholder="Enter faculty name" /></div>
              
              <div className="form-group"><label>Work:</label>
                <input type="text" className="form-input" name="work" value={nightSlip.work} onChange={handleNightSlipChange} placeholder="Describe the work" /></div>
              
              <div className="form-group"><label>Brief Description:</label>
                <input type="text" className="form-input" name="brief" value={nightSlip.brief} onChange={handleNightSlipChange} placeholder="Brief description" /></div>
              
              {/* Date & Time Fields */}
              <div className="form-group"><label>From Date:</label>
                <input 
                  type="date" 
                  className="form-input" 
                  name="fromDate" 
                  value={nightSlip.fromDate} 
                  onChange={handleNightSlipChange} 
                  min={minDate}
                />
              </div>

              <div className="form-group"><label>From Time:</label>
                <input 
                  type="time" 
                  className="form-input" 
                  name="fromTime" 
                  value={nightSlip.fromTime} 
                  onChange={handleNightSlipChange} 
                  min="21:30"
                  max="23:59"
                />
                <small className="time-hint">(9:30 PM - 11:59 PM)</small>
              </div>

              <div className="form-group"><label>To Date:</label>
                <input 
                  type="date" 
                  className="form-input" 
                  name="toDate" 
                  value={nightSlip.toDate} 
                  onChange={handleNightSlipChange} 
                  min={minDate}
                />
              </div>

              <div className="form-group"><label>To Time:</label>
                <input 
                  type="time" 
                  className="form-input" 
                  name="toTime" 
                  value={nightSlip.toTime} 
                  onChange={handleNightSlipChange} 
                  min="00:00"
                  max="01:00"
                />
                <small className="time-hint">(12:00 AM - 1:00 AM)</small>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-submit" type="submit">Submit Night Slip</button>
              <button className="btn btn-check" onClick={() => navigate("/member")}>
                Check Members
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="dashboard-footer">
        © 2025 Created by Aarya and Mrinali.
      </div>
    </div>
  );
}

export default SecretaryDashboard;