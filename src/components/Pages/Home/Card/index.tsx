import Tag from '../../../Tag'
import Estrelinha from '../../../../assets/images/estrelinha.svg'

import {
  ContainerCard,
  Titulo,
  Descricao,
  TituloENota,
  Nota,
  Estrela,
  Infos,
  ImageCard,
  ButtonCard
} from './styles'

export type PropsCard = {
  id: number
  restaurant_name: string
  description: string
  score: number
  extra_content: string[]
  image?: string
}

export default function Card({
  id,
  restaurant_name,
  description,
  score,
  extra_content,
  image
}: PropsCard) {
  return (
    <ContainerCard>
      <Infos>
        {extra_content.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ImageCard image={image}></ImageCard>
      <TituloENota>
        <Titulo>{restaurant_name}</Titulo>
        <Nota>
          {score}
          <Estrela>
            <img src={Estrelinha} alt="estrela" />
          </Estrela>
        </Nota>
      </TituloENota>
      <Descricao>{description}</Descricao>
      <ButtonCard to={`/Perfil/${id}`}>Saiba mais</ButtonCard>
    </ContainerCard>
  )
}
