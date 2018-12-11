import React, {Redirect} from 'react';
import BrowseCard from '../BrowseCard/BrowseCard.js'
import BrowseRow from '../BrowseRow/BrowseRow.js'
import './BrowseBoard.css'
import ArtModal from '../ArtModal/ArtModal'
import {makeCategoryLink} from '../Functions/HelperFunctions.js'



class BrowseBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArtModalDisplay: false,
      ArtModalcardObj: {}}
    this.handleClickCatObj = this.handleClickCatObj.bind(this);
    this.handleClickArtObj = this.handleClickArtObj.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(obj) {
    if (obj.props.cardObj.type === 'Art') {
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

  openModal(cardObj) {
    this.setState({ArtModalcardObj: cardObj})
    this.setState({ArtModalDisplay: true})
  }

  closeModal() {
    this.setState({ArtModalDisplay: false})
  }

  render() {
    return(
      <div class = "BrowseBoardContainer">
      {this.props.sectionList.map(section => (
        <BrowseRow cardList = {section.artList} sectionTitle = {section.title} handleClick = {this.handleClick} RowColor = {section.rowColor}/>
        ))}
        <ArtModal closeModal = {this.closeModal} display = {this.state.ArtModalDisplay} cardObj = {this.state.ArtModalcardObj}/>
      </div>
    )
  }
};

export default BrowseBoard;
