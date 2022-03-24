import axios from "axios";

const PASSAGEIRO_API_URL = "http://localhost:8080/passageiro";

class PassageiroService {
  getAllPassageiro() {
    return axios.get(PASSAGEIRO_API_URL);
  }

  createPassageiro(Passageiro) {
    return axios.post(PASSAGEIRO_API_URL, Passageiro);
  }

  getPassageiroById(IdPassageiro) {
    return axios.get(PASSAGEIRO_API_URL + "/" + IdPassageiro);
  }

  updatePassageiro(IdPassageiro, Passageiro) {
    return axios.put(PASSAGEIRO_API_URL + "/" + IdPassageiro, Passageiro);
  }

  deletePassageiro(IdPassageiro) {
    return axios.delete(PASSAGEIRO_API_URL + "/" + IdPassageiro);
  }
}

export default new PassageiroService();
