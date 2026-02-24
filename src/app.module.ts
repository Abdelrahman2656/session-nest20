import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL as string ),AuthModule  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
