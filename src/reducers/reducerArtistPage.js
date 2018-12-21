const FETCH_ARTIST_ART_BEGIN = 'FETCH_ARTIST_ART_BEGIN'
const FETCH_ARTIST_ART_SUCCESS = 'FETCH_ARTIST_ART_SUCCESS'
const FETCH_ARTIST_ART_FAILURE = 'FETCH_ARTIST_ART_FAILURE'

const FETCH_ARTIST_OBJ_BEGIN = 'FETCH_ARTIST_OBJ_BEGIN'
const FETCH_ARTIST_OBJ_SUCCESS = 'FETCH_ARTIST_OBJ_SUCCESS'
const FETCH_ARTIST_OBJ_FAILURE = 'FETCH_ARTIST_OBJ_FAILURE'

const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL'
const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL'

const initialState = {
  loadingArt: false,
  loadingArtError: false,
  artList: [],

  loadingArtistObj: false,
  loadingArtistObjError: false,
  artistObj: null,
  uploadModalDisplay: 'none'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTIST_OBJ_BEGIN:
      var newVars =  {loadingArtistObj: true}
      return { ...state, ...newVars }
    case FETCH_ARTIST_OBJ_SUCCESS:
      var newVars =  {artistObj: action.payload, loadingArtistObj: false}
      return { ...state, ...newVars }
    case FETCH_ARTIST_OBJ_FAILURE:
      var newVars =  {loadingArtistObj:false, loadingArtistObjError: true}
      return { ...state, ...newVars }
    case FETCH_ARTIST_ART_BEGIN:
      var newVars =   {loadingArt:true}
      return { ...state, ...newVars }
    case FETCH_ARTIST_ART_SUCCESS:
      var newVars =  {artList: action.payload, loadingArt: false}
      return { ...state, ...newVars }
    case FETCH_ARTIST_ART_FAILURE:
      var newVars =  {loadingArt:false, loadingArtError: true}
      return { ...state, ...newVars }
    case OPEN_UPLOAD_MODAL:
      var newVars =  {uploadModalDisplay:''}
      return { ...state, ...newVars }
    case CLOSE_UPLOAD_MODAL:
      var newVars =  {uploadModalDisplay:'none'}
      return { ...state, ...newVars }
  }
  return state
 }
