import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import MoviesComponent from "./component/MoviesComponent";

class App extends Component {
  render() {
    return (
      <>
        <main className="container">
          <MoviesComponent key={"1234"} />
        </main>
      </>
    );
  }
}

export default App;
