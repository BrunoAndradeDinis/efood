import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../images/logo.png'
import {
  HeaderComponent,
  HeaderProductComponent,
  HeaderContent,
  Titulo
} from './styles'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function handleOpenCart() {
    dispatch(open())
  }

  return pathname === '/' ? (
    <HeaderComponent>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <HeaderContent>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </HeaderContent>
    </HeaderComponent>
  ) : (
    <HeaderProductComponent className="produtos">
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <span onClick={handleOpenCart} style={{ cursor: 'pointer' }}>
        {items.length} produto(s) no carrinho
      </span>
    </HeaderProductComponent>
  )
}

export default Header
