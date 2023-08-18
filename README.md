# Omenapuu kotisivut

### Sisällön päivitys

Uusi sisältö päivittyy automaattisesti sivustolle, kun muutokset on tallennettu.  
Päivittyminen kestää yleensä muutaman minuutin.

Muokattava sisältö on määritelty [YAML](https://www.tutorialspoint.com/yaml/yaml_basics.htm) tiedostoina, mutta syntaksin tunteminen ei ole tarpeen sisältöä muokatessa. Tässä esimerkki tervetuloa osion määrityksestä:

```yaml
docs/_data/landing.yml

# Landing page information.
title: Tervetuloa päiväkoti Omenapuuhun
description: >-
  Päiväkoti Omenapuu on pieni, kodinomainen ja lämminhenkinen vanhenpainyhdistyksen ylläpitämä päiväkoti,
  joka sijaitsee luonnonkauniissa ympäristössä Mäntsälän Mäntymäentiellä.
button: Hae hoitopaikkaa
```

Ainoa erikoisuus tässä esimerkissä on `description: >-` syntaksi, joka tarkoittaa, että seuraavien rivien sisältö on yksi yhtenäinen teksti.
Kiinnitä erityisesti huomiota sisennyksiin, sillä YAML on niistä tarkka.

#### Teksti

Kaikki sivustolla näkyvät tekstit on määritelty [täällä](https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io/tree/main/docs/_data).  
Kannattaa tarkistaa sivuston ulkoasu etenkin jos muutat kenttien määriä. Esimerkiksi uuden "arvon" lisääminen saattaa tarvita muutoksia myös sivuston ulkoasun määrityksiin.
Tavallinen tekstin päivitys ei tarvitse muita muutoksia.

#### Ikonit

Kaikki sivustolla näkyvät tekstit on määritelty [täällä](https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io/tree/main/docs/_data).  
Ikonit ovat [Bootstrap Icons](https://icons.getbootstrap.com/) kirjastosta, jossa on määritelty ikonin nimi muodossa: `bi-facebook`.

#### Kuvat

Kaikki sivustolla näkyvät kuvat on tallennettu [tänne](https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io/tree/main/docs/assets/img) ja niiden käyttö on määritelty [täällä](https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io/tree/main/docs/_data).  
Kuvien kanssa on hyvä käytäntö tallentaa kuvat sopivan kokoisina käyttökohteen mukaan ja sekä jpg että webp muodoissa. Esimerkiksi pieni kuva navigaatio palkissa ei tarvitse olla 1024x1024 pikselin kokoinen.

*Myös pelkkä jpg kuva riittää, mutta tällöin modernit selaimet eivät pysty hyödyntämään paremman kompression tukevaa webp formaattia.*

---

### Kehitys omalla koneella

*Huom! Tämä osio on tarkoitettu kehittäjille, jotka tekevät suurempia muutoksia sivustoon.*

Sivusto on tehty [Jekyll](https://jekyllrb.com/) -generaattorilla, jossa on käytetty pohjana [Bootstrap Creative](https://startbootstrap.com/theme/creative) teemaa.
Ikonit ovat [Bootstrap Icons](https://icons.getbootstrap.com/) kirjaston versiosta [1.10.5](https://github.com/twbs/icons/releases/tag/v1.10.5).
Tarvittavat riippuvuudet kuten fontit, css, js -tiedostot on haettu cdn palveluista suoraan projektiin nopeuttaakseen sivun PageSpeed tuloksia.

Lokaalin kehityksen tueksi käytössä on `jekyll-admin` plugin, jonka käyttöliittymän saa auki navigoimalla selaimessa `localhost:4000/admin` osoitteeseen.
Kaikki käytössä olevat pluginit löytyvät [täältä](https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io/blob/main/docs/Gemfile). 

Sivusto tarjoillaan Github Pages alustan kautta, jonka tukemat riippuvuudet löytyy [täältä](https://pages.github.com/versions/).

#### Valmistelut:

- Pyydä sivuston ylläpitäjää lisäämään sinut [WebDev](https://github.com/orgs/paivakotiomenapuu/teams/webdev) kehitys tiimiin
- [Asenna Jekyll + Ruby omalle käyttöjärjestelmälle](https://jekyllrb.com/docs/installation/)

#### Kehitys ympäristön pystytys:

- `git clone https://github.com/paivakotiomenapuu/paivakotiomenapuu.github.io.git`
- `cd <repository>/docs`
- `bundle install`
- `bundle exec jekyll serve` tai `bundle exec jekyll serve --livereload`
- Navigoi selaimessa osoitteeseen `localhost:4000`