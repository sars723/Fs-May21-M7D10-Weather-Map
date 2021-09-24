import { initialState } from '../store'

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILL_WeatherList':
      return {
        ...state,
        
         weatherList: {...state.weatherList, ...action.payload},
        
      }
   
      case 'FILL_WeatherList_LOADING':
        return {
          ...state,
          loading: action.payload,
        }
  
      case 'FILL_WeatherList_ERROR':
        return {
          ...state,
          error: action.payload,
        }
    default:
      return state
  }
}

export default weatherReducer
