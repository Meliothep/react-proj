import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState: {
		likedpokemons: new Array<number>()
	},
	reducers: {
		likeCard: (state, { payload }: PayloadAction<number>) => {
			const likedCardId: number = payload;
            if(!state.likedpokemons.includes(likedCardId)){
                state.likedpokemons.push(likedCardId)
                
            }
		},
		unlikeCard: (state, { payload }: PayloadAction<number>) => {
            const index = state.likedpokemons.indexOf(payload);
            state.likedpokemons.splice(index, 1);
		}
	}
});

export const { likeCard, unlikeCard } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;