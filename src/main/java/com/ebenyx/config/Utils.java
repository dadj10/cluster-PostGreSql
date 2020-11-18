package com.ebenyx.config;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Utils {

	// Augmenter une date jour par jour
	public static Date addDays(Date date, int days) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DATE, days); // minus number would decrement the days
		return cal.getTime();
	}

	// Augmenter une date jour par jour
	public static Date addMinutes(Date date, int minute) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.MINUTE, minute); // minus number would decrement the minute
		return cal.getTime();
	}

	public Date addMonth(Date date, int minute) {
		Date now = date;
		Calendar myCal = Calendar.getInstance();
		myCal.setTime(now);
		myCal.add(Calendar.MONTH, +minute);
		now = myCal.getTime();
		System.out.println("===========> " + now);
		return now;
	}

	public static boolean isNumeric(String str) {
		try {
			Double.parseDouble(str);
			return true;
		} catch (NumberFormatException e) {
			return false;
		}
	}

	public static String dateNow() {
		String dateNow = null;
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		dateNow = sdf.format(date);

		return dateNow;
	}

	public static Date stringToDate(String str) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = null;
		if (str != null) {
			try {
				date = sdf.parse(str);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		return date;
	}

	public static String dateFormat(String format) {
		String dateFormat = new SimpleDateFormat(format).format(new Date());
		return dateFormat;
	}

	public static Date sdf(String str, String pattern) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		return sdf.parse(str);
	}

	public static String formatNumero(String expediteur) {
		System.out.println("Est numérique : " + isNumeric(expediteur));
		// Mes declarations
		String numero = null;
		String indicatif = null;
		int taille = 0;

		// Je recupère la taille du numéro expéditeur
		taille = expediteur.length();

		if (isNumeric(expediteur) == true) {
			// Si le numéro existe alors
			if (taille > 0) {

				// Je recupère le l'indicatif pays +225
				indicatif = expediteur.substring(0, 4);

				// Si la taille du numéro égale à 12 caractères alors
				if (taille == 11) {
					// Si l'indicatif est +225 alors
					if (indicatif.equalsIgnoreCase("225")) {
						numero = expediteur;
					}
				} else if (taille == 12) {
					// Si l'indicatif est +225 alors
					if (indicatif.equalsIgnoreCase("+225")) {
						numero = expediteur.substring(1, 12);
					}
				} else if (taille == 13) {
					// Si l'indicatif est +225 alors
					if (indicatif.equalsIgnoreCase("225")) {
						numero = expediteur;
					}
				} else if (taille == 14) {
					// Si l'indicatif est +225 alors
					if (indicatif.equalsIgnoreCase("+225")) {
						numero = expediteur.substring(1, 14);
					}
				} else {
					numero = expediteur;
				}
			}
		}

		return numero;
	}

	public String traitementMessage(String message) {
		if (message.length() != 0) {
			if (message.contains("<br>")) {
				message.replace("<br>", "\n");
			}
		}
		return message;
	}
}
