import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../utils/history";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import Login from "../../screens/Login";
import AddressForm from "../../components/addressForm";
import GetAllStudentsDetails from "../../components/ getAllStudentsDetails";
import FirstLogin from "../../screens/FirstLogin";
import Register from "../../screens/Register";
import NotFound from "../../screens/NotFound";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      {/* Login Related */}
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/addressForm" component={AddressForm} />
      <PrivateRoute
        path="/getAllStudentsDetails"
        component={GetAllStudentsDetails}
      />
      <PrivateRoute path="/firstLogin" component={FirstLogin} />

      {/* Registration page */}
      <PrivateRoute path="/register" component={Register} />

      {/* Anything that doesn't match the above routes would open the not found page. Need to be at the end always. */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
