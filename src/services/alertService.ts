import Alert from '../models/Alert';

const createAlert = async (userId: string, cryptoId: string, priceThreshold: number, alertType: string) => {
  const alert = new Alert({ userId, cryptoId, priceThreshold, alertType });
  await alert.save();
  return alert;
};

const getAlertsForCrypto = async (cryptoId: string) => {
  return await Alert.find({ cryptoId });
};

export { createAlert, getAlertsForCrypto };
