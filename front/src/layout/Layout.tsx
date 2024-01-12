import Navbar from './components/Navbar'
import { VerifyToken } from '../auth/VerifyToken'

export default function Layout () {
  if (VerifyToken('TESTE')) {
    return (
          <Navbar />
      )
  } else {
    return null
  }
}
