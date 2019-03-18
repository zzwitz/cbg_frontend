const ADD_ART_PIECE_TO_FAVORITES = 'ADD_ART_PIECE_TO_FAVORITES'

var initialState ={
  artFavoriteList: new Array(),
  artFavoritesIdList: new Array()
}


export default function (state = initialState, action) {
  console.log('REDUCER FAVORITES CALLED ADDDING', action.payload, 'to', state.artFavoriteList)
  console.log('REDUCER FAVORITES CALLED type of fave list ', typeof state.artFavoriteList)
  switch (action.type) {
    case ADD_ART_PIECE_TO_FAVORITES:
      const found = state.artFavoritesIdList.some(id => id === action.payload.id);
      if (!found) {
        console.log('REDUCER FAVE ART PIECE ID  FOUND',found, ' with ', action.payload.id)
        var newArtFavoriteList = state.artFavoriteList.slice(0)
        var newArtFavoritesIdList = state.artFavoritesIdList.slice(0)
        console.log('REDUCER FAVORITES', typeof newArtFavoriteList)
        var newVars = {artFavoriteList: newArtFavoriteList, artFavoritesIdList: newArtFavoritesIdList}
        newArtFavoriteList.push(action.payload)
        newArtFavoritesIdList.push(action.payload.id)
    }
      return { ...state, ...newVars }
  }
  return state
 }
