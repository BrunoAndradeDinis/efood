import { FooterContainer, FooterText, SocialMediaIcons } from './styles'
import logo from '../../images/logo.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <SocialMediaIcons>
        <Link to="/">
          <img src={instagram} alt="Instagram" />
        </Link>
        <Link to="/">
          <img src={facebook} alt="Facebook" />
        </Link>
        <Link to="/">
          <img src={twitter} alt="Twitter" />
        </Link>
      </SocialMediaIcons>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
