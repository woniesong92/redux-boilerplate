import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

type Props = {

};
export class <%= pascalEntityName %>View extends React.Component {
  props: Props;

  render () {
    return (
      <div className="">
        {/* View can use redux store and actions */}
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
)(<%= pascalEntityName %>View)
