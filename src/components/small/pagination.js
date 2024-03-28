
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

// export default function Pagination({data}){
//     // let [page, setPage] = useState(0);
//     const pages = Array.from({ length: Math.ceil(data.length/9) }, (_, index) => index + 1);

//     return(
//         <div className="flex" >
//         <h4>Found: {found[1]} </h4>
//         <h4> Page: {page+1} </h4>
//         {page > 1 ? 
//             <button className="circular"
//             onClick={()=>{setPage(page-1)}} >
//                 <FontAwesomeIcon icon={faArrowLeft} />
//             </button>
//             : 
//             <button className="circular">
//                 <FontAwesomeIcon icon={faArrowLeft} />
//             </button>   
//         }
        
//         { 
//         pages.map((page)=>
//         <button 
//             key={page} 
//             onClick={()=>{setPage(page-1)}} 
//             className="circular">{page}</button>
//         )}

//         {page == pages.length ? 
//             <button className="circular"
//             onClick={()=>{setPage(page+1)}} >
//                 <FontAwesomeIcon icon={faArrowRight} />
//             </button>
//             : 
//             <button className="circular">
//                 <FontAwesomeIcon icon={faArrowRight} />
//             </button>   
//         }

//     </div>
        
//     )
// }