import * as Yup from 'yup'

const FormLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must have at least 6 characters')
})

export default FormLoginSchema
