import React, { useState, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Book from '../components/Book'
import axios from 'axios'

import manybooks from '../books'

function HomePage() {
  const [books, setBooks] = useState([])
  const url = 'http://127.0.0.1:8000/api/v1/books/'
  useEffect(() => {
    async function fetchBooks() {
      const { data } = await axios.get(url)

      setBooks(data)
    }

    fetchBooks()
  }, [])

  console.log(books)
  console.log(books[0])

  return (
    <div>
      <h1> Latest books</h1>
      <Row>
        {books.map((book) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default HomePage
