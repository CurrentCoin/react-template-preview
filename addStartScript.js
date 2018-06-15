const fs = require('fs')
const path = require('path')

const packagePath = path.resolve(__dirname, '../../package.json')

const package = require(packagePath)

const scripts = package.scripts

Object.assign(scripts, {
  start: 'node node_modules/react-template-preview/index.js'
})

Object.assign(package, { 'scripts': scripts })

fs.writeFile(packagePath, JSON.stringify(package, null, 2), error => {
  if (error) {
    console.log('error:', error)
  }
})
