import React, { Component } from 'react'
import articles from './fixtures'
import PropTypes from 'prop-types'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'
import UserForm from './components/user-form'
import Filters from './components/filters'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
