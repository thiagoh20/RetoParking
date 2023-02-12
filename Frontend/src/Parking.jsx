
import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { getData, getDataByID } from './templates/utils';
import ModalCreate from './components/ModalCreate';
import ModaleDelete from './components/ModaleDelete';
import './Parking.css';

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataByID, setDataByID] = useState(false);
  const [openPagar, setOpenPagar] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('')

  const handleChange = event => {
    setValue(event.target.value);
  };

  const filteredPlates = data.filter((d) =>
    d.placa.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData(setData);
  }, [])

  return (
    <>
      <div>
        <div className='title'>ParkingLoop</div>
        <div className='button-vehicle'>
          <button className='button-create' onClick={() => setOpen(!open)}><b style={{ fontSize: '22px' }}>+</b> Agregar Vehiculo</button>
        </div>
        <div
          class="input-group mb-3"
          style={{
            height: '50px',
            width: '50%',
            background: '#fff',
            display: 'flex',
            margin: 'auto'
          }}>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            placeholder='FILTRO'
            aria-describedby="inputGroup-sizing-default"
            maxLength={6}
            style={{
              background: '#fff',
              width: '50%'
            }}
            onChange={e => setSearch(e.target.value)} />
        </div>
        <div className='card'>
          <table>
            <thead>
              <tr>
                <th style={{ borderTopLeftRadius: '10px' }}>ID</th>
                <th>PLACA</th>
                <th>FECHA INGRESO</th>
                <th>MINUTOS EN EL PARQUEADERO</th>
                <th>PAGO PARCIAL</th>
                <th style={{ borderTopRightRadius: '10px' }}>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredPlates.map((d, i) => {
                  const today = new Date();
                  const fecha = moment(d.fecha_ingreso);
                  const diffMins = moment(today).diff(fecha, 'minutes');
                  return (
                    <tr key={i}>
                      <td>{i += 1}</td>
                      <td>{d.placa.toUpperCase()}</td>
                      <td>{moment(d.fecha_ingreso)
                        .format('DD/MM/YYYY HH:mm:ss')}</td>
                      <td>{diffMins}</td>
                      <td>{diffMins * 100}</td>
                      <td>
                        <button
                          className='button-card-style'
                          onClick={async () => {
                            await getDataByID({
                              data: {
                                placa: d.placa,
                              }
                            }, setDataByID)
                            setOpenPagar(true);
                          }
                          }>
                          PAGA
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <ModalCreate
        open={open}
        setOpen={setOpen}
        data={data}
        handleChange={handleChange}
        value={value}
      />
      <ModaleDelete
        openPagar={openPagar}
        setOpenPagar={setOpenPagar}
        dataByID={dataByID}
      />
    </>
  );
}

export default App;
