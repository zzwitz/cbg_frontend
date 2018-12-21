const SIGN_IN= 'SIGN_IN'

const initialState = {
  currentUserId: 3,
  currentUserType: 'Artist'
}


export default function (state = initialState, action) {
  console.log('modal reducer')
  switch (action.type) {
    case SIGN_IN:
      return state
  }
  return state
 }
