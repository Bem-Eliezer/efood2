import styled from 'styled-components'
import { breakPoints, cores } from '../../../../styles'

export const Card2 = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  margin-bottom: 32px;
  padding: 8px;
  width: 320px;
  height: 338px;
  text-align: left;
  position: relative;


   img {
    width: 100%;
    height: 167px;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  line-height: 19px;
`

export const Adicionar = styled.button`
  width: 100%;
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  height: 24px;
  border: none;
  margin-right: 8px;
  font-weight: bold;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.itIsNotVisible {
    display: none;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const Card3 = styled.div`
  background-color: ${cores.vermelho};
  display: flex;
  color: ${cores.textSecondary};
  position: relative;
  z-index: 1;
`
export const DivImage = styled.div`
 export const DivImage = styled.div
  max-width: 280px;
  width: 100%;
  height: 280px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 32px;


  @media (max-width: ${breakPoints.desktop}) {
    max-width: 40%;
  }
    img {
    width: 100%;
    height: 100%;
  }
`

export const Titulo2 = styled.h3`
  color: ${cores.branco};
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  margin-left: 24px;
`
export const Paragrafo = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  width: 650px;
  line-height: 1.7;
  margin-left: 24px;
  margin-right: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }
`
export const Adicionar2 = styled.button`
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  height: 28px;
  text-algin: center;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  margin-bottom: 59px;
  margin-top: 16px;
  margin-left: 24px;
`

export const Div = styled.div`
  @media (max-width: ${breakPoints.desktop}) {
    width: calc(64px - (40% - 100%));
  }
`
export const Fechar = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`
