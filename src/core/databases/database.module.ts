import { Module, Global } from '@nestjs/common';
import { DataBaseService } from './database.service';
import { TransactionUnitOfWork } from 'src/core/transaction/transaction-unit-of-work';


@Global()
@Module({
  providers: [DataBaseService],
  exports: [DataBaseService, ],
})
export class DataBaseModule {}
