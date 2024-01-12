export interface UserDTO {
  id?: number | undefined
  email: string
  first_name: string
  name: string
  password: string
  profession: string
  monthly_income: number
  BankAccount?: object
}
