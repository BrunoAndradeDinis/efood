import Button from '../Button'
import { formatPrice } from '../../utils'

import * as MdIcons from 'react-icons/md'
import React from 'react'
import {
  ModalContainer,
  ContainerImage,
  Title,
  Text,
  ContainerText,
  ModalContent,
  Overlay
} from './styles'
const Close = MdIcons.MdClose as React.ComponentType<
  React.SVGProps<SVGSVGElement>
>
// MdClose is a React SVG component (typed in src/types/react-icons.d.ts)

type ModalProps = {
  title: string
  cover: string
  description: string
  potion: string
  price: number
  openModal: boolean
  closeModal?: () => void
  handleAddItem?: () => void
}

const Modal = ({
  cover,
  title,
  description,
  potion,
  price,
  openModal = false,
  closeModal,
  handleAddItem
}: ModalProps) => {
  function renderTextPotion(potion: string) {
    if (potion === '1 pessoa') {
      return <Text>Serve: {potion}</Text>
    }
    return <Text>Serve: de {potion}</Text>
  }

  return (
    <ModalContainer $isOpen={openModal}>
      <Overlay />

      <ModalContent>
        <ContainerImage>
          <img src={cover} alt={title} />
        </ContainerImage>

        <ContainerText>
          <Title>{title}</Title>
          <Text>{description}</Text>

          {renderTextPotion(potion)}

          <Button
            kind="button"
            displayMode="inlineBlock"
            themeMode="second"
            placeholder={`Adicionar ao carrinho - ${formatPrice(price)}`}
            onClick={handleAddItem}
          />
        </ContainerText>

        <Close onClick={closeModal} />
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
