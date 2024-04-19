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
    closeModal: (state) => {
      state.isModalOpen = false
    },
    openModal: (state) => {
      state.isModalOpen = true
    },
  },
})

export const { closeModal, openModal } = globalSlice.actions

export default globalSlice.reducer
