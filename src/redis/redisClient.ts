import redis from '../config/redis';

const setCachedData = async (key: string, data: any, expiryTime: number = 60) => {
  await redis.set(key, JSON.stringify(data), 'EX', expiryTime); // Cache data for 60 seconds
};

const getCachedData = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

export { setCachedData, getCachedData };
