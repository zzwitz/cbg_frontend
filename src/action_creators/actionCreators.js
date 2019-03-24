import { getArt } from '../helper_functions/userFunctions.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { dispatch } from 'react-redux';
import { push } from 'connected-react-router'
var FormData = require('form-data');
var axios = require('axios');

console.log('start')

const api_loc  = 'http://localhost:3005/'

// Creating string constants to declutter code
const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN'
const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS'
const FETCH_ART_FAILURE = 'FETCH_ART_FAILURE'

const PICK_USER_TYPE = 'PICK_USER_TYPE'

// Pick user type action creator for registration page
export function pickUserType(userType) {
  console.log('pickUserType Called')
  return (dispatch, getState) => {
   return dispatch({ type: PICK_USER_TYPE, payload : userType });
}}

//Link to action creator for links from art cards
export function linkTo(link) {
  console.log('LINKTO CALLED WITH', link)
  return(dispatch, getState) => {
    window.location.assign(link);
    return dispatch(push(link))
  }
}

//Fetch art begin when browse page loads
export function fetchArtBegin() {
  return (dispatch, getState) => {
   return dispatch({ type: FETCH_ART_BEGIN });
}}

//Fetch art success upon art receival
export function fetchArtSuccess(art) {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ART_SUCCESS,
       payload: art
     }
   );
}}

// Fetch art failure if art request is not successful
export function fetchArtFailure(error) {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ART_FAILURE
     }
   );
}}

// Full fetch art function.
// // Dispatches fetch start, calls API, and Dispatches
// // success or failure dependent on response
export function fetchArt(n) {
  return function(dispatch) {
    dispatch(fetchArtBegin())
    console.log('GET ROWS FETCH CALLED WITH N = ', n)

    // Calls API for getRows
    return fetch(api_loc + `browse/getRows/${n}`)
      .then(function(response) {
        console.log(response)
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            dispatch({ type: FETCH_ART_FAILURE});
            throw('Could not upload art', response.error)}
        return response;})
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      // Dispatch success and art json as payload if successful
      .then(json =>
        {dispatch(fetchArtSuccess(json));
          console.log('JSON FOR FETCH ART', json)
        }
      )
      // Dispatch error if not
      .catch(err => {console.log(err);
        throw('Could not fetch Art');
        dispatch(fetchArtFailure(err))}
      )
  }
}

// Creating string constants to declutter code
const FETCH_ART_BY_TAG_BEGIN = 'FETCH_ART_BY_TAG_BEGIN'
const FETCH_ART_BY_TAG_SUCCESS = 'FETCH_ART_BY_TAG_SUCCESS'
const FETCH_ART_BY_TAG_FAILURE = 'FETCH_ART_BY_TAG_FAILURE'


export function fetchArtByTag(n, artTagText) {
  return function(dispatch) {

    // Sets formatting for tag to match db
    // [TO CHANGE] CHANGE ALL TAG TEXTS TO LOWERCASE, update this to all lowercase
    var artTagTextCap = artTagText.charAt(0).toUpperCase() + artTagText.slice(1,)

    // Dispatch begin with tagtext to start loading page
    dispatch({type: FETCH_ART_BY_TAG_BEGIN, payload: {tagText: artTagTextCap}})
    console.log('GET ROWS FETCH CALLED WITH N = ', n, ' text = ', artTagTextCap)

    // Calls api to get art by tag
    return fetch(api_loc + `browse/getRowsByTag/${artTagTextCap}/${n}`)
      .then(function(response) {
        console.log(response)
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            dispatch({ type: FETCH_ART_BY_TAG_FAILURE});
            throw('Could not fetch art by tag', response.error)}
        return response;})
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      // Dispatch success and art json as payload if successful
      .then(json =>
        {dispatch({type: FETCH_ART_BY_TAG_SUCCESS, payload: {sectionObj: json, tagId: 1}});
          console.log('JSON FOR FETCH ART', json)
        }
      )
      // Dispatch failure if not
      .catch(err => {console.log(err);
        dispatch({type: FETCH_ART_BY_TAG_FAILURE, payload: err})
        throw('Could not fetch Art')})
  }
}

