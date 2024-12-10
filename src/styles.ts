import { createGlobalStyle } from 'styled-components'

export const cores = {
  textPrimary: '#E66767',
  backgroundButton: '#E66767',
  textSecondary: '#FFFFFF',
  footerBackground: '#FFEBD9',
  backgroundTag: '#E66767',
  vermelho: '#E66767',
  branco: '#fff',
  bege: '#FFEBD9',
  creme: '#FFF8F2',
  overlay: '#000',
  backgroundButtonProduct: '#FFEBD9',
  cartAsideBackgroundColor: '#E66767',
  cartBackgroundColor: '#FFEBD9'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '400px'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  }

  body {
  background-color: ${cores.creme};
  color: ${cores.vermelho};

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }
`
