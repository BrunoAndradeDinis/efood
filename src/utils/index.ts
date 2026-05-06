import { MenuDataProps } from '../types'

export const formatPrice = (value: number) => {
  try {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  } catch (e) {
    return `R$ ${value}`
  }
}

export const getTotalPrice = (items: MenuDataProps[]) => {
  return items.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.preco!)
  }, 0)
}

export default formatPrice
