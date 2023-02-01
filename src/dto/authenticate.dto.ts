import { ApiProperty } from '@nestjs/swagger';

export default class AuthenticateDTO {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
}
