import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import CreateUserDTO from 'src/dto/user.dto';
import * as bcrypt from 'bcryptjs';
import { generateToken } from 'src/helpers/jwt';
import AuthenticateDTO from 'src/dto/authenticate.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await new this.userModel(createUserDTO);
    return await user.save();
  }

  async authenticate({
    email,
    password,
  }: AuthenticateDTO): Promise<{ token: string; username: string }> {
    const user = await this.userModel.findOne({
      email,
    });

    if (!user) throw new Error('User does not exist');

    const hashResult = await bcrypt.compare(password, user.password);
    console.log(hashResult);

    if (!hashResult) throw new Error('Wrong Password');

    const token = generateToken({
      sub: user._id.toString(),
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    });

    const { username } = user;
    return { token, username };
  }
  async register(createUserDTO: CreateUserDTO): Promise<User> {
    const hash = await bcrypt.hash(createUserDTO.password, 12);

    const doc = new this.userModel({
      ...createUserDTO,
      password: hash,
    });

    await doc.save();

    return doc;
  }
}
