import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {

//check if user logged in
const[auth, setAuth]=  useState(false)
const[auth1, setAuth1]=  useState(true)



const isLoggedIn= async()=>{
  try{
      const res = await fetch('/auth',{
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials :"include"
      })
      if(res.status===200){
        setAuth(true)
        setAuth1(false)
      }
      if(res.status===401){
        setAuth(false)
        setAuth1(true)
      }
  }
  catch(error) {
console.log(error)
  }
}
useEffect(()=>{
  isLoggedIn()
},[])

  return (
<>

<Navbar auth={auth1}/>
<Switch>
  <Route exact path="/" component={Home}></Route>
  <Route  exact path="/about" component={About}></Route>
  <Route exact path="/services" component={Services}></Route>
  <Route exact  path="/contact" component={Contact}></Route>
  <ProtectedRoute exact  path="/login" component={Login} auth={auth1} />
  <ProtectedRoute exact  path="/register" component={Register} auth={auth1}/>
  <ProtectedRoute exact path="/dashboard" component={Dashboard} auth={auth}/>
  <ProtectedRoute exact  path="/logout" component={Logout} auth={auth}/>
</Switch>

<Footer></Footer>
</>
  );
}

export default App;
