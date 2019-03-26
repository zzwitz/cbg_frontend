import React from 'react';
import BrowseRow from '../BrowseRow/BrowseRow.js'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {openModal, fetchArt, fetchArtByTag} from '../../action_creators/actionCreators.js'
import { withRouter } from 'react-router-dom'
import BrowseSidebar from '../BrowseSidebar/BrowseSidebar.js'
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'

// Page level component for category (tag art view)
class ArtCategoryPage extends React.Component {
  constructor(props) {
  super(props);
}

  // Once page loads fetch art for fill
  componentDidMount() {
    this.props.fetchArtByTag(5, this.props.match.params.tagText)
  }

  render() {
    console.log('browse by tag:', this.props.match.params.tagText, 'art = ', this.props.artTag.tagArtList)


    return(
        <div class="container-fluid">
        {// Title for page (tag text )
        }
        <h1> {this.props.artTag.tagText} </h1>
          <div class="row">
            <div class="col-md-12">
            {// Browse board
            }
              <BrowseBoard art = {this.props.artTag.tagArtList}/>
            </div>
          </div>
        </div>

    )
  }
}


// Access to tag art, router,
function mapStateToProps(state) {
  console.log(state)
  return {
    artTag: state.artTag,
    router: state.router,
  };
}
// Allows for fetch ar by tag
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchArtByTag: fetchArtByTag
  }, dispatch);
}
//
// Connects component to store 
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ArtCategoryPage)
