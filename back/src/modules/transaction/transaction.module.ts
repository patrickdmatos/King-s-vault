import { Module } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { BankTransactionService } from './transaction.service'
import { BankTransactionController } from './transaction.controller'

@Module({
  controllers: [BankTransactionController],
  providers: [BankTransactionService, PrismaService]
})
export class BankTransactionModule { }
