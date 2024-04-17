import axios from 'axios'

export const getAllJobsThunk = async (_, _) => {
  //   const { page, search, searchStatus, searchType, sort } =
  //     thunkAPI.getState().allJobs

  let url = `
https://mehrapi.souma-p.ir/api/v1/Content/get-contents
`

  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (error) {}
}
