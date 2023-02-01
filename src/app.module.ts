import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './modules/user.module';
import { AppointmentModule } from './modules/appointment.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    HttpModule,
    UserModule,
    AppointmentModule,
  ],
})
export class AppModule {}
