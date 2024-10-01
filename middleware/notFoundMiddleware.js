const notFoundMiddleware = (request, response, next) => {
  try {
    return response.status(404).json({ message: `${request.originalUrl} path not found` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = notFoundMiddleware;
