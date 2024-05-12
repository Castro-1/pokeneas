const POKENEAS = require('../data/pokeneasData');

const getPokenea = (req, res) => {
    const randomIndex = Math.floor(Math.random() * POKENEAS.length);
    const pokenea = POKENEAS[randomIndex];
    res.render('pokenea', { pokenea });
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
