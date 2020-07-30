const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

const targetDirNames = [
  //
  "src",
];

for (const name of targetDirNames) {
  imagemin([`${name}/*.{jpg,JPG,png,gif,svg}`], {
    destination: `dest/${name}`,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.3, 0.4] }),
      imageminGifsicle(),
      imageminSvgo(),
    ],
  }).then(() => {
    console.log("Images optimized!");
  });
}
