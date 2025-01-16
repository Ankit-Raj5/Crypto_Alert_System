import { Server } from 'socket.io';

const setupSocketServer = (server: any) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  return io;
};

export default setupSocketServer;
