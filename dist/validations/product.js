"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductSchema = exports.createProductSchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createProductSchema = _joi.default.object({
  name: _joi.default.string().min(3).max(200).required(),
  description: _joi.default.string().required(),
  category: _joi.default.string().required(),
  quantity: _joi.default.array().items(_joi.default.object({
    size: _joi.default.string().required(),
    price: _joi.default.number().required()
  })).required(),
  stock: _joi.default.number().integer().required(),
  slug: _joi.default.string()
});

exports.createProductSchema = createProductSchema;

const updateProductSchema = _joi.default.object({
  name: _joi.default.string().min(3).max(200),
  description: _joi.default.string(),
  category: _joi.default.string(),
  quantity: _joi.default.array().items(_joi.default.object({
    size: _joi.default.string().required(),
    price: _joi.default.number().required()
  })),
  stock: _joi.default.number().integer()
});

exports.updateProductSchema = updateProductSchema;