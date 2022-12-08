import React, { useState } from "react";
//import Showbook from "./Showbook";


const Editbook=({id,Title,oneditbook,handleoneditformsubmit,deletebookbyid})=>{

const [newtitle,setnewtitle]=useState(Title)

const handlechange =(event)=>{
setnewtitle(event.target.value)
console.log('newtitle',id)
}


const handleonsubmit=(event)=>{
    event.preventDefault();
    //oneditbook(id,newtitle)  //added this in single function in bookshow component
    //onsavetoggle()
    handleoneditformsubmit(id,newtitle)

}

    return(
        <div>Editing book
            <form onSubmit={handleonsubmit}>

                <input  value={newtitle} onChange={handlechange}/>
                <button>save</button>  
             
            </form>
        
        </div>
    )
}

export default Editbook
