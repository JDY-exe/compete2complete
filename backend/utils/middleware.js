const requestLogger = (request, response) => {
  console.log(request.method, request.path)
  console.log(request.body)
  console.log('----')
}

module.exports = {requestLogger}