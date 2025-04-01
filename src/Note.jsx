import { useNavigate } from "react-router-dom";

function Note() {
  const navigate = useNavigate();

  return (
    <div className="note">
      <h1>Automate Club Attendance</h1>
      <p>Track attendance and night slips seamlessly.</p>
      <button className="btn primary" onClick={() => navigate("/member")}>Members</button>
      <button className="btn secondary" onClick={() => navigate("/Secretary")}>Board</button>

    </div>
  );
}

export default Note;
