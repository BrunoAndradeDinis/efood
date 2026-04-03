export interface MenuDataProps {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export interface RestaurantsDataProps {
  id: number
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: MenuDataProps[]
}
