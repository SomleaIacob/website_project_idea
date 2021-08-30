import {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';
import { Route } from 'react-router-dom';
import Login from './pages/login/login';

function App(){
  const [user, setUser] = useState();
  return (
    <div className="App">
    <Nav></Nav>
      <Route exact path='/' >
        <Home></Home>
      </Route>
      <Route path='/signup'>
        <Signup></Signup>
      </Route>
      <Route path='/login'>
        <Login setUser={setUser}></Login>
      </Route>
    </div>
  );
}

export default App;
