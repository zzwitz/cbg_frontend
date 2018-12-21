import { combineReducers } from 'redux';
import ArtReducer from './reducerArt'
import ModalReducer from './reducerModal'
import ArtistReducer from './reducerArtistPage'
import UserReducer from './reducerUser'
import RegisterReducer from './reducerRegisterPage'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { reducer as formReducer } from 'redux-form'

// import reducers once written

const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  art: ArtReducer,
  modal: ModalReducer,
  artistPage: ArtistReducer,
  user: UserReducer,
  form: formReducer,
  register: RegisterReducer
});

export default rootReducer;
