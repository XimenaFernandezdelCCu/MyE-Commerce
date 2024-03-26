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