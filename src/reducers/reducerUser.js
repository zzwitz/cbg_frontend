const SIGN_IN= 'SIGN_IN'

const initialState = {
  currentUserId: 3,
  currentUserType: 'Artist',
  firstName: 'Dario',
  lastName: 'Preger',
  email: 'dariopreger@gmail.com',
  currentUserFullName: 'Dario Preger',
}


export default function (state = initialState, action) {
  console.log('modal reducer')
  switch (action.type) {
    case SIGN_IN:
      return state
  }
  return state
 }
