import { useMutation } from 'react-query'
import apiConnection from '../../../service/api'
import { setKey } from '../../../auth/verificaChaveDeAutorizacao'
import authKey from '../../../auth/keyAuth'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

const useSingInUser = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const singInUser = async (payload) => {
    const response = await apiConnection.post('/user/login', payload)

    if (response.status === 200) {
      return response.data
    } else if (response.status === 401) {
      throw new Error(response.data)
    } else if (response.status === 403) {
      throw new Error(response.data)
    }
  }

  const mutation = useMutation(singInUser)

  const UseRequestsingInUser = async (email, password) => {
    try {
      const result = await mutation.mutateAsync({
        email,
        password
      })

      if (result) {
        toast({
          title: 'User found, welcome back!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
        setKey('TESTE', authKey)
        navigate('/KingsVault')
      }
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        toast({
          title: 'Erro',
          description: `${error.response.data}`,
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        toast({
          title: 'Erro',
          description: 'Connection error, please try again!.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      }
    }
  }

  return {
    UseRequestsingInUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  }
}

export { useSingInUser }
