import { useEffect, useContext, useState } from "react";
import { HomeContext } from "../../context/homeContext";
import { paginationArray } from "../../utils/utils";
import { useSelector } from "react-redux"
import mockData from '../../mockData/items.json';

//components
import Modal from "../reusable/modal";
import Searchbar from "../reusable/searchbar";
import Pagination from "../reusable/pagination";
import BrowseCard from "../reusable/browseCard";
import Loader from "../reusable/loader";
import Error from "../reusable/error";
import BrowseModal from "./browseModal"
import WishButton from "../reusable/wishButton";

export default function Browse(){
    const reduxAuth = useSelector((state) => state.auth);
    const reduxCart = useSelector((state) => state.cart);

    const isAuthenticated = reduxAuth.auth;
    console.log("redux Auth", reduxAuth);
    console.log("redux cart", reduxCart);
    const userId = isAuthenticated ? reduxAuth.id : null;

    const {data, setData, page, setFound, showModal, setShowModal}= useContext(HomeContext);
    // const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setFound(mockData.length);
        setData(paginationArray(mockData.sort(()=>Math.random()-.5)))
    }, []);

  
    function getData(input) {
        let search = input.searchText.toLowerCase().replace(/\s+/g, '');
        let data = mockData;
        let filtered;

        if (data.length>0){
            switch (input.searchBy) {
                case 'author':
                    filtered = data.filter((item) => {
                        return item.author.toLowerCase().replace(/\s+/g, '').includes(search);
                    })
                    break;
                case 'price':
                    search = search.replace(/\D/g, "");
                    filtered = data.filter((item) => {
                        return item.price < search;
                    })
    
                    break;
                default: 
                    filtered = data.filter((item) => {
                        return item.title.toLowerCase().replace(/\s+/g, '').includes(search);
                    })
            }
            if (filtered.length < 1) {
                setFound([0]);
            } else {
                setFound([filtered.length]);
            }
            setData(paginationArray(filtered));
        }
    }


    return (
        <>
            {showModal && 
            <Modal closeModal={()=>setShowModal(false)} >
                <BrowseModal book={mockData.filter((book)=>book.pk == showModal)[0]} ></BrowseModal>
            </Modal> 
            }

            <Searchbar returnThis={getData} radio={true}></Searchbar>

            <Pagination></Pagination>


            <div className="flex wrapp greyContainer rounded"
            
            style={{
            position:"relative", 
            minHeight: "20vh", 
            justifyContent:"space-around"}}>

                {error ?
                    <Error></Error>  
                :
                <>
                {loading ? 
                    <Loader></Loader>

                    // is there data?
                    : data[0] ?
                    data[page].map((book)=>
                    <BrowseCard book={book} key={book.pk}>
                        <WishButton pk={book.pk}></WishButton>
                    </BrowseCard>
                    )
                    :
                    <div>
                        <h2>Uh oh!</h2>
                        <h4>Your search didn't match any items.<br /> Please try again. </h4>
                    </div>
                }
                </>
                }

            </div>

            <Pagination></Pagination>


        </>
    )
}