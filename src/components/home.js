import { useState } from "react";
import Card from "./small/card";
import mockData from '../mockData/items.json';
import Switch from "./small/switch";
import Modal from "./modal";
import HiddenSec from "./small/hiddenSec";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  let [openSearchDets, setOpenSearchDets] = useState(false);
  let [searchBy, setSearchBy] = useState("name");
  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState([false, ""]);
  let [page, setPage] = useState(0);
  const pages = Array.from({ length: Math.ceil(data.length/9) }, (_, index) => index + 1);
  
  const navigate = useNavigate();


  // creates an array to handle pagination
  const paginationArray = (data)=>{
    let arr=[];
    for (let i=0; i<Math.ceil(data.length/9); i++){
      let it = data.slice((i*9),(i*9+9));
      arr.push(it);
    }
    return arr;
  };


  const handleToggle = ()=>{
    setSearchBy((current)=>(current ==="name" ? "price" : "name"))
  }


  const handleSearch = (event) =>{
    event.preventDefault();
    let search =event.target[0].value;
    setPage(0);
    getItems(search, searchBy);
  }

  // sets the data state variable to the items in the db that match the provided search
   const getItems =(search, searchby)=>{
    if (!search){
      const randomData =[ ...mockData];
      randomData.sort(()=>Math.random()-.5);
      setData(paginationArray(randomData));
    } else {
      let filteredData;
      if(searchby ==="name"){
        search = search.toLowerCase().replace(/\s+/g, '');
        filteredData = mockData.filter((item)=>{
          return item.title.toLowerCase().replace(/\s+/g, '').includes(search);
        })
      } else {
        search = search.replace(/\D/g, "");
        filteredData = mockData.filter((item)=>{
          return item.price < search;
        })
      }
        if(filteredData.length<1){
          setFound([false,0]);
        } else {
          setFound([true,filteredData.length]);
          console.log("found: ",found);
        }
        setData(filteredData);
    }

  }

  return (
    <div className='home'>
      {showModal[0] ? <Modal modalinfo={showModal[1]} clickBackdrop={()=>{setShowModal([false, ""])}} ></Modal>: ""}
      
      <div className="flex browse">

        <div className="flex ">
          <h3>Search by: </h3>
          <Switch title={searchBy} onChange={handleToggle} ></Switch>
        </div>

        <form onSubmit={handleSearch} >
          <input type="text" id="itemSeach"></input>
          <button type="submit" htmlFor="itemSearch" >lupa</button>
        </form>

        <input onClick={()=>setOpenSearchDets(!openSearchDets)} 
          type="checkbox" id="sort"></input>
          <label htmlFor="sort" >Filter / Sort</label>

      </div>

      <HiddenSec state={openSearchDets}>
        <div className="flex">
          <div>
            <h4>Filter -----------</h4>
          </div>
          <div>
            <h4>Sort</h4>
          </div>
        </div> 
      </HiddenSec>
     

      <div>
        <div>
          {/* <h4>Search:</h4>
          <h4>Options</h4> */}
          <h4>Found: {found[1]} </h4>
          <div>
            <button className="circular">P</button>
            { 
              pages.map((page)=>
              <button 
                key={page} 
                onClick={()=>{setPage(page-1)}} 
                className="circular">{page}</button>
            )}
            <button className="circular">N</button>
          </div>
        </div>
        

        <div className="found flex P3 rsquare">
          {!found[0] ? <div>
            <h2>Uh oh!</h2>
            <h4>Your search didn't match any items.<br/> Please try again. </h4>
          </div>
          :
          paginationArray(data)[page].map((book, index)=>
            <Card onClick={(event)=>{setShowModal([true, paginationArray(data)[page][index]])}}
            Pk={book.pk}
            title={book.title}
            author={book.author} key={index} ></Card>
          )}
          
          

        </div>
      </div>

    </div>
  )
};