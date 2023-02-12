import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { getDataCreate } from '../templates/utils';

const ModalCreate = ({open, setOpen, data, handleChange, value}) => {
    return (
        <Modal isOpen={open} style={{ background: '#fff' }}>
            <ModalHeader style={{ display: 'block' }}>
                <span style={{ float: 'rigth', cursor: 'pointer' }} onClick={() => setOpen(!open)}>x</span>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label >PLACA</label>
                    <input className="form-control" type="text" name="Placa" id="Placa" maxLength={6} onChange={handleChange} />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-success" style={{ background: '#30a444' }} disabled={data.length >= 30} onClick={async () => {
                    await getDataCreate({
                        data: {
                            placa: value,
                            estado: "ACTIVO"
                        }
                    })
                    window
                        .location
                        .reload();
                }}>
                    CREAR
                </button>
                <button className="btn btn-danger" style={{ background: '#e03444' }} onClick={() => setOpen(!open)}>
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalCreate