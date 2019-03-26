import React from 'react';
import {Link} from 'react-router-dom'
import './BrowseCard.css'
import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'

class BrowseCard extends React.Component {
  constructor(props) {
  super(props);
}
  render() {

    return(

        <div
         onClick = {() => this.props.handleClick(this.props.cardObj)}
          class = 'BrowseCard'>
          {// Passes in function from parent
            }
            <div class ='BrowseCardContainer'>
            {// Image attribute passed in
            }
              <img class = 'BrowseCardImage' src = {this.props.cardObj.photoSRC}/>
              {// Art piece title
              }
              <div class = 'BrowseCardText'><span class ="BrowseCardTitle"> {this.props.cardObj.title}</span>
              <br/>

              {// Displays title if available (not for categor
              }
              {this.props.cardObj.artistId ?
                (<span class = "ArtistLink" > by <span class = "BrowseCardArtistName" onClick = {() => this.props.artistLinkFunct(makeArtistLink(this.props.cardObj.artistId))}> {this.props.cardObj.artistName} </span> </span>)
              :(<span></span>)}
                </div>
            </div>
        </div>

    )

  }
};


export default BrowseCard;
