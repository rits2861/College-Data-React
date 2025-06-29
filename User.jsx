// import { forwardRef } from "react"

//unction User ({displayName,name,getUser}){
    // const displayName=(name)=>{
    // alert(name)
    // }
//   return(
    
//    <div>
// <button onClick ={()=>displayName(name)} >Display user</button>
// <button onClick ={()=>getUser()} >Get user</button>
//    </div>
//   )
// }
// export default User;
// import { forwardRef } from "react"
// const User=(props,ref)=>{
//   return(
//     <div>
//       <input type="text" ref={ref}/> 
//       {/* ref={inputRef} */}
//     </div>
//   )
// }
// export default forwardRef(User);
import { Link } from "react-router"
export default function User (){
    const userData=[
        {id:1,name:"Ritika"},
        {id:2,name:"Nits"},
        {id:3,name:"Rits"},
        {id:4,name:"jk"},
        {id:5,name:"Vish"},
        {id:6,name:"kish"},
        {id:7,name:"Jish"},
    ]
return (
 <div style={{marginLeft:20}}>
  <h1>College User Page</h1>
  {
    userData.map((item)=>(
        <div>
            <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
        </div>
    ))
  }
 
 </div>
)
}