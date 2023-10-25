import React from "react";
import "./all.css";

export default function All() {
  return (
    <div className="mainall">
      <div>
        <form action="/sing">
          <button className="btn1">Add New</button>
        </form>

        <br />
        <br />
        <br />
      </div>
      <table className="tablex">
        <thead>
          <tr className="test">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handel</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
