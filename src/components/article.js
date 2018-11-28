import React, { Component } from 'react'
import CommentsList from './comments-list'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        {this.getCommentLst(article)}
      </section>
    )
  }

  getCommentLst(article) {
    if (!(article.comments && article.comments.length)) return

    return (
      <div>
        <CommentsList comments={article.comments} ref={this.setCommentListRef} />
      </div>
    )
  }

  setCommentListRef = (ref) => {
    window.commentList = ref
  }
}
export default Article
