const CLOSE_MODAL = 'CLOSE_MODAL'
const VIEW_EMAIL = 'VIEW_EMAIL'
const OPEN_MODAL = 'OPEN_MODAL'

const initialState = {
  modalVisible: false,
  modalArtObj: {
    artistId: 1,
    artistName: 'Placeholder',
    id: 1,
    desc: 'Placeholder',
    width: 0,
    height: 0,
    artistEmail: 'placeholder@gmail.com',
    title: 'placeholder',
    photoSRC: 'google.com'
  },
  emailVisible: true
}


export default function (state = initialState, action) {
  console.log('modal reducer')
  switch (action.type) {
    case OPEN_MODAL:
      const newState = Object.create(state)
      return Object.assign(newState, {modalVisible: true, modalArtObj: action.payload.artObj, emailVisible: false})
    case CLOSE_MODAL:
      console.log('close modal reducer')
      var newState = Object.create(state)
      return Object.assign(newState, {modalVisible: false, mailVisible: false})
    case VIEW_EMAIL:
      console.log('view email reducer')
      var newState = Object.create(state)
      return Object.assign(newState, {emailVisible: true})
  }
  return state
 }
