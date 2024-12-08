import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'

import Rodape from './components/Rodape'
import { Provider } from 'react-redux'
import { store } from './Store'
import HomePage from './components/Pages/Home/Page'
import path from 'path'
import Perfil from './components/Pages/Perfil/Pagina'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/Perfil/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Rodape />
    </Provider>
  )
}

export default App