"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarColors = getAvatarColors;
exports.getContrastColor = getContrastColor;
exports.getContrastTextColor = getContrastTextColor;
exports.getLighterBackground = getLighterBackground;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function getLighterBackground(hexCode, opacityValue) {
  return hexCode + (opacityValue ? opacityValue : "0a");
}
function getContrastColor(suspectedDark, suspectedLight, contrastThreshold) {
  // Convert the hexadecimal color values to RGB
  var hexToRgb = function hexToRgb(hex) {
    return hex.match(/\w\w/g).map(function (x) {
      return parseInt(x, 16);
    });
  };

  // Calculate the contrast ratio between two colors
  var getContrastRatio = function getContrastRatio(rgb1, rgb2) {
    var luminance1 = calculateRelativeLuminance(rgb1);
    var luminance2 = calculateRelativeLuminance(rgb2);
    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  };

  // Calculate the relative luminance for a single RGB color
  var calculateRelativeLuminance = function calculateRelativeLuminance(rgb) {
    var _rgb$map = rgb.map(function (color) {
        color /= 255;
        return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
      }),
      _rgb$map2 = _slicedToArray(_rgb$map, 3),
      r = _rgb$map2[0],
      g = _rgb$map2[1],
      b = _rgb$map2[2];
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  var rgb1 = hexToRgb(suspectedDark);
  var rgb2 = hexToRgb(suspectedLight);
  var contrastRatio = getContrastRatio(rgb1, rgb2);
  return contrastRatio >= contrastThreshold ? suspectedDark : getContrastTextColor(suspectedDark);
}
function getContrastTextColor(backgroundColor, fallback) {
  // Convert the hexadecimal color value to RGB
  var hexToRgb = function hexToRgb(hex) {
    return hex.match(/\w\w/g).map(function (x) {
      return parseInt(x, 16);
    });
  };
  var _hexToRgb = hexToRgb(backgroundColor),
    _hexToRgb2 = _slicedToArray(_hexToRgb, 3),
    r = _hexToRgb2[0],
    g = _hexToRgb2[1],
    b = _hexToRgb2[2];

  // Calculate the brightness of the background color
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine the contrast text color based on the brightness
  var textColor = brightness > 146 ? "#000000" : "#ffffff"; //128
  if (fallback && textColor === "#000000" && !areColorsSimilar(backgroundColor, fallback)) {
    textColor = fallback;
  }
  return textColor;
}
function getAvatarColors(inputString) {
  var palette = [{
    backgroundColor: "#FEDFA9",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#9CCFF0",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#EBE0D0",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#7E98DB",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#8FD2DC",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#8BD2B6",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#FFC693",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#FACCCC",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#E9A6C6",
    textColor: "#F2BED1"
  }, {
    backgroundColor: "#CEE8CF",
    textColor: "#F2BED1"
  }];
  // Generate a hash value from the input string
  var hash = inputString.split("").reduce(function (acc, _char) {
    return (acc << 5) - acc + _char.charCodeAt(0);
  }, 0);

  // Get the index within the range of the palette length
  var index = Math.abs(hash) % palette.length;

  // Return the selected color from the palette
  return palette[index];
}

// Utility functions to convert colors

// Convert hex color to RGB object
function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return {
    r: r,
    g: g,
    b: b
  };
}

// Convert RGB color to HSL object
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}
function areColorsSimilar(color1, color2) {
  // Convert hex codes to RGB values
  var rgb1 = hexToRgb(color1);
  var rgb2 = hexToRgb(color2);

  // Calculate the color difference using Euclidean distance formula
  var diff = Math.sqrt(Math.pow(rgb2.r - rgb1.r, 2) + Math.pow(rgb2.g - rgb1.g, 2) + Math.pow(rgb2.b - rgb1.b, 2));

  // Set a threshold value for similarity
  var threshold = 270;
  // Compare the color difference with the threshold
  return diff <= threshold;
}