import {createSlice, configureStore} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        auth: false
    }, 
    reducers: {
        login(state){
            state.auth=true;
        }, 
        logout(state){
            state.auth=false;
        }
    }
});

const cartSlice = createSlice({
    name: 'cart', 
    initialState:{
        cartItems: ["hi"], 
        total: 0
    }, 
    reducers: {
        add2Cart(state){
            // state.cart.cartItems.push(itemKey);
            console.log(state.cartItems);
        }, 
        removeFromCart(state, itemKey){
            state.cart.cartItems = state.cart.cartItems.filter((item)=>{
                return (item.itemKey!=itemKey);
            })
        },
        increaseQty(state, itemKey){
            state.cart.cartItems.find((item)=>{
                return item.itemKey === itemKey
            }).qty = 10;
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