import React , {Component} from "react" ;
import {Link } from 'react-router-dom';
const Navbar=()=>(
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Signup'>Sign Up</Link></li>
    </ul>
)

export default Navbar;
