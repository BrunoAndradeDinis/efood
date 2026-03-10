import { createGlobalStyle } from 'styled-components'

export const colors = {
  bgColor: '#FFF8F2',
  txtColor: '#E66767',
  bgTagColor: '#E66767',
  txtTagColor: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:  'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body{
    background: ${colors.bgColor};
    color: ${colors.txtColor};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
`
