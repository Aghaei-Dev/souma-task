import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type State = {
  posts: {
    brief: string
    contentAttachmentId: null | number
    contentTypeId: number
    contentTypeTitle: string
    fileContent: string
    id: number
    isActive: boolean
    publishDate: string
    sourceTypeId: number
    sourceTypeTitle: string
    sourceUrl: null | string
    tages: []
    title: string
    visitCount: number
  }[]
  error: string
  loading: boolean
}
type Filter = {
  contentSearch: string
  tagList: string
  sourceType: string
  filterNumber: number
}
const initialFiltersState = {
  contentSearch: '',
  tagList: '',
  sourceType: '',
  filterNumber: 0,
}
const initialState = {
  post: [],
  error: '',
  isLoading: false,
  ...initialFiltersState,
}

export const getAllPosts = createAsyncThunk(
  'getAllPosts',
  async (payload: {}) => {
    const resp = await axios.post(
      'https://mehrapi.souma-p.ir/api/v1/Content/get-contents',
      payload
    )

    return resp.data.data
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState }
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.post = payload
      })
      .addCase(getAllPosts.rejected, (state, { error }) => {
        state.isLoading = false
        if (error.message) {
          state.error = error.message
        }
      })
  },
})

export default postSlice.reducer
export const getPost = (state: State) => state.postReducer.post
export const getLoading = (state: State) => state.postReducer.loading

export const { clearFilters, handleChange } = postSlice.actions
