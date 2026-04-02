# Interaktivna Rating Aplikacija / Interactive Rating App

Ovaj projekt je moderna web aplikacija izgrađena u Reactu koja omogućuje korisnicima ocjenjivanje usluge uz potpunu podršku za dva jezika.

---

## 🌍 Odabir jezika / Language Selection

Glavna značajka aplikacije je početni zaslon koji korisniku nudi jasan izbor:
* **Hrvatski jezik:** Klikom na karticu sa zastavom 🇭🇷 i tekstom "Odaberi hrvatski".
* **English language:** By clicking the card with the flag 🇬🇧 and text "Choose English".

Ovaj pristup osigurava da korisnik odmah razumije sučelje bez obzira na predznanje engleskog jezika.

---

## 🚀 Ključne funkcionalnosti / Key Features

### [HR] Hrvatski:
* **Vizualni odabir:** Intuitivne "tipkice" u obliku kartica sa zastavama za promjenu jezika.
* **Provjera prije slanja:** Sustav "Jeste li sigurni?" sprječava slučajne pogreške.
* **Povratne informacije:** Mogućnost ostavljanja tekstualnog komentara ako korisnik odluči da ne želi poslati brojčanu ocjenu.
* **Čist dizajn:** Uklonjeni su svi suvišni elementi (poput zvjezdice na početnom ekranu) radi bolje preglednosti.

### [EN] English:
* **Visual Selection:** Intuitive card-style buttons with flags for switching languages.
* **Double-Check System:** "Are you sure?" screen prevents accidental rating submissions.
* **Feedback Logic:** Option to leave a text comment if the user declines to give a numeric rating.
* **Clean UI:** Removed unnecessary elements (like the star icon on the first screen) for a better focus.

---

## 🛠️ Tehnički detalji / Technical Setup

### Pokretanje projekta:
1. Instalirajte pakete: `npm install`
2. Pokrenite razvojni server: `npm start`

### Struktura (Samo bitne datoteke):
* `src/RatingApp.jsx` - Sadrži svu logiku i tekstove prijevoda.
* `src/index.css` - Sadrži dizajn kartica, zastava i interaktivnih gumba.
* `src/images/` - Sadrži lokalne ikone potrebne za UI.

---

## 🎨 Dizajn i Boje / Design & Palette

Aplikacija koristi tamnu temu s modernim narančastim naglascima:
* **Narančasta (Gumbi/Akcije):** `hsl(25, 97%, 53%)`
* **Tamna pozadina:** `hsl(216, 12%, 8%)`
* **Istaknuta ocjena:** Svijetli broj s narančastim sjajem (glow efekt).
