import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {
        _id : "",
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        image : "",

    }
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        loginRedux : (state, action)=> {
            state._id = action.payload.data._id
            state.firstName = action.payload.data.firstName
            state.lastName = action.payload.data.lastName
            state.email = action.payload.data.email
            state.password = action.payload.data.password
            state.image = action.payload.data.image
        },
        logoutRedux : (state, action) => {
            state._id = ""
            state.firstName = ""
            state.lastName = ""
            state.email = ""
            state.password = ""
            state.image = ""
        }
    }
})

export const {loginRedux, logoutRedux} = userSlice.actions
export default userSlice.reducer