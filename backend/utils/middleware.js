const requestLogger = (request, response, next) => {
  console.log(request.method, request.path)
  console.log(request.body)
  console.log('----')
  next()
}

const unknownEndpoint = (request, response) => {
  request.status(404).json({error: 'unknown endpoint'})
}

module.exports = {requestLogger, unknownEndpoint}