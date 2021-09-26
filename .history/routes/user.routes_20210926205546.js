const { Router } = require("express");

const router = Router();

    router.app.get('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'get API'
        })
    });

    router.app.put('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'put API'
        })
    });

    router.app.post('/api', (req, res) => {
        res.status(201).json({
            ok: true,
            msg: 'post API'
        })
    });

    router.app.delete('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'delete API'
        })
    });

    router.app.patch('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'patch API'
        })
    });





module.exports = router;