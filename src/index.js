const app = require('./app');

//Usando callback
// app.listen(3000,()=>{
//     console.log('Server on port 3000');
// });

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port: ', app.get('port'));
}

main();
