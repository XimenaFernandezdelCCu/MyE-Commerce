import { cartActions } from "./store";

export function addItem2Cart (dispatch, Pk) {
    console.log("cartttttttt");
    console.log(Pk)
    dispatch(cartActions.add2Cart(Pk));

};

export function removeItemFromCart (dispatch, params){
    console.log(" no cartttttttt");
    console.log(params)
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



