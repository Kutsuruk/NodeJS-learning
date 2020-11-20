// Operation system
const os = require('os')

console.log('Operation system:', os.platform())

console.log('Proccessor architecture:', os.arch())

console.log('Information about CPUs: ', os.cpus())

console.log('Free memory:', os.freemem())

console.log('Total memory:', os.totalmem())

console.log('Home directory:', os.homedir())

console.log('Time working:', os.uptime())