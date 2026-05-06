import { useDispatch, useSelector } from 'react-redux'
import * as PiIcons from 'react-icons/pi'
import React from 'react'

import { remove } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { formatPrice, getTotalPrice } from '../../../utils'
import { MenuDataProps } from '../../../types'
import Button from '../../../components/Button'

import * as S from '../styles'

const Trash = PiIcons.PiTrash as React.ComponentType<
  React.SVGProps<SVGSVGElement>
>

const Products = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  function handleRemoveItem(id: number) {
    dispatch(remove(id))
  }

  function RenderCartItem(products: MenuDataProps[]) {
    return products.map((product) => (
      <S.CartItem key={product.id}>
        <img src={product.foto} alt={product.nome} />

        <div>
          <S.Title>{product.nome}</S.Title>
          <S.Price>{formatPrice(product.preco)}</S.Price>
        </div>

        <Trash fill="#E66767" onClick={() => handleRemoveItem(product.id)} />
      </S.CartItem>
    ))
  }

  return (
    <S.Sidebar>
      {items.length > 0 ? (
        <>
          {RenderCartItem(items)}

          <S.TotalContainer>
            <S.Text>Valor total</S.Text>
            <S.Text>{formatPrice(totalPrice)}</S.Text>
          </S.TotalContainer>

          <Button
            placeholder="Continuar com a entrega"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
          />
        </>
      ) : (
        <S.Text style={{ textAlign: 'center' }}>
          O carrinho está vazio, adicione pelo menos um produto para prosseguir
          com o pedido.
        </S.Text>
      )}
    </S.Sidebar>
  )
}

export default Products
