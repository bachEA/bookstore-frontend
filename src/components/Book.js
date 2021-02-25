import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Book({ book }) {
  const image = `http://127.0.0.1:8000${book.image}`
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/books/${book.id}`}>
        <Card.Img src={image} />
      </Link>
      <Card.Body>
        <Card.Title> {book.title}</Card.Title>
        <Card.Text> {book.description}</Card.Text>
        <Card.Text>
          {book.total_rating_value} from {book.total_rating_count} reviews
        </Card.Text>
        <Card.Text> Price {book.unit_price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book
