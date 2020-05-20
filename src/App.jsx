import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        {/* <Route component={NewUser} path="/users/new" /> */}
        {/* <Route component={SelectedUser} path={"/users/:userId"} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
