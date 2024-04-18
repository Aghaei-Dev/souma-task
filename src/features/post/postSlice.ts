import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type State = {
  posts: []
  error: 'string'
  loading: boolean
}
type Filter = {
  search: string
  searchHashTag: string
  reference: string
}
const initialFiltersState = {
  search: '',
  searchHashTag: '',
  reference: '',
}
const initialState = {
  post: [],
  error: '',
  loading: false,
  ...initialFiltersState,
}

export const getAllPosts = createAsyncThunk('getAllPosts', async () => {
  const resp = await axios.post(
    'https://mehrapi.souma-p.ir/api/v1/Content/get-contents',
    {
      isActive: true,
      includeFile: true,
    }
  )
  return resp.data
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default postSlice.reducer
export const getPost = (state: State) => state.postReducer.post
export const getLoading = (state: State) => state.postReducer.loading
