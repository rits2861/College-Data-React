function App(){
return(


<>

<h1> hi</h1>
 <Navbar/> 
  <Routes>
 <Route path ="/"element= {<Home/>}/>  
 <Route path ="/about"element= {<About/>}/>  
 <Route path ="/Contact"element={<Contact/>}/>  
 <Route path ="/login"element={<Login/>}/>  
   </Routes>
   </>
)
}

 {/* <Route path ="/college"element={<College/>}>
 {/* <Route path="student" element={<Student/>} /> 
  <Route path="department" element={<Departments/>} />
 <Route path="details" element={<Details/>} /> */}
 {/* </Route> */} 
 

 


{/* <Route path="/*" element={<PageNotFound/>} />
  </Routes> */}
import "./header.css"
import {Route,Routes } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import College from "./College";

import Departments from "./Department";
import Details from "./Details";
import Student from "./student";
import PageNotFound from "./PageNotFound";
import User from "./User";
import UserDetail from "./UserDetails";
 
 export default function App(){
return(
<>
<h1>My Project </h1>
<Navbar/>
  <Routes>
  {/* <Route element={<Navbar/>}>
  <Route path ="/"element= {<Home/>}/>  
    <Route path ="/about"element= {<About/>}/>  
      <Route path ="/Contact"element={<Contact/>}/>  
      <Route path ="/login"element={<Login/>}/>
  </Route> */}
  {/* <Route element={<Navbar/>}/> */}
  <Route path ="/"element= {<Home/>}/> 
  <Route path ="/users/list?"element= {<User/>}/> 
  <Route path ="/users/:id/:name?"element= {<UserDetail/>}/> 
  
  
  <Route path ="in">
  <Route path="/in/user">
  <Route path ="/in/user/about"element= {<About/>}/>  
    <Route path ="/in/user/Contact"element={<Contact/>}/>  
    <Route path ="/in/user/login"element={<Login/>}/> 
  </Route>
</Route>
     <Route path ="/college"element={<College/>}>
  <Route index element={<Student/>} /> 
   <Route path="department" element={<Departments/>} />
   <Route path="details" element={<Details/>} /> 
  </Route>
 <Route path="/*" element={<PageNotFound/>} />

   </Routes>
</>
)
}