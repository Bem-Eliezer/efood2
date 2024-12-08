import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner-fundo.png'
import instagran from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { Link } from 'react-router-dom'
import { FooterContainer, LinkFooter } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <a href="/">
        <img src={logo} alt="efood" />
      </a>
      <nav>
        <LinkFooter href="https://www.instagram.com/" target="_blank">
          <img src={instagran} alt="instagram" />
        </LinkFooter>
        <LinkFooter href="https://web.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" />
        </LinkFooter>
        <LinkFooter href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter" />
        </LinkFooter>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>{' '}
      <br />
      <p>&copy; 2023, Todos os direitos reservados. Jailson Joventino</p>
    </FooterContainer>
  )
}
