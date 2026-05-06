import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import Products from './Products'

import * as S from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function closeCart() {
    dispatch(close())
  }

  return (
    <S.CartContainer $isOpen={isOpen}>
      <S.Overlay onClick={closeCart} />
      <Products />
    </S.CartContainer>
  )
}

export default Cart
