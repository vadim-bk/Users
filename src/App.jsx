import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import EditUser from "./components/EditUser";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NewUser} path="/users/new" />
        <Route component={EditUser} path={"/user/:userId"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
