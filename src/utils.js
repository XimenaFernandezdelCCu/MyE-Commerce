// import { cartActions, wishActions, authActions, ordersActions } from "./store";

// export function handleLogout (dispatch, reduxAuth) {
//     add2LocalStore(reduxAuth, {auth: false});
//     dispatch(authActions.logout())
// }

// //item is the pk of the item being add to cart
// export function addItem2Cart (dispatch, item, reduxAuth) {
//     // add item to redux
//     dispatch(cartActions.add2Cart(item));

//     // // add item to local: 
//     // let localStoreUsers = JSON.parse(localStorage.getItem("users"));
//     // let activeUser = localStoreUsers.find((user)=>user.pk==reduxAuth.userDetails.pk);
//     // let activeUserIndex = localStoreUsers.findIndex((user)=>user.pk==reduxAuth.userDetails.pk);
//     // let updated;

//     // if (activeUser.cart){
//     //     if(activeUser.cart==[]){
//     //         console.log("construction")
//     //     } else {
//     //         let searchItem = activeUser.cart.find((it)=>it.id===item);
//     //         let searchItemIndex = activeUser.cart.findIndex((it)=>it.id===item);

//     //         if (searchItem){
//     //             searchItem.qty++;
//     //             console.log("Active USer: ", activeUser);
//     //             localStoreUsers[activeUserIndex]=activeUser;
//     //             localStorage.setItem("users", JSON.stringify(localStoreUsers));
//     //         } else {
//     //             let currentCart = activeUser.cart;
//     //             currentCart.push({id: item, qty: 1})
//     //             console.log("activeUSer: ", activeUser);
//     //             localStoreUsers[activeUserIndex]=activeUser;
//     //             localStorage.setItem("users", JSON.stringify(localStoreUsers));
//     //         }
//     //     }

//     // } else {
//     //     updated = {
//     //         ...activeUser, 
//     //         cart: [
//     //             {id: item, qty: 1}
//     //         ]
//     //     }
//     //     console.log("updated: ", updated);
//     //     localStoreUsers[activeUserIndex]=updated;
//     //     localStorage.setItem("users", JSON.stringify(localStoreUsers));
//     // }

//     // add2LocalStore(reduxAuth, {cart:[]})
//     // -----------------------------------------
//     // const key = "Marketfy_"+keyMail;
//     // const prev = getLocalInfo(keyMail)
//     // console.log("key: ", key);
//     // console.log("prev, ", prev);

//     // if (prev.cart && prev.cart.length>0){
//     //     updated = {...prev }
//     //     const existingItem = updated.cart.findIndex((it)=>it.id == item);
//     //     if(existingItem===-1){
//     //         updated.cart.push({id: item, qty: 1})
//     //     } else {
//     //         updated.cart[existingItem].qty++;

//     //     }
//     // } else {
//     //     console.log("first timer")
//     //     updated = {
//     //         ...prev, 
//     //         cart: []
//     //     }
//     //     updated.cart.push({id: item, qty: 1})
//     //     console.log("updated: ", updated);
//     // }
    
//     // localStorage.setItem(key, JSON.stringify(updated))

// };

// export function removeItemFromCart (dispatch, item, keyMail){
//     dispatch(cartActions.removeFromCart(item));
//     const key = "Marketfy_"+keyMail;
//     const prev = getLocalInfo(keyMail)
//     let updated;
//     if (prev.cart) {
//         updated = { ...prev };
//         const existingItemIndex = updated.cart.findIndex(it => it.id === item);

//         if (existingItemIndex !== -1) {
//             // If the item exists in the cart, decrease its quantity by one
//             updated.cart[existingItemIndex].qty--;

//             // If quantity becomes zero, remove the item from the cart
//             if (updated.cart[existingItemIndex].qty === 0) {
//                 updated.cart.splice(existingItemIndex, 1);
//             }
//         }
//     }

//     localStorage.setItem(key, JSON.stringify(updated));

// };

// // to use these functions add to the component the following:
// // import { addItem2Cart, removeItemFromCart } from ...your path
// // import { useDispatch } from "react-redux";
// // const dispatch = useDispatch();
// // onClick={()=>{addItem2Cart(dispatch, KEYYY)}}

// export function handleAdd2Wishlist(dispatch, item, keyMail){
//     dispatch(wishActions.add2Wishlist(item));

//     const key = "Marketfy_"+keyMail;
//     const prev = getLocalInfo(keyMail)
//     let updated;
//     if (prev.wish){
//         updated = {
//         ...prev 
//         }
//         updated.wish.push(item)
//     } else {
        
//         updated = {
//             ...prev, 
//             wish: []
//         }
//         updated.wish.push(item)
//         console.log("updated: ", updated);
//     }
    
//     localStorage.setItem(key, JSON.stringify(updated))
// }

// export function handleDeleteFromWishlist(dispatch, item, keyMail){
//     dispatch(wishActions.removeFromWishlist(item));

