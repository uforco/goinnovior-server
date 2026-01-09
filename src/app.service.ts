import { Injectable } from '@nestjs/common';
import { PrismaService } from './config/database/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    const data = await fetch('https://technext-server.onrender.com')
    if(data.ok && data.status === 200) {
      console.log('Server is running - technext-server');
    } else {
      console.log('Server is not running - technext-server');
    }
  }
}
