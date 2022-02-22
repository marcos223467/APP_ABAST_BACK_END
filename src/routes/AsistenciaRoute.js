'use strict'

var express = require('express');

var Asistencia = require('../controllers/AsistenciaController');

var router = express.Router();

router.post('/save_asistencia', Asistencia.save);

router.get('/asistencias/:curso', Asistencia.getAsistencias);

router.get('/get_asistencia/:curso/:id_alumno', Asistencia.getAsistencia);

router.put('/asistencia/:id', Asistencia.edit);

router.delete('/delete_asistencia/:id', Asistencia.delete);

module.exports = router;