//     const key = "Marketfy_"+keyMail;
//     const prev = getLocalInfo(keyMail)
//     let updated;
//     if (prev.wish){
//         updated = {
//         ...prev, 
//         wish: prev.wish.filter(it=>it!==item)
//         }
//     }     
//     localStorage.setItem(key, JSON.stringify(updated))
// }


// // -----------------------------------

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export function handleValidInputs (event, type, setValid) {
//     // if the input is empty set valid false:
//     if (event.target.value.length<1){
//         setValid((valid)=>({...valid, [type]: false}));
//     } else {
//         // else set to true
//         setValid((valid)=>({...valid, [type]: true}));
//         // only set email to true if it is an actual email
//         if (type === "mail"){
//             if (!emailRegex.test(event.target.value)){
//                 setValid((valid)=>({...valid, [type]: false}));
//             }
//         }
//     }
// }

// // -----------------------------------

// // creates an array to handle pagination
// export function paginationArray (data) {
//     let arr=[];
//     for (let i=0; i<Math.ceil(data.length/9); i++){
//         let it = data.slice((i*9),(i*9+9));
//         arr.push(it);
//     }
//     return arr;
// };

// // -----------------------------------
// // local storage:
// export function getLocalInfo(mail){
//     // const key = "Marketfy_"+mail;
//     const localStore = JSON.parse(localStorage.getItem("Marketfy_"+mail));
//     return localStore
// }

// // -------------------------------------
// export function activeUserToRedux(activeUser, dispatch){
//     const payload = {
//         auth: true,
//         first: activeUser.first,
//         last: activeUser.last,
//         preferred: activeUser.preferred, 
//         mail: activeUser.mail, 
//         pass: activeUser.pass, 
//         bio: activeUser.bio, 
//         tags: activeUser.tags, 
//         pk: activeUser.pk
//     }
//     dispatch(authActions.login(payload));

//     if(activeUser.cart){
//         console.log("Loading Cart from local storage...")
//         dispatch(cartActions.setCart(activeUser.cart));
//     }
//     if(activeUser.wish){
//         console.log("Loading WishList from local storage...")
//         dispatch(wishActions.setWishlist(activeUser.wish));
//     }
//     if(activeUser.orders){
//         console.log("Loading Orders from local storage...")
//         dispatch(ordersActions.setOrders(activeUser.orders));
//     }
// }

// // -------------------------------------
// export function add2LocalStore(reduxAuth, additionalData){

//     const completeUser = {
//         ...reduxAuth.userDetails,
//         ...additionalData
//     }
//     console.log("complete usrr: ", completeUser)
//     let localStoreUsers = JSON.parse(localStorage.getItem("users")); 
//     let activeUserIndex = localStoreUsers.findIndex((user)=>user.pk==reduxAuth.userDetails.pk);
//     localStoreUsers[activeUserIndex]=completeUser;
//     localStorage.setItem("users", JSON.stringify(localStoreUsers));
// }


// // -------------------------------------
// // export function handleLogin (event, dispatch, navigate){
// //     event.preventDefault();
// //     // REF? Retrieve inputs 
// //     const userMail = event.target.children[2].value;
// //     const userCont = event.target.children[8].value;
// //     // simulate DB Fetch:
// //     const userDetails = usersData.find((user)=>user.mail === userMail && user.pass === userCont);

// //     if(!userMail || !userCont || !userDetails){
// //       setUserFound(false);
// //     } else{
// //       const payload = {
// //         first: userDetails.first,
// //         last: userDetails.last,
// //         preferred: userDetails.preferred, 
// //         mail: userDetails.mail, 
// //         pass: userDetails.pass, 
// //         bio: userDetails.bio, 
// //         tags: userDetails.tags, 
// //         pk: userDetails.pk
// //       }
// //       dispatch(authActions.login(payload));
// //       localStorage.setItem("UserMail", userDetails.mail);

// //       //local Store:
// //       const key = "Marketfy_"+userDetails.mail
// //       // const localStore = JSON.parse(localStorage.getItem(key));
// //       // console.log("LOCAL: ",localStore);
// //       const localStore = getLocalInfo(userDetails.mail);
// //       //

// //       if(localStore === null){
// //         localStorage.setItem(key, JSON.stringify({
// //           auth: true, 
// //           userDetails: payload
// //         }))
// //       } else {
// //         const updated = {...localStore} 
// //         updated.auth = true; 
// //         localStorage.setItem(key, JSON.stringify(updated))
// //         if(localStore.cart){
// //           console.log("loading Cart from local storage")
// //           dispatch(cartActions.setCart(localStore.cart));
// //         }
// //         if (localStore.wish){
// //           console.log("loading Wishlist from local storage")
// //           dispatch(wishActions.setWishlist(localStore.wish));
// //         }
// //         if(localStore.orders){
// //           console.log("loading orders from local storage")
// //           dispatch(ordersActions.setOrders(localStore.orders))
// //         }
// //       }
// //       navigate('/home');
// //     }
// //   }