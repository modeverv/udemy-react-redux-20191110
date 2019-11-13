import _ from 'lodash'
import {DELETE_EVENT, READ_EVENTS} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            //console.log(action.response.data)
            var data = _.mapKeys(action.response.data,'id')
            //console.log(data)
            return data
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}