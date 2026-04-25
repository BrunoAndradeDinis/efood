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

export default formatPrice
