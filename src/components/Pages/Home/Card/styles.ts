import styled from 'styled-components'
import { cores } from '../../../../styles'
import { TagContainer } from '../../../Tag/styles'
import { Link } from 'react-router-dom'
import { PropsCard } from '.'

export const ImageCard = styled.div<
  Omit<
    PropsCard,
    'restaurant_name' | 'description' | 'score' | 'extra_content' | 'id'
  >
>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 217px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ContainerCard = styled.div`
  position: relative;
  background-color: ${cores.branco};
  width: 472px;
  height: 400px;
  color: ${cores.vermelho};
`

export const TituloENota = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: 8px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-left: 8px;
  display: flex;
  align-items: center;
`

export const Nota = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 16px;
  padding-right: 8px;
`
export const Estrela = styled.div`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`
export const Descricao = styled.p`
  margin-bottom: 8px;
  padding: 0 8px;
  font-size: 14px;
  font-height: 1.5;
`
export const ButtonCard = styled(Link)`
  text-decoration: none;
  background-color: ${cores.backgroundButton};
  color: ${cores.textSecondary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  position: absolute;
  bottom: 8px;
  left: 8px;
`
