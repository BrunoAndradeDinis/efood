import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import GlobalStyle from './global/globalStyle'
import Header from './components/Header'
import Rotas from './pages/routes'
import Footer from './components/Footer'
import Cart from './containers/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
