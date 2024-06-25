const express = require('express');
const router = express.Router();
const db = require('../config/db.cjs'); // Importa la configuración de la base de datos

// Obtener todos los usuarios
router.get('/users', (req, res) => {
    const query = 'SELECT * FROM Usuarios'; // Consulta SQL para obtener todos los usuarios

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: 'Error al obtener usuarios' });
        } else {
            res.status(200).json(results); // Devuelve los resultados como una respuesta JSON
        }
    });
});

// Crear un nuevo usuario
router.post('/users', (req, res) => {
    const { nombre, correo, tipo_usuario, contrasena, foto_perfil } = req.body;

    const query = 'INSERT INTO Usuarios (nombre, correo, tipo_usuario, contrasena, foto_perfil) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, correo, tipo_usuario, contrasena, foto_perfil], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo usuario:', error);
            res.status(500).json({ error: 'Error al crear un nuevo usuario' });
        } else {
            res.status(201).json({ message: 'Usuario creado exitosamente' });
        }
    });
});

// Actualizar un usuario existente
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, correo, tipo_usuario, contrasena, foto_perfil } = req.body;

    const query = 'UPDATE Usuarios SET nombre = ?, correo = ?, tipo_usuario = ?, contrasena = ?, foto_perfil = ? WHERE id = ?';

    db.query(query, [nombre, correo, tipo_usuario, contrasena, foto_perfil, userId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Usuario actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        }
    });
});

// Eliminar un usuario
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    const query = 'DELETE FROM Usuarios WHERE id = ?';

    db.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el usuario:', error);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Usuario eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        }
    });
});

// Obtener todos los sistemas
router.get('/sistemas', (req, res) => {
    const query = 'SELECT * FROM Sistemas';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener sistemas:', error);
            res.status(500).json({ error: 'Error al obtener sistemas' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todos los modelos
router.get('/modelos', (req, res) => {
    const query = 'SELECT * FROM Modelos';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener modelos:', error);
            res.status(500).json({ error: 'Error al obtener modelos' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todos los equipos
router.get('/equipos', (req, res) => {
    const query = 'SELECT E.*, M.nombre AS modelo_nombre, S.nombre_sistema AS sistema_nombre ' +
        'FROM Equipos E ' +
        'INNER JOIN Modelos M ON E.id_modelo = M.id ' +
        'INNER JOIN Sistemas S ON E.id_sistema = S.id';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener equipos:', error);
            res.status(500).json({ error: 'Error al obtener equipos' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener todas las rondas
router.get('/rondas', (req, res) => {
    const query = 'SELECT R.*, S.nombre_sistema AS sistema_nombre ' +
        'FROM Rondas R ' +
        'INNER JOIN Sistemas S ON R.id_sistema = S.id';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener rondas:', error);
            res.status(500).json({ error: 'Error al obtener rondas' });
        } else {
            res.status(200).json(results);
        }
    });
});

router.post('/sistemas', (req, res) => {
    const { id_usuario, nombre_sistema, imagen_sistema, id_sistema } = req.body;

    const query = 'INSERT INTO Sistemas (id_usuario, nombre_sistema, imagen_sistema, id_sistema) VALUES (?, ?, ?, ?)';
    db.query(query, [id_usuario, nombre_sistema, imagen_sistema, id_sistema], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo sistema:', error);
            res.status(500).json({ error: 'Error al crear un nuevo sistema' });
        } else {
            res.status(201).json({ message: 'Sistema creado exitosamente' });
        }
    });
});

router.post('/modelos', (req, res) => {
    const { nombre, imagen } = req.body;

    const query = 'INSERT INTO Modelos (nombre, imagen) VALUES (?, ?)';
    db.query(query, [nombre, imagen], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo modelo:', error);
            res.status(500).json({ error: 'Error al crear un nuevo modelo' });
        } else {
            res.status(201).json({ message: 'Modelo creado exitosamente' });
        }
    });
});

router.post('/equipos', (req, res) => {
    const { id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo } = req.body;

    const query = 'INSERT INTO Equipos (id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo], (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo equipo:', error);
            res.status(500).json({ error: 'Error al crear un nuevo equipo' });
        } else {
            res.status(201).json({ message: 'Equipo creado exitosamente' });
        }
    });
});


router.post('/rondas', (req, res) => {
    const { id, id_sistema, fecha, registedBy } = req.body;

    const query = 'INSERT INTO Rondas (id, id_sistema, fecha, registedBy) VALUES (?, ?, ?, ?)';
    db.query(query, [id, id_sistema, fecha, registedBy], (error, result) => {
        if (error) {
            console.error('Error al crear una nueva ronda:', error);
            res.status(500).json({ error: 'Error al crear una nueva ronda' });
        } else {
            res.status(201).json({ message: 'Ronda creada exitosamente' });
        }
    });
});

router.put('/sistemas/:id', (req, res) => {
    const sistemaId = req.params.id;
    const { id_usuario, nombre_sistema, imagen_sistema, id_sistema } = req.body;

    const query = 'UPDATE Sistemas SET id_usuario = ?, nombre_sistema = ?, imagen_sistema = ?, id_sistema = ? WHERE id = ?';

    db.query(query, [id_usuario, nombre_sistema, imagen_sistema, id_sistema, sistemaId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el sistema:', error);
            res.status(500).json({ error: 'Error al actualizar el sistema' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Sistema actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Sistema no encontrado' });
            }
        }
    });
});

router.put('/modelos/:id', (req, res) => {
    const modeloId = req.params.id;
    const { nombre, imagen } = req.body;

    const query = 'UPDATE Modelos SET nombre = ?, imagen = ? WHERE id = ?';

    db.query(query, [nombre, imagen, modeloId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el modelo:', error);
            res.status(500).json({ error: 'Error al actualizar el modelo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Modelo actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Modelo no encontrado' });
            }
        }
    });
});

