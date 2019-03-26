import React from 'react';
import './BrowseRow.css'
import BrowseCard from '../BrowseCard/BrowseCard.js'
import ArtModal from '../ArtModal/ArtModal.js'


// Main role = formatting browse cards
class BrowseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  // Passes rowcolor into styles from sectionObj
  render() {
    const styles = {
    background: this.props.RowColor
};
    return(
      <div style = {styles} class = "BrowseRowContainer">
      {// Passing in styles for container
        // Pass in title below (or leave blank)
      }

        <h3 class = "BrowseRowTitle"> {this.props.sectionTitle}</h3>
        <div class = "BrowseRow">
        {// Mapping art objects to art cards (if > 4, will make multiline)
        }
          {this.props.cardList.map(cardObj => (
            <BrowseCard handleClick = {this.props.openModal} artistLinkFunct = {this.props.artistLinkFunct} cardObj = {cardObj} type = {this.props.rowType}/>
          ))}

        </div>
      </div>
    )
  }
}

// Stateless, receives data from Browse Board
export default BrowseRow;
