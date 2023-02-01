import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentSchema } from 'src/schemas/appointment.schema';
import { AppointmentController } from '../controllers/appointment.controller';
import { AppointmentService } from '../business/appointment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Appointment', schema: AppointmentSchema },
    ]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
