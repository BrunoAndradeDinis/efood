import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

type ButtonProps = {
  $displayMode?: 'fullWidth' | 'inlineBlock'
  $themeMode?: 'primary' | 'second'
}

const baseStyleButton = css<ButtonProps>`
  width: ${(props) => (props.$displayMode === 'fullWidth' ? '100%' : 'auto')};
  display: ${(props) =>
    props.$displayMode === 'fullWidth' ? 'block' : 'inline-block'};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) =>
    props.$themeMode === 'primary' ? '#E66767' : '#FFEBD9'};
  color: ${(props) => (props.$themeMode === 'primary' ? '#FFF8F2' : '#E66767')};
  border: none;
`

export const ButtonContainer = styled.button<ButtonProps>`
  ${baseStyleButton}
  cursor: pointer;
`

export const ButtonContainerLink = styled(Link)<ButtonProps>`
  ${baseStyleButton}
  text-decoration: none;
`
