import { Link } from 'react-router-dom'
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
      <Link to="/">0 produto(s) no carrinho</Link>
    </HeaderProductComponent>
  )
}

export default Header
