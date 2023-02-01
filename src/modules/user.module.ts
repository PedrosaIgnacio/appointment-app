import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/business/user.service';
import { UserSchema } from 'src/schemas/user.schema';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
