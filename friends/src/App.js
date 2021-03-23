import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
        <Link to="/login">Login</Link>
        <Link>Logout</Link>
      </div>
      <Route exact path="/friends-list" component={FriendsList} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
    </div>
    </Router>
  );
}

export default App;
