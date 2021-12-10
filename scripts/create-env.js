const fs = require('fs')
const PORT = `PORT=${process.env.PORT}`

fs.writeFileSync('./.env', `${PORT}`)