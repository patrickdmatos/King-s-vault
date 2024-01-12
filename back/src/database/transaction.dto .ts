export interface BankTransactionDTO {
  id?: number
  bankId: number
  bank: string
  value: number
  date: string
  description: string
  type: string
  direction: string
}
