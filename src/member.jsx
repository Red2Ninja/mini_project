import React, { useState, useEffect } from "react";
import { getMembers } from "./memberData";
import "./styles.css";

function Details() {
  const [appliedMembers, setAppliedMembers] = useState([]);

  useEffect(function () {
    setAppliedMembers(getMembers().filter(function (member) {
      return member.applied;
    }));
  }, []);

  function renderTableRow(mem, index) {
    return (
      <tr key={mem.key}>
        <td>{index + 1}</td>
        <td>{mem.name}</td>
        <td className="status">Applied</td>
      </tr>
    );
  }

  return (
    <div className="container">
      <h2 className="title">Members Who Applied</h2>
      {appliedMembers.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{appliedMembers.map(renderTableRow)}</tbody>
        </table>
      ) : (
        <p className="no-data">No members have applied yet.</p>
      )}
    </div>
  );
}

export default Details;
