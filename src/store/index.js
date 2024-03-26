import {createSlice, configureStore} from '@reduxjs/toolkit'

// initialState: {
//     auth: false, 
//     userDetails: {
//         first: "",
//         last: "", 
//         preferred: null, 
//         email: "", 
//         bio: null, 
//         tags: [],
//         pk: 1
//     }

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        auth: false, 
        userDetails: {
            first: "",
            preferred: null, 
            pk: 0
        }
    }, 
    reducers: {
        login(state, action){
            const {pk, first, preferred} = action.payload;
            console.log("--------", pk, first, preferred)
            state.auth=true;
            state.userDetails.pk = pk;
            state.userDetails.first = first;
            state.userDetails.preferred = preferred;
        }, 
        logout(state){
            state.auth=false;
        }
    }
});

const cartSlice = createSlice({
    name: 'cart', 
    initialState:{
        cartItems: [], 
        total: 0
    }, 
    reducers: {
        // increaseQty(state, action){
        //     state.cartItems.find((item)=>{
               
        //     })
        // },
        add2Cart(state, action){
            const existingItem = state.cartItems.find((item)=>item.id == action.payload);
            if(!existingItem){
                state.cartItems.push({id: action.payload, qty: 1})
            } else {
                existingItem.qty++;
            }
        }, 
        removeFromCart(state, action){
            const existingItem = state.cartItems.find((item)=>item.id == action.payload);
            if(existingItem){
                if(existingItem.qty <= 1 || !existingItem.qty){
                    state.cartItems = state.cartItems.filter((item)=>item.id!=action.payload)
                } else {
                    existingItem.qty--;
                }
                
            } 
        }
        
    }
})

const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        cart: cartSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;
export default store;