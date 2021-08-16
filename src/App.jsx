import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/Home";
import Index from "./components/index/Index";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Register} />
          <Route exact path="/perfil/:username" component={Profile} />
          {user && user.token ? (
            <Route exact path="/home" component={Home} />
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
