import './App.css';
import { useState, useEffect } from 'react';
import token from './token';
import Repositories from './components/Repositories.js'
import Header from './components/Header.js';

function App() {
  
  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserExists, setCurrentUserExists] = useState(false);
  const [repos, setRepos] = useState([]);

  

  var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    console.log("headers:", myHeaders);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    
  //   useEffect(() => {
  //     const getRepos = async () => {
  //       const reposFromApi = await fetchRepos()
  //       setRepos(reposFromApi)
        
  //     }
  //   getRepos()
  // }, [])

  //fetch user from github api
  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${currentUser}`, requestOptions)
    const data = await res.json()
    .then((data) => {
      setCurrentUser(data)
      setCurrentUserExists(true)
    }).then(() => {
      fetchRepos()
      }) 
  }

  //fetch repos from github api
  const fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/users/${currentUser}/repos`, requestOptions)
    const data = await res.json()
    setRepos(data)
    return data

  }


  const handleUserEntry = (e) => {
    setCurrentUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser()
  }

  const enteredValue = '';
  

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      {
      currentUserExists ?
      <Repositories repos={repos}/> :
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input type="text" name="user" placeholder="Enter Github Username" value={currentUser} onChange={handleUserEntry}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      }
    </div>

  );
}

export default App;
