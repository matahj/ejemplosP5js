const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //res.send('Hola mundo');
    res.render('sk0/index.ejs');
});

module.exports = router;