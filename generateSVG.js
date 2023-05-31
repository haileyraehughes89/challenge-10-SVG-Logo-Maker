function generateSVG({ logoInitials, textColor, shapeSelection, shapeColor }) {
  const logo = ` 
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${shapeSelection} fill='${shapeColor}'/>
<text x="150" y="106" font-size="75" text-anchor="middle" dominant-baseline="middle"fill="${textColor}">
    ${logoInitials}
</text>
</svg>`;

  return logo;
}

module.exports = generateSVG;