// Creating string constants to declutter code
const CLOSE_MODAL = 'CLOSE_MODAL'
const VIEW_EMAIL = 'VIEW_EMAIL'
const OPEN_MODAL = 'OPEN_MODAL'

// Opens art modal from art card
export function openModal(artObj) {
  return (dispatch, getState) => {
   return dispatch(
     // Payload = art object from art rows
     { type: OPEN_MODAL,
       payload: {artObj}
     }
   );
}}

// Closes art modal
export function closeModal() {
  return (dispatch, getState) => {
   return dispatch(
     { type: CLOSE_MODAL,
     }
   );
}}

// Unhides email on art modal, changes CSS displays
export function viewEmail() {
  return (dispatch, getState) => {
   return dispatch(
     { type: VIEW_EMAIL
     }
   );
}}

// Creating string constants to declutter code
const FETCH_ARTIST_ART_BEGIN = 'FETCH_ARTIST_ART_BEGIN'
const FETCH_ARTIST_ART_SUCCESS = 'FETCH_ARTIST_ART_SUCCESS'
const FETCH_ARTIST_ART_FAILURE = 'FETCH_ARTIST_ART_FAILURE'

const FETCH_ARTIST_OBJ_BEGIN = 'FETCH_ARTIST_OBJ_BEGIN'
const FETCH_ARTIST_OBJ_SUCCESS = 'FETCH_ARTIST_OBJ_SUCCESS'
const FETCH_ARTIST_OBJ_FAILURE = 'FETCH_ARTIST_OBJ_FAILURE'

// Begins fetch of art from artist (for artist page )
export function fetchArtistArtBegin() {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_BEGIN
     }
   );
}}

// Confirms success of art fetch, sends payload of art to store
export function fetchArtistArtSuccess(ArtistArt) {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_SUCCESS,
       payload: ArtistArt
     }
   );
}}

// Upon no success updates fetch art to failure
export function fetchArtistArtFailure() {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_FAILURE
     }
   );
}}

// Fetches the artist information — this action signifies begin of fetch
export function fetchArtistObjBegin() {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_BEGIN
     }
   );
}}

// Fetches the artist information — this action signifies success begin of fetch
// // Sends artist info to store
export function fetchArtistObjSuccess(ArtistObj) {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_SUCCESS,
       payload: ArtistObj
     }
   );
}}

// Upon no success updates fetch artist object to failure
export function fetchArtistObjFailure() {
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_FAILURE
     }
   );
}}

// Fetch artist page action creator which starts fetch for artist info and art
// // Then fetches artist info then artist art
// // [TO CHANGE] decouple these two fetches to allow them to be correspondent +
// // not have same errors
export function fetchArtistPage(artistId, n) {
  return function(dispatch) {

    // Starts fetch for both pieces
    dispatch(fetchArtistObjBegin())
    dispatch(fetchArtistArtBegin())

    // Calls API for artists art with artist ID
    return fetch(api_loc + `artist/${artistId}`)
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      // Dispatch success upon receival
      .then(response_obj =>
        {dispatch(fetchArtistObjSuccess(response_obj));
          return(response_obj)
          console.log(response_obj)
        }
      )
      // Then call api for artist's art
      .then(
        response => fetch(api_loc + `artist/${artistId}/art`),
        error => {console.log('An error occurred.', error);
        throw('Error in getArtistsArt', error)}
      )
      // Convert to JSON
      .then(
        response => response.json(),
      )
      // Dispatch success
      .then(response_obj =>
        {dispatch(fetchArtistArtSuccess(response_obj));
          return(response_obj)
          console.log(response_obj)
        }
      )
      // Dispatch failure if either did not succeed
      .catch(err => {console.log(err);
        console.log('Could not fatch artist page from API')
        dispatch(fetchArtistObjFailure())
        dispatch(fetchArtistArtFailure())});
  }
}

