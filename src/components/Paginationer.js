import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Paginationer({ current_page, total_pages, keyword = '' }) {
  // retrieve search keyword from keyword + page number
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0]
  }

  return (
    total_pages > 1 && (
      <Pagination>
        {[...Array(total_pages).keys()].map((x) => (
          <LinkContainer key={x + 1} to={`/?keyword=${keyword}&page=${x + 1}`}>
            <Pagination.Item active={x + 1 === current_page}>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginationer
