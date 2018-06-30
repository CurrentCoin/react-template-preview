const path = require('path')
const { spawn } = require('child_process')
// Asynchronous recursive file & directory copying
const ncp = require('ncp').ncp

const userTemplateDir = path.resolve(__dirname, '../..')
const libraryTemplateDir = path.resolve(__dirname, 'src/template')

const filter = fileName => {
  if (
    fileName.includes('/.')
    || fileName.includes('node_modules')
    || fileName.includes('yarn.lock')
    || fileName.includes('package-lock.json')
    || fileName.includes('package.json')
  ) {
    return false
  } else {
    return true
  }
}

ncp(userTemplateDir, libraryTemplateDir, { filter }, error => {
  if (error) {
    console.log(error)
  } else {
    console.log('files copied successfully')

    const startScript = spawn('react-scripts', ['start'], {
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
  }
})
