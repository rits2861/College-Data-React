 import { Link, Outlet,NavLink } from "react-router"
 export default function Navbar(){
return (
<div className="header">
   <div>
<Link  className="Link" to="./" > <h2>Logo</h2></Link>
   </div>
<ul>
    <li>
        <NavLink  className="Link" to="">Home</NavLink >
    </li>
    <li>
        <NavLink  className="Link" to="/in/user/contact">Contact</NavLink>
    </li>
    <li>
        <NavLink  className="Link" to="/in/user/login">Login</NavLink>
    </li>
    <li>
        <NavLink  className="Link" to="/in/user/about">About</NavLink>
    </li>
    <li>
        <NavLink  className="Link" to="/college">College</NavLink>
    </li>
    <li>
        <NavLink  className="Link" to="/users">Users</NavLink>
    </li>
    <li>
        <NavLink  className="Link" to="/users/list">List</NavLink>
    </li>
</ul>
   <div>

   </div>
  
</div>
)
}