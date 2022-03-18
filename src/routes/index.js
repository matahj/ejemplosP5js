const { Router } = require('express');
const router = Router();
const fs = require('fs');

const jsons_datos = fs.readFileSync('src/datos.json','utf-8');
let datos = JSON.parse(jsons_datos);

router.get('/s1', (req, res) => {
    //res.send('Hola mundo');
    //console.log(info);
    res.render('s1/index.ejs',{datos});
});

router.get('/s2', (req, res) => {
    res.render('s2/index.ejs',{datos});
});

module.exports = router;
