import { Container, Row, Col } from 'react-bootstrap'
import books from '../books'
import Book from '../components/Book'

function HomePage() {
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
