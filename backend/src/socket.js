function socketApp(socket, io) {
  socket.emit('test_data', {payload: 'Sample Data!'})
  socket.on('test_event', () => {
    console.log('test event called!')
  })
}

module.exports = socketApp
