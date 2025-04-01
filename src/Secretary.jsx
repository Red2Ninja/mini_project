import React, { useState } from "react";
import members from "./memberData";

function SecretaryDashboard() {
  const [query, setQuery] = useState("");

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Secretary Dashboard</h2>
      <input
        type="text"
        placeholder="Search members..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredMembers.map((member) => (
          <li key={member.id}>{member.name} - {member.applied ? "✅ Applied" : "❌ Not Applied"}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecretaryDashboard;
