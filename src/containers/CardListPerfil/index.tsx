import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../services/api'
import { MenuDataProps, RestaurantsDataProps } from '../../types'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
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
  const [restaurant, setRestaurant] = useState<RestaurantsDataProps | null>(
    null
  )
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    async function fetchRestaurant() {
      if (!id) return
      const r = await getRestaurantById(parseInt(id))
      if (r) setRestaurant(r)
    }
    fetchRestaurant()
  }, [id])

  function handleCardClick(itemId: number) {
    setSelectedItemId(itemId)
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
    setSelectedItemId(null)
  }

  function addItemToCart(item: MenuDataProps) {
    // Integrar com o carrinho se existir; por enquanto apenas log
    console.log('Adicionar ao carrinho:', item)
    setShowModal(false)
  }

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
        handleClick={() => handleCardClick(product.id)}
      />
    ))
  }

  function renderModal() {
    if (!selectedItemId || !restaurant) return null

    const selectedItem = restaurant.cardapio.find(
      (item) => item.id === selectedItemId
    )

    if (!selectedItem) return null

    return (
      <Modal
        title={selectedItem.nome}
        description={selectedItem.descricao}
        cover={selectedItem.foto}
        potion={selectedItem.porcao}
        price={selectedItem.preco}
        openModal={showModal}
        closeModal={handleCloseModal}
        handleAddItem={() => addItemToCart(selectedItem)}
      />
    )
  }

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <ContainerListPerfil>
      {renderModal()}

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
