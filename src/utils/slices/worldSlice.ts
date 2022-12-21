import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { World, WorldBase } from "../../interfaces/IWorld";

export interface WorldState {
	openWorld: World;
	worlds: Array<WorldBase>;
}

const initialState: WorldState = {
	openWorld: {
		name: "",
		religions: [],
		classes: [],
		races: [],
		regions: [],
		historicalEvents: [],
		wikiCategories: [],
		description: "",
		characters: [],
	},
	worlds: [],
};

export const worldSlice = createSlice({
	name: "world",
	initialState,
	reducers: {
		setOpenWorld: (state, action: PayloadAction<World>) => {
			state.openWorld = action.payload;
		},
		updateWorlds: (state, action: PayloadAction<Array<World>>) => {
			state.worlds = action.payload;
		},
	},
});

export const { setOpenWorld, updateWorlds } = worldSlice.actions;

export default worldSlice.reducer;
