import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriendForm from "./components/AddFriendForm";

function App() {

  const logout = e => {
    localStorage.removeItem("token");
    window.location = "/";
  }

  return (
    <Router>
    <div className="App">
      <div className="header">
        <Link to="/login">Login</Link>
        <Link onClick={logout}>Logout</Link>
      </div>
      <PrivateRoute exact path="/new-friend" component={AddFriendForm} />
      <PrivateRoute exact path="/friends-list" component={FriendsList} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
    </div>
    </Router>
  );
}

export default App;
