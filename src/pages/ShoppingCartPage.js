import React, { useState, useEffect, Fragment } from 'react'
import { Row, Col, Image, Button, Form } from 'react-bootstrap'

import { addItemToCardAction } from '../actions/cartActions'

import { useDispatch, useSelector } from 'react-redux'

function ShoppingCartPage({ match, location }) {
  const id = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems.cartItems)

  const numberOfItems = cartItems.numberOfItems ? cartItems.numberOfItems : 5

  useEffect(() => {
    dispatch(addItemToCardAction(id, qty))
  }, [dispatch])

  function handleCheckOut() {
    console.log('This function handles checkout')
  }

  console.log(cartItems)

  function calculateTotalPrice() {
    let totalPrice = 0
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += Number(cartItems[i].qty) * Number(cartItems[i].unit_price)
    }

    return totalPrice
  }

  return (
    <Fragment>
      <h1> Shopping Cart</h1>
      <div>
        {cartItems ? (
          <Row>
            <Col md={9}>
              <Row>
                <Col md={10}></Col>
                <Col md={2}>
                  <h5> Unit Price </h5>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {cartItems.map((item, index) => (
                    <Row key={item.id}>
                      <Col md={4}>
                        <Image
                          src={`http://127.0.0.1:8000${item.image}`}
                          fluid
                        />
                      </Col>
                      <Col md={4}>
                        <h6> {item.title}</h6>
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Col md={7}>
                            <Form.Control
                              as='select'
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addItemToCardAction(item.id, e.target.value)
                                )
                              }
                            >
                              {Array(numberOfItems)
                                .fill()
                                .map((_, x) =>
                                  x === 0 ? (
                                    <option key={x} value={x}>
                                      {x} (delete)
                                    </option>
                                  ) : (
                                    <option key={x} value={x}>
                                      {x}
                                    </option>
                                  )
                                )}
                            </Form.Control>
                          </Col>
                          <Col md={5}>
                            <h6> {item.unit_price} </h6>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <h3> Checkout here</h3>
              <h5>
                {' '}
                Subtotals({cartItems.length} items): {calculateTotalPrice()} ${' '}
              </h5>
              <Button onClick={handleCheckOut}> Proceed to checkout</Button>
            </Col>
          </Row>
        ) : (
          <h1> Your cart is empty </h1>
        )}
      </div>
    </Fragment>
  )
}

export default ShoppingCartPage
