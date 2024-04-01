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

// need to remove total from cartSlice, it is never used. 
const cartSlice = createSlice({
    name: 'cart', 
    initialState:{
        cartItems: [], 
        total: 0
    }, 
    reducers: {
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
        },
        removeAllFromCart(state){
            state.cartItems=[];
        }, 
        setCart(state, action){
            state.cartItems=action.payload;
        }
        
    }
})

const wishSlice = createSlice({
    name: 'wish', 
    initialState: [], 
    reducers: {
        // Meant to receive only the key for the item. 
        add2Wishlist(state, action){
            state.push(action.payload)
        }, 
        removeFromWishlist(state, action){
                const indexToRemove = state.indexOf(action.payload);
                if (indexToRemove !== -1) {
                    state.splice(indexToRemove, 1);
                }
        }, 
        setWishlist(state, action){
            state=action.payload;
        }
    }
})

const ordersSlice = createSlice({
    name: "orders", 
    initialState: [], 
    reducers: {
        createOrder(state, action){
            state.push(action.payload)
        }, 
        setOrders(state, action){
            state=action.payload;
        }

    }
})

const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        cart: cartSlice.reducer, 
        wish: wishSlice.reducer, 
        orders: ordersSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;
export const wishActions = wishSlice.actions;
export const ordersActions = ordersSlice.actions;
export default store;