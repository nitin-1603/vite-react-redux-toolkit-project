import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        removeAllUsers(state, action) {
            //     // state.splice([]);
            //     // state.splice(action.payload); 
            //     //(all three methods remove all the users data from the state (array))
            return [];
        }
    },
    extraReducers(builder) {
        builder.addCase(userSlice.actions.removeAllUsers, () => {
            return [];
        })
    }
    
    // now we can use deleteUser instead of removeAllUsers
    // extraReducers(builder) {
    //     builder.addCase(deleteUsers, () => {
    //         return [];
    //     })
    // }
})
export default userSlice.reducer;
export const { addUser, removeUser, removeAllUsers } = userSlice.actions;
// export const { addUser, removeUser} = userSlice.actions;