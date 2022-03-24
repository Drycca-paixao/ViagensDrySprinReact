package com.agencia.ViagensDry.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.ViagensDry.entities.Destino;



@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}
