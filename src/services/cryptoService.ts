import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const fetchCryptoPrice = async (cryptoIds: string[]) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(',')}&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency prices:', error);
    throw new Error('Unable to fetch prices');
  }
};

export default fetchCryptoPrice;
