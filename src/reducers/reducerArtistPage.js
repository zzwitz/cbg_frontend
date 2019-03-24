import {getFakeLoadingArt} from './reducerArt'

// Creating string constants to declutter code
const FETCH_ARTIST_ART_BEGIN = 'FETCH_ARTIST_ART_BEGIN'
const FETCH_ARTIST_ART_SUCCESS = 'FETCH_ARTIST_ART_SUCCESS'
const FETCH_ARTIST_ART_FAILURE = 'FETCH_ARTIST_ART_FAILURE'

const FETCH_ARTIST_OBJ_BEGIN = 'FETCH_ARTIST_OBJ_BEGIN'
const FETCH_ARTIST_OBJ_SUCCESS = 'FETCH_ARTIST_OBJ_SUCCESS'
const FETCH_ARTIST_OBJ_FAILURE = 'FETCH_ARTIST_OBJ_FAILURE'

const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL'
const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL'


// Initial state including artlist from art reducer with loading cards
const initialState = {
  loadingArt: false,
  loadingArtError: false,
  artList: getFakeLoadingArt(),

  loadingArtistObj: false,
  loadingArtistObjError: false,
  artistObj: null,
  uploadModalDisplay: 'none'
}

export default function (state = initialState, action) {
  switch (action.type) {
    // Begin loading

    case FETCH_ARTIST_OBJ_BEGIN:
      var newVars =  {loadingArtistObj: true, artistObj: null}
      return { ...state, ...newVars }
    case FETCH_ARTIST_OBJ_SUCCESS:
    // Loading successful, update profile
      var newVars =  {artistObj: action.payload, loadingArtistObj: false}
      return { ...state, ...newVars }
      // Loading not successful
    case FETCH_ARTIST_OBJ_FAILURE:
      var newVars =  {loadingArtistObj:false, loadingArtistObjError: true}
      return { ...state, ...newVars }
      // Begin loading
    case FETCH_ARTIST_ART_BEGIN:
      var newVars =   {loadingArt:true, artList: getFakeLoadingArt()}
      return { ...state, ...newVars }
    case FETCH_ARTIST_ART_SUCCESS:
    // Loading successful, update art
      var newVars =  {artList: action.payload, loadingArt: false}
      return { ...state, ...newVars }
      // Loading not successful
    case FETCH_ARTIST_ART_FAILURE:
      var newVars =  {loadingArt:false, loadingArtError: true}
      return { ...state, ...newVars }
      // Open modal to upload art (uploadModalDisplay is css display prop) 
    case OPEN_UPLOAD_MODAL:
      var newVars =  {uploadModalDisplay:''}
      return { ...state, ...newVars }
      // Close modal
    case CLOSE_UPLOAD_MODAL:
      var newVars =  {uploadModalDisplay:'none'}
      return { ...state, ...newVars }
  }
  return state
 }
