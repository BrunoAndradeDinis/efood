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

export interface DeliveryDataProps {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
  payment: {
    name: string
    cardNumber: string
    code: string
    expires: {
      month: string
      year: string
    }
  }
}

export interface ProductProps {
  id: number
  price: number
}

export interface PurchasePayloadProps {
  products: ProductProps[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}
