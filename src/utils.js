import { cartActions } from "./store";

export function addItem2Cart (dispatch, Pk) {
    dispatch(cartActions.add2Cart(Pk));

};

export function removeItemFromCart (dispatch, params){
    dispatch(cartActions.removeFromCart(params));
};

// to use these functions add to the component the following:
// import { addItem2Cart, removeItemFromCart } from ...your path
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
// onClick={()=>{addItem2Cart(dispatch, KEYYY)}}

// -----------------------------------

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function handleValidInputs (event, type, setValid) {
    //empty
    if (event.target.value.length<1){
        setValid((valid)=>({...valid, [type]: false}));
    } else {
        setValid((valid)=>({...valid, [type]: true}));
        if (type === "mail"){
            if (!emailRegex.test(event.target.value)){
                setValid((valid)=>({...valid, [type]: false}));
            }
        }
    }
}

// -----------------------------------

// creates an array to handle pagination
export function paginationArray (data) {
    let arr=[];
    for (let i=0; i<Math.ceil(data.length/9); i++){
        let it = data.slice((i*9),(i*9+9));
        arr.push(it);
    }
    return arr;
};
