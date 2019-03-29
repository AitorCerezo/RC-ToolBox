const router = require('express').Router();

router.get('', (req, res) => {
    res.render('index.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
})

router.get('/ctf', (req, res) => {
    res.render('ctf.hbs');
});

router.get('/calculcircuits', (req, res) => {
    res.render('calculcircuits.hbs');
});

router.get('/esquemesestandard', (req, res) => {
    res.render('esquemesestandard.hbs');
});

router.get('/buscadorplanols', (req, res) => {
    res.render('buscadorplanols.hbs');
});

module.exports = router;