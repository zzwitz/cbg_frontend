// Creating string constants to declutter code
const PICK_USER_TYPE = 'PICK_USER_TYPE'

// User type state for registration page
const initialState = {
  userType: 'unselected',
  // Button class styles
  venueButtonsStyle: 'block-button',
  artistButtonsStyle: 'block-button'
}

export default function (state = initialState, action) {
  console.log('modal reducer')
  switch (action.type) {
    case PICK_USER_TYPE:
      const newState = Object.create(state)
      // If artist then press artist button, inactivate venue
      if (action.payload == 'artist') {
        var venueButtonsStyle ='block-button-inactive';
        var artistButtonsStyle ='block-button-pressed';
      }
      // If artist then press venue button, inactivate artist 
      if (action.payload == 'venue') {
        var venueButtonsStyle = 'block-button-pressed';
        var artistButtonsStyle ='block-button-inactive';
      }
      return Object.assign(newState, {userType: action.payload, venueButtonsStyle: venueButtonsStyle, artistButtonsStyle:artistButtonsStyle})
  }
  return state
 }
