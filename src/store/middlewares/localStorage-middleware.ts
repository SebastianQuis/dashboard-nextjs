import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit"

export const localStorageMiddleware = ( state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action); // realizar la accion
        // console.log(state.getState() as RootState);
        // console.log(action) 

        if (action.type.includes('toggleFavorite')) {
            const { pokemons } = state.getState();
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
            return;
        }
    }
}