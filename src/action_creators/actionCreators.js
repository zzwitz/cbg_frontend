import { getArt } from '../helper_functions/userFunctions.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { dispatch } from 'react-redux';
import { push } from 'connected-react-router'
var FormData = require('form-data');
var axios = require('axios');

console.log('start')
const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN'
const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS'
const FETCH_ART_FAILURE = 'FETCH_ART_FAILURE'

const FETCH_ARTIST_OBJ_BEGIN = 'FETCH_ARTIST_OBJ_BEGIN'
const FETCH_ARTIST_OBJ_SUCCESS = 'FETCH_ARTIST_OBJ_SUCCESS'
const FETCH_ARTIST_OBJ_FAILURE = 'FETCH_ARTIST_OBJ_FAILURE'

const PICK_USER_TYPE = 'PICK_USER_TYPE'

export function pickUserType(userType) {
  console.log('pickUserType Called')
  return (dispatch, getState) => {
   return dispatch({ type: PICK_USER_TYPE, payload : userType });
}}

export function linkTo(link) {
  console.log('LINKTO CALLED WITH', link)
  return(dispatch, getState) => {
    window.location.assign(link);
    return dispatch(push(link))
  }
}


export function fetchArtBegin() {
  // console.log('fetchArtBegin Called'
  return (dispatch, getState) => {
   return dispatch({ type: FETCH_ART_BEGIN });
}}
  // return {
  //   type: FETCH_ART_BEGIN,
  //   payload: {}
  // }
// }

export function fetchArtSuccess(art) {
  // console.log('fetchArtSuccess Called')
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ART_SUCCESS,
       payload: art
     }
   );
}}


export function fetchArtFailure(error) {
  // console.log('fetchArtFailure Called')
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ART_FAILURE
     }
   );
}}

export function fetchArt(n) {
  return function(dispatch) {
    dispatch(fetchArtBegin())
    console.log('GET ROWS FETCH CALLED WITH N = ', n)


    return fetch(`http://localhost:3005/browse/getRows/${n}`)
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      .then(json =>
        {dispatch(fetchArtSuccess(json));
          console.log('JSON FOR FETCH ART', json)
        }
      )
      .catch(err => {console.log(err);
        throw('Could not fetch Art')})
  }
}

const FETCH_ART_BY_TAG_BEGIN = 'FETCH_ART_BY_TAG_BEGIN'
const FETCH_ART_BY_TAG_SUCCESS = 'FETCH_ART_BY_TAG_SUCCESS'
const FETCH_ART_BY_TAG_FAILURE = 'FETCH_ART_BY_TAG_FAILURE'

export function fetchArtByTag(n, artTagText) {
  return function(dispatch) {
    var artTagTextCap = artTagText.charAt(0).toUpperCase() + artTagText.slice(1,)


    dispatch({type: FETCH_ART_BY_TAG_BEGIN, payload: {tagText: artTagTextCap}})
    console.log('GET ROWS FETCH CALLED WITH N = ', n, ' text = ', artTagTextCap)


    return fetch(`http://localhost:3005/browse/getRowsByTag/${artTagTextCap}/${n}`)
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      .then(json =>
        {dispatch({type: FETCH_ART_BY_TAG_SUCCESS, payload: {sectionObj: json, tagId: 1}});
          console.log('JSON FOR FETCH ART', json)
        }
      )
      .catch(err => {console.log(err);
        dispatch({type: FETCH_ART_BY_TAG_FAILURE, payload: err})
        throw('Could not fetch Art')})
  }
}


const CLOSE_MODAL = 'CLOSE_MODAL'
const VIEW_EMAIL = 'VIEW_EMAIL'
const OPEN_MODAL = 'OPEN_MODAL'

export function openModal(artObj) {
  // console.log('select art action creator action')
  return (dispatch, getState) => {
   return dispatch(
     { type: OPEN_MODAL,
       payload: {artObj}
     }
   );
}}

export function closeModal() {
  // console.log('closemodal action');
  return (dispatch, getState) => {
   return dispatch(
     { type: CLOSE_MODAL,
     }
   );
}}


export function viewEmail() {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: VIEW_EMAIL
     }
   );
}}

const FETCH_ARTIST_ART_BEGIN = 'FETCH_ARTIST_ART_BEGIN'
const FETCH_ARTIST_ART_SUCCESS = 'FETCH_ARTIST_ART_SUCCESS'
const FETCH_ARTIST_ART_FAILURE = 'FETCH_ARTIST_ART_FAILURE'


export function fetchArtistArtBegin() {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_BEGIN
     }
   );
}}

export function fetchArtistArtSuccess(ArtistArt) {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_SUCCESS,
       payload: ArtistArt
     }
   );
}}


