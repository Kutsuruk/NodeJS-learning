const path = require('path')

console.log('Filename: ', path.basename(__filename))

console.log('Dirname: ', path.dirname(__filename))

console.log('Extention: ', path.extname(__filename))

console.log(('Parse: ', path.parse(__filename)))

console.log(path.parse(__filename).name)
console.log(path.parse(__filename).ext)

console.log(path.join(__dirname, 'server', 'index.html'))

