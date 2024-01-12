export interface BankDTO {
  id?: number
  userId: number
  map: (
    arg0: (bankAccount: any) => {
      bank: any
      balance: any
      credit: any
      credit_invoice: any
    },
  ) => any
}
