import './App.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './global/globalStyle'
import Header from './components/Header'
import Rotas from './pages/routes'
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
