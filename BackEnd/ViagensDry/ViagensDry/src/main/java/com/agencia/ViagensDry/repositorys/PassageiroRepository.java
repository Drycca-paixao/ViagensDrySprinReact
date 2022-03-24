package com.agencia.ViagensDry.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.ViagensDry.entities.Passageiro;



@Repository
public interface PassageiroRepository extends JpaRepository<Passageiro, Long> {

}
