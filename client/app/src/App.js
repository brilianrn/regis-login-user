import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Home,
  Registrasi,
  Login,
  Detail
} from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <Switch>
          <Route path='/admin-login'>
            <Login></Login>
          </Route>
          <Route path='/profile-detail/:id'>
            <Detail></Detail>
          </Route>
          <Route path='/register'>
            <Registrasi></Registrasi>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
