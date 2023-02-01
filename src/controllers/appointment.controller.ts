import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppointmentService } from 'src/business/appointment.service';
import AppointmentDTO from 'src/dto/appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}
  @Get('')
  async getAppointments(@Res() res: Response) {
    try {
      const appointments = await this.appointmentService.getAll();
      return res.status(HttpStatus.OK).json({
        message: 'Received',
        appointments,
      });
    } catch (error) {
      return res.status(HttpStatus.OK).json({
        message: 'Bad Request',
      });
    }
  }

  @Post()
  async createAppointment(
    @Res() res: Response,
    @Body() appointmentDTO: AppointmentDTO,
  ) {
    try {
      const appointment = await this.appointmentService.createAppointment(
        appointmentDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Appointment Created Successfully',
        appointment,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Bad Request',
        code: HttpStatus.BAD_REQUEST,
      });
    }
  }
}
