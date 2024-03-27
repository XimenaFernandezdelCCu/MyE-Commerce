import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wishActions } from "../../store";

import mockData from '../../mockData/items.json';
import Browse from "./browse";

export default function Wishlist () {

    // let [data, setData] = useState(mockData);
    
    let [showModal, setShowModal] = useState([false, ""]);

    const wishState = useSelector((state)=>state.wish);
    console.log("-- state --", wishState);
    //simulate fetching from DB
    const filtered = mockData.filter((item)=> 
        wishState.some(id => id == item.pk ) );
    console.log("--- fetched data: ", filtered);

    let [data, setData] = useState(filtered);
    let [found, setFound] = useState(["true",data.length]);

    const dispatch = useDispatch();

    const getItems2 = (search, searchBy)=>{
        if(search){
            let filteredData;
            if(searchBy ==="name"){
                search = search.toLowerCase().replace(/\s+/g, '');
                filteredData = filtered.filter((item)=> 
                    item.title.toLowerCase().replace(/\s+/g, '').includes(search))
            } else {
                search = search.replace(/\D/g, "");
                filteredData = filtered.filter((item)=> item.price < search)
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
        <div id="wishlist" className="flexcol P3" >
            <h1>WishList</h1>

            <Browse getItems={getItems2} data={data} found={found} setShowModal={setShowModal} type={"wish"} ></Browse>
            
            
        </div>
    )

};