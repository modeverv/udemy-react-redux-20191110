import axios from 'axios'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERY_STRING = '?token=token123'
export const READ_EVENTS = "READ_EVENTS"
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`)
    //console.log(response)
    dispatch({type: READ_EVENTS, response})
}
