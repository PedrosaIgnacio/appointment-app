import { Document } from 'mongoose';

export interface Appointment extends Document {
  readonly patientFirstName: string;
  readonly patientLastName: string;
  readonly date: Date;
  readonly createdAt: Date;
}
