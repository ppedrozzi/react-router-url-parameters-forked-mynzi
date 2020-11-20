import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouteParams from "./RouteParams";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={RouteParams} />
      </Switch>
    </Router>
  );
}
