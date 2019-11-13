import _ from 'lodash'
import {
    DELETE_EVENT,
    CREATE_EVENT,
    READ_EVENTS,
    PUT_EVENT,    
    READ_EVENT
} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            //console.log(action.response.data)
            const data = _.mapKeys(action.response.data, 'id')
            //console.log(data)
            return data
        case CREATE_EVENT:
        case PUT_EVENT:
        case READ_EVENT:
            const rdata = action.response.data
            return {
                ...events, [rdata.id]: rdata            
            }
        case DELETE_EVENT:
            delete events[action.id]
            return {
                ...events
            }
        default:
            return events
    }
}