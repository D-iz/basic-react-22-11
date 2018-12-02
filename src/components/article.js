import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsList from './comment-list'

class Article extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null
    return (
      <section className="test__article--body">
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
