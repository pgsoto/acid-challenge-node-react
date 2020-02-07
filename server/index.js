const app = require('./src/app')

async function main(){
    await app.listen(process.env.APP_SERVER_PORT)
    console.log('Server funciona bien!')
}

main()