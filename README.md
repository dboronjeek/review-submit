# Interaktivna Rating Aplikacija / Interactive Rating App

Ovaj projekt je moderni sustav za prikupljanje povratnih informacija koji na samom početku omogućuje korisniku odabir jezika putem interaktivnih kartica.

---

## 🇭🇷 / 🇬🇧 Odabir jezika (Language Selection)

Prva stvar koju korisnik vidi su dvije velike "tipkice" (kartice) sa zastavama. 
The first thing the user sees are two large interactive cards with flags:

* **Lijeva tipka / Left Button:** "Odaberi hrvatski" (Hrvatska zastava 🇭🇷)
* **Desna tipka / Right Button:** "Choose English" (UK zastava 🇬🇧)

Klikom na željenu zastavu, cijela aplikacija se automatski prevodi na taj jezik bez osvježavanja stranice.

---

## 🚀 Tijek aplikacije / App Flow

Nakon što stisnete tipkicu za jezik, aplikacija prolazi kroz sljedeće korake:

1.  **Ekran za ocjenjivanje:** Odabir broja od 1 do 5.
2.  **Provjera (Confirmation):** Iskače prozor "Jeste li sigurni?" s prikazom vaše ocjene.
3.  **Dodatne opcije:** Ako odustanete, možete napisati komentar ili se vratiti na početak.
4.  **Zahvala:** Finalni ekran s ilustracijom i potvrdom odabrane ocjene.

---

## 🎨 Vizualni Identitet

* **Čistoća:** Maknuta je zvjezdica s početnog ekrana kako bi fokus ostao isključivo na odabiru jezika.
* **Boje:** Koristi se tamna tema s narančastim naglascima (`#FB7C1D`) za bolju vidljivost.
* **Interaktivnost:** Gumbi za jezik (zastave) imaju efekt podizanja i sjaja kada se pređe mišem preko njih.

---

## 🛠️ Instalacija

```bash
# Instalacija ovisnosti
npm install

# Pokretanje aplikacije
npm start
