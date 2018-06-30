const path = require('path')
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
  }
})
