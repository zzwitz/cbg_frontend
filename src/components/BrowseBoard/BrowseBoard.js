import React, {Redirect} from 'react';
import BrowseCard from '../BrowseCard/BrowseCard.js'
import BrowseRow from '../BrowseRow/BrowseRow.js'
import './BrowseBoard.css'
import ArtModal from '../ArtModal/ArtModal'
import {makeCategoryLink} from '../Functions/HelperFunctions.js'
import { push } from 'connected-react-router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'

import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'
import {openModal, fetchArt, linkTo} from '../../action_creators/actionCreators.js'

class BrowseBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickCatObj = this.handleClickCatObj.bind(this);
    this.handleClickArtObj = this.handleClickArtObj.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(obj) {
    if (obj.props.type === 'Art') {
      this.handleClickArtObj(obj)
    }
    else {this.handleClickCatObj(obj)}
  }

  handleClickArtObj(obj) {
      this.openModal(obj.props.cardObj)
  }

  handleClickCatObj(obj) {
    window.location.assign(makeCategoryLink(obj.props.cardObj.id));
  }

  render() {
    console.log('browseboard props', this.props)
    return(
      <div class = "BrowseBoardContainer">
      {this.props.art.sectionObj.map(section => (
        <BrowseRow  openModal = {this.props.openModal} artistLinkFunct = {this.props.linkTo} rowType = {section.type} cardList = {section.artList} sectionTitle = {section.title} handleClick = {this.handleClick} RowColor = {section.rowColor}/>
        ))}
        <ArtModal  closeModal = {this.closeModal} display = {this.props.modal.ArtModalDisplay} cardObj = {this.props.modal.ArtModalcardObj}/>
      </div>
    )
  }
};


function mapStateToProps(state) {
  console.log(state)
  return {
    // art: state.art,
    modal: state.modal,
    router: state.router
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArt: fetchArt,
    openModal: openModal,
    linkTo: linkTo
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseBoard))
