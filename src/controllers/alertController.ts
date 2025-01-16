import { Request, Response } from 'express';
import { createAlert } from '../services/alertService';

const setAlert = async (req: Request, res: Response) => {
  try {
    const { userId, cryptoId, priceThreshold, alertType } = req.body;
    if (!userId || !cryptoId || !priceThreshold || !alertType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const alert = await createAlert(userId, cryptoId, priceThreshold, alertType);
    return res.status(201).json(alert);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating alert' });
  }
};

export default setAlert;
