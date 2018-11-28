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
      const comments = this.state.openComments && (
        <OriginalComponent
          {...this.props}
          openComId={this.state.openComments}
          toggleOpenCom={this.toggleOpenCom}
        />
      )
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.openComments ? 'close' : 'open'}</button>
          {comments}
        </div>
      )
    }

    handleClick = () => {
      this.setState({
        openComments: !this.state.openComments
      })
    }
  }
