import Book from '../components/Book'
import Rating from '../components/Rating'

import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'react-bootstrap'

import axios from 'axios'
import React, { useState, useEffect } from 'react'

function SingleBookPage({ match }) {
  const id = match.params.id
  const [book, setBook] = useState([])
  const url = `http://127.0.0.1:8000/api/v1/books/${id}`

  useEffect(() => {
    async function fetchBook() {
      const { data } = await axios.get(url)

      setBook(data)
    }

    fetchBook()
  }, [])

  console.log(book)
  console.log(id)

  const image = 'http://127.0.0.1:8000' + String(book.image)

  return (
    <div>
      <h1> This is a single book page</h1>
      <Row>
        <Col md={6}>
          <Card className='my-3 p-3 rounded'>
            <Card.Img src={image}></Card.Img>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='my-3 p-3 rounded'>
            <Card.Title> {book.title}</Card.Title>
            <Card.Text> {book.description}</Card.Text>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='my-3 p-3 rounded'>
            <Card.Title> {book.unit_price} $</Card.Title>
            <Card.Title> Customer reviews </Card.Title>
            <Rating
              value={book.total_rating_value}
              text={`${book.total_rating_count} ratings`}
              color={'#f8e825'}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SingleBookPage
