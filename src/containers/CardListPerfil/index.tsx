import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../services/api'
import { MenuDataProps } from '../../types'
import Card from '../../components/Card'
import { Container } from '../../global/globalStyle'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'

const CardListPerfil = () => {
  const { id } = useParams()
  const restaurant = id ? getRestaurantById(parseInt(id)) : undefined

  function renderProductList(products: MenuDataProps[]) {
    if (!products || products.length === 0) {
      return (
        <TextMessage>
          Não existem ainda produtos para este restaurante
        </TextMessage>
      )
    }

    return products.map((product) => (
      <Card
        key={product.id}
        card="second"
        kindButton="button"
        nameButton="Adicionar ao carrinho"
        title={product.nome}
        description={product.descricao}
        cover={product.foto}
        handleClick={() => console.log('Adicionado ao carrinho:', product.nome)}
      />
    ))
  }

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <ContainerListPerfil>
      <BannerContainer
        key={restaurant.id}
        style={{ backgroundImage: `url(${restaurant.capa})` }}
      >
        <Container>
          <SubTitle>{restaurant?.tipo}</SubTitle>
          <Title>{restaurant?.titulo}</Title>
        </Container>
      </BannerContainer>

      <Container>
        <CardListContainer key={restaurant.id}>
          {renderProductList(restaurant.cardapio)}
        </CardListContainer>
      </Container>
    </ContainerListPerfil>
  )
}

export default CardListPerfil
