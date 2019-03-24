// Creating string constants to declutter code
const SIGN_IN= 'SIGN_IN'


//INITIAL TEST state
// [TO CHANGE] UPDATE STATE TO NULLS UPON AUTHENTICATION ROLLOUT
const initialState = {
  currentUserId: 3,
  currentUserType: 'Artist',
  firstName: 'Dario',
  lastName: 'Preger',
  email: 'dariopreger@gmail.com',
  currentUserFullName: 'Dario Preger',
}

// NO ACTIONS ACTIVE YET
export default function (state = initialState, action) {
  console.log('modal reducer')
  switch (action.type) {
    case SIGN_IN:
      return state
  }
  return state
 }
