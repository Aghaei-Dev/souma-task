
# 📋 Souma Pardaz Task - with React And TS And RTK




## 🧩 Project Description

The **Souma Task** project is a advertising agency application developed using modern web technologies. It aims to provide users with an intuitive interface to Read News and Manage that efficiently.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion%20JS-DB7093?style=for-the-badge&logo=emotion&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Styling**: Styled Components
- **Library**: React
- **State Management**: Redux Toolkit

## 📁 Project Structure

```
souma-task/
├── public/             # Publicly accessible static files
├── src/
│   ├── assets/         # Static assets like styles or fonts or constants
│   ├── components/     # React components (Date Picker , UI Chunks, etc.)
│   ├── functions/      # Utility functions
│   ├── Hooks/          # Shared logic
│   ├── features/       # Contains Redux slices (reducers + actions) following the feature-based structure
├── index.html          # Entry Point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts
```
## 🧠 Redux Features Architecture

This project uses **Redux Toolkit** with a clean and modular architecture. Feature-based folders keep reducers, actions, and async logic encapsulated and scalable.

### 📁 Features Folder

```
src/
└── features/
    ├── post/
    │   ├── postSlice.ts   # Handles post-related state and actions
    └── global/
        ├── globalSlice.ts # Manages global UI state like modals
```

### 🔄 postSlice.ts Highlights

- Uses `createSlice` and `createAsyncThunk` for simplified Redux logic
- Fetches posts from an API via `axios`
- Manages filters and form inputs in Redux state
- Handles loading and error states via `extraReducers`

```ts
// Example async thunk to fetch all posts
export const getAllPosts = createAsyncThunk('getAllPosts', async (payload) => {
  const resp = await axios.post('https://mehrapi.souma-p.ir/api/v1/Content/get-contents', payload)
  return resp.data.data
})
```

```ts
// Example reducers
reducers: {
  clearFilters: (state) => ({ ...state, ...initialFiltersState }),
  handleChange: (state, { payload: { name, value } }) => {
    state[name] = value
  },
}
```

### 🔍 FilterForm.tsx

The `FilterForm` component connects directly to the Redux store to:

- Read and update filter values
- Dispatch `getAllPosts` thunk
- Reset filters and close modal via `clearFilters` and `closeModal`

```tsx
const handleSubmit = (e: ChangeEvent) => {
  e.preventDefault()
  dispatch(getAllPosts({ ...filters }))
  dispatch(clearFilters())
  dispatch(closeModal())
}
```

This tightly-coupled flow between UI and Redux ensures a single source of truth and smoother state management across the app.

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Aghaei-Dev/souma-task.git
   cd souma-task
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:

   Navigate to `http://localhost:3000` to view the application.
   
## 🙌 Contributing

Contributions are welcome! To contribute:

1. 🍴 Fork this repo
2. 🛠️ Create your feature branch: `git checkout -b feature/YourFeature`
3. ✅ Commit your changes: `git commit -m 'Add awesome feature'`
4. 📤 Push to the branch: `git push origin feature/YourFeature`
5. 🔁 Submit a pull request

## 🧪 Testing

Currently, there are no automated tests configured for this project. You can manually test the application by running it locally and interacting with the UI.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 🙌 Acknowledgments

- Thanks ME [Aghaei-Dev](https://github.com/Aghaei-Dev) for developing this project.
