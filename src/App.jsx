import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TweetList from "./components/TweetList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/profile" component={Profile} />
          {/* <Route path="/" component={Home} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Register} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
