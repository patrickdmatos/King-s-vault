import { Body, Controller, Post } from '@nestjs/common'
import { BankTransactionService } from './transaction.service'
import { BankTransactionDTO } from 'src/database/transaction.dto '

@Controller('bt')
export class BankTransactionController {
  constructor (private readonly BtService: BankTransactionService) { }

  @Post('register')
  async registerBT (@Body() data: BankTransactionDTO) {
    await this.BtService.CreateTransaction(data)
  }
}
