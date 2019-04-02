import {useState, useEffect} from 'react'
import io from 'socket.io-client'

const {API_URL = 'http://localhost:4000'} = process.env

const useSocket = () => {
  const [socket, setSocket] = useState(io(API_URL))
  useEffect(() => {
    return () => {
      socket.removeAllListeners()
      socket.close()
    }
  }, [socket])
  return [socket, setSocket]
}

export default useSocket
