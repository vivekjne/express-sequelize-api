"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validationMiddleware = (schema, property) => {
  return (req, res, next) => {
    console.log("body=", req.body);
    const {
      error
    } = schema.validate(req.body);
    console.log("error=", error);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const {
        details
      } = error;
      console.log(details);
      const message = details.map(i => i.message).join(",");
      console.log("error", message);
      res.status(422).json({
        error: message,
        status: false
      });
    }
  };
};

var _default = validationMiddleware;
exports.default = _default;