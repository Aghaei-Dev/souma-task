import { createSlice } from '@reduxjs/toolkit'

export interface GlobalState {
  isModalOpen: boolean
}

const initialState: GlobalState = {
  isModalOpen: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    },
  },
})

export const { toggleModal } = globalSlice.actions

export default globalSlice.reducer
