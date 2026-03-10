import './App.css'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Pages/routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
