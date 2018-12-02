import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    fetchAllArticles: PropTypes.func,
    articles: PropTypes.array,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }

  setListRef = (ref) => {
    this.list = ref
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    const { fetchAllArticles } = this.props

    fetchAllArticles && fetchAllArticles()
  }

  render() {
    if (this.state.error) return <h3>Error</h3>
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }

  articleItems() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
