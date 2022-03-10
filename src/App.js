import React from 'react'
import { connect } from 'react-redux'

const App = ({localvariable}) => {
  return (
    <div>
      <h1>{localvariable}</h1>
    </div>
  )
}
const mapStateToProps=state=>({
  localvariabl:state
})

export default connect(mapStateToProps)(App)
