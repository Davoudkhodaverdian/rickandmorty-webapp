import { configureStore } from '@reduxjs/toolkit'
import charactersListReducer from './slices/charactersList';

export const store = configureStore({
  reducer: {
    charactersList: charactersListReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch