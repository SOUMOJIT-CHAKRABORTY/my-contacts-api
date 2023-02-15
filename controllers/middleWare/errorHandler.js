const { constraints } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constraints.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });

      break;
    case constraints.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constraints.FORBIDDEN:
      res.json({
        title: "Not allowed",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constraints.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constraints.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;

    default:
      console.log("No Error, All Good!");
      break;
  }
};
