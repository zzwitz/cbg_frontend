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

  render() {

    {// Renders flahs if active
    }
    function flashRender(flash) {
      if (flash.flashActive) {
        return <div class = 'flash'> {flash.flashMessage} </div>
      }
      else {return }
    }


    return(<div class = "header">
            <ul  class = "header-list">
              <li class = 'left-header'> </li>
              <li class = 'left-header'>
                <Link to = '/' class = "title">
                City Block Gallery
                </Link>
              </li>
              {// Right to left
              }
              <li class = "option" >
                    <input onClick = {() => this.props.push('/register')} type = 'button' value = 'Register' class = "button-std" />
              </li>
              <li class = 'left-header'></li>
              <li class = "option" ><Link  to = '/help'> Help </Link></li>
              <li class = "option" ><Link  to = '/signin'> Sign In </Link></li>

            </ul>
            <hr class = "header-line"/>
            {// Render flash (funct above)
            }
            {flashRender(this.props.flash)}
      </div> )
  }
}

// Access to flash to make flash messages, user to change header links (add profile dropdown)
function mapStateToProps(state) {
  return {
    user: state.user,
    flash: state.flash
  };
}

// Push action from React-router
const mapDispatchToProps = dispatch => bindActionCreators(
  {push},
  dispatch,
)

// Connects component to store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader))
