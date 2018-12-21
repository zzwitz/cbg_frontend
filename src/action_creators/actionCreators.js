import { getArt } from '../helper_functions/userFunctions.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { dispatch } from 'react-redux';
import { push } from 'connected-react-router'

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

    return fetch(`http://localhost:3005/browse/getRows/${n}`)
      .then(
        response => response.json(),
        error => {console.log('An error occurred.', error);
        throw('Error in getRows', error)}
      )
      .then(json =>
        {dispatch(fetchArtSuccess(json));
          console.log(json)
        }
      )
      .catch(err => {console.log(err);
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
