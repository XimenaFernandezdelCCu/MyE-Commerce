import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Switch from './switch';


export default function Searchbar ({searchBy, setSearchBy, handleSearch}) {

    const handleToggle = ()=>{
        setSearchBy((current)=>(current ==="name" ? "price" : "name"))
    }

    return (
        <div className="flex searchbar">

            <p>Search by: </p>
        
            <Switch title={searchBy} onChange={handleToggle} ></Switch>
           
            

            <form onSubmit={handleSearch} className='flex'
            style={{
                borderRadius: "60px", 
                width: "40%"
            }}  >
                <input type="text" id="itemSeach" 
                style={{
                    borderRadius: "60px"
                }}
                placeholder='Frankenstein...'
                ></input>
                <button type="submit" htmlFor="itemSearch" ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>

            {/* <input onClick={()=>setOpenSearchDets(!openSearchDets)} 
            type="checkbox" id="sort"></input>
            <label htmlFor="sort" >Filter / Sort</label> */}

      </div>
    )

};