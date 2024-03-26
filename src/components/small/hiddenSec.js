
export default function HiddenSec (props) {

    return (
        <>
        {props.state ? 
            <>{props.children}
            </>
            :
            <></> 
        }
        </>
    )

};

/*To use this:
    You need to pass a state variable as a prop "state" 
    that will either be true to show content or false to hide it. 
    Add the content to be added as a child. 
    Create a way to open/ close the section, for example: 
    <input onClick={()=>setOpenSearchDets(!openSearchDets)} 
          type="checkbox" id="sort"></input>
          <label htmlFor="sort" >Filter / Sort</label>

*/