// Creating string constants to declutter code
const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL'
const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL'

// Opens modal for art upload
export function openArtUploadModal() {
  return (dispatch, getState) => {
   return dispatch({ type: OPEN_UPLOAD_MODAL });
}}

// Closes modal for art upload
export function closeArtUploadModal() {
  console.log('closeArtUploadModal Called')
  return (dispatch, getState) => {
   return dispatch({ type: CLOSE_UPLOAD_MODAL });
}}

// Creating string constants to declutter code
const SUBMIT_ART_STARTED = 'SUBMIT_ART_STARTED'
const SUBMIT_ART_FAILURE = 'SUBMIT_ART_FAILURE'
const SUBMIT_ART_SUCCESS = 'SUBMIT_ART_SUCCESS'

// Function to handle submitting a new art piece from an artists
export function submitArt(artFormValues, user) {
  console.log('actionCreatorSubmitArt', artFormValues)
  console.log('actionCreatorSubmitArt user', user)

  return (dispatch, getState) => {
    // Closes upload modal and starts submission
   dispatch({ type: SUBMIT_ART_STARTED, payload: artFormValues})
   dispatch({ type: CLOSE_UPLOAD_MODAL})

   // Create form data object to add form info and user info
   // // FormData is data type that allows transfer easily through HTTP multipart
   var formUserData  = new FormData();
   for(var name in artFormValues) {
     formUserData.append(name, artFormValues[name]);
   }

   // Adds user data (to have artist id, etc )
   for(var userInfo in user) {
     formUserData.append(userInfo, user[userInfo]);
   }

   console.log('FINAL VALUES TO SUBMIT',formUserData)

   // Calls API to upload art
    fetch("http://localhost:3005/art/createArt", {
      headers: {
        'Accept': 'application/json',
      },
      method: 'POST',
      body: formUserData})
      // Checking if response was invalid
    .then(function(response) {
      console.log(response)
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          dispatch({ type: SUBMIT_ART_FAILURE});
          throw('Could not upload art', response.error)}
      return response;})
      // If valid, log response, activate success, and flash success
    .then(function(response) {
      console.log(response);
      dispatch({ type: SUBMIT_ART_SUCCESS});
      dispatch(activateFlash('Art Upload Successful'))
    })
    // If not success, activate failure and flash failure
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
      dispatch({ type: SUBMIT_ART_FAILURE});
      dispatch(activateFlash('Art Upload Not Successful'))
    });
}}

// Creating string constants to declutter code
const ACTIVATE_FLASH = 'ACTIVATE_FLASH'
const DEACTIVATE_FLASH = 'DEACTIVATE_FLASH'

// Action creator for activating failure
export function activateFlash(flashMessage) {
  console.log('activate flash action creator')
  console.log('activate flash PAYLOAD', flashMessage);

  //Activates flash with messages, waits 5 seconds then dispatches deactivate
  // [TO CHANGE] this may result in problems if multiple flashes called within 5 sec — consider other builds
  return (dispatch, getState) => {
   dispatch({ type: ACTIVATE_FLASH, payload: flashMessage});
   setTimeout(function(){dispatch({ type: DEACTIVATE_FLASH});},5000);
}}

// Creating string constants to declutter code
const ADD_ART_PIECE_TO_FAVORITES = 'ADD_ART_PIECE_TO_FAVORITES'

// Adds a piece of art to favorite list
export function addArtPieceToFavoriteList(artPiece) {
  console.log('added art to art favorite list action called with', artPiece);

  // Dispatches with art piece obj
  return (dispatch, getState) => {
   dispatch({ type: ADD_ART_PIECE_TO_FAVORITES, payload: artPiece});
}}