router.put('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;
    const { id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo } = req.body;

    const query = 'UPDATE Equipos SET id_sistema = ?, nombre_equipo = ?, imagen_equipo = ?, id_equipo = ?, id_modelo = ? WHERE id = ?';

    db.query(query, [id_sistema, nombre_equipo, imagen_equipo, id_equipo, id_modelo, equipoId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el equipo:', error);
            res.status(500).json({ error: 'Error al actualizar el equipo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Equipo actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
        }
    });
});

router.put('/rondas/:id', (req, res) => {
    const rondaId = req.params.id;
    const { id_sistema, fecha } = req.body;

    const query = 'UPDATE Rondas SET id_sistema = ?, fecha = ? WHERE id = ?';

    db.query(query, [id_sistema, fecha, rondaId], (error, results) => {
        if (error) {
            console.error('Error al actualizar la ronda:', error);
            res.status(500).json({ error: 'Error al actualizar la ronda' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Ronda actualizada exitosamente' });
            } else {
                res.status(404).json({ message: 'Ronda no encontrada' });
            }
        }
    });
});


// Ruta DELETE para eliminar un sistema por su ID
router.delete('/sistemas/:id', (req, res) => {
    const sistemaId = req.params.id;

    const query = 'DELETE FROM Sistemas WHERE id = ?';

    db.query(query, [sistemaId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el sistema:', error);
            res.status(500).json({ error: 'Error al eliminar el sistema' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Sistema eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Sistema no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar un modelo por su ID
router.delete('/modelos/:id', (req, res) => {
    const modeloId = req.params.id;

    const query = 'DELETE FROM Modelos WHERE id = ?';

    db.query(query, [modeloId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el modelo:', error);
            res.status(500).json({ error: 'Error al eliminar el modelo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Modelo eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Modelo no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar un equipo por su ID
router.delete('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;

    const query = 'DELETE FROM Equipos WHERE id = ?';

    db.query(query, [equipoId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el equipo:', error);
            res.status(500).json({ error: 'Error al eliminar el equipo' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Equipo eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
        }
    });
});

// Ruta DELETE para eliminar una ronda por su ID
router.delete('/rondas/:id', (req, res) => {
    const rondaId = req.params.id;

    const query = 'DELETE FROM Rondas WHERE id = ?';

    db.query(query, [rondaId], (error, results) => {
        if (error) {
            console.error('Error al eliminar la ronda:', error);
            res.status(500).json({ error: 'Error al eliminar la ronda' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Ronda eliminada exitosamente' });
            } else {
                res.status(404).json({ message: 'Ronda no encontrada' });
            }
        }
    });
});

// users.cjs
// users.cjs

// Ruta para crear una nueva tabla


// users.cjs

// Ruta para crear una nueva tabla





// Ruta para crear una nueva tabla
// Ruta para crear una nueva tabla


// Obtener todos los registros de la tabla Motor_09
router.get('/motor_09', (req, res) => {
    const query = 'SELECT * FROM Motor_09';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener registros de Motor_09:', error);
            res.status(500).json({ error: 'Error al obtener registros de Motor_09' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Crear un nuevo registro en la tabla Motor_09
router.post('/motor_09', (req, res) => {
    const motorData = req.body;
    const query = 'INSERT INTO Motor_09 SET ?';
    db.query(query, motorData, (error, result) => {
        if (error) {
            console.error('Error al crear un nuevo registro en Motor_09:', error);
            res.status(500).json({ error: 'Error al crear un nuevo registro en Motor_09' });
        } else {
            res.status(201).json({ message: 'Registro creado exitosamente en Motor_09' });
        }
    });
});

// Actualizar un registro existente en la tabla Motor_09
router.put('/motor_09/:id', (req, res) => {
    const motorId = req.params.id;
    const motorData = req.body;
    const query = 'UPDATE Motor_09 SET ? WHERE id = ?';
    db.query(query, [motorData, motorId], (error, results) => {
        if (error) {
            console.error('Error al actualizar el registro en Motor_09:', error);
            res.status(500).json({ error: 'Error al actualizar el registro en Motor_09' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Registro actualizado exitosamente en Motor_09' });
            } else {
                res.status(404).json({ message: 'Registro no encontrado en Motor_09' });
            }
        }
    });
});

// Eliminar un registro de la tabla Motor_09 por su ID
router.delete('/motor_09/:id', (req, res) => {
    const motorId = req.params.id;
    const query = 'DELETE FROM Motor_09 WHERE id = ?';
    db.query(query, [motorId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el registro en Motor_09:', error);
            res.status(500).json({ error: 'Error al eliminar el registro en Motor_09' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Registro eliminado exitosamente en Motor_09' });
            } else {
                res.status(404).json({ message: 'Registro no encontrado en Motor_09' });
            }
        }
    });
});



// Obtener los detalles específicos de un equipo basado en su ID
router.get('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;
    const query = `SELECT * FROM ${equipoId}`;

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener los detalles del equipo:', error);
            res.status(500).json({ error: 'Error al obtener los detalles del equipo' });
        } else {
            res.status(200).json(results);
        }
    });
});// Controlador para eliminar un motor existente de la tabla Motor_

// Obtener la estructura de la tabla específica de un equipo por su ID
router.get('/equipo-detalles/:id', (req, res) => {
    const equipoId = req.params.id;
    const query = `SHOW COLUMNS FROM ${equipoId}`;

    db.query(query, (error, results) => {
        if (error) {
            console.error(`Error al obtener la estructura de la tabla del equipo ${equipoId}:`, error);
            res.status(500).json({ error: `Error al obtener la estructura de la tabla del equipo ${equipoId}` });
        } else {
            res.status(200).json(results);
        }
    });
});



// Obtener todos los registros de un equipo específico
router.get('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;
    const query = `SELECT * FROM ${equipoId}`;

    db.query(query, (error, results) => {
        if (error) {
            console.error(`Error al obtener registros de la tabla ${equipoId}:`, error);
            res.status(500).json({ error: `Error al obtener registros de la tabla ${equipoId}` });
        } else {
            res.status(200).json(results);
        }
    });
});


// Endpoint para obtener detalles del equipo
router.get('/equipos/:id', (req, res) => {
    const idEquipo = req.params.id;

    const query = `SHOW COLUMNS FROM \`${idEquipo}\``;

    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error al obtener la estructura de la tabla del equipo ${idEquipo}:`, err);
            res.status(500).json({ error: 'Error al obtener los detalles del equipo' });
            return;
        }
        res.json(results);
    });
});

// Crear un nuevo registro en un equipo específico

// Crear un nuevo registro en un equipo específico
router.post('/equipos/:id', (req, res) => {
    const equipoId = req.params.id;
    const newData = req.body;
    newData.fecha = toMySQLDatetimeFormat(newData.fecha); // Convertir la fecha al formato MySQL
    const query = `INSERT INTO ${equipoId} SET ?`;

    db.query(query, newData, (error, result) => {
        if (error) {
            console.error(`Error al crear un nuevo registro en la tabla ${equipoId}:`, error);
            res.status(500).json({ error: `Error al crear un nuevo registro en la tabla ${equipoId}` });
        } else {
            res.status(201).json({ message: `Registro creado exitosamente en ${equipoId}` });
        }
    });
});

function toMySQLDatetimeFormat(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Manejar la reconexión de MySQL
db.on('error', function (err) {
    console.error('MySQL error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        handleDisconnect();
    } else {
        throw err;
    }
});

function handleDisconnect() {
    db = mysql.createConnection(db.config); // Recreate the connection, since
    // the old one cannot be reused.

    db.connect(function (err) {              // The server is either down
        if (err) {                            // or restarting (takes a while sometimes).
            console.error('Error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }
    });

    db.on('error', function (err) {
        console.error('MySQL error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}
// Actualizar un registro en un equipo específico
router.put('/equipos/:id/:recordId', (req, res) => {
    const equipoId = req.params.id;
    const recordId = req.params.recordId;
    const updatedData = req.body;
    const query = `UPDATE ${equipoId} SET ? WHERE id = ?`;

    db.query(query, [updatedData, recordId], (error, results) => {
        if (error) {
            console.error(`Error al actualizar el registro en la tabla ${equipoId}:`, error);
            res.status(500).json({ error: `Error al actualizar el registro en la tabla ${equipoId}` });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: `Registro actualizado exitosamente en ${equipoId}` });
            } else {
                res.status(404).json({ message: `Registro no encontrado en ${equipoId}` });
            }
        }
    });
});

// Eliminar un registro en un equipo específico
router.delete('/equipos/:id/:recordId', (req, res) => {
    const equipoId = req.params.id;
    const recordId = req.params.recordId;
    const query = `DELETE FROM ${equipoId} WHERE id = ?`;

    db.query(query, [recordId], (error, results) => {
        if (error) {
            console.error(`Error al eliminar el registro en la tabla ${equipoId}:`, error);
            res.status(500).json({ error: `Error al eliminar el registro en la tabla ${equipoId}` });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: `Registro eliminado exitosamente en ${equipoId}` });
            } else {
                res.status(404).json({ message: `Registro no encontrado en ${equipoId}` });
            }
        }
    });
});


// Obtener un registro específico de un equipo basado en su ID y el ID de la ronda
router.get('/equipos/:id_equipo/registro/:id_ronda', (req, res) => {
    const { id_equipo, id_ronda } = req.params;
    const query = `SELECT * FROM ${id_equipo} WHERE id_ronda = ?`;

    db.query(query, [id_ronda], (error, results) => {
        if (error) {
            console.error(`Error al obtener el registro del equipo ${id_equipo} para la ronda ${id_ronda}:`, error);
            res.status(500).json({ error: 'Error al obtener el registro del equipo' });
        } else {
            res.status(200).json(results[0]); // Suponemos que solo hay un registro por ronda
        }
    });
});


module.exports = router;










