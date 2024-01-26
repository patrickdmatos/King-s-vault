import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/home/Home'
import NaoAutorizado401 from './pages/errorsPages/NaoAutorizado401'
import NaoLocalizado404 from './pages/errorsPages/NaoLocalizado404'
import Logar from './pages/logar/Logar'
import { verificarChave } from './auth/verificaChaveDeAutorizacao'
import Registrar from './pages/registrar/Registrar'
import NoAuthHome from './pages/noAuth/NoAuthHome'

export default function Routes () {
  const routing = useRoutes([
    {
      path: '/KingsVault',
      element: verificarChave('TESTE') ? <Home /> : <NoAuthHome />,
      children: [
        {
          path: 'bankAccounts',
          element: verificarChave('TESTE') ? <Home /> : <NaoAutorizado401 />
        },
        {
          path: 'transictions',
          element: verificarChave('TESTE') ? <Home /> : <NaoAutorizado401 />
        },
        {
          path: 'CreditCards',
          element: verificarChave('TESTE') ? <Home /> : <NaoAutorizado401 />
        }
      ]
    },
    {
      path: '/',
      children: [
        { path: '/home', element: <NoAuthHome /> },
        { path: '/login', element: <Logar /> },
        { path: '/Create-Account', element: <Registrar /> },
        { path: '*', element: <NaoLocalizado404 /> }
      ]
    }
  ])

  return routing
}
