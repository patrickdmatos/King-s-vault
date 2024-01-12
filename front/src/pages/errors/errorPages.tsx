import { Button, Image, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Img404 from '../../assets/404.png'
import Img401 from '../../assets/401.png'

export function NotFouded404() {
    const navigate = useNavigate()

    return (
        <VStack mt={20}>
            <Image src={Img404} />
            <Text fontSize={20}>
                Poxa! <strong>Não foi possível encontrar</strong> o caminho para essa página.
            </Text>
            <Button onClick={() => { navigate('/Kingsvault/home') }} mt={3} bg='grayScale.200'>
                Voltar Para Tela Inicial
            </Button>
        </VStack>
    )
}

export function NotAuthorized401() {
    const navigate = useNavigate()

    return (
        <VStack mt={20}>
            <Image src={Img401} />
            <Text fontSize={20}>
                Usuario <strong>Não autorizado!</strong> faça login para continuar.
            </Text>
            <Button onClick={() => { navigate('/login') }} mt={3} bg='grayScale.200'>
                Fazer login
            </Button>
        </VStack>
    )
}
