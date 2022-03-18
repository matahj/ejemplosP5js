const { Router } = require('express');
const router = Router();

const fs = require('fs');
const jsons_datos = fs.readFileSync('src/datos.json', 'utf-8');
let datos = JSON.parse(jsons_datos);



router.get('/sketches/:id', (req, res, next) => {

    let item = datos.filter(d => d.id === req.params.id);

    if (item.length === 0) {
        next();
    } else {
        let ruta = 'sketches/' + req.params.id + '/index';
        res.render(ruta, { datos });
    }
});

router.get('/', (req, res) => {
    res.render('sketches/sk1/index.ejs', { datos });
});

module.exports = router;
