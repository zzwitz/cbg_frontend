import React from 'react';
import {Link} from 'react-router-dom'
import './ArtModal.css'
import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'
import {bindActionCreators} from 'redux'
import { dispatch } from 'react-redux';
import {connect} from 'react-redux'
import {closeModal, viewEmail} from '../../action_creators/actionCreators.js'
import reducerModal from '../../reducers/reducerModal';


class ArtModal extends React.Component {
  constructor(props) {
    super(props);
    this.outsideClick = this.outsideClick.bind(this);
  }

  outsideClick(e) {
    if (this.node.contains(e.target)) {
    }
    if (this.props.display === true) {
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.outsideClick, false);
  };
  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClick, false);
  };


  render() {
    var modalStyles = {display:'none'};
    if (this.props.modal.modalVisible === true) {
      modalStyles = {}};
    var emailStyles = {display: 'none'};
    var emailButtonStyles = {};
    if (this.props.modal.emailVisible === true) {
      var emailStyles = {}
      var emailButtonStyles = {display: 'none'}
    }
    return(
        <div style = {modalStyles}  id = {this.props.modal.modalArtObj.id} class = 'ModalScreen'>
          <div class = 'ArtModal'>
            <div ref = {node => this.node = node}  onClick = {this.props.closeModalClick} class = "ArtModalClose"> &times; </div>
            <div class = 'ArtModalContent'>
              <div class = 'ArtModalLeft'>
                <h4>{this.props.modal.modalArtObj.title}</h4>
                <span class = "Italics"> by <Link to = {makeArtistLink(this.props.modal.modalArtObj.artistId)}> {this.props.modal.modalArtObj.artistName}</Link></span>
                <br/> <hr/> <br/>
                <span> {this.props.modal.modalArtObj.desc} </span>
                <br/> <br/>
                <span class = 'SizeText'> Width: {this.props.modal.modalArtObj.width} <br/> Height: {this.props.modal.modalArtObj.height}</span>
                <br/> <br/>
                </div>
              <div class = 'ArtModalRight'>
                <img class = "ArtModalImg" src = {this.props.modal.modalArtObj.photoSRC}/>
              </div>
            </div>
              <div class = 'ArtModalEmail'>
                <span style = {emailStyles}> Email: {this.props.modal.modalArtObj.artistEmail} </span>
                <button  style = {emailButtonStyles} onClick = {this.props.viewEmailClick} class = "button-std ArtModal" href = '/register'>View Email</button>
              </div>
          </div>
        </div>)
  }
}


function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('IN mapDispatchToProps')
  return bindActionCreators({
    viewEmailClick: () => dispatch(viewEmail),
    closeModalClick: () => dispatch(closeModal)
  }, dispatch)};

export default connect(mapStateToProps, mapDispatchToProps)(ArtModal)
