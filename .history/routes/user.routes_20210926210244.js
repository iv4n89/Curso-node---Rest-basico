const { Router } = require("express");

const { userGet } = require("../controllers/user.controller");

const router = Router();

    router.get('/', userGet);

    router.put('/', (req, res) => {
        res.json({
            ok: true,
            msg: 'put API'
        })
    });

    router.post('/', (req, res) => {
        res.status(201).json({
            ok: true,
            msg: 'post API'
        })
    });

    router.delete('/', (req, res) => {
        res.json({
            ok: true,
            msg: 'delete API'
        })
    });

    router.patch('/', (req, res) => {
        res.json({
            ok: true,
            msg: 'patch API'
        })
    });





module.exports = router;