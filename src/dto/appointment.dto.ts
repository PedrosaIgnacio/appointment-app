import { ApiProperty } from '@nestjs/swagger';

export default class AppointmentDTO {
  @ApiProperty()
  readonly patientFirstName: string;
  @ApiProperty()
  readonly patientLastName: string;
  @ApiProperty()
  readonly date: Date;
  @ApiProperty()
  readonly createdAt: Date;
}
