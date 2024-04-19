import { useState } from "react";
import {  useSelector } from "react-redux";
// components
import Modal from "./small/modal";
import Browse from "./small/browse";
import Card from "./small/card";
import BrowseModal from "./small/browseModal";
// functions
import { paginationArray } from "../utils";
import mockData from '../mockData/items.json';


export default function Home() {
  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState([false, ""]);

  const reduxStore = useSelector((state)=>state);
  console.log("REDUX STORE: ", reduxStore);

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

      {showModal[0] ? 
        <Modal clickBackdrop={()=>{setShowModal([false, ""])}} >
          <BrowseModal showModal={showModal} ></BrowseModal>
        </Modal> : ""
      }
      
      <Browse getItems={getItems} data={data} found={found} Card={Card} setShowModal={setShowModal}>
      </Browse>
  
    </div>
    // </BrowseContext.Provider>
  )
};