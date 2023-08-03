



import io from 'socket.io-client';

const SOCKET_URL = 'https://womansafetyapp-production.up.railway.app'

class WSService {

    initializeSocket = async () => {
        try {

            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            })
                ("initializing socket", this.socket)

            this.socket.on('connect', (data) => {
                ("=== socket connected ====", data)
            })

            this.socket.on('disconnect', (data) => {
                ("=== socket disconnected ====")
            })

            this.socket.on('error', (data) => {
                ("socekt error", data)
            })

        } catch (error) {
            ("scoket is not inialized", error)
        }
    }

    emit(event, data = {}) {
        this.socket.emit(event, data)
    }

    on(event, cb) {
        this.socket.on(event, cb)
    }

    removeListener(listenerName) {
        this.socket.removeListener(listenerName)
    }

}

const socketServcies = new WSService()

export default socketServcies



















