import { Module } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { BankController } from './bank.controller'
import { BankService } from './bank.service'

@Module({
  controllers: [BankController],
  providers: [BankService, PrismaService]
})
export class BankModule {}
