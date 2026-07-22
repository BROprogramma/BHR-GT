[h2 is vereist vanwege ReSpec]: #
<h2>Opbouw van de gegevensdefinitie</h2>

# De gegevensdefinitie

De gegevensdefinitie vormt het hart van de catalogus en geeft een beschrijving van alle gegevens van het registratieobject. Eerst wordt de definitie van het registratieobject gegeven inclusief de plaatjes van het zgn. domeinmodel, en vervolgens de definities van de entiteiten waaruit het registratieobject is opgebouwd met de eigenschappen van die entiteiten, de attributen. De volgende aspecten van de gegevens worden vastgelegd.

* **Type gegeven** Of het gegeven een entiteit, een attribuut of een gegevensgroep is, met in de laatste twee gevallen van welke entiteit het een attribuut is.

* **Naam** De Nederlandse naam van het gegeven.

* **Code** De afkorting die voor het registratieobject wordt gebruikt (alleen van toepassing op Registratieobject). N.B.: Het metagegeven ‘Code’ moet niet worden verward met het domein [‘Code’](#code).

* **Definitie** De definitie van het gegeven.

* **Populatie** De beschrijving van de exemplaren van het registratieobject die in de basisregistratie ondergrond worden geregistreerd (alleen van toepassing op Registratieobject).

* **Herkomst** Eventueel de herkomst van het gegeven, in het uitzonderlijke geval dat de herkomst anders is dan de BRO.
* **Herkomst definitie** Eventueel de herkomst van de definitie, in het uitzonderlijke geval dat de definitie een andere herkomst heeft dan de BRO.

* **Juridische status** De aanduiding of een attribuut al dan niet authentiek is.

* **Kardinaliteit** De kardinaliteit van een attribuut, wat aangeeft hoe vaak het attribuut moet of mag voorkomen.

* **Domein – Naam** De naam van het domein die de verzameling van alle toegestane waarden van het attribuut beschrijft. Als het domein een uitbreidbare waardelijst is, dan is de naam van het domein de naam van die waardelijst en kan er via de naam naar die waardelijst genavigeerd worden.

* **Domein – Type** Het soort domein, bijv. een uitbreidbare waardelijst of een meetwaarde. De mogelijke typen staan beschreven in de paragraaf [Domeinen](# Domeinen). Afhankelijk van het type domein worden er extra metagegevens getoond, zoals bijv. Eenheid, Lengte, Opbouw en Waardebereik. Dit staat bij de betreffende typen in de paragraaf Domeinen beschreven.

* **Domein – Naam IMBRO/A** Eventueel de naam van het domein van het attribuut voor IMBRO/A, wanneer het uitzonderlijke geval zich voordoet dat er voor IMBRO/A een ander domein geldt dan voor IMBRO.

* **Gegevensgroeptype** Als het gegeven een gegevensgroep is, van welk type die groep is. Via de naam van het gegevensgroeptype kan naar dat gegevensgroeptype genavigeerd worden.

* **Regels** en **Regels IMBRO/A** Eventueel de regels die voor IMBRO en IMBRO/A in aanvulling op de kardinaliteit en de bepalingen van het domein gelden en die in controles zijn opgenomen, bijvoorbeeld om de consistentie van de inhoud van een brondocument vast te stellen.

* **Mogelijk geen waarde** Eventueel de aanduiding dat de waarde van het attribuut mag ontbreken, wanneer het uitzonderlijke geval zich voordoet dat de waarde van het attribuut mag ontbreken.

* **Reden geen waarde** Van attributen waarvan de waarde mag ontbreken de omschrijving van de reden waarom de waarde mag ontbreken.

* **Is afgeleid** Eventueel de aanduiding dat het gegeven niet in het aangeleverde brondocument is opgenomen, maar dat de registratie ondergrond het gegeven bepaalt (bijv. berekent) op basis van aangeleverde gegevens, in het uitzonderlijke geval dat het gegeven wordt afgeleid.

* **Materiële geschiedenis** Van attributen van registratieobjecten met een materiële geschiedenis de aanduiding of het attribuut al dan niet een materiële geschiedenis kan hebben.

* **Toelichting** Eventueel een toelichting om aanvullende informatie te geven over de betekenis van het gegeven of de reden waarom het is opgenomen.

* **Identificerend** Eventueel de aanduiding dat het attribuut, eventueel in combinatie met andere attributen, uniek identificerend is voor de objecten in de populatie van deze entiteit.

De gegevensdefinitie dekt de beide kwaliteitsregimes die worden onderscheiden, IMBRO en IMBRO/A (zie paragraaf 2.4 Kwaliteitsregime). Het kwaliteitsregime IMBRO is leidend en bij het opstellen van de gegevensdefinitie is geprobeerd de verschillen tussen de twee regimes zo klein mogelijk te houden. Het streven is een registratieobject altijd in termen van dezelfde gegevens te beschrijven en voor IMBRO/A alleen aanvullende regels te formuleren en extra waarden toe te staan. Bij uitzondering kan het echter nodig zijn gebleken voor IMBRO/A aparte entiteiten, attributen of domeinen te definiëren.

# Domeinen

Een domein in *Unified Modeling Language* (UML)-context beschrijft welke waarden mogelijk zijn voor een attribuut.

Sommige domeinen zijn samengesteld uit twee of meer elementen die in samenhang betekenisvol zijn. Een voorbeeld van een samengesteld domein dat in de registratie ondergrond bestaat is Datuminterval. Datuminterval bestaat uit twee elementen, beide van het domein 'Datum' (jaar, maand en dag), namelijk een begindatum en een einddatum.

Bij een attribuut kunnen ook twee of meer domeinen mogelijk zijn. Voor dit attribuut geldt dat verschillende domeinen valide zijn; er kan echter bij levering van de gegevens aan de BRO altijd maar één van de domeinen gekozen worden. In de gegevensdefinitie wordt in dat geval een attribuut gemodelleerd waarvan het domein dat de mogelijke waarde beschrijft een keuze is tussen twee of meer domeinen. Dit maakt het mogelijk waar in het domeinmodel normaal gesproken maar één mogelijkheid bestaat, een opsomming te geven van meerdere mogelijke domeinen, waarbij altijd precies één van deze mogelijkheden wordt gebruikt.

Hier volgt een toelichting op de domeinen die in de gegevensdefinitie worden gebruikt.

## Aantal

Het domein 'Aantal' wordt gebruikt voor een telbare hoeveelheid. Het is een natuurlijk getal met een bepaalde maximale lengte.

Het domein wordt volledig gespecificeerd door met de aanduiding aantal ook de maximale lengte mee te geven (Aantal N). Gewoonlijk wordt de waardeverzameling verder ingeperkt door een bereik te specificeren. In het domeinmodel wordt volstaan met de algemene aanduiding Aantal.

## Code

Een 'Code' is een opeenvolging van cijfers, van letters of van cijfers en letters met een bepaalde opbouw en met een specifieke betekenis. Een code heeft gewoonlijk een betekenis die ook buiten de BRO geldt. Een verantwoordelijke instantie geeft een code uit. Om de opbouw van een code weer te geven wordt gebruik gemaakt van de letters C en N. De letter C staat voor *character* (Eng.) en duidt een letter aan, de letter N staat voor *number* (Eng.) en duidt een cijfer aan. Een code heeft een bepaalde naam.

Het domein wordt volledig gespecificeerd door met de naam van de code ook de opbouw mee te geven. Uit de definitie van het attribuut zelf moet blijken wat de specifieke betekenis is van de code. In het domeinmodel wordt het domein aangeduid met zijn naam.

## Gemeten waarden

Meetwaarden worden gebruikt voor grootheden. De waarde van een grootheid is een getal met een bepaalde opbouw en een bepaalde eenheid. Voor de waarde van grootheden worden twee domeinen gebruikt. Het ene voor een waarde waarvan het aantal decimalen altijd hetzelfde is (Meetwaarde). Het andere voor een waarde waarvan het aantal decimalen varieert (Meetwaarde in machten) en dat is het geval wanneer het aantal decimalen voor kleine getallen anders is dan het aantal decimalen voor grote getallen omdat een ander apparaat of een andere methode is gebruikt.

De registratie ondergrond gebruikt voor de eenheden de codes uit het UCUM *(Unified Code for Units of Measure)*-systeem. In bijzondere gevallen is de eenheid dimensieloos.

### Meetwaarde

Het domein 'Meetwaarde' wordt gebruikt wanneer het aantal decimalen van de waarde altijd hetzelfde is. Het is een rationaal getal met een bepaalde opbouw. Het aantal cijfers voor het decimaalteken is variabel maar begrensd. Het aantal cijfers achter het decimaalteken ligt vast.

Het domein wordt volledig gespecificeerd door met de aanduiding meetwaarde ook de opbouw (Meetwaarde N.N) en de eenheid mee te geven. Gewoonlijk wordt de waardeverzameling verder ingeperkt door een bereik te specificeren. In het domeinmodel wordt volstaan met de algemene aanduiding Meetwaarde.

### Meetwaarde in machten

Het domein 'Meetwaarde in machten' wordt gebruikt wanneer de waarde een heel groot bereik heeft en het aantal decimalen voor kleine getallen anders is dan voor grote getallen. In dat geval wordt de meetwaarde uitgedrukt in machten. In de BRO wordt de meetwaarde in machten altijd uitgedrukt in een macht van tien. De notatie voor de meetwaarde in machten is (m . 10<sup>e</sup>). De m staat voor mantisse en is een meetwaarde, en de e staat voor de exponent.

De mantisse (m) is een rationaal getal met een bepaalde opbouw. Het aantal cijfers voor het decimaalteken is in de basisregistratie ondergrond altijd 1. Het aantal cijfers achter het decimaalteken ligt vast. De meetwaarde wordt uitgedrukt in machten van tien (10<sup>e</sup>). De exponent (e) is in de basisregistratie ondergrond altijd een geheel getal.

Het domein wordt volledig gespecificeerd door met de aanduiding meetwaarde in machten ook de opbouw (meetwaarde 1.N in machten), de eenheid en het bereik van de machten mee te geven. Het bereik van de machten is vastgelegd in het waardebereik. De waardeverzameling wordt gewoonlijk verder ingeperkt door een bereik te specificeren. In het domeinmodel wordt volstaan met de algemene aanduiding 'Meetwaarde in machten'.

### Inname van gemeten waarden

In de praktijk is het moeilijk een meetwaarde zonder verandering van het ene systeem aan het andere door te geven. De registratie ondergrond hanteert de definities strikt om te borgen dat een meetwaarde zonder verandering kan worden doorgegeven.

Bij het vastleggen van eigenschappen is het niet altijd nodig getallen zo strikt te definiëren als de BRO vraagt. De uitvoerders weten wel wat een getal zou moeten voorstellen en kunnen bijvoorbeeld accepteren dat een meetwaarde er een decimale nul bij krijgt of dat een getal een onbepaald aantal decimalen heeft. Om de uitvoeringspraktijk niet nodeloos te frustreren door getallen die niet aan de strikte definitie voldoen af te wijzen, hanteert de BRO bij het innemen van meetwaarden de volgende praktische regels.

Er zijn meer cijfers achter het decimaalteken aanwezig dan gespecificeerd: het getal wordt afgekapt op het aantal dat in de gegevensdefinitie is gespecificeerd.

Er zijn minder cijfers achter het decimaalteken aanwezig dan gespecificeerd: het getal wordt aangevuld met nullen tot het aantal dat in de gegevensdefinitie is gespecificeerd.

Er is geen decimaalteken aanwezig: het decimaalteken wordt toegevoegd en het getal wordt aangevuld met nullen tot het aantal dat in de gegevensdefinitie is gespecificeerd.

Het getal voor het decimaalteken begint met een of meer nullen: de nullen worden genegeerd.

Er zijn meer cijfers vóór het decimaalteken aanwezig dan gespecificeerd: de waarde wordt geweigerd.

Er is een decimaalteken bij de exponent van de meetwaarde in machten aanwezig: de waarde wordt geweigerd.

### Uitgifte van gemeten waarden

Gemeten waarden worden uitgegeven volgens de opbouw die geldig was op het moment van inname en waarin de waarde bij inname is opgeslagen in de registratie ondergrond (zie [Inname van gemeten waarden](#inname-van-gemeten-waarden)). Deze opbouw kan afwijken van de opbouw die in de actuele catalogusversie bij het attribuut is gespecificeerd, namelijk wanneer de opbouw is gewijzigd na de catalogusversie waaronder de waarde is ingenomen. In dat geval wordt de waarde uitgegeven in de oorspronkelijke opbouw. Als de opbouw sinds een vorige catalogusversie is gewijzigd, dan is dat in de toelichting bij het attribuut beschreven.

## Nummer

Het domein 'Nummer' wordt gebruikt om de plaats in een reeks aan te geven. Het is een opeenvolging van cijfers met een bepaalde maximale lengte. Een nummer heeft geen rekenkundige betekenis, maar heeft een betekenisvolle volgorde.

Het domein wordt volledig gespecificeerd door met de aanduiding nummer ook de maximale lengte mee te geven (Nummer N). Eventueel wordt de waardeverzameling verder ingeperkt door een bereik te specificeren. In het domeinmodel wordt volstaan met de algemene aanduiding Nummer.

## Tekst

Het domein 'Tekst' bestaat uit een stuk tekst van een bepaalde maximale lengte. De tekst mag alleen bestaan uit de tekens die voorkomen in de MES-1 set. Net als het veel bekendere ASCII is dit een deelverzameling van Unicode. Omdat ASCII geen trema's, umlauten, accenttekens en cedille bevat, staat de BRO de eerst grotere standaard deelverzameling van Unicode toe, MES-1. De MES-1 set omvat 335 tekens (te weten alle tekens uit ASCII plus) en wordt gebruikt binnen de landen van de Europese Unie die een Latijns schrift kennen.

Het domein wordt volledig gespecificeerd door met de aanduiding tekst ook de maximale lengte mee te geven (Tekst N). In het domeinmodel wordt volstaan met de algemene aanduiding Tekst.

## Tijdstip

Voor gegevens over tijdstippen worden twee domeinen gebruikt. Het ene voor een tijdstip tot op de seconde nauwkeurig (DatumTijd) en het andere voor een tijdstip tot op de dag nauwkeurig (Datum).

In ieder domein gaat het om de datum gemeten volgens de Gregoriaanse kalender. Bij het domein 'DatumTijd' wordt de tijd gemeten volgens de *Coordinated Universal Time* (UTC) en moet de tijdzone worden meegegeven. UTC is de mondiaal geaccepteerde standaardtijd en de opvolger van GMT *(Greenwich Mean Time)*. Door de tijdzone mee te geven kan lokale tijd worden omgezet naar UTC.

De opbouw van de twee domeinen volgt dezelfde conventies, conform de ISO-standaard voor de aanduiding van kalender, datum en tijd (ISO 8601). Het eerste element in de opbouw staat voor het jaar, dan volgt de maand, enz., en het laatste element staat voor de tijdzone. Om de verschillende elementen aan te geven worden letters gebruikt: jaar (J), maand (M), dag (D), uur (U), minuut (M) en seconde (S), gevolgd door de tijdzone. Het aantal letters geeft de lengte aan.

Voor de meest uitgebreide variant van de opbouw, die van DatumTijd, wordt dit JJJJ-MM-DDTUU:MM:SS+UU:MM. De T is het teken dat de datum en het tijdstip op die datum scheidt. De + is het scheidingsteken tussen het tijdstip en de tijdzone. Zoals uit de opbouw blijkt wordt de tijdzone in uren en minuten gegeven. De meeste tijdzones zijn overigens uitgedrukt in gehele uren (UU:00). In Nederland geldt Centraal-Europese Tijd (UTC+1:00) of Centraal-Europese Zomertijd (UTC+2:00).

### Datum

Het domein 'Datum' wordt gebruikt om een datum volgens de Gregoriaanse kalender tot op de dag nauwkeurig aan te geven. De opbouw is JJJJ-MM-DD. Bij het domein 'Datum' is het voldoende de naam te geven, omdat de opbouw altijd hetzelfde is. Gewoonlijk wordt de waardeverzameling verder ingeperkt door een bereik te specificeren.

### DatumTijd

Het domein 'DatumTijd' wordt gebruikt om een tijdstip volgens de Gregoriaanse kalender tot op de seconde nauwkeurig aan te geven. De opbouw is JJJJ-MM-DDTUU:MM:SS+UU:MM. Bij het domein 'DatumTijd' is het voldoende de naam te geven, omdat de opbouw altijd hetzelfde is. Gewoonlijk wordt de waardeverzameling verder ingeperkt door een bereik te specificeren.

De registratie ondergrond volgt de ISO 8601-standaard en rekent de geleverde DatumTijd-waarde om tot een Nederlandse DatumTijd waarde voordat er wordt getoetst op eventuele regels. Het is dus belangrijk dat de juiste tijdzone wordt opgevoerd om tijdstippen correct leesbaar te houden. Voor de lezer is dit de lokale tijd. Daarnaast is het belangrijk dat de zomer- en wintertijd correct worden toegepast. Geadviseerd wordt om voor de tijdzone de in Nederland geldige waarden +01:00 en +02:00 te gebruiken: dit ondersteunt de leesbaarheid van de XML door mensen. Zie voor een uitgebreidere toelichting het document *[Het afhandelen van tijdstippen](https://www.bro-productomgeving.nl/bpo/latest/het-afhandelen-van-tijdstippen)* op de BRO Productomgeving.

### OnvolledigeDatum

Voor gegevens die onder het kwaliteitsregime IMBRO/A aangeleverd worden, geldt een derde domein met vier keuzemogelijkheden.

* De datum tot op de dag nauwkeurig, met als opbouw JJJJ-MM-DD

* De datum tot op de maand nauwkeurig, met als opbouw JJJJ-MM

* De datum tot op het jaar nauwkeurig, met als opbouw JJJJ

* Geen datum bekend, met als vaste waarde onbekend.

De keuze die gemaakt wordt is gebaseerd op de beschikbaarheid van gegevens. De gebruiker moet ervan uitgaan dat de informatie zo nauwkeurig mogelijk is opgenomen. Bij het domein 'OnvolledigeDatum' is het voldoende de naam te geven, omdat de vier keuzen en de opbouw altijd hetzelfde zijn.

## Waardelijsten

Een waardelijst is een lijst van de waarden die het attribuut mag hebben. Er zijn twee typen waardelijsten: waardelijsten die in de toekomst kunnen worden uitgebreid en waardelijsten die niet kunnen worden uitgebreid. Een waardelijst heeft een bepaalde naam en een specifieke inhoud.

### Waardelijst niet-uitbreidbaar

Een niet-uitbreidbare waardelijst wordt gebruikt wanneer uitbreiding niet mogelijk is. Alle waarden van de lijst staan vast. Bij een niet-uitbreidbare waardelijst is het voldoende de naam te geven, omdat de inhoud altijd hetzelfde is. In de registratie ondergrond worden drie niet-uitbreidbare waardelijsten gebruikt.

IndicatieJaNee

| Waarde |
| --- |
| ja |
| nee |

IndicatieJaNeeOnbekend

| Waarde |
| --- |
| ja |
| nee |
| onbekend |

Kwaliteitsregime

| Waarde |
| --- |
| IMBRO |
| IMBRO/A |

### Waardelijst uitbreidbaar

Een uitbreidbare waardelijst wordt gebruikt wanneer uitbreiding mogelijk moet zijn. In de toelichting boven iedere waardelijst is achter het kenmerk dat de lijstwaarde uniek maakt in de waardelijst, tussen haakjes ‘identificerend’ aangegeven. Het identificerende kenmerk is het kenmerk dat wordt gebruikt bij inname en uitgifte. Iedere waarde van de lijst heeft een specifieke betekenis (Omschrijving) en geldt voor een bepaald kwaliteitsregime, IMBRO en/of IMBRO/A. Eventueel worden andere aspecten van de waarde vastgelegd.
Bij een uitbreidbare waardelijst wordt de naam van de lijst gegeven. De inhoud van de lijst is in een apart hoofdstuk van de gegevensdefinitie opgenomen.

## Geometrie

Voor gegevens over de geometrie van een object worden verschillende domeinen gebruikt. De vorm, afmetingen, oriëntatie en positie ten opzichte van de aarde van een object kunnen in verschillende typen geometrie uitgedrukt worden, waarbij ook een keuzemogelijkheid uit meerdere typen en daarmee domeinen een optie kan zijn.
In de registratie ondergrond zijn de geometrieën conform het GML Simple Features profile versie 2.0 (OGC) toegestaan. Deze omvat punten, lijnen, vlakken en volumes.

De verschillende typen geometrie uitgedrukt in verschillende domeinen die in de gegevensdefinitie worden gebruikt, worden hieronder toegelicht.

### Punt

Het domein 'Punt' wordt gebruikt om de positie van een object vast te leggen. De positie wordt bepaald in een tweedimensionaal vlak, een specifiek referentiestelsel en uitgedrukt in coördinaten. In sommige gevallen wordt daarnaast de hoogte (derde dimensie) van het Punt vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/punt.png" alt="Punt" width="150"/>
    <figcaption>Een puntgeometrie (ISO 19107:2003 Spatial Schema).</figcaption>
</figure>

### Lijn

Het domein 'Lijn' wordt gebruikt om de vorm, afmetingen en positie van een object in een lijn uit te drukken. De positie wordt bepaald in een specifiek referentiestelsel en uitgedrukt in één of meerdere lijnsegmenten. Een lijnsegment is de verbinding tussen twee punten. Lijnsegmenten zijn aan elkaar verbonden doordat het eindpunt van een segment is verbonden aan het beginpunt van een volgend lijnsegment. Een Lijn kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/lijn.png" alt="Lijn" width="150"/>
    <figcaption>Een lijngeometrie (ISO 19107:2003 Spatial Schema).</figcaption>
</figure>

### Multilijn

Het domein 'Multilijn' bestaat uit een verzameling van lijnen die gezamenlijk één object vormen en wordt gebruikt om de vorm, afmetingen en positie van een object in meerdere lijnen uit te drukken. De positie wordt bepaald in een specifiek referentiestelsel en uitgedrukt in meerdere lijnen met één of meer lijnsegmenten. Tussen de lijnen die samen een Multilijn vormen mag geen intersectie plaatsvinden, tenzij dit gebeurt in de eindpunten van de lijnen (er mag geen kruising van lijnen plaatsvinden, wel vertakkingen). Een Multilijn kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/multilijn.png" alt="Multilijn" width="150"/>
    <figcaption>Een multilijngeometrie</figcaption>
</figure>

### Vlak

Het domein 'Vlak' wordt binnen de geometrie gebruikt voor de representatie van de vorm, afmetingen en positie van een object als een vlak. De positie wordt bepaald in een specifiek referentiestelsel. Een vlak heeft altijd een buitengrens, daarnaast kan een vlak ook nog een of meer interne begrenzingen hebben. Een Vlak kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/vlak.png" alt="Vlak" width="150"/>
    <figcaption>Een vlak is een geometrie die een beeld van een continue regio of vlak vertegenwoordigt (ISO 19107:2003 Spatial Schema).</figcaption>
</figure>

### Multivlak

Het domein 'Multivlak' bestaat uit een verzameling van vlakken die gezamenlijk één object vormen en wordt gebruikt om de vorm, afmetingen en positie van een object uit te drukken. De vlakken die samen een multivlak vormen, mogen elkaar niet overlappen; wel mogen zij in een eindig aantal punten elkaar raken (wel punten maar geen grenzen gemeenschappelijk). De posities van de vlakken worden bepaald in een specifiek referentiestelsel. Een Multivlak kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/multivlak.png" alt="Multivlak" width="150"/>
    <figcaption>Een multivlakgeometrie.</figcaption>
</figure>

### Volume

Het domein 'Volume' wordt gebruikt om de vorm, afmetingen en positie van een object uit te drukken. De geometrie van een volume is opgebouwd uit grenzen die elk een vlak zijn. Deze zijn naar buiten toe georiënteerd; de bovenkant van elk vlak is van de buitenkant van het volumeobject te zien. Een Volume geometrie kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/volume.png" alt="Volume" width="150"/>
    <figcaption>Een volumegeometrie (ISO 19107:2003 Spatial Schema).</figcaption>
</figure>

### Minimum begrenzing

Het domein 'Minimum begrenzing' wordt gebruikt om de positie van één of meer geometrieobjecten te begrenzen. De geometrie van de Minimum begrenzing is opgebouwd uit twee punten, waarbij het eerste punt de hoek aan de linker onderkant van het selectiekader weergeeft en het tweede punt de hoek aan de rechter bovenkant. De posities van de punten worden bepaald in een specifiek referentiestelsel. Een Minimum begrenzing kan in een tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

<figure>
    <img src="https://raw.githubusercontent.com/BROprogramma/generiek/gh-pages/media/minimumBegrenzing3.png" alt="Minimum begrenzing" width="150"/>
    <figcaption>Minimum begrenzing.</figcaption>
</figure>

## Coördinatenpaar

Het domein 'Coördinatenpaar' wordt gebruikt om de positie van een punt op het aardoppervlak vast te leggen. De positie wordt bepaald in een specifiek referentiestelsel en uitgedrukt in twee coördinaten. Ieder van de coördinaten heeft een meetwaarde en de notatie voor het paar is (coördinaat 1, coördinaat 2). In de registratie ondergrond worden drie referentiestelsels voor horizontale posities gebruikt. Het referentiestelsel bepaalt hoe de tweedimensionale ruimte wordt beschreven en daarmee wat de coördinaten voorstellen en wat de karakteristiek van de twee meetwaarden is. Voor het referentiestelsel RD zijn de coördinaten cartesisch en is de notatie (x,y). De eerste coördinaat (x) heeft betrekking op de positie op een west-oost georiënteerde as, de tweede coördinaat (y) op een zuid-noord georiënteerde as. Een positie oostelijk van de oorsprong, resp. noordelijk van de oorsprong heeft een positieve waarde. Voor WGS84 (ongeprojecteerd) en ETRS89 (ongeprojecteerd) zijn de coördinaten geografisch en is de notatie (φ,λ). De eerste coördinaat heeft betrekking op de geografische breedte, de tweede op de geografische lengte. Een positie oostelijk van de Greenwichmeridiaan, resp. noordelijk van de evenaar heeft een positieve waarde.
Bij het domein 'Coördinatenpaar' is het voldoende de naam te geven, omdat de opbouw altijd hetzelfde is.

Coördinatenpaar voor RD (x,y)

| Domein |  |
| --- | --- |
| Naam | Meetwaarde 6.3 |
| Eenheid | m (meter) |
| Waardebereik x | -7000 tot 289000 |
| Waardebereik y | 289000 tot 629000 |

Coördinatenpaar voor WGS84 (φ,λ)

| Domein |  |
| --- | --- |
| Naam | Meetwaarde 2.9 |
| Eenheid | ° (graden, decimaal) |
| Waardebereik φ | 51.3 tot 56 |
| Waardebereik λ | 2.4 tot 6.8 |

Coördinatenpaar voor ETRS89 (φ,λ)

| Domein |  |
| --- | --- |
| Naam | Meetwaarde 2.9 |
| Eenheid | ° (graden, decimaal) |
| Waardebereik φ | 50.6 tot 56 |
| Waardebereik λ | 2.4 tot 7.4 |

## Organisatie

Het domein 'Organisatie' wordt gebruikt om de organisaties die een rol hebben in de BRO te identificeren. De invulling van het domein hangt af van waar de organisatie gevestigd is en voor de BRO gaat het daarbij om Nederland of een andere lidstaat van de Europese Unie.

In het geval de organisatie in Nederland gevestigd is, wordt het domein ingevuld met het gegeven dat een onderneming of de maatschappelijke activiteit van een rechtspersoon in het Handelsregister identificeert, het Kamer van Koophandel (KvK) nummer. Het KvK-nummer is van het type code en de opbouw is NNNNNNNN.

Voor organisaties buiten Nederland wordt het domein ingevuld met het equivalent van het (KvK)-nummer in een handelsregister van een andere lidstaat van de Europese Unie dan Nederland, het Europees Handelsnummer. Het Europees handelsnummer, de zogenaamde EUID, is geïntroduceerd ten behoeve van de koppeling van handelsregisters. De code is gebaseerd op ISO 6523 en is opgebouwd uit een landcode, registeridentificatiecode, inschrijvingsnummer en controlegetal. De landcode is de 2-letterige code van ISO3166. De registeridentificatiecode is de identificatie van het nationale handelsregister omdat in sommige landen meerdere handelsregisters bestaan en het inschrijvingsnummer is het nummer waaronder de onderneming is ingeschreven in het betreffende register. Het controlegetal ter voorkoming van identificatiefouten wordt nog niet gebruikt. De opbouw per element is variabel en daarom is het Europees Handelsnummer in de registratie ondergrond als domein Tekst 40 opgenomen.

Bij het domein 'Organisatie' is het voldoende de naam te geven, omdat de twee keuzen en de opbouw altijd hetzelfde zijn.

# Entiteiten van het type meetreeks

Een meetreeks is een type entiteit met een vaste ordening. Het wordt gebruikt om het verloop van een bepaalde eigenschap of eigenschappen vast te leggen die het gevolg is van de verandering van een bepaalde variabele, de zogenaamde onafhankelijke variabele. In de registratie ondergrond is er altijd 1 onafhankelijke variabele, en dat is meestal de tijd, maar kan ook een andere variabele zijn.

De meetreeks is een verzameling gemeten waarden van bepaalde eigenschappen in een bepaalde volgorde. Alle eigenschappen van de meetreeks worden volledig gespecificeerd. De eerste eigenschap is de onafhankelijke variabele op basis waarvan de metingen elkaar in oplopende volgorde opvolgen. Daarna volgen de afhankelijke variabelen.
Een meetreeks heeft een bepaalde naam. Alleen in het domeinmodel is de meetreeks aangeduid als Meetreeks.

# Het domeinmodel

Het domeinmodel geeft een overzicht van de gegevens van het registratieobject en laat de onderlinge samenhang zien. Modellering van informatie kent verschillende invalshoeken. In de catalogus is het inhoudelijke perspectief gekozen omdat dat de meeste waarde heeft voor de mensen die de informatie moeten begrijpen. Een dergelijk model wordt in de registratie ondergrond een domeinmodel genoemd. Uit het domeinmodel wordt een technisch model afgeleid waarin meeweegt dat informatiesystemen efficiënt met elkaar moeten kunnen spreken. Voor het domeinmodel wordt de UML-notatie gebruikt. Met kennis van de gebruikte symbolen is het gemakkelijk te lezen.

Het domeinmodel kent een aantal vaste elementen die bij ieder registratieobject terugkomen. Een begrip van deze elementen vergroot de leesbaarheid van het domeinmodel en de catalogus. De elementen zijn: entiteiten, attributen, gegevensgroepen en relaties. Een entiteit is een onderscheidend geheel van eigenschappen die gezamenlijk betekenis hebben. Een entiteit heeft altijd een naam en een definitie. In het domeinmodel zijn de entiteiten te herkennen aan het begrip Objecttype.

In de entiteiten staan de namen opgesomd van de attributen, de eigenschappen van de entiteiten, met daarachter de naam van de bijbehorende waardeverzameling (domein) en de kardinaliteit. Bij attributen is de kardinaliteit alleen opgenomen wanneer die ongelijk is aan 1. Overigens moet de kardinaliteit altijd in samenhang met de regels die in de definitie van het gegeven zijn opgenomen worden begrepen. De kardinaliteit en de regels bepalen samen of een gegeven al dan niet aanwezig is. De figuren laten ook zien welke attributen alleen aan de dataleverancier en de bronhouder worden uitgeleverd. In het domeinmodel zijn de attributen te herkennen aan het begrip 'Attribuutsoort'.

Soms is een aantal attributen gegroepeerd in een groep, aangeduid als gegevensgroep. Het blijven attributen van de entiteit, maar de inhoudelijke definiëring van de gegevensgroep staat elders. Gegevensgroepen kunnen bij meerdere entiteiten terugkomen.

Het domeinmodel laat daarnaast ook zien hoe entiteiten aan elkaar gerelateerd zijn. Een beschrijving van deze relatie is opgenomen bij de bron-entiteit van de relatie. Een relatie heeft altijd een richting en in de meeste gevallen loopt deze van bron naar doel. In het plaatje van een domeinmodel heeft de relatie een naam en een kardinaliteit. Om de leesbaarheid te vergroten staat de kardinaliteit bij de doelentiteit.

<figure>
    <img src="https://docs.geostandaarden.nl/bro/gen/media/domeinmodel-intro-class-model.png" alt="Voorbeeld class model">
        <figcaption>Voorbeeld class model.</figcaption>
</figure>

Bovenstaand voorbeeld is te lezen als: de entiteit Bepaling bevat één of meer metingen. Een meting bestaat uit een meetwaarde en meetconfiguratie-gegevens. De meetconfiguratie bestaat uit twee parameters.

# Verplichte gegevens, verplichte waarden

De kardinaliteit en de regels bepalen samen of een gegeven al dan niet aanwezig is. Voor een goed begrip van de gegevensdefinitie is dat nog niet zorgvuldig genoeg geformuleerd. In de praktijk van gegevensuitwisseling is het namelijk mogelijk een attribuut op te nemen zonder waarde. Verbijzonderd voor attributen is de juiste formulering daarom dat de kardinaliteit en de regels samen bepalen of een attribuut al dan niet aanwezig is en of een attribuut al dan niet een waarde heeft.

Uitgangspunt is dat een attribuut dat aanwezig is een waarde heeft. Een attribuut wordt alleen bij uitzondering zonder waarde in de berichten opgenomen. Het onderstaande overzicht geeft de vier mogelijkheden die voorkomen.

*De kardinaliteit= [1] en er is geen aanvullende regel opgenomen.* Dit betekent dat het attribuut altijd aanwezig is en altijd een waarde heeft.

*De kardinaliteit= [1] en er is een aanvullende regel opgenomen die aangeeft waarom een waarde toch mag ontbreken.* Dit betekent dat het attribuut altijd aanwezig is, maar bij uitzondering en om een specifieke reden geen waarde kan hebben.

*De kardinaliteit= [0..1] en er zijn één of meer aanvullende regels opgenomen.* Dit betekent dat de regels bepalen of het attribuut wel of niet voorkomt en bepalen of het gegeven wel of geen waarde heeft.

*De kardinaliteit= [0..1] en er is geen aanvullende regel opgenomen.* Dit betekent dat het attribuut alleen aanwezig is als het een waarde heeft.

Voor de kardinaliteiten [0..*] optioneel en meervoudig en [1..*] verplicht en meervoudig geldt in essentie hetzelfde.
