import {createSlice, configureStore} from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        auth: false, 
        userDetails: {
            first: "",
            last: "",
            preferred: null, 
            mail: "", 
            pass: "", 
            bio: null, 
            tags: [], 
            pk: 0
        }
    }, 
    reducers: {
        login(state, action) {
            state.auth = true;
            state.userDetails = { ...action.payload };
        }, 
        logout(state){
            state.auth=false;
        }, 
        include(state, action){
            state.auth = true;
            const {key, value} = action.payload;
            state.userDetails={...state.userDetails, [key]: value }
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