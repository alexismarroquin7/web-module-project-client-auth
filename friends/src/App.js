import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">

      </div>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Login}/>
    </div>
    </Router>
  );
}

export default App;
