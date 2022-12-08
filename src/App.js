import logo from './logo.svg';
import React, { useState,useEffect } from "react";
import axios from 'axios'
import './App.css';
import Createbook from './createbook';
import Listbook from './Booklist';


function App() {

  const [books,setbooks]=useState([])

useEffect(()=>{
  fetchbooklist()
  console.log('useeffect called')
},[])




  const onbooksubmit=async(Title)=>{
   const response= await axios.post('http://localhost:3001/books',{
  Title
})
const updatedbooks=[...books,response.data]
setbooks(updatedbooks)

  }

  const fetchbooklist=async()=>{
    const result= await axios.get('http://localhost:3001/books')
    setbooks(result.data)
  }
  const oneditbook=async(id,newbooktitle)=>{  //after editing book we get new title and on save of that editform call this function
    const response= await axios.put(`http://localhost:3001/books/${id}`,{
      Title:newbooktitle
    })
    
    const updatedtitle= books.map((item)=>{
      if(item.id===id){
      // return {...books,Title:newbooktitle}
      return {...books,...response.data}
      }
      return item
    })
    setbooks(updatedtitle)
    }

    const deletebookbyid=async(id)=>{
      await axios.delete(`http://localhost:3001/books/${id}`)
      const booktodelete=books.filter((item)=>{
        return  id!==item.id
      }
      )
      setbooks(booktodelete)
    }

  return(
    <div className="App">
      POST and GET using API for books: 
    <Createbook  onbooksubmit={onbooksubmit}/>
    <Listbook  books={books} oneditbook={oneditbook} deletebookbyid={deletebookbyid}/>
    
    </div>
  );
}

export default App;
