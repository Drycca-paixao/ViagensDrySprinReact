import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../services/DestinoService.js";

export default function Create() {
  const [lugarDestino, setLugarDestino] = useState("");
  const [diaPartida, setDiaPartida] = useState("");
  const { idDestino } = useParams();
  const navigate = useNavigate();

  

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { lugarDestino, diaPartida};  

    if (idDestino) {
        DestinoService.updateDestino(idDestino, destino)
        .then((response) => {
            navigate("/Destino")
        })

    } else {
        DestinoService.createDestino(destino)
        .then((response) => {
            navigate("/Destino")
        })
    }
  }

  useEffect(() => {
      function getDestinoById() {
        if (idDestino) {
            DestinoService.getDestinoById(idDestino)
            .then((response) => {
                setLugarDestino(response.data.lugarDestino);
                setDiaPartida(response.data.diaPartida);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getDestinoById()
  }, [idDestino]);
    console.log(idDestino)
  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{idDestino ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="LugarDestino" className="form-label">
              LugarDestino
            </label>
            <input
              type="text"
              id="LugarDestino"
              className="form-control"
              placeholder="LugarDestino"
              value={lugarDestino}
              onChange={(e) => setLugarDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="DiaPartida" className="form-label">
              DiaPartida
            </label>
            <input
              type="text"
              id="DiaPartida"
              className="form-control"
              placeholder="DiaPartida"
              value={diaPartida}
              onChange={(e) => setDiaPartida(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/Destino"
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
