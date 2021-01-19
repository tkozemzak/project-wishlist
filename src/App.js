import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import token from './token';
import Repositories from './components/Repositories.js'
import Repository from './components/Repository.js'

function App() {
  const [repos, setRepos] = useState([]);

  

  var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer + ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    
    useEffect(() => {
      const getRepos = async () => {
        const reposFromApi = await fetchRepos()
        setRepos(reposFromApi)
        
      }
    getRepos()
  }, [])

  //fetch repos from github api
  const fetchRepos = async () => {
    const res = await fetch('https://api.github.com/users/bradtraversy/repos', requestOptions)
    const data = await res.json()
    return data

  }

  

  return (
    <div className="App">
      {
      repos.length > 0 ?
      <Repositories repos={repos}/> :
      'No repos'
      }
    </div>

  );
}

export default App;
