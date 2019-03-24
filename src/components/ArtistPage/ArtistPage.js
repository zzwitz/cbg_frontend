import React from 'react';
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'
import {bindActionCreators} from 'redux'
import {dispatch} from 'react-redux';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchArtistPage, openModal,closeModal, closeArtUploadModal, openArtUploadModal, submitArt, activateFlash} from '../../action_creators/actionCreators.js'
import './ArtistPage.css'
import StandardModal from '../StandardModal/StandardModal'
import StandardForm from '../StandardForm/StandardForm'

class UploadArtForm extends React.Component {
  inputList = [
    {
      inputName: 'artpiece_title',
      inputPlaceholder: 'Title of Piece',
      inputId: '__',
      inputType: 'text',
    },
    {
      inputName: 'medium',
      inputPlaceholder: 'Medium',
      inputId: '__',
      inputType: 'text',
    },
    {
      inputName: 'width',
      inputPlaceholder: 'Width (in)',
      inputId: '__',
      inputType: 'text',
    },
    {
      inputName: 'height',
      inputPlaceholder: 'Height (in)',
      inputId: '__',
      inputType: 'text',
    },
    {
      inputName: 'tags',
      inputPlaceholder: 'Tags (seperate w/ commas)',
      inputId: '__',
      inputType: 'text',
    }
  ]


  render() {
    console.log('ARTIST_PAGE_USER_INFO', this.props.user)
    return(
    <StandardForm file = {true} formId = '1' onSubmit={values => this.props.submitArt(values, this.props.user)} header = {'Upload Art'} inputList = {this.inputList}/>
  )};
}


class UploadArtModal extends React.Component {

  render() {
    return(
      <div class = 'FormModal'>
        <StandardModal onCloseClick = {this.props.onCloseClick} display = {this.props.display} innerObj = {<UploadArtForm user = {this.props.user} submitArt = {this.props.submitArt}/>}/>
      </div>
    )
  }
}

class ArtistHeader extends React.Component {

  renderUploadButton() {
    if (this.props.artistPage.artistObj.id === this.props.user.currentUserId) {
      return(<div onClick = {() => {
        console.log('openartuploadmodal');
        this.props.onUploadclick()
      }}> <input class = 'standard-button-secondary' type = 'submit' value = ' Upload New Art '/> </div>)
    }
    return(<p></p>)
  }

  renderUserInfo() {
  if (this.props.artistPage.artistObj) {
    return (
      <div>
        <div class = 'row'>
          <div class = 'col-3' >
            artist pic
          </div>
          <div class = 'col-6'>
            <h1>{this.props.artistPage.artistObj.firstName} {this.props.artistPage.artistObj.lastName}</h1>
            <h5>Bio: {this.props.artistPage.artistObj.bio}</h5>
          </div>
          <div class = 'col-3-uploadButton'>
            {this.renderUploadButton()}
          </div>
        </div>
      </div>
    )
  }
  if (this.props.artistPage.loadingArtistObjError) {
    return(<p>Error Loading Artist Object</p>)
  }
  else {
    return(
      <p>
      Loading...
      </p>
    )
  }
}

  render() {
    return(
      <div class = "artistHeader">
        {this.renderUserInfo()}
      </div>
    )
  }
};


class ArtistPage extends React.Component {
  componentDidMount() {
  this.props.fetchArtistPage(this.props.match.params.id, this.props.match.params.id-10)
  this.props.closeModalClick()
}

  componentWillUnmount(){}

  renderModal() {
    if(this.props.artistPage) {
      console.log('DISPLAY MODAL')
      return(<UploadArtModal user = {this.props.user} submitArt = {this.props.submitArt} display = {this.props.artistPage.uploadModalDisplay} onCloseClick = {() => this.props.closeArtUploadModal()}/>)
    }
    if (!this.props.artistPage) {
      console.log('NO MODAL')
      return(<UploadArtModal submitArt = {this.props.submitArt} display = {'none'} onCloseClick = {() => this.props.closeArtUploadModal()}/>)}
  }

  render() {
    const {artistPage, openModal, user} = this.props;
    console.log('artistpage render ', artistPage)
    return(
      <div>
        <ArtistHeader artistPage = {artistPage} user = {user} onUploadclick = {this.props.openArtUploadModal}/>
        <BrowseBoard art = {{sectionObj: [{color: 'inherit', title: ``, artList: artistPage.artList}]}} openModal = {openModal}/>
        {this.renderModal()}
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    artistPage: state.artistPage,
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArtistPage: fetchArtistPage,
    openModal: openModal,
    closeModalClick: () => dispatch(closeModal),
    openArtUploadModal: () => dispatch(openArtUploadModal),
    closeArtUploadModal: () => dispatch(closeArtUploadModal),
    submitArt: submitArt,
    activateFlash: activateFlash,
  }, dispatch);
}

// export default withRouter(connect()(App));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistPage))
