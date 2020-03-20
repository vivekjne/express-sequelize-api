"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slugify = void 0;

const slugify = sentence => {
  return sentence.toLowerCase().split(" ").join("-");
};

exports.slugify = slugify;