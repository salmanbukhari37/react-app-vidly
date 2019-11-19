import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import MoviesComponent from "./component/MoviesComponent";
import Products from './component/Products';
import Posts from './component/Posts';
import Dashboard from './component/admin/Dashboard';
import Home from './component/Home';
import NavBar from './component/common/NavBar';
import ProductDetails from "./component/ProductDetails";
import NotFound from './component/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact render={ (props) => <Home pageTitle={'Hello, Welcome to Demon World'} {...props} />} />
            <Route path="/movies" component={MoviesComponent} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products"  component={Products} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
