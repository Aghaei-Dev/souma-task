import { createSlice } from '@reduxjs/toolkit'
export interface General {
  isModalOpen: boolean
}
const initialState: General = {
  isModalOpen: false,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    //     addUser: (state, action: PayloadAction<User>) => {
    //       state.push(action.payload)
    //     },
  },
})
