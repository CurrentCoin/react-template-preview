const cp = require('child_process')
const fs = require('fs')
const path = require('path')

fs.readdir(path.resolve(__dirname, '../..'), (error, files) => {
  const filteredFiles = files.filter(file => {
    return file !== 'node_modules'
      && file !== 'yarn.lock'
      && file !== 'package-lock.json'
      && file !== 'package.json'
      && file.slice(0, 1) !== '.'
  })

  Promise.all( filteredFiles.map(file => copyFile(file)) )
    .then(() => {
      const startScript = cp.spawn('react-scripts', ['start'], {
        cwd: __dirname
      })

      startScript.stdout.on('data', data => console.log(data.toString()))
      startScript.stderr.on('data', error => console.error(error.toString()))
      startScript.on('close', code => {
        console.log('in close event with code', code)
        if (code) {
          console.log('in close event with code', code)
          return
        }
      })
    })
    .catch(error => console.log('error:', error))
})

function copyFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.copyFile(
      path.resolve(__dirname, `../../${fileName}`),
      path.resolve(__dirname, `./src/template/${fileName}`),
      error => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      }
    )
  })
}
