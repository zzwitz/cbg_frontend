import React from 'react';
import BrowseRow from '../BrowseRow/BrowseRow.js'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {openModal, fetchArt, fetchArtByTag} from '../../action_creators/actionCreators.js'
import { withRouter } from 'react-router-dom'
import BrowseSidebar from '../BrowseSidebar/BrowseSidebar.js'
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'

class ArtCategoryPage extends React.Component {
  constructor(props) {
  super(props);
}
  componentDidMount() {
    this.props.fetchArtByTag(5, this.props.match.params.tagText)
  }

  render() {
    console.log('browse by tag:', this.props.match.params.tagText, 'art = ', this.props.artTag.tagArtList)

    // console.log('browsepage art', this.props.tagArt)
    return(

      <div className="App">
        <div class="container-fluid">
        <h1> {this.props.artTag.tagText} </h1>
          <div class="row">
            <div class="col-md-12">
              <BrowseBoard art = {this.props.artTag.tagArtList}/>
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
    artTag: state.artTag,
    router: state.router,
    art: state.art
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fethArt: fetchArt,
    fetchArtByTag: fetchArtByTag
  }, dispatch);
}
//
// export default withRouter(connect()(BrowsePage))
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ArtCategoryPage)

// export default BrowsePage
