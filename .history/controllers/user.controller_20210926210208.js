const { response } = require('express');


const userGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API'
    });
}

module.exports = {
    userGet
}