import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import AppointmentDTO from 'src/dto/appointment.dto';
import { Appointment } from 'src/interfaces/appointment.interface';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment')
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  async getAll(): Promise<Appointment[]> {
    const appointments = await this.appointmentModel.find();
    return appointments;
  }

  async createAppointment(
    appointmentDTO: AppointmentDTO,
  ): Promise<Appointment> {
    const appointment = await new this.appointmentModel(appointmentDTO);
    await appointment.save();
    return appointment;
  }
}
