const { response } = require('express');


const userGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API - controlador'
    });
}

module.exports = {
    userGet
}