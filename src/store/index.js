import {createSlice, configureStore} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        auth: false
    }, 
    reducers: {
        log(state){
            state.auth=!state.auth;
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