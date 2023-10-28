import * as PImage from "pureimage"
import fs from "fs"
import path from "path"

const pretendard = PImage.registerFont(
  "build/assets/Pretendard-SemiBold.ttf",
  "Pretendard"
)

pretendard.loadSync()

// read all files inside of ./content
fs.readdir("./content", (err, files) => {
  // for each file without starting with "."
  for (const file of files.filter((f) => !f.startsWith("."))) {
    fs.readdir(`./content/${file}`, (err, files) => {
      for (const file of files.filter((f) => !f.startsWith("."))) {
        // create a new image
        const frame = PImage.make(1200, 600)
        const ctx = frame.getContext("2d")
        // fill the background with white
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1200, 600)
        // draw the text
        ctx.fillStyle = "black"
        ctx.font = "64pt Pretendard"
        ctx.fillText(
          file.toString().replace(".md", "").replaceAll("-", " "),
          80,
          128
        )
        // save the image
        PImage.encodePNGToStream(
          frame,
          fs.createWriteStream(
            `./public/generated/${file.replace(".md", "")}.png`
          )
        )
          .then(() => {
            console.log("wrote out the png file to out.png")
          })
          .catch((e) => {
            console.log("there was an error writing:", e)
          })
      }
    })
  }
})

fs.writeFile(
  "./public/generated/readme.md",
  `# This folder is autogenerated
    
    It contains all the images that are generated by the build step. Do not edit these files, they will be overwritten on the next build step.`,
  (err) => {
    if (err) throw err
  }
)
