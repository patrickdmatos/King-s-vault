import { Body, Controller, Get, Param, Post } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service'
import { UserDTO } from 'src/database/user.dto'

@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async register (@Body() user: UserDTO) {
    return await this.userService.CreateUser(user, user.BankAccount)
  }

  @Get()
  async findAll () {
    return await this.userService.GetAllUsers()
  }

  @Get(':id')
  async findUser (@Param('id') userId: number) {
    return await this.userService.GetUserById(userId)
  }

  @Post('login')
  async SingInUser (@Body() userData: UserDTO) {
    console.log(userData)

    await this.userService.SingIn(userData.email, userData.password)
  }
}
