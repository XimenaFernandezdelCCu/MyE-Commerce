import {createSlice, configureStore} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        auth: false
    }, 
    reducers: {
        login(state){
            state.auth=true;
        }
    }
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export const authActions = authSlice.actions;
export default store;