import './App.css';
import Nav from './components/nav/nav';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';
import { Route } from 'react-router-dom';

function App(){
  return (
    <div className="App">
    <Nav></Nav>
      <Route path='/Home' >
        <Home></Home>
      </Route>
      <Route path='/signup'>
        <Signup></Signup>
      </Route>
    </div>
  );
}

export default App;