export function fetchArtistArtFailure() {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_ART_FAILURE
     }
   );
}}

export function fetchArtistObjBegin() {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_BEGIN
     }
   );
}}

export function fetchArtistObjSuccess(ArtistObj) {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_SUCCESS,
       payload: ArtistObj
     }
   );
}}


export function fetchArtistObjFailure() {
  // console.log('viewEmail action');
  return (dispatch, getState) => {
   return dispatch(
     { type: FETCH_ARTIST_OBJ_FAILURE
     }
   );
}}

export function fetchArtistPage(artistId, n) {
  return function(dispatch) {
    dispatch(fetchArtistObjBegin())

    return fetch(`http://localhost:3005/artist/${artistId}`)
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      .then(response_obj =>
        {dispatch(fetchArtistObjSuccess(response_obj));
          return(response_obj)
          console.log(response_obj)
        }
      )
      .then(
        dispatch(fetchArtistArtBegin())
      )
      .then(
        response => fetch(`http://localhost:3005/artist/${artistId}/art`),
        error => {console.log('An error occurred.', error);
        throw('Error in getArtistsArt', error)}
      )
      .then(
        response => response.json(),
      )
      .then(response_obj =>
        {dispatch(fetchArtistArtSuccess(response_obj));
          return(response_obj)
          console.log(response_obj)
        }
      )
      .catch(err => {console.log(err);
        console.log('Could not fatch artist page from API')
        dispatch(fetchArtistObjFailure())
        dispatch(fetchArtistArtFailure())});
  }
}

const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL'
const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL'

export function openArtUploadModal() {
  return (dispatch, getState) => {
   return dispatch({ type: OPEN_UPLOAD_MODAL });
}}

export function closeArtUploadModal() {
  console.log('closeArtUploadModal Called')
  return (dispatch, getState) => {
   return dispatch({ type: CLOSE_UPLOAD_MODAL });
}}

const SUBMIT_ART_STARTED = 'SUBMIT_ART_STARTED'
const SUBMIT_ART_FAILURE = 'SUBMIT_ART_FAILURE'
const SUBMIT_ART_SUCCESS = 'SUBMIT_ART_SUCCESS'

export function submitArt(artFormValues, user) {
  console.log('actionCreatorSubmitArt', artFormValues)
  console.log('actionCreatorSubmitArt user', user)

  return (dispatch, getState) => {
   dispatch({ type: SUBMIT_ART_STARTED, payload: artFormValues})
   dispatch({ type: CLOSE_UPLOAD_MODAL})

   var formUserData  = new FormData();
   for(var name in artFormValues) {
     formUserData.append(name, artFormValues[name]);
   }

   for(var userInfo in user) {
     formUserData.append(userInfo, user[userInfo]);
   }

   console.log('FINAL VALUES TO SUBMIT',formUserData)

    fetch("http://localhost:3005/art/createArt", {
      headers: {
        'Accept': 'application/json',
      },
      method: 'POST',
      body: formUserData})
    .then(function(response) {
      console.log(response)
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          dispatch({ type: SUBMIT_ART_FAILURE});
          throw('Could not upload art', response.error)}
      return response;})
    .then(function(response) {
      console.log(response);
      dispatch({ type: SUBMIT_ART_SUCCESS});
      dispatch(activateFlash('Art Upload Successful'))
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
      dispatch({ type: SUBMIT_ART_FAILURE});
      dispatch(activateFlash('Art Upload Not Successful'))
    });
}}

const ACTIVATE_FLASH = 'ACTIVATE_FLASH'
const DEACTIVATE_FLASH = 'DEACTIVATE_FLASH'

// export function activateFlash(message) {
//   console.log('activate flash')
//   return function(dispatch) {
//     return dispatch({type: ACTIVATE_FLASH});
//     // setTimeout(function(){dispatch({ type: DEACTIVATE_FLASH});},5000);
//   }
// }

export function activateFlash(flashMessage) {
  console.log('activate flash action creator')
  console.log('activate flash PAYLOAD', flashMessage);
  return (dispatch, getState) => {
   dispatch({ type: ACTIVATE_FLASH, payload: flashMessage});
   setTimeout(function(){dispatch({ type: DEACTIVATE_FLASH});},5000);
}}

const ADD_ART_PIECE_TO_FAVORITES = 'ADD_ART_PIECE_TO_FAVORITES'

export function addArtPieceToFavoriteList(artPiece) {
  console.log('added art to art favorite list action called with', artPiece);
  return (dispatch, getState) => {
   dispatch({ type: ADD_ART_PIECE_TO_FAVORITES, payload: artPiece});
}}
