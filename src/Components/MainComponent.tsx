import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "../Navigation/Main";

export default function MainComponent() {
  return (
      <Switch>
        <Main />
      </Switch>
  );
}
