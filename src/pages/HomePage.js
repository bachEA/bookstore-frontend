import React, { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'

import { bookListAction } from '../actions/bookActions'

import { useDispatch, useSelector } from 'react-redux'

function HomePage() {
  const dispatch = useDispatch()
  const bookList = useSelector((state) => state.bookList)

  const { loading, books } = bookList

  useEffect(() => {
    dispatch(bookListAction())
  }, [dispatch])

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
    </div>
  )
}
export default HomePage
