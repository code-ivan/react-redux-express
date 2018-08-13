// @flow
import React from 'react'

export class Loading extends React.Component {
  
  render() {
    
    const styles = require('./Loading.scss')
  
    return (
      <div className={ styles.loading}>
         <i className="fa fa-spin fa-spinner"></i>
         <p>Loading</p>
      </div>
    )
  }
}

Loading.displayName = 'Loading'

export default Loading
