// Login.jsx
import { Box, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      // Aqui você pode adicionar a lógica de autenticação com o servidor
      console.log('Form Values:', values);
      // Exemplo: enviar os dados para o servidor para autenticação
    },
  });

  return (
      <Box
        width={"300px"}
        margin={"auto"}
        marginTop={"12%"}
        padding={"20px"}
        borderRadius={"8px"}
        boxShadow={"md"}
        textAlign={"center"}
        bg={"gray.700"}
      >
        <Heading size="md" mb="4">
          Login - king´s Vault
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormControl mb="4" isInvalid={formik.touched.username && formik.errors.username}>
            <FormLabel htmlFor="username">Usuário:</FormLabel>
            <Input
              type={"text"}
              id={"username"}
              name={"username"}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl mb="4" isInvalid={formik.touched.password && formik.errors.password}>
            <FormLabel htmlFor="password">Senha:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md">
            Entrar
          </Button>
        </form>
      </Box>
  );
};