
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CharactersList {
    page: number
    search: string
}

const initialState: CharactersList = {
    page: 1,
    search: ''
}

export const charactersListSlice = createSlice({
    name: 'charactersList',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.search = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload ?? state.page;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSearch, setPage } = charactersListSlice.actions

export default charactersListSlice.reducer

