// SolidJS
import { Router, Route } from "@solidjs/router";
import "./app.css";

// Components
import Root from "./pages/Root";
import Home from "./pages/index/Home";


export default function App() {
  return (
    <Router>
      <Route path='/' component={Root}>
        <Route path='/' component={Home} />
      </Route>
    </Router>
  );
}