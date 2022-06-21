import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Subheader from './Subheader';
import Home from './Home';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import Checkout from "./Checkout";
import Login from "./Login";
import Order from "./Order";
import Payment from './Payment';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])
  return (
    // BEM convention - really good naming convention to used for styling
    
     <Router>
      <div className="app">
      
       <Switch>
       <Route path="/order">
            <Header />
            <Order />
            </Route>
         <Route path="/login">
           <Login/>
         </Route>
      <Route exact path="/checkout">
          <Header/> 
          <Checkout/>
        </Route>
        <Route path="/payment">
           <Header/>
           <Payment/>
         </Route>
        <Route exact path="/">        
          {/* <h1> I am a home page!</h1> */}
          <Header/>
          <Subheader/> 
          <Home/>
        </Route>
      </Switch>            
      
       </div>
      </Router>
      
  );
}

export default App;
