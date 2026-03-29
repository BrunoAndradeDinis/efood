import { RestaurantsDataProps } from '../types'

export const mockRestaurants: RestaurantsDataProps[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: '4.9',
    destacado: true,
    tipo: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: 'https://placehold.co/472x217'
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destacado: false,
    tipo: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis. O conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inigualável! Peça já!',
    capa: 'https://placehold.co/472x217'
  },
  {
    id: 3,
    titulo: 'Bella Tavola Italiana',
    avaliacao: '4.7',
    destacado: true,
    tipo: 'Italiana',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes terras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    capa: 'https://placehold.co/472x217'
  },
  {
    id: 4,
    titulo: 'Casa das Delícias Árabes',
    avaliacao: '4.8',
    destacado: false,
    tipo: 'Árabe',
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera aconchegante e confortável.',
    capa: 'https://placehold.co/472x217'
  }
]
