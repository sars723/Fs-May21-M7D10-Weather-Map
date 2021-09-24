export const fillWeatherListAction = (searchString) => {
    return async (dispatch, getState) => {
      console.log('fetching weather List...')
      try {
  
      let resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchString?searchString:"ansbach"}&APPID=e24eeecb7f9945b49ba016bd3e81f412&units=metric&cnt=17`)
     /*  https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=e24eeecb7f9945b49ba016bd3e81f412&units=metric&cnt=17 */
        if (resp.ok) {
          let hourlyWeatherData = await resp.json()
          console.log(hourlyWeatherData)
          dispatch({
            type: 'FILL_WeatherList_LOADING',
            payload: false,
          })
          dispatch({
            type: 'FILL_WeatherList_ERROR',
            payload: false,
          })
          dispatch({
           
            type: 'FILL_WeatherList',
            payload: hourlyWeatherData,
          })
        } else {
          console.log('error')
          dispatch({
            type: 'FILL_WeatherList_LOADING',
            payload: false,
          })
          dispatch({
            type: 'FILL_WeatherList_ERROR',
            payload: true,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: 'FILL_WeatherList_LOADING',
          payload: false,
        })
        dispatch({
          type: 'FILL_WeatherList_ERROR',
          payload: true,
        })
      }
    }
  }
  
  
  