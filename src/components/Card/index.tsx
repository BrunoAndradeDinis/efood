import Button from '../Button'
import Tag from '../Tag'

import {
  Title,
  Text,
  CardHeader,
  CardImage,
  CardContainer,
  ContainerTags,
  Cover,
  CardContent,
  RatingContainer,
  Rating,
  Star
} from './styles'

type CardProps = {
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  rating?: string
  tagType?: string | undefined
  tagHighlight?: boolean | undefined
  to?: string
  handleClick?: () => void
}

const Card = ({
  card = 'primary',
  kindButton = 'link',
  title,
  cover,
  description,
  rating,
  nameButton,
  tagType,
  tagHighlight,
  to,
  handleClick
}: CardProps) => {
  function renderTypeButton(kind: string) {
    return (
      <Button
        kind={kindButton}
        placeholder={nameButton}
        onClick={kind === 'button' ? handleClick : undefined}
        to={kind === 'link' ? `${to}` : undefined}
        displayMode={card === 'primary' ? 'inlineBlock' : 'fullWidth'}
        themeMode={card}
      />
    )
  }

  function renderTags(type: string, highlight: boolean | undefined) {
    if (type && highlight === true) {
      return (
        <ContainerTags>
          <Tag placeholder="Destaque da semana" />
          <Tag placeholder={type} />
        </ContainerTags>
      )
    }

    return (
      <ContainerTags>
        <Tag placeholder={type} />
      </ContainerTags>
    )
  }

  function renderText(description: string) {
    if (description.length > 140) {
      return description.slice(0, 145) + '...'
    }
    return description
  }

  return (
    <CardContainer>
      <CardImage $card={card}>
        <Cover src={cover} alt={cover} />
      </CardImage>

      <CardContent $card={card}>
        <CardHeader>
          <Title $card={card}>{title}</Title>

          <RatingContainer>
            {rating && <Rating>{rating}</Rating>}
            {rating && <Star>⭐</Star>}
          </RatingContainer>
        </CardHeader>

        <Text $card={card}>{renderText(description)}</Text>

        {renderTypeButton(kindButton)}
      </CardContent>

      {tagType && renderTags(tagType, tagHighlight)}
    </CardContainer>
  )
}

export default Card
