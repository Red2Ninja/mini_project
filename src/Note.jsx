import { useNavigate } from "react-router-dom";
import "./styles.css";
import illustration from "/ns.png"; // Adjusted path for Vite

function Note() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={illustration} alt="Illustration" className="illustration" />
      <div className="content">
        <h1 className="heading">NightSlipTracker</h1>
        <p className="subtext">Automate club attendance and night slip tracking!</p>
        <div className="buttons">
          <button className="btn btn-members" onClick={() => navigate("/memberform")}>
            Members
          </button>
          <button className="btn btn-board" onClick={() => navigate("/BoardForm")}>
            Board
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;