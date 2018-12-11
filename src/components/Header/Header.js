import React  from 'react';
import { Link} from 'react-router-dom';
import './Header.css';



class AppHeader extends React.Component {
  render()
  {
    return(<div class = "header">
            <ul class = "header-list">
              <li class = 'left-header'> </li>
              <li class = 'left-header'>
                <Link to = '/' class = "title">
                {/*<img class = 'logoimg' src = {'logo_nowords.png'}/>*/}
                City Block Gallery
                </Link>
              </li>
              <li class = "option" >
                    <button class = "button-std" href = '/register'>Register
                    </button>
              </li>
              <li class = 'left-header'></li>
              <li class = "option" ><Link  to = '/help'> Help </Link></li>
              <li class = "option" ><Link  to = '/signin'> Sign In </Link></li>
            </ul>
            <hr class = "header-line"/>

      </div> )
  }
}

export default AppHeader;
