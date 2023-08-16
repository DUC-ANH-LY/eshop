class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // https://stackoverflow.com/questions/59625425/understanding-error-capturestacktrace-and-stack-trace-persistance
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
