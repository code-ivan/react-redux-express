import fetch from 'isomorphic-fetch'

const CONFIG = require('../../config.json')[process.env.NODE_ENV || 'development'];

var baseApiUrl = CONFIG.baseApiUrl


export const fetchAction = (url, types, internal = true) => dispatch => {
    const [REQUEST, SUCCESS, FAILURE] = types

    if (internal) {
      url = `${baseApiUrl}${ url }`
    }

    dispatch({
      type: REQUEST
    })

    return fetch(url)
      .then(
        response => response.json()
      )
      .then(
        response => dispatch({
          type: SUCCESS,
          payload: response
        }),
        error => dispatch({
          type: FAILURE,
          payload: error.message
        })
      )
  }

export const fetchActionCustom = (url, types, method, data, internal = true) => dispatch => {
    const [REQUEST, SUCCESS, FAILURE] = types
    if (internal) {
        url = `${baseApiUrl}${ url }`
      }
  
    var opt = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    if(method != 'GET' ){
        opt = {...opt, method: method, body: JSON.stringify(data)}
    }

    dispatch({
      type: REQUEST
    })

    return fetch(url, opt)
        .then(
            response => response.json()
        )
        .then(
            response => dispatch({
                type: SUCCESS,
                payload: response
            }),
            error => dispatch({
                type: FAILURE,
                payload: error.message
            })
        )
}

