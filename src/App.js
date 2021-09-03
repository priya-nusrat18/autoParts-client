import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './COMPONENTS/Home/Home';
import Admin from './COMPONENTS/Admin/Admin'
import CheckOut from './COMPONENTS/CheckOut/CheckOut';
import LogIn from './COMPONENTS/Login/LogIn'
import Orders from './COMPONENTS/Orders/Orders';
import PrivateRoute from './COMPONENTS/PrivateRoute/PrivateRoute';
import ManageProduct from './COMPONENTS/ManageProduct/ManageProduct';
import HeaderAbout from './COMPONENTS/HeaderAbout/HeaderAbout';
 export const UserContext = createContext();
function App() {
 const [ loggedInUser, setLoggedInUser] = useState({
   
 })
 console.log(loggedInUser);

  return (
  <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
    
    <Router>
    {/* <h3>{loggedInUser.email }</h3>
    <h3>name :{ loggedInUser.googleName}</h3> */}
      <Switch>
     
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
         <HeaderAbout></HeaderAbout>
        </Route>
        
        <PrivateRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <PrivateRoute path="/order">
          <Orders></Orders>
        </PrivateRoute>
        <Route path="/manage">
          <ManageProduct />
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;