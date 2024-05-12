const POKENEAS = require('../data/pokeneasData');
const os = require("os")

const getPokenea = (req, res) => {
    const randomIndex = Math.floor(Math.random() * POKENEAS.length);
    const host = os.hostname();
    const viewData = {
        ...POKENEAS[randomIndex],
        host
    }
    res.render('pokenea', { viewData });
};

const getAllPokeneas = (req, res) => {
    res.send(POKENEAS);
};

const getApiPokenea = (req, res) => {
    const randomIndex = Math.floor(Math.random() * POKENEAS.length);
    const pokenea = POKENEAS[randomIndex]
    const data = {
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        habilidad: pokenea.habilidad
    }
    res.send(data);
};

module.exports = {
    getPokenea,
    getAllPokeneas,
    getApiPokenea
};
