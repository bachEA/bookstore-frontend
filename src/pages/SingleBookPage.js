import Book from '../components/Book'
import Rating from '../components/Rating'

import { Link } from 'react-router-dom'
import { Col, Row, Card, Button } from 'react-bootstrap'

import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { bookDetailAction } from '../actions/bookActions'

import { useDispatch, useSelector } from 'react-redux'

function SingleBookPage({ match }) {
  const id = match.params.id
  const dispatch = useDispatch()
  const bookDetail = useSelector((state) => state.bookDetail)

  const { loading, book } = bookDetail

  useEffect(() => {
    dispatch(bookDetailAction(id))
  }, [dispatch])

  // console.log(book)
  // console.log(id)

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
            <Card.Body>
              <Card.Title> {book.unit_price} $</Card.Title>
              <Card.Title> Customer reviews </Card.Title>
              <Rating
                value={book.total_rating_value}
                text={`${book.total_rating_count} ratings`}
                color={'#f8e825'}
              />
              <Button variant='primary'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SingleBookPage
