const { response } = require('express');


const userGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API - controlador'
    });
}

const userPost = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'post API - controlador'
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
        msg: 'delete API'
    });
}

const userPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}