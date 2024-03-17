import React, { useEffect, useState } from "react";
import { Bowlers } from "../types/Bowlers";

function ShowBowlers() {
  const [bowlerData, setBowlerData] = useState<Bowlers[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch("http://localhost:5145/Bowlers");
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">All the Bowlers</h4>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Bowler ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Initial</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
              <th>Team ID</th>
            </tr>
          </thead>
          <tbody>
            {bowlerData.map((bowler) => (
              <tr key={bowler.BowlerID}>
                <td>{bowler.BowlerID}</td>
                <td>{bowler.BowlerLastName}</td>
                <td>{bowler.BowlerFirstName}</td>
                <td>{bowler.BowlerMiddleInit}</td>
                <td>{bowler.BowlerAddress}</td>
                <td>{bowler.BowlerCity}</td>
                <td>{bowler.BowlerState}</td>
                <td>{bowler.BowlerZip}</td>
                <td>{bowler.BowlerPhoneNumber}</td>
                <td>{bowler.TeamId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowBowlers;
function aysnc() {
  throw new Error("Function not implemented.");
}
