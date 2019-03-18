import { combineReducers } from 'redux';
import ArtReducer from './reducerArt'
import ModalReducer from './reducerModal'
import ArtistReducer from './reducerArtistPage'
import UserReducer from './reducerUser'
import RegisterReducer from './reducerRegisterPage'
import SubmitArtReducer from './reducerSubmitArt'
import FlashReducer from './reducerFlash.js'
import ArtTagReducer from './reducerArtTag.js'
import ArtFavoriteListReducer from './reducerArtFavoriteList.js'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { reducer as formReducer } from 'redux-form'

// import reducers once written

const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  art: ArtReducer,
  artTag: ArtTagReducer,
  submitArt: SubmitArtReducer,
  modal: ModalReducer,
  artistPage: ArtistReducer,
  user: UserReducer,
  form: formReducer,
  register: RegisterReducer,
  flash: FlashReducer,
  artFavoriteList: ArtFavoriteListReducer,
});

export default rootReducer;
