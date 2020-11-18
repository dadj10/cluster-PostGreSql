package com.ebenyx.controllers;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ebenyx.config.GetCurrentUser;
import com.ebenyx.entities.Utilisateur;
import com.ebenyx.repositoies.UtilisateurRepository;

@Controller
@RequestMapping(value = "/")
public class AccueilController {

	// Logger
	private static final Logger log = LoggerFactory.getLogger(AccueilController.class);

	// Invertion de control.
	@Autowired
	private UtilisateurRepository userRepos;

	// Je cré une nouvelle instance de mon objet qui recupère l'utilisateur connecté
	GetCurrentUser user = new GetCurrentUser();

	Utilisateur userConnected = null;

	// Cette fonction affiche les information du tableau de bord.
	@GetMapping()
	public String page(Model model, HttpSession session) {

		// Je recupère les information de l'utilisateur connecté.
		userConnected = userRepos.findUtilisateurByName(user.getUserConnected());
		session.setAttribute("Utilisateur", userConnected);

		return "accueil/index";
	}

}
