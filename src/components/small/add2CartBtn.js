import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function Add2CartBtn (dispatchFunction){
    <button 
    type="submit" 
    className="pill"
    onClick={dispatchFunction}
        // style={{zIndex: "100"}}
    ><FontAwesomeIcon icon={faCartPlus} /></button>
}