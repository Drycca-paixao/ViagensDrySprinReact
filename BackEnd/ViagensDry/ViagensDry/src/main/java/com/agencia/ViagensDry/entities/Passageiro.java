package com.agencia.ViagensDry.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

	@Entity
	public class Passageiro implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdPassageiro;
	private String Nome;
	private String Email;
	private String DataNascimento; 
	private String Cpf;
		
	@ManyToOne
	@JoinColumn(name = "IdDestino")
	private Destino destino;
	
	public Passageiro() {
		super();
	}

	public Passageiro(Long idPassageiro, String nome, String email, String dataNascimento, String cpf, Destino destino) {
		super();
		this.IdPassageiro = idPassageiro;
		this.Nome = nome;
		this.Email = email;
		this.DataNascimento = dataNascimento;
		this.Cpf = cpf;
		this.destino = destino;
								
	}			

	public Long getIdPassageiro() {
		return IdPassageiro;
	}

	public void setIdPassageiro(Long idPassageiro) {
		IdPassageiro = idPassageiro;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getDataNascimento() {
		return DataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		DataNascimento = dataNascimento;
	}

	public String getCpf() {
		return Cpf;
	}

	public void setCpf(String cpf) {
		Cpf = cpf;
	}

	public Destino getDestino() {
		return destino;
	}

	public void setDestino(Destino destino) {
		this.destino = destino;
	}

	@Override
	public int hashCode() {
		return Objects.hash(IdPassageiro);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passageiro other = (Passageiro) obj;
		return Objects.equals(IdPassageiro, other.IdPassageiro);
	}
	
	
	
	
	

}
