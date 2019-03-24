import {getFakeLoadingArt} from './reducerArt'


// Creating string constants to declutter code
const FETCH_ART_BY_TAG_BEGIN = 'FETCH_ART_BY_TAG_BEGIN'
const FETCH_ART_BY_TAG_SUCCESS = 'FETCH_ART_BY_TAG_SUCCESS'
const FETCH_ART_BY_TAG_FAILURE = 'FETCH_ART_BY_TAG_FAILURE'


// fetching = state of fetching art, tag text = category title, tagid = id of category,
// // tagArtlist = art list for browse board, error bool / error text for unsuccessful fetch
var initialState = {
  fetchingBool: false,
  tagText: null,
  tagId: null,
  tagArtList:
  { sectionObj:getFakeLoadingArt() },
  errorBool: false,
  errorText: null
}



export default function (state = initialState, action) {
  switch (action.type) {
    // On begin, update fetching with true, add tagtext (from route) and add fake taglist
    case FETCH_ART_BY_TAG_BEGIN:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_BEGIN', action)
      var newVars =  {fetchingBool: true, tagText: action.payload.tagText, tagArtList: {sectionObj: [{rowColor:  "inherit", title: '', artList: getFakeLoadingArt()}]}}
      return { ...state, ...newVars }
      // If successful, update state with art and id
    case FETCH_ART_BY_TAG_SUCCESS:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_SUCCESS', action)
      var newVars =  {fetchingBool: false, tagArtList: {sectionObj: action.payload.sectionObj}, tagId: action.payload.tagId}
      return { ...state, ...newVars }
      // If failure, update with error info
    case FETCH_ART_BY_TAG_FAILURE:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_FAILURE', action)
      var newVars =  {fetchingBool: false, errorBool: true, errorText: action.payload}
      return { ...initialState, ...newVars }
  }
  return state
 }
