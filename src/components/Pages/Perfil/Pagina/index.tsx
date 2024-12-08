/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Header from '../../../Header'
import ProductCard from '../ProducCard'
import { MainPerfil } from './styles'
import Menu from '../../../../model/Menu/Menu'
import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantByIdQuery(id!)
  let menu: Menu[] = []

  if (restaurant) {
    const { cardapio } = restaurant
    menu = cardapio
  }

  return (
    <>
      <div>
        <Header
          image={restaurant?.capa}
          nationality={restaurant?.tipo}
          restaurantname={restaurant?.titulo}
        />
        <MainPerfil className="container">
          {menu.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              porcao={product.porcao}
              preco={product.preco}
              nome={product.nome}
              foto={product.foto}
              descricao={product.descricao}
            />
          ))}
        </MainPerfil>
      </div>
    </>
  )
}

export default Perfil
