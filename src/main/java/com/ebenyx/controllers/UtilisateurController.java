package com.ebenyx.controllers;

import java.io.File;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ebenyx.config.GetCurrentUser;
import com.ebenyx.entities.Utilisateur;
import com.ebenyx.repositoies.UtilisateurRepository;
import com.ebenyx.repositoies.RoleRepository;

@Controller
@RequestMapping(value = "/utilisateur")
public class UtilisateurController {

	// Logger
	private static final Logger log = LoggerFactory.getLogger(UtilisateurController.class);

	@Autowired // Invertion de control.
	private UtilisateurRepository utilisateurRepos;

	@Autowired
	private RoleRepository RoleRepos;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Value("${dir.photos}")
	private String photoDirectory;

	// Je cré une nouvelle instance de mon objet qui recupère l'utilisateur connecté
	GetCurrentUser user = new GetCurrentUser();

	Utilisateur userConnected = null;

	// Cette fonction affiche la liste.
	@GetMapping()
	public String page(Model model, HttpSession session) {

		// Je récupère les information de l'utilisateur connecté.
		userConnected = utilisateurRepos.findUtilisateurByName(user.getUserConnected());
		session.setAttribute("userConnected", userConnected);

		// Je récupère la liste de tous les utilisateurs non supprimés.
		List<Utilisateur> utilisateurs = null;
		utilisateurs = utilisateurRepos.findAllUtilisateurNonSupprime(userConnected.getUsername());
		model.addAttribute("Utilisateurs", utilisateurs);

		// J'active le menu et sous-menu.
		model.addAttribute("open_menu", "utilisateur");
		model.addAttribute("active_menu", "utilisateur");

		return "utilisateur/index";
	}

	// Retourne le formulaire de création
	@GetMapping(value = "/formcreate")
	public String formcreate(Model model, HttpSession session) {

		try {
			// Je recherche toutes les informations de l'utilisateur connecté.
			userConnected = utilisateurRepos.findUtilisateurByName(user.getUserConnected());
			// J'envoi cet utilisateur dans ma vue.
			session.setAttribute("userConnected", userConnected);

			model.addAttribute("Utilisateur", new Utilisateur());
			model.addAttribute("Roles", RoleRepos.findAllRoleAdmin());

			// J'active le menu et sous-menu.
			model.addAttribute("open_menu", "utilisateur");
			model.addAttribute("active_menu", "utilisateur");

		} catch (Exception ex) {
			ex.getMessage();
		}
		
		return "utilisateur/create";
	}

	// Fonction de création.
	@PostMapping(value = "/create")
	public String create(@Valid Utilisateur a, BindingResult bindingResult,
			@RequestParam(name = "picture") MultipartFile file, HttpSession session, RedirectAttributes redirAttrs) {

		Utilisateur utilisateur = null;

		// Je recherche toutes les informations de l'utilisateur connecté.
		userConnected = utilisateurRepos.findUtilisateurByName(user.getUserConnected());
		// J'envoi cet utilisateur dans ma vue.
		session.setAttribute("admins", userConnected);

		try {
			if (bindingResult.hasErrors()) {
				return "utilisateur/create";
			}

			a.setEtat(1);
			a.setDateCreation(new Date());
			a.setCreerPar(userConnected);
			a.setPassword(passwordEncoder.encode(a.getPassword()));
			a.setPasswordUpdateDate(new Date());

			// Je transfert la photo de profil vers 'photoDirectory' si elle existe.
			if (!(file.isEmpty())) {
				File directory = new File(photoDirectory);
			    if (! directory.exists()){
			    	directory.mkdir();
			    }
				a.setPhoto(file.getOriginalFilename());
				file.transferTo(new File(photoDirectory + a.getUsername()));
			}

			utilisateur = utilisateurRepos.save(a);

			if (utilisateur != null) {
				redirAttrs.addFlashAttribute("success", "Utilisateur créé avec succès.");
			} else {
				redirAttrs.addFlashAttribute("error",
						"Erreur lors de la création de l'utilisateur, veuillez réessayer à nouveau.");
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return "redirect:/utilisateur";
	}

}
