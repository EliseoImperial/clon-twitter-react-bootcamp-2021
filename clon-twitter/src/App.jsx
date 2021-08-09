import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
