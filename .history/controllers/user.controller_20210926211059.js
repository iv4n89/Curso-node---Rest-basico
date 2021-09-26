const { response, request } = require('express');


const userGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API - controlador'
    });
}

const userPost = (req = request, res) => {

    const body = req.body;

    res.status(201).json({
        ok: true,
        msg: 'post API - controlador',
        body
    });
}

const userPut = (req, res) => {
    res.json({
        ok: true,
        msg: 'put API - controlador'
    });
}

const userDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

const userPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}