import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../services/DestinoService";
import PassageiroService from "../../services/PassageiroService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [destino, setDestino] = useState({ idDestino: "", lugarDestino: "" });
  const [destinos, setDestinos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllDestinos = () => {
    DestinoService.getAllDestino()
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const criarOuEditarDestinos = (e) => {
    e.preventDefault();

    const passageiro = { nome, email, dataNascimento, cpf, destino };
    console.log(passageiro)
    if (id) {
      PassageiroService.updatePassageiro(id, passageiro).then((response) => {
        navigate("/Passageiro");
      });
    } else {
      PassageiroService.createPassageiro(passageiro).then((response) => {
        navigate("/Passageiro");
      });
    }
  };

  useEffect(() => {
    function getPassageiroById() {
      if (id) {
        PassageiroService.getPassageiroById(id)
          .then((response) => {
            setNome(response.data.nome);
            setEmail(response.data.email);
            setDataNascimento(response.data.dataNascimento);
            setCpf(response.data.cpf);
            setDestino({
              idDestino: response.data.destino.idDestino,
              lugarDestino: response.data.destino.lugarDestino,
            });
          })
          .catch((error) => {
            console.log(error);
        });
      }
    }

    getPassageiroById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="DataNascimento" className="form-label">
              DataNascimento
            </label>
            <input
              type="text"
              id="DataNascimento"
              className="form-control"
              placeholder="DataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cpf" className="form-label">
              Cpf
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="Cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="DestinoIdDestino" className="form-label">
              Destino
            </label>
            <select
              id="DestinoIdDestino"
              name="DestinoIdDestino"
              className="form-select"
              onChange={(e) =>
                setDestino({ idDestino: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? destino.lugarDestino : 'Escolha um destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.idDestino} value={destino.idDestino}>
                  {destino.lugarDestino} 
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarDestinos(e)}
          >
            Enviar
          </button>
          <Link
            to="/Passageiro"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
