import "./App.css";
import NavbarComponent from "./component/navbar";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import FouroFour from "./pages/404";
import Profile from "./pages/Profile";

function App() {
  const user = { name: "abc", age: 25 };
  const isUserLoggedIn =
    localStorage.getItem("login") === "true" ? true : false;
  const PrivateRoute = (props) => {
    const { path, Component, data } = props;
    return (
      <Route
        path={path}
        exact
        render={(props) => {
          return isUserLoggedIn ? (
            <Component {...props} data={data} />
          ) : (
            <Redirect to="login/anshu" />
          );
        }}
      />
    );
  };
  return (
    <div className="App">
      <Router>
        <NavbarComponent isUserLoggedIn={isUserLoggedIn} />
        <Switch>
          <PrivateRoute exact path="/" Component={HomePage} />
          <Route exact path="/login/:name" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute
            path="/profile"
            data={{ name: "anshu" }}
            Component={Profile}
          />
          <Route component={FouroFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
