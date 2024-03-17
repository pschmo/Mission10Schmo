import React, { useState } from "react";
import { Teams } from "../types/Teams"; // Assuming you have a Teams type defined

function ShowTeams() {
  const [teamData, setTeamData] = useState<Teams[]>([]); // Assuming you have the Teams state and setter function defined

  return (
    <>
      <div className="row">
        <h4 className="text-center">All the Teams</h4>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Team Captain</th> {/* New header for Team Captain */}
            </tr>
          </thead>
          <tbody>
            {teamData.map((team) => (
              <tr key={team.TeamId}>
                <td>{team.TeamId}</td>
                <td>{team.TeamName}</td>
                <td>{team.TeamCaptain}</td> {/* Display Team Captain */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowTeams;
