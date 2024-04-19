import { cartActions, authActions } from "../store";

//-----------------------------
// creates an array to handle pagination
export function paginationArray(data, num = 9) {
    let arr = [];
    for (let i = 0; i < Math.ceil(data.length / num); i++) {
        let it = data.slice(i * num, (i * num) + num);
        arr.push(it);
    }
    return arr;
};

// //-----------------------------
// Cart *
export function add2Cart(id, dispatch){
    if (id!=0){
        let cart=[];
        const existing = localStorage.getItem("Marketfy_Cart");
        if(existing == null){
            localStorage.setItem("Marketfy_Cart", id);
        }else {
            cart.push(existing, id)
            localStorage.setItem("Marketfy_Cart", cart);
        }
        dispatch(cartActions.add2Cart(id));
    }
}

export function removeFromCart(id, dispatch){
    let cart=[];
    let existing = localStorage.getItem("Marketfy_Cart");
    
    if(existing != null && existing.includes(id)){
            const existingArr = existing.split(',').map(Number);
            const index = existingArr.indexOf(id)
            existingArr.splice(index,1);
            cart = existingArr;
        
        localStorage.setItem("Marketfy_Cart", cart);
        dispatch(cartActions.removeFromCart(id));
    }

}

// creates an object with keys id: and qty: based on 
// the cart info from local (an array with id's)
export function countOccurrences(arr) {
    if (!Array.isArray(arr)){
        arr = arr.split(',').map(Number);
    }

    const result = [];
    const countMap = {};

    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    });

    for (const id in countMap) {
        result.push({ id: parseInt(id), qty: countMap[id] });
    }

    return result;
};

export function emptyCart(dispatch){
    localStorage.removeItem("Marketfy_Cart");
    dispatch(cartActions.removeAllFromCart());
    
}

// // ---------------------------
export function add2Wishlist(id, pk){
   
    let wish=[];
    const existing = localStorage.getItem(`${id}_Wish`);
    if(existing == null){
        localStorage.setItem(`${id}_Wish`, pk);
        return [pk]
    }else {
        if (!existing.includes(pk)){
            wish.push(existing, pk)
            localStorage.setItem(`${id}_Wish`, wish);
            return wish
        }
    }


}

export function deleteFromWish(id, pk){
    let wish=[];
    const existing = localStorage.getItem(`${id}_Wish`);
    
    if(existing != null && existing.includes(pk)){
        const existingArr = existing.split(',').map(Number);
        const index = existingArr.indexOf(pk)
        existingArr.splice(index,1);
        wish = existingArr;
        if (wish.length<1){
            localStorage.removeItem(`${id}_Wish`);
            return [];
        } else {
            localStorage.setItem(`${id}_Wish`, wish);
            return wish;
        }
        
    }

}

// ----------- 
export function validateRawCart(arr, dispatch) {
    if (Array.isArray(arr)) {
        // at least one non-zero integer?
        const nonZeroInteger = arr.some(item => Number.isInteger(item) && item !== 0);
        if (nonZeroInteger) {
            // remove non-integer values and zeros
            const cleanedArray = arr.filter(item => Number.isInteger(item) && item !== 0);
            // set cart redux 
            dispatch(cartActions.setCart(cleanedArray));
            // set cart local
            localStorage.setItem("Marketfy_Cart", cleanedArray);
            return true;
        } else {
            // set cart redux 
            const empty = [];
            dispatch(cartActions.setCart([]));
            // set cart local
            localStorage.removeItem("Marketfy_Cart");
            return false; 
        }
    } else {
        return false; 
    }    
}

// remove non-integer values and zeros
export function cleanRawCart(arr){
    return arr.filter(item => Number.isInteger(item) && item !== 0);
}

// //------------------------------------
// Get new user id
export function generateUserId(){

    let localStoreUsers = localStorage.getItem("Users_Marketfy");
    const localIDs = localStoreUsers.split(',').map(Number);
    
    const newId = localIDs[localIDs.length-1]+1;
    return newId;
}

// ------------ logout
export function handleLogout(dispatch){
    localStorage.removeItem("Marketfy_ActiveUser");
    localStorage.removeItem("Marketfy_Cart");
    dispatch(authActions.setAuth({auth: false}));
    window.location.href = '/'
}

//-------------- login
export function findUser(email, password){
    let localStoreUsers = localStorage.getItem("Users_Marketfy");
    const localIDs = localStoreUsers.split(',').map(Number);
    const userId = localIDs.find((id)=>JSON.parse(localStorage.getItem(`${id}_Log`)).email == email);
    if (userId){
        
        if (JSON.parse(localStorage.getItem(`${userId}_Log`)).password == password){
            // ok
            return {status: 200, message: "ok", userId };
        }
        // incorrect Password
        return {status: 401, message: "incorrect password"}
    }
    // no user with email found
    return {status: 400, message: `No user with email: ${email} was found`}
}

export const detailOptions = [
    {
        key: "email", 
        display: "Email"
    },
    {
        key: "first", 
        display: "First Name"
    },
    {
        key: "last", 
        display: "Last Name"
    },
    {
        key: "preferred", 
        display: "What do you want us to call you?"
    },
    {
        key: "bio", 
        display: "Bio"
    }, 
    {
        key: "interest", 
        display: "Interest Tags"
    }
]

export function getDetails(id){
    const userLog = JSON.parse(localStorage.getItem(`${id}_Log`));
    const userExtra = JSON.parse(localStorage.getItem(`${id}_Extra`));

    return {
        email: userLog.email,
        first: userExtra.first, 
        last: userExtra.last,
        preferred: userExtra.preferred,
        bio: userExtra.bio,
        interest: userExtra.interest
    }

}

/// ORDERS --------
export function generateOrderId(id){

    let localStoreOrders = JSON.parse(localStorage.getItem(`${id}_Orders`));
    if (localStoreOrders){
        const orderIDs = localStoreOrders.map((order)=>order.orderId);
        const newId = orderIDs[orderIDs.length-1]+1;
        return newId;
    } else 
    return 1;
}