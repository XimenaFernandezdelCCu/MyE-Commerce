import { useState } from "react";
import mockData from '../mockData/items.json';
import Modal from "./small/modal";
import Browse from "./small/browse";
import { paginationArray, addItem2Cart } from "../utils";
import { useDispatch } from "react-redux";
import { cartActions, wishActions } from "../store";

export default function Home() {

  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState([false, ""]);
  const dispatch = useDispatch();

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

          <div className='modalcontent' >
            <div className='modalinfo' >
                <div className='modala'>
                    <img className='modalimg' src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
                    <h3>{showModal[1].price} $</h3>
                    <button 
                    className="green pill" 
                    onClick={()=>{dispatch(wishActions.add2Wishlist(showModal[1].pk))}}
                    >wish</button>
                </div>
                <div className='modalb'>
                    <h1>{showModal[1].title}</h1>
                    <h3>{showModal[1].author}</h3>
                    <p>{showModal[1].synapsis}</p>
                    <h2>Current stock: {showModal[1].stock}</h2>
                    

                </div>
            </div>

            <div className='modalbtns' >
                <button onClick={()=>{dispatch(cartActions.add2Cart(showModal[1].pk))}}
                className="pill"
                >Add to Cart</button>
                <button className="pill"
                style={{backgroundColor: "white" }}
                >See All Details</button>
            </div>
          </div>

        </Modal> : ""}
      
      <Browse getItems={getItems} data={data} found={found} setShowModal={setShowModal} ></Browse>
  
    </div>
  )
};