import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import MoviesComponent from "./component/MoviesComponent";

class App extends Component {
  render() {
    return (
      <>
          <MoviesComponent />
      </>
    );
  }
}

export default App;
