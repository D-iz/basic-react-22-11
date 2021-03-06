import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)

export const articlesLoadingSelector = (state) => state.articles.loading

export const commentsSelector = (state) => state.comments

export const selectedArticlesSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange

export const idSelector = (_, props) => props.id

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      console.log('---', 'comment selector', id)
      return comments.get(id)
    }
  )

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  selectedArticlesSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    console.log('---', 'selector')
    const { from, to } = dateRange

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length || selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)
