import { useState } from "react";
import mockData from '../mockData/items.json';
import Modal from "./small/modal";
import Browse from "./small/browse";
import { paginationArray, addItem2Cart } from "../utils";
import { useDispatch } from "react-redux";
import { cartActions, wishActions } from "../store";
import { BrowseContext } from "../context/browseContent";
import { useContext } from "react";
import Card from "./small/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import Add2CartBtn from "./small/add2CartBtn";


export default function Home() {

  let [data, setData] = useState(mockData);
  let [found, setFound] = useState(["true",data.length]);
  let [showModal, setShowModal] = useState([false, ""]);
  // let [page, setPage] = useState(0);

  // const {found} = useContext(BrowseContext)

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
    // <BrowseContext.Provider 
    //   value={{
    //     found, 
        

    //   }}>
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
                    > <FontAwesomeIcon icon={faHeart} className="children" />
                      Wish</button>
                </div>
                <div className='modalb'>
                    <h1>{showModal[1].title}</h1>
                    <h3>{showModal[1].author}</h3>
                    <p>{showModal[1].synapsis}</p>
                    <h2>Current stock: {showModal[1].stock}</h2>
                    

                </div>
            </div>

            <div className='modalbtns' >
                <button 
                type="submit" 
                className="pill"
                onClick={()=>{dispatch(cartActions.add2Cart(showModal[1].pk))}}
                    // style={{zIndex: "100"}}
                ><FontAwesomeIcon icon={faCartPlus} /></button>

                <button className="pill"
                style={{backgroundColor: "white" }}
                >See All Details</button>
            </div>
          </div>

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