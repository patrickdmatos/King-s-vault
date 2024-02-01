export interface BankTransactionDTO {
  id?: number
  bankAccountId: number
  value: number
  date: string
  description: string
  category: string
  direction: string
  implemented: boolean
  paymentMethod: string
}
