import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'
import moment from 'moment/moment.js';

const app = express();
app.use(express.json()); //configuración para recibir json
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.get('/registro', async (req, res) => {
  const result = await pool.query('SELECT * FROM veiculo')
  res.json(result[0])
})

app.post('/registroByID', async (req, res) => {
  const { placa } = req.body.data;
  const result = await pool.query('SELECT * FROM veiculo WHERE placa LIKE ?', [placa])
  res.json(result[0])
})

app.post('/create', async (req, res) => {
  const { placa, estado } = req.body.data;
  const fecha = moment().format('YYYY/MM/DD HH:mm:ss')
  console.log(fecha)
  await pool.query('INSERT INTO veiculo(placa,fecha_salida,fecha_ingreso,estado) VALUES (?,?,?,?)', [placa, null, fecha, estado])
  res.json({data:'Creado Correctamente'})
})

app.post('/update', async (req, res) => {
  const { placa, estado } = req.body.data;
  const fechaI = moment().format('YYYY/MM/DD HH:mm:ss');
  console.log(fechaI);
  await pool.query('UPDATE veiculo SET fecha_salida=? ,estado=? WHERE placa like ?', [fechaI, estado, placa]);
  res.json({data:'Actualizado Correctamente'})
})

app.post('/delete', async (req, res) => {
  const { placa } = req.body.data;
  await pool.query('DELETE FROM veiculo WHERE placa= ?', [placa]);
  res.json({data:'Borrado Correctamente'})
})

app.listen(PORT)
console.log('Server on port', PORT)
