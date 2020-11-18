package com.ebenyx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ClusterPostGresApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClusterPostGresApplication.class, args);
	}
	
	@Bean	// Cette fonction permet d'encoder les mots de passe en BCrypt
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
