import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.overlay};
  opacity: 0.7;
`
export const Button = styled.button`
  max-width: 344px;
  width: 100%;
  height: 24px;
  color: ${cores.textPrimary};
  font-size: 14px;
  font-weight: bold;
  border: none;
  background-color: ${cores.backgroundButtonProduct};
  margin-bottom: 8px;
`

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: none;
  justify-content: end;

  &.container--isactive {
    display: flex;
  }
`
export const Aside = styled.aside`
  max-width: 360px;
  width: 0px;
  height: 100vh;
  transition: width 1s ease;
  background-color: ${cores.cartAsideBackgroundColor};
  padding-top: 32px;
  overflow: hidden;
  position: absolute;
  z-index: 1;

  &.aside--isActive {
    width: 100%;
    transition: width 2s ease;
  }

  ul {
    margin: 0 8px;
  }

  li {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bolder;
    color: ${cores.textSecondary};
    margin-left: 8px;
  }

  > ${Button} {
    margin: 0 8px;
  }
  > p {
    line-height: 22px;
    font-size: 14px;
    height: 286px;
    margin-bottom: 24px;
    color: ${cores.textSecondary};
    padding: 0 8px;
  }
`
export const Order = styled.div`
  display: flex;
  width: 344px;
  height: 100px;
  padding: 8px;
  padding-bottom: 12px;
  background-color: ${cores.cartBackgroundColor};
  position: relative;
`
export const Figure = styled.figure`
  width: 80px;
  height: 80px;
  margin-right: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Content = styled.div`
  text-align: left;
  h2 {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const ButtonCard = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const FinalOrder = styled.div`
  width: 344px;
  display: block;
  margin: 0 8px;
  margin-top: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    p {
      display: flex;
      font-weight: bold;
      font-size: 14px;
      color: ${cores.textSecondary};
    }
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 8px;
  display: block;
  margin-bottom: 8px;

  .margin-top {
    margin-top: 24px;
  }
`
export const InpuGroup = styled.div`
  display: block;
  margin: 8px 0;

  input {
    width: 100%;
    height: 32px;
    border-color: transparent;
    background-color: ${cores.backgroundButtonProduct};
    margin-top: 8px;
    border: 3px solid transparent;
  }

  label {
    color: ${cores.textSecondary};
    font-size: 14px;
    font-weight: bold;
  }

  .error {
    border-color: red;
  }
`

export const Row = styled.div`
  display: grid;
  column-gap: 34px;
  align-items: flex-end;
  grid-template-columns: 1fr 1fr;
  input{
    margin 0px;
  }
`
export const RowCard = styled.div`
  display: grid;
  column-gap: 30px;
  align-items: flex-end;
  grid-template-columns: 228px 87px;
  &.custom {
    grid-template-columns: 1fr 1fr;
  }
`
