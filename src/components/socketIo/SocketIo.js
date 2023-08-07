



import io from 'socket.io-client';

const SOCKET_URL = 'https://womansafetyapp-production.up.railway.app'

class WSService {

    initializeSocket = async () => {
        try {
            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            });

            this.socket.on('connect', () => {
                // console.log('Socket connected');
            });

            this.socket.on('disconnect', () => {
                // console.log('Socket disconnected');
            });

            this.socket.on('error', (error) => {
                console.error('Socket error:', error);
            });
        } catch (error) {
            console.error('Socket initialization error:', error);
        }
    };

    emit(event, data = {}) {
        this.socket.emit(event, data);
    }

    on(event, cb) {
        this.socket.on(event, cb);
    }

    removeListener(listenerName) {
        this.socket.removeListener(listenerName);
    }

}

const socketServcies = new WSService()

export default socketServcies



















