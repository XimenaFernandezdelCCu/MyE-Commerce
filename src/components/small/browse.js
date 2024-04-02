import { useState } from "react";
import Searchbar from "./searchbar";

import { paginationArray } from "../../utils";
import Pagination from "./pagination";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



export default function Browse (props) {
    // let [openSearchDets, setOpenSearchDets] = useState(false);
    let [searchBy, setSearchBy] = useState("name");
    let [page, setPage] = useState(0);


    const pages = Array.from({ length: Math.ceil(props.data.length/9) }, (_, index) => index + 1);

    // get entered search, and fetch data:
    const handleSearch = (event) =>{
        event.preventDefault();
        let search =event.target[0].value;
        setPage(0);
        props.getItems(search, searchBy);
    }

    
    return (
        <div className="flexcol P3" >
            <Searchbar
            searchBy={searchBy} setSearchBy={setSearchBy} handleSearch={handleSearch}
            ></Searchbar>

            {/* <HiddenSec state={openSearchDets}>
                <div className="flex">
                <div>
                    <h4>Filter -----------</h4>
                </div>
                <div>
                    <h4>Sort</h4>
                </div>
                </div> 
            </HiddenSec> */}

            <div className="browse" >

                {/* <h4>Search:</h4>
                <h4>Options</h4> */}
                    
                <div className="flex" >
                    <h4>Found: {props.found[1]} </h4>
                    <h4> Page: {page+1} </h4>
                    {page > 1 ? 
                        <button className="circular"
                        onClick={()=>{setPage(page-1)}} >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        : 
                        <button className="circular">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>   
                    }
                    
                    { 
                    pages.map((page)=>
                    <button 
                        key={page} 
                        onClick={()=>{setPage(page-1)}} 
                        className="circular">{page}</button>
                    )}

                    {page == pages.length ? 
                        <button className="circular"
                        onClick={()=>{setPage(page+1)}} >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        : 
                        <button className="circular">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>   
                    }

                </div>
                {/* <Pagination></Pagination> */}
        

                <div className="found flex P3 rsquare">
                    {!props.found[0] ? <div>
                        <h2>Uh oh!</h2>
                        <h4>Your search didn't match any items.<br/> Please try again. </h4>
                    </div>
                    : 
                    paginationArray(props.data)[page].map((book, index)=>
                            <props.Card 
                                onClick={(event)=>{props.setShowModal([true, paginationArray(props.data)[page][index]])}}
                                Pk={book.pk}
                                title={book.title}
                                author={book.author} key={index}
                                setData={props.setData} >
                            </props.Card>
                            )
                    
                    // <>{props.children}</>
                    }
                    
                

                </div>
            </div>


            
        </div>
    )

};