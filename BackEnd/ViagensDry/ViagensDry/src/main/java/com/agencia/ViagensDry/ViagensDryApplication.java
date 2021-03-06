package com.agencia.ViagensDry;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.agencia.ViagensDry.entities.Destino;
import com.agencia.ViagensDry.entities.Passageiro;
import com.agencia.ViagensDry.repositorys.DestinoRepository;
import com.agencia.ViagensDry.repositorys.PassageiroRepository;


	@SpringBootApplication
	public class ViagensDryApplication implements CommandLineRunner {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired
	private PassageiroRepository passageiroRepository;

	public static void main(String[] args) {
		SpringApplication.run(ViagensDryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		/*
		Destino d13 = new Destino(null, "Arembepe, Camaçari-BA", "07 de setembro de 2022");
		Destino d12 = new Destino(null, "Itacimirim, Camaçari-BA", "12 de outubro de 2022");
		Destino d14 = new Destino(null, "Barra do Jacuípe, Camaçari-BA", "02 de novembro de 2022");
		
		Passageiro p1 = new Passageiro(null, "Carlos Xavier", "xavier16@gmail.com", "04 de abril de 1992", "010.256.782-46", d13);
		Passageiro p2 = new Passageiro(null, "Mariana Alice", "mari.01@hotmail.com", "26 de outubro de 1988", "123.456.789-01", d12);
		Passageiro p3 = new Passageiro(null, "Adriana da Silva", "drypaz@ig.com.br", "10 de junho de 1977", "789.456.123-78", d14);
		
		d13.getPassageiro().addAll(Arrays.asList(p1));
		d12.getPassageiro().addAll(Arrays.asList(p2));
		d14.getPassageiro().addAll(Arrays.asList(p3));		
			
		destinoRepository.save(d13);
		destinoRepository.save(d12);
		destinoRepository.save(d14);
			
		passageiroRepository.save(p1);
		passageiroRepository.save(p2);
		passageiroRepository.save(p3);
		*/	
		
	}

}
