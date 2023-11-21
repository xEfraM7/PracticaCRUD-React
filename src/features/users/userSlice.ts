import { createSlice } from "@reduxjs/toolkit";
import { usersProps } from "../../Interfaces/interfaces";

const initialState: usersProps[] = [
  {
    id: 1,
    name: "efrain cabrera",
    email: "efrain@gmail.com",
  },
  {
    id: 2,
    name: "efrain jose",
    email: "efraiwewewn@gmail.com",
  },
  {
    id: 3,
    name: "efrain cabrewewewera",
    email: "efrainewewew@gmail.com",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const userExists = state.find((user) => user.id === action.payload.id);
      if (userExists) {
        (userExists.name = action.payload.name),
          (userExists.email = action.payload.email);
      }
    },
    deleteUser:(state,action)=>{
        const {id} = action.payload;
        const userExists = state.find((user) => user.id === id);
        if (userExists) {
            return state.filter(user=> user.id !== id)
        }     
    }
  },
});

export const { deleteUser } = userSlice.actions;
export const { editUser } = userSlice.actions;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
