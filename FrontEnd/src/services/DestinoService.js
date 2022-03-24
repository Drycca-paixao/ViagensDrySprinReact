import axios from "axios";

const DESTINO_API_URL = "http://localhost:8080/destino";

class DestinoService {
  getAllDestino() {
    return axios.get(DESTINO_API_URL);
  }

  createDestino(destino) {
    return axios.post(DESTINO_API_URL, destino);
  }

  getDestinoById(idDestino) {
    return axios.get(DESTINO_API_URL + "/" + idDestino);
  }

  updateDestino(idDestino, destino) {
    return axios.put(DESTINO_API_URL + "/" + idDestino, destino);
  }

  deleteDestino(idDestino) {
    return axios.delete(DESTINO_API_URL + "/" + idDestino);
  }
}

export default new DestinoService();
