import Book from '../components/Book'
import books from '../books'

import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'react-bootstrap'

function SingleBookPage({ match }) {
  const id = match.params.id
  const book = books[id - 1]

  return (
    <div>
      <h1> This is a single book page</h1>
      <Row>
        <Col md={6}>
          <Card className='my-3 p-3 rounded'>
            <Card.Img src={book.fields.photo}></Card.Img>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='my-3 p-3 rounded'>
            <Card.Title> {book.fields.title}</Card.Title>
            <Card.Text> {book.fields.description}</Card.Text>
            <Card.Text>
              {book.fields.total_rating_value} from{' '}
              {book.fields.total_rating_count} reviews
            </Card.Text>
            <Card.Text> Price {book.fields.unit_price}</Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SingleBookPage
