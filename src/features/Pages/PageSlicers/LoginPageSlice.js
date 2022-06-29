import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "default", userEmail: 'example@example.com' }

const LoginPageSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        login: {
            reducer(state, action) {
                
                state.userName = action.payload.userName;
                state.userEmail = action.payload.userEmail; 
            },
            prepare(userName, userEmail) {
                return {
                    payload: {
                        userName,
                        userEmail
                    }
                }
            }
        }
    }
})

export const {login} = LoginPageSlice.actions
export default LoginPageSlice.reducer