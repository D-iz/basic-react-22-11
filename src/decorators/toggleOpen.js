//HOC === Higher Order Component === Decorator
import React from 'react'

export default (OriginalComponent) =>
  class toggleOpenComponent extends React.Component {
    state = {
      openComments: false
    }

    toggleOpenCom = (ev) => {
      this.setState((state) => {
        return {
          openComments: !this.openComments
        }
      })
    }

    render() {
      console.log(this.state)
      return (
        <div>
          <button onClick={console.log('323456')}>
            {this.state.openComments ? 'close' : 'open'}
          </button>
          <OriginalComponent
            {...this.props}
            openComId={this.state.openComments}
            toggleOpenCom={this.toggleOpenCom}
          />
        </div>
      )
    }
  }
