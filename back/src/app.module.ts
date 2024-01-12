import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { BankModule } from './modules/bank/bank.module'
import { BankTransactionModule } from './modules/transaction/transaction.module'

@Module({
  imports: [UserModule, BankModule, BankTransactionModule],
  controllers: [],
  providers: []
})
export class AppModule {}
