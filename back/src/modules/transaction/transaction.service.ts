import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { type BankTransactionDTO } from 'src/database/transaction.dto '
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class BankTransactionService {
  constructor (private readonly prisma: PrismaService) { }

  async CreateTransaction (transactionData: BankTransactionDTO) {
    try {
      const createdTransaction = await this.prisma.bankTransaction.create({
        data: {
          bankAccountId: transactionData.bankAccountId,
          value: transactionData.value,
          date: new Date(transactionData.date),
          description: transactionData.description,
          category: transactionData.category,
          direction: transactionData.direction,
          implemented: transactionData.implemented,
          paymentMethod: transactionData.paymentMethod
        }
      })

      return createdTransaction
    } catch (error) {
      console.error('Erro ao criar transação:', error)
      throw new HttpException('ok', HttpStatus.BAD_REQUEST)
    }
  }

  async FindAllUserTransaction () {
    // Implementar lógica para encontrar todas as transações do usuário
  }

  async FindAllUserTransactionByBank () {
    // Implementar lógica para encontrar todas as transações do usuário por banco
  }

  async FindTransactionByKind () {
    // Implementar lógica para encontrar transações por tipo
  }

  async FindTransactionByDate () {
    // Implementar lógica para encontrar transações por data
  }

  async FindTransactionByName () {
    // Implementar lógica para encontrar transações por nome
  }

  async UpdateTransaction () {
    // Implementar lógica para atualizar uma transação
  }

  async DeleteTransaction () {
    // Implementar lógica para excluir uma transação
  }
}
