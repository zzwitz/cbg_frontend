import React from 'react';
import BrowseRow from '../BrowseRow/BrowseRow.js'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {openModal, fetchArt} from '../../action_creators/actionCreators.js'
import { withRouter } from 'react-router-dom'
import './browseDiv2.css';
import BrowseSidebar from '../BrowseSidebar/BrowseSidebar.js'
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'

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


function getSidebar() {
  return([sectionOne, sectionTwo])
};

class BrowsePage extends React.Component {
  constructor(props) {
  super(props);
}
  componentDidMount() {
    this.props.fetchArt(10)
  }

  renderFavoriteList(favoriteList) {
    if (favoriteList.length != 0) {
      return(
        <div class = 'floatList'>
          <li> laksdjf </li>
        </div>
      )
    }
    else {
      return(<div> </div>)
    }
  }

  render() {
    console.log('browsepage art', this.props.art)
    return(

      <div className="App">
        {this.renderFavoriteList(this.props.artFavoriteList.artFavoriteList)}
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <BrowseSidebar sectionList = {getSidebar()}/>
            </div>
            <div class="col-md-10">
              <BrowseBoard art = {this.props.art}/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    art: state.art,
    router: state.router,
    artFavoriteList: state.artFavoriteList
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArt: fetchArt
  }, dispatch);
}
//
// export default withRouter(connect()(BrowsePage))
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(BrowsePage)

// export default BrowsePage
