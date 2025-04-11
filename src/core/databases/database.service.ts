import { Injectable, OnModuleInit, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class DataBaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}