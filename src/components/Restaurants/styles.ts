import styled from 'styled-components'
import { colors } from '../../styles'

export const Principal = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.bgColor};
  height: 1490px;
`

export const Card = styled.div`
  background-color: ${colors.txtColor};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const CardTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  color: ${colors.bgColor};
`

export const CardDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 1rem;
`

export const CardPrice = styled.p`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`
