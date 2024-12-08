import { useState } from 'react'
import { Descricao } from '../../Home/Card/styles'

import * as styles from './styles'
import fechar from '../../../../assets/images/fechar.png'
import {
  Adicionar,
  Adicionar2,
  Card2,
  Card3,
  Div,
  DivImage,
  Modal,
  Paragrafo,
  Titulo,
  Titulo2
} from './styles'
import Menu from '../../../../model/Menu/Menu'
import { getDescription } from '../../../Utils/function'
import { useDispatch } from 'react-redux'
import { activeTheCart, add } from '../../../../Store/reducers/Cart'

export default function ProductCard(menu: Menu) {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  function setModal1() {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const addItem = () => {
    dispatch(add(menu))
    setModal1()
    dispatch(activeTheCart())
  }
  return (
    <>
      <Card2>
        <img src={menu.foto} alt={menu.nome} />
        <Titulo>{menu.nome}</Titulo>
        <Descricao>{getDescription(menu.descricao, 192)}</Descricao>
        <Adicionar onClick={setModal1}>Adicionar ao carrinho</Adicionar>
      </Card2>
      {modal && (
        <styles.Modal className={modal ? '' : 'IsNotvisible'}>
          <styles.Card3 className="container">
            <DivImage>
              <img className={menu.nome} src={menu.foto} />
            </DivImage>
            <Div>
              <styles.Titulo2>{menu.nome}</styles.Titulo2>
              <styles.Paragrafo>
                {menu.descricao}
                <br />
                <br />

                <span>Serve: de {menu.porcao}</span>
              </styles.Paragrafo>
              <styles.Adicionar2
                onClick={addItem}
                title="Adicionar ao carrinho"
              >
                Adicionar ao carrinho - R$ {menu.preco}
              </styles.Adicionar2>
              <styles.Fechar>
                <img
                  className="fechar"
                  src={fechar}
                  onClick={() => {
                    setModal1()
                  }}
                />
              </styles.Fechar>
            </Div>
          </styles.Card3>

          <div className="overlay" onClick={setModal1}></div>
        </styles.Modal>
      )}
    </>
  )
}
