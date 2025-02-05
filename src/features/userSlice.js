import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

export const userSlice = createSlice({
    name: 'users',
    initialState: data,
    reducers: {
        createUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUsers = state.find((user => user.id == id))
            if (existingUsers) {
                existingUsers.name = name,
                    existingUsers.email = email
            }
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        }
    },
})

export const { createUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer