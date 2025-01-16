
# Real-Time Cryptocurrency Price Monitoring and Alerting System

This project implements a **Real-Time Cryptocurrency Price Monitoring and Alerting System** using **Node.js**, **MongoDB**, **Redis**, **WebSockets**, and **CoinGecko API**.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **TypeScript**: For writing statically typed JavaScript code.
- **Express.js**: Web framework for routing and handling requests.
- **MongoDB**: NoSQL database for storing cryptocurrency data and user alerts.
- **Redis**: In-memory data store for caching cryptocurrency prices.
- **Socket.io**: Real-time communication using WebSockets for sending alerts.
- **CoinGecko API**: Used to fetch real-time cryptocurrency prices.

## Project Setup

### 1. Clone the repository

```bash
git clone <repository_url>
cd crypto-price-alert
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and configure the following:

```env
MONGO_URI=mongodb://localhost:27017/crypto_alerts
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
COINGECKO_API_KEY=<Your_CoinGecko_API_Key>
PORT=5000
```

### 4. Run the application

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## API Routes

### 1. **Get Cryptocurrency Price**

- **Endpoint**: `GET /api/crypto/price`
- **Description**: Fetches the latest cryptocurrency prices for the specified coins.

- **Query Parameters**:
  - `cryptoIds`: A comma-separated list of cryptocurrency IDs (e.g., `bitcoin,ethereum`).
  
- **Example Request**:

```bash
GET http://localhost:5000/api/crypto/price?cryptoIds=bitcoin,ethereum
```

- **Response**:

```json
{
  "bitcoin": {
    "usd": 46000
  },
  "ethereum": {
    "usd": 3200
  }
}
```

### 2. **Create User Alert**

- **Endpoint**: `POST /api/alerts/set`
- **Description**: Allows users to set alerts for specific cryptocurrencies based on a price threshold.

- **Request Body**:

```json
{
  "userId": "user123",
  "cryptoId": "bitcoin",
  "priceThreshold": 45000,
  "alertType": "below"
}
```

- **Response**:

```json
{
  "_id": "603c72ef1f1b2a001f44a74b",
  "userId": "user123",
  "cryptoId": "bitcoin",
  "priceThreshold": 45000,
  "alertType": "below",
  "__v": 0
}
```

### 3. **Real-Time Alerts via WebSockets**

- **Description**: WebSocket connection will push real-time alerts when the price of the specified cryptocurrency reaches or exceeds the defined threshold.

- **Example Connection**:

Using a WebSocket client (e.g., in the browser):

```javascript
const socket = io('http://localhost:5000');

socket.on('connect', () => {
  console.log('Connected to WebSocket server');

  // Listen for alerts
  socket.on('priceAlert', (data) => {
    console.log('Price Alert:', data);
  });
});
```

- **Expected Output**:

```json
{
  "cryptoId": "bitcoin",
  "alertType": "below",
  "price": 44000
}
```

## Database Models

### 1. **Crypto**

This model stores cryptocurrency details (e.g., ID, symbol, name, and price).

### 2. **Alert**

This model stores user-created alerts, including:
- `userId`: The ID of the user who created the alert.
- `cryptoId`: The cryptocurrency the user is monitoring.
- `priceThreshold`: The price threshold at which the alert triggers.
- `alertType`: Defines whether the alert is for prices **above** or **below** the threshold.

## Caching with Redis

To reduce the load on external APIs, cryptocurrency prices are cached in Redis for a short period. If a request for the same price is made within the cache time, it will be served from Redis.

### Redis Cache
- **Key Format**: `crypto:<cryptoId>`
- **Expiration Time**: 60 seconds

## Example Flow

1. **Set an alert**: A user sets an alert for the price of Bitcoin to go below $45,000.
2. **Monitor price**: The system continuously fetches the latest price of Bitcoin from CoinGecko.
3. **Trigger alert**: When the price of Bitcoin drops below $45,000, the alert is triggered and sent to the user via WebSocket.

## Challenges Faced

- **Real-time Price Updates**: Continuously fetching cryptocurrency prices from external APIs and ensuring that prices are updated frequently without overloading the API.
- **Handling Multiple Alerts**: Managing multiple alerts for different users and ensuring that each alert is processed independently.
- **Scalability**: Designing the system to scale with an increasing number of users and alerts