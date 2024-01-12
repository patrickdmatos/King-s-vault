import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {NotAuthorized401, NotFouded404} from "./pages/errors/errorPages";
import { VerifyToken } from "./auth/VerifyToken";
import Layout from "./layout/Layout";
import Login from "./pages/noAuth/login/Login";
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: VerifyToken('errou') ? <div>Bem vindo</div> : <Login />,
    errorElement: <NotFouded404 />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFouded404 />
  },
  {
    path: "Kingsvault",
    element: VerifyToken('TESTE') ? <Layout /> : <NotAuthorized401 />,
  },
]);

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
