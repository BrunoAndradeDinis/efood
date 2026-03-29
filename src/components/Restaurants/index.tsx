import { useEffect, useState } from 'react'
import { getAllRestaurants } from '../../services/api'
import { RestaurantsDataProps } from '../../types'
import Card from '../Card'
import { RestaurantsContainer } from './styles'

const Restaurantes = () => {
  const [data, setData] = useState<RestaurantsDataProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const restaurants = getAllRestaurants()
    setData(restaurants)
    setLoading(false)
  }, [])

  if (loading) return <h3>Carregando...</h3>

  return (
    <>
      <RestaurantsContainer>
        {data.map((item: RestaurantsDataProps) => (
          // <div>
          <Card
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/${item.id}`}
            title={item.titulo}
            description={item.descricao}
            rating={item.avaliacao}
            tagType={item.tipo}
            tagHighlight={item.destacado}
            cover={item.capa}
            key={item.id}
          />
          // </div>
        ))}
      </RestaurantsContainer>
    </>
  )
}

export default Restaurantes
