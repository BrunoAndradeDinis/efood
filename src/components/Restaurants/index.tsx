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
    async function fetchData() {
      const restaurants = await getAllRestaurants()
      setData(restaurants)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) return <h3>Carregando...</h3>

  return (
    <>
      <RestaurantsContainer>
        {data.map((item: RestaurantsDataProps) => (
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
        ))}
      </RestaurantsContainer>
    </>
  )
}

export default Restaurantes
