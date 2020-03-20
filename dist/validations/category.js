"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategorySchema = exports.createCategorySchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCategorySchema = _joi.default.object({
  title: _joi.default.string().min(3).max(200).required(),
  description: _joi.default.string(),
  mediaType: _joi.default.string().required(),
  image: _joi.default.string()
});

exports.createCategorySchema = createCategorySchema;

const updateCategorySchema = _joi.default.object({
  title: _joi.default.string().min(3).max(100),
  description: _joi.default.string()
});

exports.updateCategorySchema = updateCategorySchema;