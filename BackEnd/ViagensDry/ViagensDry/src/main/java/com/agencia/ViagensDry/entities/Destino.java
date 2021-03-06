package com.agencia.ViagensDry.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destino implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdDestino;
	private String LugarDestino;
	private String DiaPartida; 
	
	@JsonIgnore
	@OneToMany(mappedBy = "destino")
	private List<Passageiro> passageiro = new ArrayList<Passageiro>();
	
	public Destino() {
		super();
	}

	public Destino(Long idDestino, String lugarDestino, String diaPartida) {
		super();
		this.IdDestino = idDestino;
		this.LugarDestino = lugarDestino;
		this.DiaPartida = diaPartida;
	}

	public Long getIdDestino() {
		return IdDestino;
	}

	public void setIdDestino(Long idDestino) {
		IdDestino = idDestino;
	}

	public String getLugarDestino() {
		return LugarDestino;
	}

	public void setLugarDestino(String lugarDestino) {
		LugarDestino = lugarDestino;
	}

	public String getDiaPartida() {
		return DiaPartida;
	}

	public void setDiaPartida(String diaPartida) {
		DiaPartida = diaPartida;
	}
	public List<Passageiro> getPassageiro() {
		return passageiro;
	}

	@Override
	public int hashCode() {
		return Objects.hash(IdDestino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(IdDestino, other.IdDestino);
	}
	
	
	
	
	

}
