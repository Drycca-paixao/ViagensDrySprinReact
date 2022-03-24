import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PassageiroService from "../../services/PassageiroService";

export default function Index() {  
  const [passageiro, setPassageiro] = useState([]);

  const getAllPassageiro = () => {
    PassageiroService.getAllPassageiro()
      .then((response) => {
        setPassageiro(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPassageiro();
  }, []);

  const deletePassageiro = (idPassgeiro) => {
    PassageiroService.deletePassageiro(idPassgeiro)
      .then((response) => {
        getAllPassageiro();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Passageiro</h1>
      </header>
      <div className="container py-3">
        <Link to="/Passageiro-Create" className="btn btn-primary mb-2">
          Criar Passageiro
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>IdPassageiro</th>
                <th>Nome</th>
                <th>Email</th>
                <th>DataNascimento</th>
                <th>Cpf</th>
                <th>destino</th>
                <th>diaPartida</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {passageiro.map((passageiro) => (
                <tr key={passageiro.idPassageiro}>
                  <td>{passageiro.idPassageiro}</td>
                  <td>{passageiro.nome}</td>
                  <td>{passageiro.email}</td>
                  <td>{passageiro.dataNascimento}</td>
                  <td>{passageiro.cpf}</td>
                  <td>{passageiro.destino.lugarDestino}</td>
                  <td>
                    {passageiro.destino.diaPartida}
                  </td>                 
                  <td className="d-flex">
                    <Link
                      to={`/Passageiro-Update/${passageiro.idPassageiro}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePassageiro(passageiro.idPassageiro)}
                      style={{ marginLeft: "10px" }}
                    >                      
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}