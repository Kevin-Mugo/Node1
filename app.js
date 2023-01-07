const os = require('os')

//info about current user
const user = os.userInfo();
//console.log(user);

//info about system uptime
const uptime = os.uptime();
console.log(`The system uptime is ${uptime} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);