import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

type Props = {

};
export class CoursesView extends React.Component {
  props: Props;

  render () {
    return (
      <div className="courses-view">
        <h1>Courses</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // Pass necessary reduced states to this view
  // ex) users: state.users
})

const mapDispatchToProps = (dispatch) => {
  const actions = {

  }

  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesView)
