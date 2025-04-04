import React, { useState } from "react";
import { members } from "./memberData";

function SecretaryDashboard() {
  const [query, setQuery] = useState("");

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function filterMembers(member) {
    return member.name.toLowerCase().includes(query.toLowerCase());
  }

  var filteredMembers = members.filter(filterMembers);

  function renderMember(member) {
    return (
      <li key={member.id}>
        {member.name} - {member.applied ? "✅ Applied" : "❌ Not Applied"}
      </li>
    );
  }

  return (
    <div>
      <h2>Secretary Dashboard</h2>
      <input
        type="text"
        placeholder="Search members..."
        onChange={handleQueryChange}
      />
      <ul>
        {filteredMembers.map(renderMember)}
      </ul>
    </div>
  );
}

export default SecretaryDashboard;