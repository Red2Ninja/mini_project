import React, { useState } from "react";
import { addAnnouncement, addNightSlipDetails } from "./memberData";
import { useNavigate } from "react-router-dom"; 
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
    toDate: "",
    time: ""
  });

  function handlePostAnnouncement() {
    if (announcement.trim() === "") {
      alert("Please enter an announcement!");
      return;
    }
    addAnnouncement(announcement);
    setAnnouncement("");
    alert("Announcement posted!");
  }

  function handleNightSlipChange(event) {
    setNightSlip({ ...nightSlip, [event.target.name]: event.target.value });
  }

  function handleNightSlipSubmit(event) {
    event.preventDefault();

    for (let key in nightSlip) {
        if (nightSlip[key].trim() === "") {
          alert(Please fill out the ${key} field.);
          return;
        }
      }

    addNightSlipDetails(nightSlip);
    alert("Night Slip Details Submitted!");
  }

  return (
    <div className="secretary-dashboard">
      <h2>Secretary Dashboard</h2>

      {/* Announcement Form */}
      <textarea
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        placeholder="Enter announcement..."
      />
      <button onClick={handlePostAnnouncement}>Post Announcement</button>

      <h3>Night Slip Application</h3>
      

      <form onSubmit={handleNightSlipSubmit} className="night-slip-form">
        <label>School:</label>
        <select name="school" value={nightSlip.school} onChange={handleNightSlipChange}>
          <option value="SCOPE">SCOPE</option>
          <option value="SCORE">SCORE</option>
          <option value="SENSE">SENSE</option>
          <option value="SMEC">SMEC</option>
        </select>

        <label>Venue Type:</label>
        <select name="venueType" value={nightSlip.venueType} onChange={handleNightSlipChange}>
          <option value="Classroom">Classroom</option>
          <option value="Lab">Lab</option>
        </select>

        <label>Building:</label>
        <select name="building" value={nightSlip.building} onChange={handleNightSlipChange}>
          <option value="Technology Tower">Technology Tower</option>
          <option value="SMV">SMV</option>
          <option value="SMV Portico">SMV Portico</option>
          <option value="Main Building">Main Building</option>
        </select>

        <label>Venue:</label>
        <input type="text" name="venue" value={nightSlip.venue} onChange={handleNightSlipChange} />

        <label>Faculty Coordinator:</label>
        <input type="text" name="faculty" value={nightSlip.faculty} onChange={handleNightSlipChange} />

        <label>Work:</label>
        <input type="text" name="work" value={nightSlip.work} onChange={handleNightSlipChange} />

        <label>Brief:</label>
        <input type="text" name="brief" value={nightSlip.brief} onChange={handleNightSlipChange} />

        <label>From:</label>
        <input type="date" name="fromDate" value={nightSlip.fromDate} onChange={handleNightSlipChange} />

        <label>To:</label>
        <input type="date" name="toDate" value={nightSlip.toDate} onChange={handleNightSlipChange} />

        <label>Time:</label>
        <input type="time" name="time" value={nightSlip.time} onChange={handleNightSlipChange} />

        <button type="submit">Submit Night Slip</button>
      </form>
      <button onClick={() => navigate("/member")} className="Checkbtn">
        Check members
      </button>

    </div>
  );
}

export default SecretaryDashboard;
