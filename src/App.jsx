import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/Home";
import Index from "./components/index/Index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Register} />
          <Route exact path="/perfil/:username" component={Profile} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
