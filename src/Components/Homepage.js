import React, { Component } from "react";
import { DataTable } from "./Table";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="text-center">
          <h2>The Rush!</h2>
          <p>This is a database of all NFL players rushing statistics.</p>
          <DataTable />
        </div>
      </>
    );
  }
}
