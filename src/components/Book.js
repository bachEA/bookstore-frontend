import { Card } from 'react-bootstrap'

function Book({ book }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/books/${book.id}`}>
        <Card.Img src={book.fields.photo} />
      </a>
      <Card.Body>
        <Card.Title> {book.fields.title}</Card.Title>
        <Card.Text> {book.fields.description}</Card.Text>
        <Card.Text>
          {book.fields.total_rating_value} from {book.fields.total_rating_count}
          reviews
        </Card.Text>
        <Card.Text> Price {book.fields.unit_price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book
