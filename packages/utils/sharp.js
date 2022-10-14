const sharp = require('sharp');

sharp('original.webp')
    .resize(80)
    .toFile('resize.webp') 