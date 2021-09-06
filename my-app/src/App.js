import {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup/signup';
import { Route } from 'react-router-dom';
import Login from './pages/Login/login';
import useUser from './useUser';
import Movie from './pages/Movie/movie'


function App(){
  const {user, setUser} = useUser();
  return (
    <div className="App">
    <Nav user={user} setUser={setUser}></Nav>
      <Route exact path='/' >
        <Home></Home>
      </Route>
      <Route path='/signup'>
        <Signup setUser={setUser}></Signup>
      </Route>
      <Route path='/login'>
        <Login setUser={setUser}></Login>
      </Route>
      <Route path='/movie'>
        <Movie></Movie>
      </Route>
    </div>
  );
}

export default App;
