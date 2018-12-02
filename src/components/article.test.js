import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'
import DecoratedArticleList from './article-list'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should open an article on click', () => {
    const container = mount(<Article />)

    expect(container.find('.test__article--body').length).toEqual(0)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)
  })
})
