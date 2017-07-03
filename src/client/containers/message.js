// @flow

import { connect } from 'react-redux'

import Message from '../components/message'

const mapStateToProps = state => ({
  message: state.hello.get('message')
})

export default connect(mapStateToProps)(Message)
