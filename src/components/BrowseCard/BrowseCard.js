import React from 'react';
import {Link} from 'react-router-dom'
import './BrowseCard.css'
import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'

class BrowseCard extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.props.handleClick.bind(this);
}
  render() {

    return(

        <div
         onClick = {() => this.props.handleClick(this.props.cardObj)}
          class = 'BrowseCard'>
          {/*<Link to = {this.makeArtLink(this.props.id)}>*/}
            <div class ='BrowseCardContainer'>
              <img class = 'BrowseCardImage' src = {this.props.cardObj.photoSRC}/>
              <div class = 'BrowseCardText'><span class ="BrowseCardTitle"> {this.props.cardObj.title}</span>
              <br/>

              {this.props.cardObj.artistId ?
                (<span class = "ArtistLink" > by <span onClick = {() => this.props.artistLinkFunct(makeArtistLink(this.props.cardObj.artistId))}> {this.props.cardObj.artistName} </span> </span>)
              :(<span></span>)}
                </div>
            </div>
        </div>

    )

  }
};


export default BrowseCard;
