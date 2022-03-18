const { Router } = require('express');
const router = Router();

const fs = require('fs');
const jsons_datos = fs.readFileSync('src/datos.json','utf-8');
let datos = JSON.parse(jsons_datos);

router.get('/sketches/sk1', (req, res) => {
    //res.send('Hola mundo');
    //console.log(info);
    res.render('sketches/sk1/index.ejs',{datos});
});

router.get('/sketches/sk2', (req, res) => {
    res.render('sketches/sk2/index.ejs',{datos});
});

router.get('/', (req, res) => {
    res.render('sketches/sk1/index.ejs',{datos});
});


module.exports = router;
