import {createSlice, configureStore} from '@reduxjs/toolkit'

let localStoreUser = localStorage.getItem("Marketfy_ActiveUser");
let initialAuth;
if(!localStoreUser){
    initialAuth = {auth: false};
} else {
    initialAuth = {
        auth: true, 
        id: localStoreUser, 
    }
}


const authSlice = createSlice({
    name: 'auth', 
    initialState: initialAuth, 
    reducers: {
        setAuth(state, action){
            state=action.payload;
        }
    }
});

let localStoreCart = localStorage.getItem("Marketfy_Cart");
let initial; 

if(localStoreCart != null){
    const cartArr = localStoreCart.split(',').map(Number);
    initial = cartArr;
} else {
    initial = []
}



const cartSlice = createSlice({
    name: 'cart', 
    initialState:initial,
    reducers: {
        add2Cart(state, action){
       
            state.push(action.payload)
        }, 
        removeFromCart(state, action){
        
            const index = state.indexOf(action.payload);
            const existingArr = state;
            existingArr.splice(index,1);
            state = existingArr;
            

        },
        removeAllFromCart(state){
            state=[];
        }, 
        setCart(state, action){
            state=action.payload;
        }
        
    }
})




const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        cart: cartSlice.reducer, 
    }
})

export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;

export default store;