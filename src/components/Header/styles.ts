import styled from 'styled-components'
import backgroundImage from '../../images/header-background.png'
import theme from '../../global/theme'

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 100vw;
  position: relative;

  a {
    margin-top: 40px;
    margin-bottom: 64px;
    color: ${theme.Colors.text};
    font-size: 18px;
    font-weight: 900;
  }

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
  }
`

export const HeaderProductComponent = styled(HeaderComponent)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 170px;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 539px;
  margin-top: 76px;
`

export const Titulo = styled.h1`
  font-size: ${theme.fontSizes.headingXl};
  text-align: center;
`
