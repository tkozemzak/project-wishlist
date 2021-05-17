import "./App.css";
import { useState, useEffect } from "react";
import Repositories from "./components/Repositories.js";
import Header from "./components/Header.js";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserExists, setCurrentUserExists] = useState(false);
  const [repos, setRepos] = useState([]);

  //fetch user from github api (through keystore-proxy-server)
  const fetchUser = async () => {
    const res = await axios.get(
      `http://54.241.133.31:8000/api/v1/project-wishlist/${currentUser}`
    );

    const data = await res.data;

    setCurrentUser(data);
    setCurrentUserExists(true);
    fetchRepos();
  };

  //fetch repos from github api (through keystore-proxy-server)
  const fetchRepos = async () => {
    const res = await axios.get(
      `http://54.241.133.31:8000/api/v1/project-wishlist/${currentUser}/repos`
    );

    const data = await res.data;
    setRepos(data);
    return data;
  };

  const handleUserEntry = (e) => {
    setCurrentUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  const enteredValue = "";

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      {currentUserExists ? (
        <Repositories repos={repos} />
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <input
              type="text"
              name="user"
              placeholder="Enter Github Username"
              value={currentUser}
              onChange={handleUserEntry}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default App;
