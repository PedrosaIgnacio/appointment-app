import { Schema } from 'mongoose';

export const AppointmentSchema = new Schema({
  patientFirstName: String,
  patientLastName: String,
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
