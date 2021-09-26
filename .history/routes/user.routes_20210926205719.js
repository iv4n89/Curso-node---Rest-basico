const { Router } = require("express");

const router = Router();

    router.get('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'get API'
        })
    });

    router.put('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'put API'
        })
    });

    router.post('/api', (req, res) => {
        res.status(201).json({
            ok: true,
            msg: 'post API'
        })
    });

    router.delete('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'delete API'
        })
    });

    router.patch('/api', (req, res) => {
        res.json({
            ok: true,
            msg: 'patch API'
        })
    });





module.exports = router;