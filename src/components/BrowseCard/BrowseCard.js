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

        <div onClick = {() => this.props.handleClick(this)} class = 'BrowseCard'>
          {/*<Link to = {this.makeArtLink(this.props.id)}>*/}
            <div class ='BrowseCardContainer'>
              <img class = 'BrowseCardImage' src = {this.props.cardObj.imgSRC}/>
              <div class = 'BrowseCardText'><span class ="BrowseCardTitle"> {this.props.cardObj.title}</span>
              <br/>

              {this.props.cardObj.artistId ?
                (<span class = "ArtistLink" > by <Link to = {makeArtistLink(this.props.cardObj.artistId)}>{this.props.cardObj.artist}</Link> </span>)
              :(<span></span>)}
                </div>
            </div>
          {/*</Link>/*/}
        </div>

    )

  }
};


export default BrowseCard;
