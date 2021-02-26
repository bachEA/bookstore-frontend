import React, { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'

import { bookListAction } from '../actions/bookActions'

import { useDispatch, useSelector } from 'react-redux'
import Paginationer from '../components/Paginationer'

function HomePage({ history }) {
  const dispatch = useDispatch()
  const bookList = useSelector((state) => state.bookList)

  // const { loading, books, page, pages } = bookList
  const { loading, books, page, pages } = bookList

  const current_page = page
  const total_pages = pages

  console.log(page)
  console.log(books)
  // to set keyword = querystring
  let keyword = history.location.search
  console.log(keyword)

  useEffect(() => {
    dispatch(bookListAction(keyword))
  }, [dispatch, keyword])

  return (
    <div>
      <h1> Latest books</h1>

      <Row>
        {books.map((book) => (
          // declare size of the column depending on the client screen size
          <Col key={book.id} sm={12} md={6} lg={4} xl={3}>
            <Book book={book} />
          </Col>
        ))}
      </Row>
      <Paginationer
        current_page={current_page}
        total_pages={total_pages}
        keyword={keyword}
      />
    </div>
  )
}
export default HomePage
