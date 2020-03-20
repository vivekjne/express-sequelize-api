"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getAllCategories = void 0;

var _models = _interopRequireDefault(require("../models"));

var _helpers = require("../utils/helpers");

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getAllCategories = async (req, res) => {
  try {
    let excludedQueryFields = ["limit", "offset", "page", "attributes"]; // let operators = { and: Op.and, or: Op.or, eq: Op.eq };

    let queryParams = _objectSpread({}, req.query);

    excludedQueryFields.forEach(element => {
      console.log("element=", element);
      delete queryParams[element];
    }); // Object.keys(queryParams).forEach(el => {
    //   console.log("el=", queryParams[el]);
    //   if (typeof queryParams == "object") {
    //     let operator = Object.keys(queryParams[el])[0];
    //     let value = Object.values(
    //       queryParams[el][Object.keys(queryParams[el])[0]]
    //     )[0];
    //     console.log("entries=", operator, value);
    //     queryParams[el] = [operators[operator]]: value
    //   }
    // });
    // console.log("query params=", queryParams);

    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let offset = (page - 1) * limit;
    let attributes = req.query.attributes || "";

    if (attributes) {
      attributes = attributes.split(",");
    } // console.log("attributes=", req.query);


    let queryObject = {
      include: {
        model: _models.default.Video,
        as: "videos"
      },
      where: queryParams,
      limit,
      offset,
      attributes
    };

    let query = _models.default.Category.findAll(queryObject);

    const categories = await query;
    res.status(200).json({
      status: true,
      totalItems: categories.length,
      data: {
        categories
      }
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message
    });
  }
};

exports.getAllCategories = getAllCategories;

const createCategory = async (req, res) => {
  try {
    // const categoryExists = await Category.find({ title: req.body.title });
    // if (categoryExists) {
    //   res.status(400).json({
    //     status: false,
    //     error: "Category with name" + req.body.title + " already exists"
    //   });
    // } else {
    req.body.slug = (0, _helpers.slugify)(req.body.title);
    const category = await _models.default.Category.create(req.body);
    res.status(200).json({
      status: true,
      message: `Category ${category.title} created successfully`,
      data: {
        category
      }
    }); // }
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      status: false
    });
  }
};

exports.createCategory = createCategory;

const updateCategory = async (req, res) => {
  try {} catch (err) {
    res.status(404).json({
      error: err.message,
      status: false
    });
  }
};

exports.updateCategory = updateCategory;

const deleteCategory = async (req, res) => {
  try {} catch (err) {
    res.status(404).json({
      error: err.message,
      status: false
    });
  }
};

exports.deleteCategory = deleteCategory;