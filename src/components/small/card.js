import { useState } from "react";
import '../../images/houseofleaves.jpg'

export default function Card({title,author, onClick}) {
    // const title = "Game of thrones";
    // const author = "George RR Martin";

    return (
      <div className='card' onClick={onClick} >
        <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
        <p className="title" >{title}</p>
        <p>{author}</p>
        <button>carrt</button>
        
      </div>
    )
  };