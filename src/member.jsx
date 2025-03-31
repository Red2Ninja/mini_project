import React from "react";
import members from "./memberData";
import "./styles.css"; // Import the updated CSS file

function Details() {
  // Filter members who have applied
  const presentmem = members.filter(function (mem) {
    return mem.applied;
  });

  return (
    <div className="container">
      <h2 className="title">Members Who Applied</h2>
      {presentmem.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {presentmem.map(function (mem, index) {
              return (
                <tr key={mem.key}>
                  <td>{index + 1}</td>
                  <td>{mem.id}</td>
                  <td>{mem.name}</td>
                  <td className="status">✅ Applied</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No members have applied yet.</p>
      )}
    </div>
  );
}

export default Details;
