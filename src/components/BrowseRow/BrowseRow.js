import React from 'react';
import './BrowseRow.css'
import BrowseCard from '../BrowseCard/BrowseCard.js'
import ArtModal from '../ArtModal/ArtModal.js'



class BrowseRow extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const styles = {
    background: this.props.RowColor
};
    return(
      <div style = {styles} class = "BrowseRowContainer">
        <h3 class = "BrowseRowTitle"> {this.props.sectionTitle}</h3>
        <div class = "BrowseRow">
          {this.props.cardList.map(cardObj => (
            <BrowseCard handleClick = {this.props.openModal} artistLinkFunct = {this.props.artistLinkFunct} cardObj = {cardObj} type = {this.props.rowType}/>
          ))}

        </div>
      </div>
    )
  }
}


export default BrowseRow;
