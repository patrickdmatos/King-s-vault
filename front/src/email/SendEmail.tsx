import { Input, Textarea, Button, Flex, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import React, { useState } from 'react'
// import { useFilterAllUser } from './hooks/useFilterAllUser'

const EmailForm = () => {
  const toast = useToast()
  // const { data } = useFilterAllUser()
  // const dadosUsuario = data || []
  const [, setSubmittedEmail] = useState('')
  const [password, setPassword] = useState('')
  const [exibeForm, setExibeForm] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const sendPasswordResetEmail = async () => {
    try {
      const form = document.querySelector('form')
      if (form) {
        await emailjs.sendForm('service_4waq6yd', 'template_rg299fl', form, 'JeWPye1NnUy5lRiZ3')
        toast({
          title: 'Email enviado.',
          description: 'Consulte seu email para poder acessar.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar email.',
        description: 'Verifique o email digitado e tente novamente.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  const sendEmail = async (e: { preventDefault: () => void; target: { email: { value: string } } }) => {
    const userEmail = e.target.email.value.toLowerCase().trim()
    // const userExists = dadosUsuario.find(user => user.email.toLowerCase() === userEmail)

    // if (userExists) {
    setSubmittedEmail(userEmail)
    setPassword('userExists.password')
    sendPasswordResetEmail()
    // } else {
    //   toast({
    //     title: 'Email não localizado.',
    //     description: 'Email não encontrado na lista de usuários, cria uma conta para poder acessar.',
    //     status: 'warning',
    //     duration: 9000,
    //     isClosable: true,
    //     position: 'top-right'
    //   })
    // }
  }

  return (
    <Flex>
      <Button
        _hover={{ color: 'blue.400', bg: 'transparent' }}
        color={'blue.700'}
        onClick={() => {
          setExibeForm(!exibeForm)
          setOverlay(<OverlayOne />)
          onOpen()
        }} bg={'transparent'}>Esqueceu sua password?</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Alteração de password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Preencha o email para recuperação de password:</Text>
            <form onSubmit={sendEmail}>
              <Input type="email" name="email" placeholder="Seu e-mail" />
              <Textarea
                display={'none'}
                value={password}
                readOnly
                name="message"
                placeholder="Sua mensagem"
              />
              <Flex mt={6} gap={2} alignItems={'center'} justifyContent={'flex-end'}>
                <Button onClick={onClose}>Cancelar</Button>
                <Button
                  color={'white'}
                  bg={'blue.300'}
                  onClick={() => {
                    setExibeForm(!exibeForm)
                    onClose()
                  }} type="submit">Enviar Email</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>

      </Modal>
    </Flex>
  )
}

export default EmailForm
