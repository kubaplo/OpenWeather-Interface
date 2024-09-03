// SolidJS
import { Router, Route } from "@solidjs/router";
import "./app.css";

// Components
import Root from "./pages/Root";
import Home from "./pages/index/Home";
import Weather from "./pages/index/Weather";
import Forecast from "./pages/index/Forecast";
import Maps from "./pages/index/Maps";


export default function App() {
  return (
    <Router>
      <Route path='/' component={Root}>
        <Route path='/' component={Home} />
        <Route path='/weather' component={Weather} />
        <Route path='/forecast' component={Forecast} />
        <Route path='/maps' component={Maps} />
      </Route>
    </Router>
  );
}