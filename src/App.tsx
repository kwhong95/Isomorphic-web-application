import React from 'react';
import {Route, Switch} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Switch>
      {routes.map((route, idx) =>
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          render={(routeProps) => (
            <route.component {...routeProps} />
          )}
        />
      )}
    </Switch>
  );
}

export default App;
