import React , {Component} from "react" ;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import App from '../App';
import Register from '../Register/Register';
const ReactRoutes=()=>(
  <Router>
    <div>
    <Navbar />
       <Route exact path='/' component={App} />
       <Route path='/Signup' component={Register} />
    </div>
  </Router>
)

export default ReactRoutes;
