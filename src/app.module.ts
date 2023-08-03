import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ExpenseModule,
    IncomeModule,
    CategoryModule,
    MongooseModule.forRoot('mongodb+srv://shanmukh1319:Surya2368@cluster0.taonqph.mongodb.net/')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
