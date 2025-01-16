import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  cryptoId: { type: String, required: true },
  priceThreshold: { type: Number, required: true },
  alertType: { type: String, enum: ['above', 'below'], required: true },
});

const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
