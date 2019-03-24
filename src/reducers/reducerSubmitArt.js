// Creating string constants to declutter code
const SUBMIT_ART_STARTED = 'SUBMIT_ART_STARTED'
const SUBMIT_ART_FAILURE = 'SUBMIT_ART_FAILURE'
const SUBMIT_ART_SUCCESS = 'SUBMIT_ART_SUCCESS'

// Initial state — normal fetch status
const initialState = {
  uploadArtStarted: false,
  uploadArtSuccess: null,
  uploadArtFailure: null
}


export default function (state = initialState, action) {
  console.log('reducerSubmitArt ACTION TYPE', action.type)
  switch (action.type) {
    // If submit started, log and change state to started
    case SUBMIT_ART_STARTED:
      console.log('reducerSubmitArt payload', action.payload)
      var newVars =  {uploadArtStarted: true}
      return { ...state, ...newVars }
      // If successful change state to reflect
    case SUBMIT_ART_SUCCESS:
      console.log('SUBMIT_ART_SUCCESS payload')
      var newVars =  {uploadArtStarted: false, uploadArtSuccess: true}
      return { ...state, ...newVars }
      // If not successful change state to reflect
    case SUBMIT_ART_FAILURE:
      console.log('SUBMIT_ART_FAILURE payload')
      var newVars =  {uploadArtStarted: false, uploadArtFailure: true}
      return { ...state, ...newVars }
  }
  return state
 }
