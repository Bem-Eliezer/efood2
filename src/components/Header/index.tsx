import { Link, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeTheCart } from '../../Store/reducers/Cart'
import { RootReducer } from '../../Store'

import {
  HeaderBanner,
  HeaderContainer,
  HeaderTitle,
  LinkA,
  LinkButton
} from './styles'

import logoEfood from '../../assets/images/logo.svg'

export type PropsHeader = {
  typeheader?: string
  nationality?: string
  image?: string
  restaurantname?: string
}

const Header = ({ nationality, image, restaurantname }: PropsHeader) => {
  const [typeHeader, setTypeHeader] = useState('normal')
  const location = useLocation()
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname == `/Perfil/${id}`) {
      setTypeHeader('customized')
    } else if (location.pathname == '') {
      setTypeHeader('normal')
    }
  }, [location])

  function getActiveTheCart() {
    dispatch(activeTheCart())
  }

  return (
    <HeaderContainer typeheader={typeHeader}>
      <div className="container">
        <nav>
          <LinkButton to="/">Restaurantes</LinkButton>
          <Link to="/">
            <h1>
              <img src={logoEfood} alt="efood" />
            </h1>
          </Link>
          <LinkA onClick={getActiveTheCart}>
            {items.length} produto(s) no carrinho
          </LinkA>
        </nav>
        <HeaderTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HeaderTitle>
      </div>
      <HeaderBanner image={image}>
        <div className="container">
          <h2>{nationality}</h2>
          <h3>{restaurantname}</h3>
        </div>
      </HeaderBanner>
    </HeaderContainer>
  )
}

export default Header
