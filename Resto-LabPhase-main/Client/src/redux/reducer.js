import { GETPRODUCTS, GETRESERVATION, GETUSERPROFILE, SIGNIN, SIGNOUT } from "./actiontype"

const initialState = {
    products: [],
   user: null,
   reservations: [],
  
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPRODUCTS:
    return { ...state, products: payload.products}
    case SIGNIN:
      localStorage.setItem("token", payload.token)
      return { ...state, user: payload.user }
      case SIGNOUT:
        return { ...state, user: null }
     case GETUSERPROFILE:
      return {...state, user: payload.user }
      case GETRESERVATION:
        return {...state, reservations: payload.reservations }  
     
  default:
    return state
  }
}
