import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { type UserDTO } from 'src/database/user.dto'

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  async CreateUser (user: UserDTO, bankAccount: any) {
    const UserByEmail = await this.prisma.user.findUnique({
      where: { email: user.email }
    })

    if (UserByEmail !== null) {
      throw new HttpException('Email already existed', HttpStatus.FORBIDDEN)
    }

    try {
      const createdUser = await this.prisma.user.create({
        data: {
          email: user.email,
          first_name: 'user.first_name',
          second_name: 'user.name',
          password: user.password,
          BankAccount: { create: [] }
        }
      })
      return createdUser
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async GetAllUsers () {
    const ArrayUsers = await this.prisma.user.findMany()
    return ArrayUsers
  }

  async GetUserById (id: UserDTO['id']) {
    const parsedUserId = Number(id)

    const User = await this.prisma.user.findUnique({ where: { id: parsedUserId } })

    if (User == null) {
      throw new HttpException('User not founded', HttpStatus.BAD_REQUEST)
    }

    return User
  }

  async SingIn (email: UserDTO['email'], pass: UserDTO['password']) {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (user == null) {
      throw new HttpException('User not exist', HttpStatus.FORBIDDEN)
    }

    if (user?.password !== pass) {
      throw new HttpException(
        'This password don´t match',
        HttpStatus.UNAUTHORIZED
      )
    }

    // const token = await this.authService.loginUser(email, password);

    // return { token };
    throw new HttpException('Ok', HttpStatus.OK)
  }
}
