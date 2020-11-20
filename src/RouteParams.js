import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  generatePath
} from "react-router-dom";
import SearchList from "./SearchList";

const useCustomParams = () => {
  const { params, path } = useRouteMatch();

  const history = useHistory();

  const updateParams = (updatedParams) => {
    Object.assign(params, updatedParams);
    history.push(generatePath(path, params));
  };
  return [params, updateParams];
};

const SearchBox = () => {
  const [{ search }, updateSerch] = useCustomParams();

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => updateSerch({ search: e.target.value || undefined })}
      />
      <SearchList search={search} />
    </div>
  );
};

export default () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}:search?`} component={SearchBox} />
    </Switch>
  );
};
