export function getLighterBackground(hexCode, opacityValue) {
  return hexCode + (opacityValue ? opacityValue : "0a");
}
export function getContrastColor(suspectedDark, suspectedLight, contrastThreshold) {
  // Convert the hexadecimal color values to RGB
  const hexToRgb = (hex) => {
    return hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  };

  // Calculate the contrast ratio between two colors
  const getContrastRatio = (rgb1, rgb2) => {
    const luminance1 = calculateRelativeLuminance(rgb1);
    const luminance2 = calculateRelativeLuminance(rgb2);
    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  };

  // Calculate the relative luminance for a single RGB color
  const calculateRelativeLuminance = (rgb) => {
    const [r, g, b] = rgb.map((color) => {
      color /= 255;
      return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgb1 = hexToRgb(suspectedDark);
  const rgb2 = hexToRgb(suspectedLight);
  const contrastRatio = getContrastRatio(rgb1, rgb2);

  return contrastRatio >= contrastThreshold ? suspectedDark : getContrastTextColor(suspectedDark);
}

export function getContrastTextColor(backgroundColor, fallback) {
  // Convert the hexadecimal color value to RGB
  const hexToRgb = (hex) => {
    return hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  };

  const [r, g, b] = hexToRgb(backgroundColor);

  // Calculate the brightness of the background color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine the contrast text color based on the brightness
  let textColor = brightness > 146 ? "#000000" : "#ffffff"; //128
  if (fallback && textColor === "#000000" && !areColorsSimilar(backgroundColor, fallback)) {
    textColor = fallback;
  }
  return textColor;
}
export function getAvatarColors(inputString) {
  const palette = [
    {
      backgroundColor: "#FEDFA9",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#9CCFF0",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#EBE0D0",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#7E98DB",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#8FD2DC",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#8BD2B6",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#FFC693",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#FACCCC",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#E9A6C6",
      textColor: "#F2BED1",
    },
    {
      backgroundColor: "#CEE8CF",
      textColor: "#F2BED1",
    },
  ];
  // Generate a hash value from the input string
  const hash = inputString.split("").reduce((acc, char) => {
    return (acc << 5) - acc + char.charCodeAt(0);
  }, 0);

  // Get the index within the range of the palette length
  const index = Math.abs(hash) % palette.length;

  // Return the selected color from the palette
  return palette[index];
}

// Utility functions to convert colors

// Convert hex color to RGB object
function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return { r: r, g: g, b: b };
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

  return { h: h, s: s, l: l };
}

function areColorsSimilar(color1, color2) {
  // Convert hex codes to RGB values
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate the color difference using Euclidean distance formula
  const diff = Math.sqrt(Math.pow(rgb2.r - rgb1.r, 2) + Math.pow(rgb2.g - rgb1.g, 2) + Math.pow(rgb2.b - rgb1.b, 2));

  // Set a threshold value for similarity
  const threshold = 270;
  // Compare the color difference with the threshold
  return diff <= threshold;
}
