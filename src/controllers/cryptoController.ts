import { Request, Response } from 'express';
import fetchCryptoPrice from '../services/cryptoService';

const getCryptoPrice = async (req: Request, res: Response) => {
  try {
    const { cryptoIds } = req.query;
    if (!cryptoIds) {
      return res.status(400).json({ message: 'cryptoIds query parameter is required' });
    }

    const cryptoPrices = await fetchCryptoPrice(cryptoIds as string[]);
    return res.status(200).json(cryptoPrices);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch crypto prices' });
  }
};

export default getCryptoPrice;
