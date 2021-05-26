import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Register from "./components/Register";
import Dummy from "./components/Dummy";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>TGLAB - Homework</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
          />
          <meta
            name="Homework for TGLAB"
            content="A little project given to me from TGLAB"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route path="/" exact component={Dummy} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
