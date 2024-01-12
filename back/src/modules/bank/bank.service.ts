import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { type BankDTO } from 'src/database/bankAccount.dto'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class BankService {
  constructor (private readonly prisma: PrismaService) {}

  async createBankAccount (account: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: account.userId }
    })

    if (user == null) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }

    try {
      const createBankAccount = await this.prisma.bankAccount.create({
        data: {
          userId: account.userId,
          bank: account.bank,
          balance: account.balance,
          credit: account.credit,
          credit_invoice: account.credit_invoice
        }
      })

      return createBankAccount
    } catch (error) {
      console.error('Error creating bank account:', error)
      throw new HttpException(
        'Error creating bank account',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async findAllUserBankAccounts (userId: BankDTO['userId']) {
    if (isNaN(userId)) {
      throw new HttpException('Invalid userId', HttpStatus.BAD_REQUEST)
    }

    const userBankAccounts = this.prisma.bankAccount.findMany({
      where: { userId }
    })

    if (userBankAccounts == null) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return await userBankAccounts
  }

  // async findBankAccount (userId: BankDTO['userId'], bank: BankDTO) {
  //   if (isNaN(userId)) {
  //     throw new HttpException('Invalid userId', HttpStatus.BAD_REQUEST)
  //   }

  //   const userBankAccounts = this.prisma.bankAccount.findFirst({
  //     where: { userId }
  //   })

  //   if (userBankAccounts == null) {
  //     throw new HttpException('User not found', HttpStatus.NOT_FOUND)
  //   }

  //   return await userBankAccounts
  // }
}
