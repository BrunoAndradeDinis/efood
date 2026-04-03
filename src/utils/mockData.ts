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
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Sushi Combinado',
        descricao:
          'Variedade de sushis frescos com ingredientes premium e muito sabor',
        foto: 'https://placehold.co/300x300',
        porcao: '6 peças',
        preco: 45.5
      },
      {
        id: 2,
        nome: 'Sashimi Especial',
        descricao: 'Fatias finas de salmão e atum do melhor, cortadas na hora',
        foto: 'https://placehold.co/300x300',
        porcao: '8 peças',
        preco: 52.0
      },
      {
        id: 3,
        nome: 'Tô de Ramen',
        descricao: 'Caldo quente e saboroso com macarrão na textura perfeita',
        foto: 'https://placehold.co/300x300',
        porcao: '500ml',
        preco: 38.0
      },
      {
        id: 4,
        nome: 'Gyoza Frito',
        descricao: 'Pastel japonês crocante recheado com carne e vegetais',
        foto: 'https://placehold.co/300x300',
        porcao: '6 peças',
        preco: 28.5
      },
      {
        id: 5,
        nome: 'Temaki de Salmão',
        descricao: 'Cone de alga nori recheado com salmão fresco e gergelim',
        foto: 'https://placehold.co/300x300',
        porcao: '2 peças',
        preco: 35.0
      },
      {
        id: 6,
        nome: 'Uramaki com Cream Cheese',
        descricao: 'Sushi invertido com cream cheese e salmão defumado',
        foto: 'https://placehold.co/300x300',
        porcao: '8 peças',
        preco: 42.0
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destacado: false,
    tipo: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis. O conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inigualável! Peça já!',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 7,
        nome: 'Carbonara',
        descricao:
          'Clássica receita romana com guanciale, ovos e queijo pecorino',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 48.0
      },
      {
        id: 8,
        nome: 'Bolonhesa',
        descricao: 'Massa fresca com molho de carne moída ao molho vermelho',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 42.5
      },
      {
        id: 9,
        nome: 'Pizza Margarita',
        descricao: 'Clássica pizza italiana com tomate, mozzarela e manjericão',
        foto: 'https://placehold.co/300x300',
        porcao: '35cm',
        preco: 55.0
      },
      {
        id: 10,
        nome: 'Risoto de Funghi',
        descricao: 'Risoto cremoso com cogumelos secos e queijo parmesão',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 50.0
      },
      {
        id: 11,
        nome: 'Lasanha à Bolonhesa',
        descricao: 'Camadas de massa, molho de carne e queijo derretido',
        foto: 'https://placehold.co/300x300',
        porcao: '500g',
        preco: 46.0
      },
      {
        id: 12,
        nome: 'Pizza Quattro Formaggi',
        descricao: 'Pizza com mozzarela, gorgonzola, parmesão e brie',
        foto: 'https://placehold.co/300x300',
        porcao: '35cm',
        preco: 58.0
      }
    ]
  },
  {
    id: 3,
    titulo: 'Bella Tavola Italiana',
    avaliacao: '4.7',
    destacado: true,
    tipo: 'Italiana',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes terras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 13,
        nome: 'Tagliatelle ao Vinho Tinto',
        descricao:
          'Massa fresca com molho de carne ao vinho nos melhores temperos',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 52.0
      },
      {
        id: 14,
        nome: 'Linguine com Frutos do Mar',
        descricao:
          'Linguine com camarão, mexilhão e lula em molho de tomate branco',
        foto: 'https://placehold.co/300x300',
        porcao: '450g',
        preco: 62.0
      },
      {
        id: 15,
        nome: 'Ossobuco à Milanese',
        descricao:
          'Jarrete bovino macio, cozido lentamente com legumes e vinho',
        foto: 'https://placehold.co/300x300',
        porcao: '300g',
        preco: 68.0
      },
      {
        id: 16,
        nome: 'Risoto ai Funghi Porcini',
        descricao:
          'Risoto cremoso com cogumelos porcini frescos e vinho branco',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 54.0
      },
      {
        id: 17,
        nome: 'Pappardelle com Ragu',
        descricao: 'Massa larga ao molho de carne de primeira qualidade',
        foto: 'https://placehold.co/300x300',
        porcao: '400g',
        preco: 50.0
      },
      {
        id: 18,
        nome: 'Salmão ao Forno',
        descricao: 'Filé de salmão fresco assado com ervas e limão siciliano',
        foto: 'https://placehold.co/300x300',
        porcao: '300g',
        preco: 66.0
      }
    ]
  },
  {
    id: 4,
    titulo: 'Casa das Delícias Árabes',
    avaliacao: '4.8',
    destacado: false,
    tipo: 'Árabe',
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera aconchegante e confortável.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 19,
        nome: 'Shawarma de Carne',
        descricao: 'Carne especiada enrolada em pão sírio com alface e tomate',
        foto: 'https://placehold.co/300x300',
        porcao: '1 unidade',
        preco: 32.0
      },
      {
        id: 20,
        nome: 'Falafel',
        descricao: 'Bolinhos crocantes de grão-de-bico com temperos árabes',
        foto: 'https://placehold.co/300x300',
        porcao: '5 peças',
        preco: 18.0
      },
      {
        id: 21,
        nome: 'Hummus com Pita',
        descricao: 'Pasta de grão-de-bico cremosa com tahine, alho e limão',
        foto: 'https://placehold.co/300x300',
        porcao: '300g com pita',
        preco: 24.0
      },
      {
        id: 22,
        nome: 'Kebab de Cordeiro',
        descricao: 'Espeto de cordeiro marinado em especiarias árabes',
        foto: 'https://placehold.co/300x300',
        porcao: '250g',
        preco: 56.0
      },
      {
        id: 23,
        nome: 'Tabule',
        descricao: 'Salada fresca de trigo, tomate, cebola, salsa e limão',
        foto: 'https://placehold.co/300x300',
        porcao: '300g',
        preco: 22.0
      },
      {
        id: 24,
        nome: 'Baklavas',
        descricao: 'Doce de massa folhada com mel, pistache e nozes',
        foto: 'https://placehold.co/300x300',
        porcao: '3 peças',
        preco: 28.0
      }
    ]
  }
]
