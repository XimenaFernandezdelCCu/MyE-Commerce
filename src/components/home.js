import { useState } from "react";

export default function Home() {
  let [openSearchDets, setOpenSearchDets] = useState(false);
    return (
      <div className='home'>
        <h1>THIS IS HOME</h1>
        <div className="flex">
          <input></input>
          <button>lupa</button>
          <h3 onClick={()=>setOpenSearchDets(!openSearchDets)} >Filter / Sort</h3>
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
            <h4>Search:</h4>
            <h4>Options</h4>
          </div>

          <div className="found">
            

          </div>
        </div>

      </div>
    )
  };