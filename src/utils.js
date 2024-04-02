import { cartActions, wishActions, authActions } from "./store";

export function handleLogout (dispatch, keyMail) {
    console.log("key passed: ", keyMail)
    const key = "Marketfy_"+keyMail;
    const prev = getLocalInfo(keyMail)
    let updated ={...prev};
    updated.auth=false;
    console.log("updated: ", updated);
    localStorage.setItem(key, JSON.stringify(updated));
    dispatch(authActions.logout())
}

export function addItem2Cart (dispatch, item, keyMail) {
    dispatch(cartActions.add2Cart(item));

    const key = "Marketfy_"+keyMail;
    const prev = getLocalInfo(keyMail)
    let updated;
    if (prev.cart){
        updated = {...prev }
        const existingItem = updated.cart.findIndex((it)=>it.id == item);
        if(existingItem===-1){
            updated.cart.push({id: item, qty: 1})
        } else {
            updated.cart[existingItem].qty++;

        }
    } else {
        console.log("first timer")
        updated = {
            ...prev, 
            cart: []
        }
        updated.cart.push({id: item, qty: 1})
        console.log("updated: ", updated);
    }
    
    localStorage.setItem(key, JSON.stringify(updated))

};

export function removeItemFromCart (dispatch, item, keyMail){
    dispatch(cartActions.removeFromCart(item));
    const key = "Marketfy_"+keyMail;
    const prev = getLocalInfo(keyMail)
    let updated;
    if (prev.cart) {
        updated = { ...prev };
        const existingItemIndex = updated.cart.findIndex(it => it.id === item);

        if (existingItemIndex !== -1) {
            // If the item exists in the cart, decrease its quantity by one
            updated.cart[existingItemIndex].qty--;

            // If quantity becomes zero, remove the item from the cart
            if (updated.cart[existingItemIndex].qty === 0) {
                updated.cart.splice(existingItemIndex, 1);
            }
        }
    }

    localStorage.setItem(key, JSON.stringify(updated));

};

// to use these functions add to the component the following:
// import { addItem2Cart, removeItemFromCart } from ...your path
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
// onClick={()=>{addItem2Cart(dispatch, KEYYY)}}

export function handleAdd2Wishlist(dispatch, item, keyMail){
    dispatch(wishActions.add2Wishlist(item));

    const key = "Marketfy_"+keyMail;
    const prev = getLocalInfo(keyMail)
    let updated;
    if (prev.wish){
        updated = {
        ...prev 
        }
        updated.wish.push(item)
    } else {
        
        updated = {
            ...prev, 
            wish: []
        }
        updated.wish.push(item)
        console.log("updated: ", updated);
    }
    
    localStorage.setItem(key, JSON.stringify(updated))
}

export function handleDeleteFromWishlist(dispatch, item, keyMail){
    dispatch(wishActions.removeFromWishlist(item));

    const key = "Marketfy_"+keyMail;
    const prev = getLocalInfo(keyMail)
    let updated;
    if (prev.wish){
        updated = {
        ...prev, 
        wish: prev.wish.filter(it=>it!==item)
        }
    }     
    localStorage.setItem(key, JSON.stringify(updated))
}


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

// -----------------------------------
// local storage:
export function getLocalInfo(mail){
    // const key = "Marketfy_"+mail;
    const localStore = JSON.parse(localStorage.getItem("Marketfy_"+mail));
    console.log("LOCAL: ","key: "+"Marketfy_"+mail,"data: ",localStore);
    return localStore
}
