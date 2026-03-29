import styled from 'styled-components'

type CardProps = {
  $card: 'primary' | 'second'
}

export const CardContainer = styled.div`
  max-width: 472px;
  height: 498px;
  display: block;
  position: relative;
`

export const ContainerTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: flex;
  gap: 8px;
`

export const CardImage = styled.div<CardProps>`
  width: 100%;
  border: 1px solid transparent;
  background-color: ${(props) => (props.$card === 'primary' ? '' : '#E66767')};
  height: ${(props) => (props.$card === 'primary' ? '298px' : '298px')};
  padding: ${(props) => (props.$card === 'primary' ? 0 : '8px 8px 0 8px')};
  overflow: hidden;
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div<CardProps>`
  display: block;
  padding: 8px;
  background-color: ${(props) =>
    props.$card === 'primary' ? '#fff' : '#E66767'};
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${(props) =>
    props.$card === 'primary' ? '#E66767' : 'transparent'};
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2<CardProps>`
  color: ${(props) => (props.$card === 'primary' ? '#E66767' : '#FFEBD9')};
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Rating = styled.span`
  color: #e66767;
  font-size: 18px;
  font-weight: 700;
`

export const Star = styled.span`
  font-size: 18px;
  color: #e66767;
`

export const Text = styled.p<CardProps>`
  color: ${(props) => (props.$card === 'primary' ? '#E66767' : '#FFEBD9')};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  margin-top: 0;
`

export const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`
