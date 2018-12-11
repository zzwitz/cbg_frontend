import React from 'react';
import {Link} from 'react-router-dom'
import './ArtModal.css'
import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'



class ArtModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailDisplay: false}
    this.outsideClick = this.outsideClick.bind(this);
    this.viewEmailButton = this.viewEmailButton.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
  }

  outsideClick(e) {
    if (this.node.contains(e.target)) {
    }
    if (this.props.display === true) {
    }
  }

  viewEmailButton() {
    this.setState({
      emailDisplay: true
    })
    this.forceUpdate()
  }

  componentDidMount() {
    document.addEventListener('click', this.outsideClick, false);
  };
  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClick, false);
  };

  handleXClick() {
    this.setState({emailDisplay: false})
    this.props.closeModal()
  }

  render() {
    var modalStyles = {display:'none'};
    if (this.props.display === true) {
      modalStyles = {}};
    var emailStyles = {display: 'none'};
    var emailButtonStyles = {};
    if (this.state.emailDisplay === true) {
      var emailStyles = {}
      var emailButtonStyles = {display: 'none'}
    }
    return(
        <div style = {modalStyles}  id = {this.props.cardObj.id} class = 'ArtModalScreen'>
          <div class = 'ArtModal'>
            <div ref = {node => this.node = node}  onClick = {this.handleXClick} class = "ArtModalClose"> &times; </div>
            <div class = 'ArtModalContent'>
              <div class = 'ArtModalLeft'>
                <h4>{this.props.cardObj.title}</h4>
                <span class = "Italics"> by <Link to = {makeArtistLink(this.props.cardObj.artistId)}> {this.props.cardObj.artist}</Link></span>
                <br/> <hr/> <br/>
                <span> {this.props.cardObj.desc} </span>
                <br/> <br/>
                <span class = 'SizeText'> Width: {this.props.cardObj.width} <br/> Height: {this.props.cardObj.height}</span>
                <br/> <br/>
                </div>
              <div class = 'ArtModalRight'>
                <img class = "ArtModalImg" src = {this.props.cardObj.imgSRC}/>
              </div>
            </div>
              <div class = 'ArtModalEmail'>
                <span style = {emailStyles}> Email: {this.props.cardObj.artistEmail} </span>
                <button  style = {emailButtonStyles} onClick = {this.viewEmailButton} class = "button-std ArtModal" href = '/register'>View Email</button>
              </div>
          </div>
        </div>)
  }
}

export default ArtModal
