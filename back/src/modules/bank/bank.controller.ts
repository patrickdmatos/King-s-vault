import { Body, Controller, Get, Param, Post } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport';
import { BankService } from './bank.service'
import { BankDTO } from 'src/database/bankAccount.dto'

@Controller('bank')
export class BankController {
  constructor (private readonly bankService: BankService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('registerBank')
  async registerBankAccount (@Body() Account: BankDTO) {
    return await this.bankService.createBankAccount(Account)
  }

  @Get(':userId')
  async GetAllUserBankAccounts (@Param('userId') userId: BankDTO['userId']) {
    const numericUserId = Number(userId)

    return await this.bankService.findAllUserBankAccounts(numericUserId)
  }
}
