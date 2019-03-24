// Creating string constants to declutter code
const CLOSE_MODAL = 'CLOSE_MODAL'
const VIEW_EMAIL = 'VIEW_EMAIL'
const OPEN_MODAL = 'OPEN_MODAL'

// Modal visible = display setting of modal, modalartobj = art modal object interior,
// // email visible desginates status of artist email display
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
  switch (action.type) {
    // Open modal called (from art card) -  update stats
    case OPEN_MODAL:
      var newState = Object.create(state)
      return Object.assign(newState, {modalVisible: true, modalArtObj: action.payload.artObj, emailVisible: false})
      // Close modal - make modal not visible and update mail visibility
    case CLOSE_MODAL:
      console.log('close modal reducer')
      var newState = Object.create(state)
      return Object.assign(newState, {modalVisible: false, emailVisible: false})
      // View email  — change email visibiility
    case VIEW_EMAIL:
      console.log('view email reducer')
      var newState = Object.create(state)
      return Object.assign(newState, {emailVisible: true})
  }
  return state
 }
