import { ERROR, LOGIN_USER, RESET_ERROR } from "./action-type";

const initialState = {
  usuario : {
    isLoggedIn: false,
    user: null,
    error: null
  }

  };
  
  const reduce = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER: 
      return {
        ...state,
        usuario: {
          isLoggedIn: true,
          user: action.payload
        }

      }
    case ERROR:
      console.log(action.payload, "payload");
      return {
        ...state,
        usuario: {
          ...state.usuario,
          error: action.payload
        }
      }
      case RESET_ERROR:
        return {
          ...state,
          usuario: {
            ...state.usuario,
            error: action.payload
          }
        }
      default:
      return {
        ...state,
      };
  }
  
}
  
  export default reduce;
  