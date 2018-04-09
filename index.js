const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

let symbols = ''
let directory = './icons/dist/'

const createSymbolFromFile = file => {
  // let symbolData = ''
  // const dom = (new JSDOM(`<!DOCTYPE html>${file}`, { runScripts: 'outside-only'})).window
  // return dom.document.body.innerHTML
  // return dom.document.querySelector('svg')
  let symbol = file.replace(/\<svg.*\>/, '<symbol viewbox="0 0 32 32">')
  // return `<symbol>${symbolData}</symbol>`
}

fs.readdirSync(directory).forEach(file => {
  let fileContents = fs.readFileSync(directory + file).toString()
  console.log(createSymbolFromFile(fileContents))
})

let wrap =`
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    ${symbols}
  </defs>
</svg>
`