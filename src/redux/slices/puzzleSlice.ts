import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

export interface PuzzleDetails {
    image: string;
    category: string;
    id: number;
    hint: string;
    difficulty: string;
    answer: string
}

interface PuzzleState {
    puzzle_details: PuzzleDetails[]
}

const initialState: PuzzleState = {
    puzzle_details: []
}

export const puzzleSlice = createSlice({
    name: 'puzzles',

    initialState,
    reducers: {
        setPuzzles: (state, action: PayloadAction<PuzzleDetails[]>) => {
            state.puzzle_details = action.payload
        }
    }
})

export const { setPuzzles } = puzzleSlice.actions
export const puzzles = (state: RootState) => state.puzzles.puzzle_details
export default puzzleSlice.reducer