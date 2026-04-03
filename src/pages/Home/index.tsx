import Restaurantes from '../../components/Restaurants'
import { Container } from '../../global/globalStyle'
import { HomeContainer } from './styles'

const Home = () => (
  <HomeContainer>
    <Container>
      <Restaurantes />
    </Container>
  </HomeContainer>
)

export default Home
