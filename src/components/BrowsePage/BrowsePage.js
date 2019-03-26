import React from 'react';
import BrowseRow from '../BrowseRow/BrowseRow.js'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {openModal, fetchArt} from '../../action_creators/actionCreators.js'
import { withRouter } from 'react-router-dom'
import './browseDiv2.css';
import BrowseSidebar from '../BrowseSidebar/BrowseSidebar.js'
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'


// TEMPORARILY HARDCODING SIDEBAR OPTIONS

var daVinci =  {
  title: 'Nancy Goodman',
  id: 4,
  link: '/artist/4'
};
var picasso = {
  title :'Dario Preger',
  id: 3,
  link: '/artist/3'
}
var bobRoss = {
  title :'Eric Rosenwald',
  id: 3,
  link: '/artist/11'
}
var larryPalmer = {
  title :'Marc Louffe',
  id: 12,
  link: '/artist/12'
}


var sectionOne = {
  title:'Artists',
  catList:[daVinci, picasso, bobRoss, larryPalmer]
}

var photo = {
  title :'Photography',
  id: 12,
  link: '/art/tags/photography'
}

var bw = {
  title :'Black & White',
  id: 12,
  link: '/art/tags/Black%20&%20White'
}

var ab = {
  title :'Abstract',
  id: 12,
  link: '/art/tags/abstract'
}

var bright = {
  title :'Bright',
  id: 12,
  link: '/art/tags/bright'
}

var nature = {
  title :'Nature',
  id: 12,
  link: '/art/tags/nature'
}

var sectionTwo = {
  title :'Browse by Tag',
  catList:[photo, bw, ab, bright, nature]
}

// Creates sidebar objects
function getSidebar() {
  return([sectionOne, sectionTwo])
};

// Page component
class BrowsePage extends React.Component {
  constructor(props) {
  super(props);
}

 // Once page loads, fetch art from API (this is action creator )
  componentDidMount() {
    this.props.fetchArt(10)
  }

  render() {
    console.log('browsepage art', this.props.art)
    return(

      <div className="App">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
            {// Sidebar size col 2
            }
              <BrowseSidebar sectionList = {getSidebar()}/>
            </div>
            <div class="col-md-10">
            {// Sidebar size col 10
            }
              <BrowseBoard art = {this.props.art}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

//
function mapStateToProps(state) {
  console.log(state)
  return {
    // Browsepage art
    art: state.art,
    // Router for pushing to new page
    router: state.router,
    // Favorites list for 'Hearting'
    artFavoriteList: state.artFavoriteList
  };
}

// Adds fetchArt action dispatcher
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArt: fetchArt
  }, dispatch);
}
//
// Connects component to store 
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(BrowsePage)

// export default BrowsePage
