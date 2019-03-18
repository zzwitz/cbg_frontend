const ACTIVATE_FLASH = 'ACTIVATE_FLASH'
const DEACTIVATE_FLASH = 'DEACTIVATE_FLASH'

const initialState = {
  flashActive: false,
  flashMessage: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_FLASH:
      console.log('activate FLASH reducer')
      console.log('activate FLASH reducer MESSAGE', action.payload)
      var newState = Object.create(state)
      return Object.assign(newState, {flashActive: true, flashMessage: action.payload})
    case DEACTIVATE_FLASH:
      var newState = Object.create(state)
      return Object.assign(newState, {flashActive: false, flashMessage: ''})
  }
  return state
 }


// export default function (state = initialState, action) {
//   switch (action.type) {
//     case ACTIVATE_FLASH:
//       console.log('ACTIVATE_FLASH payload')
//       var newVars =  {flashActive: true, flashMessage: action.payload}
//       var newVars =  {uploadArtStarted: false, uploadArtSuccess: true}
//       return { ...state, ...newVars }
//     case DEACTIVATE_FLASH:
//       var newVars =  {flashActive: false, flashMessage: null}
//       return { ...state, ...newVars }
//   }
//   return state
//  }
