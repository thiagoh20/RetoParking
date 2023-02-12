import axios from 'axios';

export const getData = async (setData) => {
    const res = await axios.get("http://localhost:4000/registro");
    setData(res.data);
}

export const getDataByID = async (body, setDataByID) => {
    const res = await axios.post("http://localhost:4000/registroByID",body);
    setDataByID(res.data);
}

export const getDataCreate = async (body) => {
    await axios.post("http://localhost:4000/create", body);
}

export const deleteDataByID = async (body) => {
    await axios.post("http://localhost:4000/delete", body);
}