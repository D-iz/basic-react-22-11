import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  setListRef = (ref) => {
    this.list = ref
  }

  render() {
    return <ul ref={this.setListRef}>{this.commentItems()}</ul>
  }

  getComments() {
    return <ul ref={this.setListRef}>{this.commentItems()}</ul>
  }

  commentItems() {
    const { comments } = this.props
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default toggleOpen(CommentList)
