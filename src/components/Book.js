import { Card } from 'react-bootstrap'

function Book({ book }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/books/${book.id}`}>
        <Card.Img src={book.photo} />
      </a>
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
