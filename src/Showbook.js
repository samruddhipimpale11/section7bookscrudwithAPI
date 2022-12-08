import React, { useState } from "react";
//import Showbook from "./Showbook";
import Editbook from "./Editbook";


const Showbook=({id,Title,oneditbook,deletebookbyid})=>{
    const [showedit,setshowedit]=useState(false)

    const handleedittoggle=()=>{
        setshowedit(!showedit)
    }



    const handleoneditformsubmit=(id,newbooktitle)=>{
       
        oneditbook(id,newbooktitle)
        onsavetoggle()
     
     
    }

    const onsavetoggle=()=>{
        setshowedit(false)
    }

    const deletebook=()=>{
       // alert('delete book?')
        if(window.confirm('delete book?')){  //showing alert before deleting
            deletebookbyid(id)
        }
        //
    }
let content=<h2> {id} {Title} </h2>
if(showedit){
    content=<Editbook oneditbook={oneditbook}  deletebookbyid={deletebookbyid} id={id} Title={Title} />
}
    return(
        <div>
 {content}<button onClick={handleedittoggle}>Edit</button> <button onClick={deletebook}>delete</button>
        </div>
    )
}

export default Showbook