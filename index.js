const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

const targetDirName = "ko365";

imagemin([`${targetDirName}/*.{jpg,png,gif,svg}`], {
  destination: `dest/${targetDirName}`,
  plugins: [
    imageminMozjpeg({ quality: 100 }),
    imageminPngquant({ quality: "65-80" }),
    imageminGifsicle(),
    imageminSvgo()
  ]
}).then(() => {
  console.log("Images optimized!");
});
