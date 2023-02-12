import moment from 'moment';
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { deleteDataByID } from '../templates/utils';

const ModaleDelete = ({openPagar, setOpenPagar, dataByID}) => {
    return (
        <Modal isOpen={openPagar} style={{ background: '#fff' }}>
            <ModalHeader style={{ display: 'block' }}>
                <span style={{ float: 'rigth', cursor: 'pointer' }} onClick={() => setOpenPagar(!openPagar)}>x</span>
            </ModalHeader>
            <ModalBody>
                {
                    Array.from(dataByID).map((d, i) => {
                        const today = new Date();
                        const fecha = moment(d.fecha_ingreso);
                        const diffMins = moment(today).diff(fecha, 'minutes');
                        return (
                            <div key={i}>
                                <div className="form-group">
                                    PLACA: {d.placa}
                                </div>
                                <div className="form-group">
                                    FECHA INGRESO: {moment(d.fecha_ingreso).format('DD/MM/YYYY HH:mm:ss')}
                                </div>
                                <div className="form-group">
                                    FECHA SALIDA: {moment().format('DD/MM/YYYY HH:mm:ss')}
                                </div>
                                <div className="form-group">
                                    MINUTOS EN EL PARQUEADERO: {diffMins}
                                </div>
                                <div className="form-group">
                                    PAGO TOTAL: $ {diffMins * 100}
                                </div>
                            </div>
                        )
                    })
                }
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-success" style={{ background: '#30a444' }} onClick={async () => {
                    await deleteDataByID({
                        data: {
                            placa: dataByID[0]?.placa,
                        }
                    })
                    window
                        .location
                        .reload();
                }}>
                    PAGO
                </button>
                <button className="btn btn-danger" style={{ background: '#e03444' }} onClick={() => setOpenPagar(!openPagar)}>
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default ModaleDelete