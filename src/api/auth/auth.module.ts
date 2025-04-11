import { Module } from "@nestjs/common";
import { AuthService } from "src/api/auth/auth.service";
import { TransactionModule } from "src/core/transaction/transaction.module";
import { AuthController } from "src/api/auth/auth.controller";

@Module({
    controllers: [AuthController],
    imports: [TransactionModule],
    providers: [AuthService],
    exports: [AuthService],
  })
  export class AuthModule {}
  