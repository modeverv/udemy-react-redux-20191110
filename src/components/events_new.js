import React, {Component} from 'react'

import {connect} from 'react-redux'

//import {postEvent} from '../actions'
import _ from 'lodash'
import {Link } from 'react-router-dom'

class EventsNew extends Component {
  render() {
    return (
    <React.Fragment>
      events-new
      <Link to="/">Cancel</Link>
    </React.Fragment>
    );
  }
}

//const mapDispatchToProps = ({postEvent})

//export default connect(null,mapDispatchToProps)(EventsNew)
export default connect(null, null)(EventsNew)
