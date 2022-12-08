import React, { useState } from "react";

const Createbook =({onbooksubmit})=>{
const [booktitle,setbooktitle]=useState([])

const handlebooktitle=(event)=>{
setbooktitle(event.target.value)
console.log(booktitle)
}


const handleformsubmit=(event)=>{
    event.preventDefault();
    onbooksubmit(booktitle)
    }

  return (
    <div>
        <form onSubmit={handleformsubmit}>

       Title:  <input  value={booktitle} onChange={handlebooktitle}/>
        <button>Add book</button>
        </form>
     
     
    
    </div>
  );
}

export default Createbook;
