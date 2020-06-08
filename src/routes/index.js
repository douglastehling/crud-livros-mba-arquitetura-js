import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import BooksPage from "~/pages/BooksPage";

import DefaultLayout from "~/pages/__layouts/default";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={BooksPage} layout={DefaultLayout} />
    </Switch>
  );
}
