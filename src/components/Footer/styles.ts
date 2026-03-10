import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: #ffebd9;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    height: 57.5px;
    margin-bottom: 32.5px;
  }
`

export const SocialMediaIcons = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const FooterText = styled.p`
  color: ${colors.txtColor};
  font-size: 10px;
  margin: 0;
  width: 100%;
  max-width: 480px;
`
