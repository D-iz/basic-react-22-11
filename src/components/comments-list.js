import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  setListRef = (ref) => {
    this.list = ref
  }

  render() {
    return <ul ref={this.setListRef}>{this.commentItems()}</ul>
  }

  commentItems() {
    const { comments, openItemId, toggleOpenItem } = this.props
    if (comments && comments.length) {
      return comments.map((comment) => (
        <li key={comment.id}>
          <Comment
            comment={comment}
            isOpen={openItemId === comment.id}
            toggleOpen={toggleOpenItem(comment.id)}
          />
        </li>
      ))
    }
  }
}

export default accordion(CommentList)
