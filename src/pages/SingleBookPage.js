import Book from '../components/Book'
import Rating from '../components/Rating'

import { Link } from 'react-router-dom'
import { Col, Row, Card, Button, ListGroup, Image, Form } from 'react-bootstrap'

import axios from 'axios'
import React, { useState, useEffect, Fragment } from 'react'

import { bookDetailAction } from '../actions/bookActions'

import { useDispatch, useSelector } from 'react-redux'

function SingleBookPage({ match, history }) {
  // short term data stored in local react state
  const [quantity, setQuantity] = useState(1)
  const id = match.params.id
  const dispatch = useDispatch()
  const bookDetail = useSelector((state) => state.bookDetail)

  const { loading, book } = bookDetail

  useEffect(() => {
    dispatch(bookDetailAction(id))
  }, [dispatch])

  const image = `http://127.0.0.1:8000${book.image}`
  const numberOfItems = book.numberOfItems ? book.numberOfItems : 5

  // relocate to cart page
  function addToCart() {
    history.push(`/carts/${match.params.id}?qty=${quantity}`)
  }

  return (
    <Fragment>
      <h1> This is a single book page</h1>

      <div>
        <Row>
          <Col md={6}>
            <Image src={image} fluid />
          </Col>
          <Col md={3}>
            <h3> {book.title} </h3>
            <h5> {book.description}</h5>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>Price {book.unit_price} $</ListGroup.Item>
              <ListGroup.Item> Customer reviews </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={book.total_rating_value}
                  text={`${book.total_rating_count} ratings`}
                  color={'#f8e825'}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col> Quantity </Col>
                  <Col xs='auto' className=''>
                    <Form.Control
                      as='select'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {Array(numberOfItems)
                        .fill()
                        .map((_, x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button onClick={addToCart}>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default SingleBookPage
