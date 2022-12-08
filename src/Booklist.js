import React, { useState } from "react";
import Showbook from "./Showbook";


const Listbook=({books,oneditbook,deletebookbyid})=>{

    return(
        <div>Displaying book:
        {
            books.map((book,index)=>{
                return <div><Showbook id={book.id} Title={book.Title} oneditbook={oneditbook} deletebookbyid={deletebookbyid}/> </div>
            })
        }
        </div>
    )
}

export default Listbook