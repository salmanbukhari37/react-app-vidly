import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <h1>Welcome, Vidly app.</h1>
        <div className="starter-template">
          <p className="lead">
            Hello, <br /> This is one of the best vidly app in the world
          </p>
        </div>
      </main>
    );
  }
}

export default App;
