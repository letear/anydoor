
const path = require('path')

const mimeTypes = {
  'css': 'text/css',
  'gif': 'text/gif',
  'html': 'text/html',
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'js': 'text/javascript',
  'json': 'application/json',
  'pdf': 'image/pdf',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'swf': 'application/x-shockwave-flash',
  'tiff': 'image/tiff',
  'txt': 'text/plain',
  'wav': 'text/x-wav',
  'wma': 'audio/x-ms-wma',
  'wmv': 'video/x-ms-wmv',
  'xml': 'text/xml'
}

module.exports = (filePath) => {
  let ext = path.extname(filePath).split('.').pop().toLowerCase()
  if (!ext) {
    ext = filePath
  }
  return mimeTypes[ext] || mimeTypes['txt']
}