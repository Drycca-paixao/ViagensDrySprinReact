package com.agencia.ViagensDry.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.ViagensDry.entities.Destino;
import com.agencia.ViagensDry.entities.Passageiro;
import com.agencia.ViagensDry.repositorys.PassageiroRepository;
import com.agencia.ViagensDry.repositorys.DestinoRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/passageiro")
public class PassageiroController {
	

	@Autowired
	private PassageiroRepository passageiroRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	//GET
	@GetMapping
	public ResponseEntity<List<Passageiro>> findAll() {
		
		List<Passageiro> passageiro = passageiroRepository.findAll();
		
		return ResponseEntity.ok().body(passageiro);
	}
	//GET por ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Passageiro> findById(@PathVariable Long id) {
		Passageiro passageiro = passageiroRepository.findById(id).get();
		
		return ResponseEntity.ok().body(passageiro);
	}
	
	//CREATE	
	@PostMapping
	public Passageiro create(@RequestBody Passageiro passageiro) {
			
			return passageiroRepository.save(passageiro);
		}
		
	//UPDATE		
	@PutMapping("{id}")
	public ResponseEntity<Passageiro> update(@PathVariable long id, @RequestBody Passageiro passageiroDetails){
			Passageiro updatePassageiro = passageiroRepository.findById(id).get();
			
			Destino destino = destinoRepository.findById(passageiroDetails.getDestino().getIdDestino()).get();
			
			updatePassageiro.setNome(passageiroDetails.getNome());
			updatePassageiro.setEmail(passageiroDetails.getEmail());
			updatePassageiro.setDataNascimento(passageiroDetails.getDataNascimento());
			updatePassageiro.setCpf(passageiroDetails.getCpf());
			
			updatePassageiro.setDestino(destino);
			
			passageiroRepository.save(updatePassageiro);
			
			return ResponseEntity.ok(updatePassageiro);
		}
	//DELETE
		
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id){
			
			Passageiro destino = passageiroRepository.findById(id).get();
			
			passageiroRepository.delete(destino);
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	
	

}

