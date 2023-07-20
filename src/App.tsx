import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';
import {Main} from './pages/main';
import {Login} from './pages/Login';
import {Navbar} from './Navbar';
import {Createpost} from './pages/create-post/createpost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/createpost" element={<Createpost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
