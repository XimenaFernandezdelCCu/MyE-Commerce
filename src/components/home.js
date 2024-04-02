import { useState } from "react";
import mockData from '../mockData/items.json';
import Modal from "./small/modal";
import Browse from "./small/browse";
import { paginationArray } from "../utils";
import {  useSelector } from "react-redux";
import Card from "./small/card";
import Add2CartBtn from "./small/add2CartBtn";
import BrowseModal from "./small/browseModal";


export default function Home() {

  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState([false, ""]);

  // const dispatch = useDispatch();
  const reduxStore = useSelector((state)=>state);
  // const userDetails = useSelector((state) => state.auth.userDetails);
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
        </Modal> : ""}
      
      <Browse getItems={getItems} data={data} found={found} Card={Card} setShowModal={setShowModal} >
        {/* {paginationArray(data)[1].map((book, index)=>
          <Card onClick={(event)=>{setShowModal([true, paginationArray(data)[page][index]])}}
              Pk={book.pk}
              title={book.title}
              author={book.author} key={index} >
          </Card>
        )} */}
      </Browse>
  
    </div>
    // </BrowseContext.Provider>
  )
};