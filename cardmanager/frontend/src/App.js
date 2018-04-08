import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Card from "./components/Card";
import NotFound from "./components/NotFound";
//redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import cardApp from "./reducers";
//look 
import logo from './logo.svg';
import './App.css';


let store = createStore(cardApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
