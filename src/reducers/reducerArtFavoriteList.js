// Creating string constants to declutter code
const ADD_ART_PIECE_TO_FAVORITES = 'ADD_ART_PIECE_TO_FAVORITES'

// Initial state is empty arrays for fave list
var initialState ={
  artFavoriteList: new Array(),
  artFavoritesIdList: new Array()
}


export default function (state = initialState, action) {
  switch (action.type) {

    // If add piece, see if it's already in favorites, if not then add
    case ADD_ART_PIECE_TO_FAVORITES:
      const found = state.artFavoritesIdList.some(id => id === action.payload.id);
      if (!found) {

        // Copying state so as not to return identical
        var newArtFavoriteList = state.artFavoriteList.slice(0)
        var newArtFavoritesIdList = state.artFavoritesIdList.slice(0)

        // creating new vars
        var newVars = {artFavoriteList: newArtFavoriteList, artFavoritesIdList: newArtFavoritesIdList}

        // Adding art piece to fave list and id to id list
        newArtFavoriteList.push(action.payload)
        newArtFavoritesIdList.push(action.payload.id)
    }
      return { ...state, ...newVars }
  }
  return state
 }
