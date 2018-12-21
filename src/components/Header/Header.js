import React  from 'react';
import { Link} from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {linkTo} from '../../action_creators/actionCreators.js'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'connected-react-router'
import './Header.css';
import {store} from '../../App.js'


class AppHeader extends React.Component {
  render()
  {
    return(<div class = "header">
            <ul  class = "header-list">
              <li class = 'left-header'> </li>
              <li class = 'left-header'>
                <Link to = '/' class = "title">
                {/*<img class = 'logoimg' src = {'logo_nowords.png'}/>*/}
                City Block Gallery
                </Link>
              </li>
              <li class = "option" >
                    <input onClick = {() => this.props.push('/register')} type = 'button' value = 'Register' class = "button-std" />
              </li>
              <li class = 'left-header'></li>
              <li class = "option" ><Link  to = '/help'> Help </Link></li>
              <li class = "option" ><Link  to = '/signin'> Sign In </Link></li>
            </ul>
            <hr class = "header-line"/>

      </div> )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}



const mapDispatchToProps = dispatch => bindActionCreators(
  {
    push
  },
  dispatch,
)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader))
