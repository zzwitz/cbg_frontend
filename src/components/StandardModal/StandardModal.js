import React from 'react';
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'
import {bindActionCreators} from 'redux'
import {dispatch} from 'react-redux';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchArtistPage, openModal,closeModal} from '../../action_creators/actionCreators.js'
import './StandardModal.css'

export default class StandardModal extends React.Component{

  render() {
    return(
      <div class = 'ModalScreen' style = {{display: this.props.display}}>

        <div class = 'ModalContainer'>
        <div onClick = {() => this.props.onCloseClick()} class = "ModalClose"> &times; </div>
          {this.props.innerObj}
        </div>

      </div>
    )
  }
}
