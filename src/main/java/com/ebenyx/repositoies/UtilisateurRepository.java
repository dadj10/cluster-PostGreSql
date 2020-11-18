package com.ebenyx.repositoies;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ebenyx.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {

	// Retourne un utilisateur par son username
	@Query("SELECT c FROM Utilisateur c WHERE c.username <> ?1 AND c.etat <> -1")
	List<Utilisateur> findAllUtilisateurNonSupprime(String username);

	// Retourne un utilisateur par son username
	@Query("SELECT c FROM Utilisateur c WHERE c.username = ?1 AND c.etat <> -1")
	Utilisateur findUtilisateurByName(String username);

}
