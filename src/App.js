import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './pages/HomePage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import SingleBookPage from './pages/SingleBookPage'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Bach Vu bookstore project</h1>
          <Route path='/' component={HomePage} exact />
          <Route path='/books/:id' component={SingleBookPage} />
          <Route path='/carts/:id' component={ShoppingCartPage} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
