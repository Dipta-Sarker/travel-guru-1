import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import NotMatch from './Components/NotMatch/NotMatch';
import ConfirmBooking from './Components/ConfirmBooking/ConfirmBooking';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
    <userContext.Provider  value={[loggedInUser, setLoggedInUser]}>
      
      <Router> 
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/booking/:id">
          <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/confirmBooking/:id">
            <ConfirmBooking></ConfirmBooking>
          </PrivateRoute>
          <Route  exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
          <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>
      </div>
  );
}

export default App;
