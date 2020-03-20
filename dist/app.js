"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _categoryRoutes = _interopRequireDefault(require("./routes/categoryRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

if (process.env.NODE_ENV === "development") {
  app.use((0, _morgan.default)("dev"));
}

app.use(_express.default.json());
app.use(_express.default.static(`${__dirname}/public`));
app.use("/api/v1/categories", _categoryRoutes.default); // app.use("/api/v1/products", productRouter);

var _default = app;
exports.default = _default;