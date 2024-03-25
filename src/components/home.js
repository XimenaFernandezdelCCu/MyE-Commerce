import { useState } from "react";
import Card from "./small/card";
import mockData from '../items.json';
import Switch from "./small/switch";
import Modal from "./modal";

export default function Home() {
  let [openSearchDets, setOpenSearchDets] = useState(false);
  let [searchBy, setSearchBy] = useState("name");
  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState(false);
  
  let [page, setPage] = useState(0);
  const pages = Array.from({ length: Math.ceil(data.length/9) }, (_, index) => index + 1);
  
  console.log("--------------state: "); 
  console.log("search by: ", searchBy)
  console.log("found: ", found)
  console.log("data: ",  data)
  console.log("page: ", page)
  console.log("modal: ", showModal)

  const paginationArray = (data)=>{
    let arr=[];
    for (let i=0; i<Math.ceil(data.length/9); i++){
      let it = data.slice((i*9),(i*9+9));
      arr.push(it);
    }
    return arr;
  };

  const handleToggle = ()=>{
    console.log("switch!")
    setSearchBy((current)=>(current ==="name" ? "price" : "name"))
  }

  const handleSearch = (event) =>{
    event.preventDefault();
    let search =event.target[0].value;
    setPage(0);
    getItems(search, searchBy);
    // search = "";
  }

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
        console.log("search by price");
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
      {showModal ? <Modal clickBackdrop={()=>setShowModal(false)}></Modal>: ""}
      
      <h1>THIS IS HOME</h1>
      <div className="flex">
        <div style={{backgroundColor:"red"}}>
          <h3>Search by:</h3>
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
      {openSearchDets ? 
        <div className="flex">
          <div>
            <h4>Filter</h4>
          </div>
          <div>
            <h4>Sort</h4>
          </div>
        </div> 
        :
        <div></div> 
      }

      <div>
        <div>
          {/* <h4>Search:</h4>
          <h4>Options</h4> */}
          <h4>Found:{found[1]} </h4>
          <div>
            <button>P</button>
            { 
              pages.map((page)=>
              <button key={page} onClick={()=>{setPage(page-1); console.log(page)}} >{page}</button>
            )}
            <button>N</button>
          </div>
        </div>
        

        <div className="found flex P3">
          {!found[0] ? <div>
            <h2>Uh oh!</h2>
            <h4>Your search didn't match any items.<br/> Please try again. </h4>
          </div>
          :
          paginationArray(data)[page].map((book, index)=>
            <Card onClick={()=>setShowModal(true)}
            title={book.title}
            author={book.author} key={index} ></Card>
          )}
          
          

        </div>
      </div>

    </div>
  )
};