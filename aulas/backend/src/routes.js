const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controlers/OngController');
const IncidentController = require('./controlers/IncidentController');
const ProfileController = require('./controlers/ProfileController');
const SessionController = require('./controlers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().trim().min(1).required()
    })
}), SessionController.create);

routes.get('/ongs',  OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().alphanum().min(10).max(11).required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),  OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);


routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object({
        title: Joi.string().trim().min(2).required(),
        description: Joi.string().trim().min(2).required(),
        value: Joi.number().min(10).required()
    })
}), IncidentController.create);



routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

module.exports = routes;
