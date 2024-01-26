import { useQuery } from 'react-query'
import apiConnection from '../../service/api'

const useFilterAllUser = () => {
  return useQuery(
    ['useGetFilterAllUser'],
    async () => {
      const response = await apiConnection.get('/user')
      return response.data
    },
    {
      refetchInterval: 10000,
      refetchOnWindowFocus: false,
      staleTime: 10000
    }
  )
}

export { useFilterAllUser }
