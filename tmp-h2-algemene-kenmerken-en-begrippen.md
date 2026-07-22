[h2 is vereist vanwege ReSpec]: #
<h2>Algemene kenmerken en begrippen</h2>

# Opzet van de landelijke voorziening

De landelijke voorziening van de basisregistratie ondergrond (BRO) is een systeem dat een schakel vormt in een informatieketen. Aan het begin van de keten staan meestal bronhouders die gegevens genereren of ontvangen (artikel 9 van de Wet Bro). Deze gegevens levert de bronhouder of, namens hem, een dataleverancier, aan de beheerder van de landelijke voorziening van de BRO, de registerbeheerder. De bronhouder is verantwoordelijk voor de levering en de kwaliteit van gegevens. De registerbeheerder registreert de geleverde gegevens en levert deze voor (her)gebruik door aan allerlei afnemers, bijvoorbeeld aan een bronhouder vanuit haar rol als bevoegd gezag. 

De opzet van de BRO moet begrepen worden vanuit de verantwoordelijkheden die in de keten zijn belegd. De geleverde gegevens vallen onder de verantwoordelijkheid van de bronhouder en de registerbeheerder mag die gegevens niet veranderen. De registerbeheerder moet echter wel gegevens toevoegen om de BRO te kunnen beheren en hij kan gegevens toevoegen om de afnemers goed van dienst te kunnen zijn.

Bij wet is geregeld dat de BRO zo wordt opgezet dat er onderscheid bestaat tussen de gegevens die aan de registerbeheerder zijn aangeleverd en de gegevens die de registerbeheerder aan de afnemers verstrekt. De BRO valt uiteen in twee grote deelsystemen, het register brondocumenten ondergrond en de registratie ondergrond (Figuur 1).

Een geheel van gegevens dat een bronhouder levert, wordt een ‘brondocument’ genoemd. De brondocumenten worden in het register brondocumenten ondergrond opgeslagen. De gegevens uit de brondocumenten worden samen met de gegevens die de registerbeheerder toevoegt, in de registratie ondergrond vastgelegd. De registratie ondergrond is het deelsysteem dat gebruikt wordt voor uitgifte.

<figure>
	<img src="https://docs.geostandaarden.nl/bro/gen/media/image002.png"  width="350"/>
	<figcaption>De twee grote deelsystemen van de landelijke voorziening van de BRO.</figcaption>
</figure><br><br>


Met deze opzet verkrijgt de BRO de nodige flexibiliteit. Zo kan een object in de registratie ondergrond gegevens bevatten die uit meer dan één brondocument afkomstig zijn en bij uitgifte kunnen gegevens van verschillende objecten met elkaar gecombineerd worden. Ook is het mogelijk met het brondocument gegevens op te slaan die alleen voor de bronhouder en de dataleverancier van belang zijn.

De catalogus dekt alle gegevens die opgenomen zijn in de registratie ondergrond. Verreweg de meeste gegevens komen uit de brondocumenten die de dataleverancier levert. Verder komen nog enkele gegevens voort uit de overdracht van een brondocument aan de registerbeheerder. Aan de geleverde gegevens voegt de registerbeheerder enkele gegevens toe. Als de registerbeheerder een gegeven heeft toegevoegd wordt dat in de beschrijving expliciet vermeld.

Alle gegevens in de registratie ondergrond worden uitgegeven, maar niet alle afnemers krijgen alle gegevens geleverd. De gegevens die niet aan alle afnemers worden uitgeleverd zijn de gegevens die alleen nodig zijn in de communicatie tussen de registerbeheerder enerzijds en de dataleveranciers en bronhouders anderzijds, of niet openbaar zijn op grond van een wettelijk voorschrift. Zo zijn persoonsgegevens over bronhouder, dataleverancier en onderzoeker/uitvoerder alleen toegankelijk voor de betreffende bronhouder en dataleverancier op grond van de Algemene verordening gegevensbescherming (AVG).

# Registratieobject

Het registratieobject is dé eenheid in de data-architectuur van de BRO. Voor de registerbeheerder is het de elementaire bouwsteen van de BRO.

Een ‘registratieobject’ is een beschrijving van een object in of waarneming of schematische weergave van de werkelijkheid, waarover onderling samenhangende gegevens worden vastgelegd (artikel 1.1 van het Besluit basisregistratie ondergrond; Besluit Bro). Het is in directe of indirecte zin gedefinieerd in de ruimte en dat wil zeggen dat een registratieobject een plaats op het aardoppervlak heeft of dat het gekoppeld is aan een ander type registratieobject met een plaats op het aardoppervlak. 

Een registratieobject is niet alleen in de ruimte maar ook in de tijd gedefinieerd. Het leven van een object begint op het moment dat de gegevens zijn geregistreerd en dat is zo kort mogelijk nadat de gegevens zijn geproduceerd. De levensduur van een object, en de veranderlijkheid van de gegevens verschilt van registratieobject tot registratieobject. Een grondwatermonitoringput (GMW) kan tientallen jaren gebruikt worden voor het meten van grondwaterstanden en in de periode kunnen er nieuwe gegevens ontstaan. Dat betekent dat de gegevens van de put in de BRO gedurende zijn hele levensduur bijgewerkt moeten kunnen worden. Aan de andere kant van het spectrum staan de registratieobjecten waarvan alle gegevens in een keer worden vastgelegd. Een geotechnisch sondeeronderzoek (CPT) is daar een voorbeeld van. Sondeeronderzoek is eenmalig onderzoek en het resultaat ervan kan al na een of enkele dagen aan de bronhouder worden overhandigd.

# Registratiedomein

Registratieobjecten worden in de BRO gegroepeerd in domeinen. De volgende zes registratiedomeinen worden onderscheiden:

- bodem- en grondonderzoek

- milieukwaliteit

- grondwatermonitoring

- grondwatergebruik

- mijnbouwwet

- modellen.

De registratiedomeinen zijn vanuit het oogpunt van beheer van belang voor de ordening van de inhoud van de BRO. Daarnaast zijn zij nuttig in de communicatie met de partijen die bij de realisatie van de BRO betrokken zijn.
NB: deze registratiedomeinen zijn niet de domeinen als bedoeld in Hoofdstuk 5 van de catalogus. De laatste beschrijven de mogelijke waarden van een attribuut.

# Kwaliteitsregime

In de BRO worden niet alleen gegevens geregistreerd die dateren van na de datum waarop de Wet Bro van kracht is geworden. Ook oudere gegevens worden in de BRO opgenomen. Gegevens uit de eerder bestaande systemen Registratie Data en Informatie Nederlandse Ondergrond (DINO) en Bodemkundig Informatie Systeem (BIS) worden zo veel mogelijk naar de BRO overgezet. Verder verplicht artikel 40 van de Wet Bro bronhouders om digitale, gestructureerde gegevens binnen vijf jaar na inwerkingtreding - van de wetswijziging per 1 juli 2025 of van een registratieobject - ter registratie aan te bieden.

Om de verwerking van twee categorieën gegevens naast elkaar mogelijk te maken, worden twee kwaliteitsregimes gehanteerd. Voor de levering van gegevens aan de BRO gelden de regels van het informatiemodel BRO (IMBRO)-regime zoals de catalogus registratie ondergrond voorschrijft. Bij de levering van historische gegevens wordt geaccepteerd dat een aantal verplichte attributen geen waarde of andere waarden heeft. Voor deze gegevens wordt het IMBRO/archief (A)-regime gehanteerd. Als historische gegevens wel aan de voorwaarden van het IMBRO-regime voldoen, worden de gegevens echter onder dit regime geleverd.

Artikel 41 van de Wet Bro geeft de bronhouder van een gegeven over een registratieobject dat valt onder de categorie verkenningen, gedurende drie jaar na inwerkingtreding van dit registratieobject, een zekere mate van vrijheid om bij levering van gegevens te kiezen voor IMBRO/A. Als een gegeven voortkomt uit een schriftelijke opdracht van voor inwerkingtreding van dit registratieobject, kan het praktisch blijken het IMBRO/A-regime te hanteren voor gegevens die pas na deze datum zijn geproduceerd. De periode waarin de bronhouders die vrijheid hebben wordt de ‘transitieperiode’ genoemd. Na afloop van de transitieperiode kunnen alleen gegevens onder het strikte IMBRO-regime worden geleverd.

In schema (artikelen verwijzen naar de wet Bro):

<figure>
	<img src="https://raw.githubusercontent.com/BROprogramma/generiek/gh-pages/media/tabel_kwaliteitsregime.png"  width="350"/>
	<figcaption>Overzicht verschillen tussen de kwaliteitsregimes.</figcaption>
</figure><br><br>

Voor een nadere toelichting van het kwaliteitsregime met een beschrijving van verschillende scenario's voor het corrigeren van het kwaliteitsregime van geleverde gegevens, wordt verwezen naar de <a href="https://www.bro-productomgeving.nl/bpo/latest/handreiking-aanleveren-bro-gegevens">Handreiking aanleveren BRO-gegevens</a> op de BRO-Productomgeving.

# Formele en materiële geschiedenis

De BRO maakt deel uit van een stelsel van basisregistraties. Binnen het stelsel maakt men onderscheid tussen de materiële geschiedenis en de formele geschiedenis van een object.

Het begrip materiële geschiedenis wordt gebruikt om de veranderingen van eigenschappen van een object in de werkelijkheid aan te duiden (dus niet attributen in een systeem). De materiële geschiedenis van een object wordt, voor zover relevant, in de BRO vastgelegd. Niet alle registratieobjecten hebben een materiële geschiedenis, alleen de registratieobjecten met een levensduur, zoals de grondwatermonitoringput.

Het begrip formele geschiedenis wordt gebruikt voor de veranderingen van attributen van een object in de registratie zelf. De meeste van die veranderingen gaan terug op een verandering van eigenschappen in de werkelijkheid, en de formele geschiedenis geeft aan wanneer de veranderingen in de BRO geregistreerd zijn. De formele geschiedenis kent ook gebeurtenissen die niet het gevolg zijn van een verandering in de werkelijke eigenschappen van een object. Die gebeurtenissen hebben betrekking op correcties. Het kan gebeuren dat een bronhouder erachter komt dat er een onjuiste waarde was geregistreerd en dan zorgt hij ervoor dat die verbeterd wordt. De registratie van de verbetering is een formele gebeurtenis.

Alle registratieobjecten hebben een formele geschiedenis en die wordt in de registratie ondergrond globaal vastgelegd in de registratiegeschiedenis van het object. 'Globaal' wil zeggen dat de registratie ondergrond alleen een overzicht van de formele geschiedenis geeft. Voor de details moet het register brondocumenten ondergrond worden geraadpleegd.

Bij een correctie wordt het betreffende gegeven in de registratie ondergrond overschreven en is de oude waarde van het gegeven niet meer direct beschikbaar voor de afnemers. Zou een afnemer toch willen weten wat de eerdere foute waarde was, dan moet hij het register brondocumenten ondergrond raadplegen.

# Coördinaten en referentiestelsels

De registratieobjecten van de BRO zijn gedefinieerd in de ruimte en dat wil zeggen dat een object zelf een plaats op het aardoppervlak, een locatie, heeft, of dat het gekoppeld is aan een ander type registratieobject met een locatie. Afhankelijk van het type registratieobject, wordt de locatie van het object geregistreerd als een punt, een lijn of een vlak.

De locatie is de horizontale positie van een object. Voor bepaalde registratieobjecten is het voldoende dat alleen die horizontale positie wordt vastgelegd, maar voor veel registratieobjecten is ook de verticale positie van belang.

Posities worden vastgelegd in coördinaten die zijn gedefinieerd in een bepaald referentiestelsel.

Er zijn verschillende typen referentiestelsels. Zo spreekt men van horizontale referentiestelsels (2D), verticale referentiestelsels (1D), gecombineerde referentiestelsels (2D, 1D) en werkelijke 3D referentiestelsels. In Nederland worden de horizontale en de verticale component van een positie in een afzonderlijk stelsel uitgedrukt. Het is vandaag de dag mogelijk met gps een positie in een 3D-referentiestelsel vast te leggen, maar de wens over te stappen op het gebruik van 3D is nog door geen van de partijen die betrokken zijn bij de BRO naar voren gebracht.

## Referentiestelsels voor de horizontale positie

In Nederland zijn traditioneel verschillende referentiestelsels voor de horizontale positie in gebruik. In 2009, bij de eerste voorbereidingen voor de totstandkoming van de BRO, is al vastgesteld dat de verscheidenheid aan referentiestelsels de BRO voor problemen stelt omdat de registratie dan niet gemakkelijk op een eenduidige manier bevraagd kan worden. In de BRO worden namelijk zowel gegevens met een locatie op land als gegevens met een locatie op zee geregistreerd. In de toenmalige praktijk werden op land en op zee verschillende stelsels gebruikt. Op land werd het *Stelsel van de Rijksdriehoeksmeting* (RD) gebruikt en op zee waren verschillende stelsels in gebruik, waarvan het *World Geodetic System 1984* (WGS84) de belangrijkste was.

In 2009 was ook al bekend dat de Europese Inspire (Richtlijn 2007/2/EG van het Europees Parlement en de Raad van de Europese Unie van 14 maart 2007 tot oprichting van een infrastructuur voor ruimtelijke informatie in de Gemeenschap zoals gewijzigd in 2019 en 2024, PbEU 2024 L 2829), de lidstaten vraagt de gegevens in Europa in één referentiestelsel uit te gaan wisselen, te weten in *het Europees Terrestrisch Referentiesysteem 1989*  (ETRS89). Daarom is het besluit genomen de BRO zo in te richten, dat de registratie bevraagd gaat worden in ETRS89.

Het besluit wordt ondersteund door ontwikkelingen in Nederland. Sinds 2013 werken de drie belangrijkste autoriteiten in Nederland op het gebied van referentiestelsels, het Kadaster, de Dienst der Hydrografie van het ministerie van Defensie en Rijkswaterstaat, aan de totstandkoming van nieuwe afspraken. Die afspraken moeten in lijn zijn met Europese afspraken en leiden tot heldere en eenduidige transformatieprocedures tussen referentiestelsels. Concreet betekent dit dat in Nederland op termijn het ETRS89 als standaard zal worden gehanteerd voor het uitwisselen van geo-informatie.

Het besluit betekent niet dat de gegevens ook in ETRS89 geleverd moeten worden. De BRO voorziet een periode van transitie waarin de leverende partijen zelf bepalen wanneer zij overstappen op ETRS89. Die periode zal naar verwachting jaren duren. Om de transitie te ondersteunen hanteert de BRO de volgende spelregels:

- Gegevens mogen in een beperkt aantal referentiestelsels worden geleverd (RD, WGS84 en ETRS89).
	- Voor locaties op land wordt alleen RD of ETRS89 toegestaan.
(WGS84 is niet geschikt voor nauwkeurige toepassingen, bij wijze van uitzondering wordt binnen het registratiedomein milieukwaliteit WGS84 op land toegestaan. WGS84 is daarvoor wel nauwkeurig genoeg)
	- Voor locaties op zee wordt alleen WGS84 of ETRS89 toegestaan.

- De geleverde coördinaten worden in de registratie opgeslagen.

- De geleverde coördinaten transformeert de BRO naar het ETRS89-referentiestelsel.

- De getransformeerde coördinaten worden naast de geleverde coördinaten opgeslagen.

- Bij de getransformeerde coördinaten wordt ook een identificatie van de gebruikte transformatiemethode opgeslagen.

- Als de coördinaten in ETRS89 zijn geleverd, dan staat bij geleverde en getransformeerde positie dezelfde informatie. Voor de locatie worden de getransformeerde coördinaten en de aangeleverde coördinaten beide aan de afnemers verstrekt.

## Referentiestelsels voor de verticale positie

In Nederland zijn voor verticale posities op land en zee verschillende referentiestelsels in gebruik. Op land wordt het Normaal Amsterdams Peil (NAP) gebruikt. Op zee is het in de voor de BRO relevante werkvelden gebruikelijk posities uit te drukken t.o.v. het gemiddeld zeeniveau (MSL, Mean Sea Level), maar posities t.o.v. het Lowest Astronomical Tide (LAT) komen ook voor. Dit laatstgenoemde stelsel noemt de Richtlijn Inspire als het stelsel van voorkeur voor het uitdrukken van verticale posities op zee. De BRO staat daarom op zee het gebruik van LAT naast MSL toe. Aangeleverde verticale posities worden door de BRO niet getransformeerd.

# Gegevens op land en op zee

De BRO bevat gegevens over de ondergrond van Nederland en zijn zgn. Exclusieve Economische Zone (EEZ). De EEZ is het gebied op de Noordzee waar Nederland economische rechten heeft. Voor de referentiestelsels die bij levering aan de BRO worden toegestaan, is het van belang te weten of de locatie van een object op zee of op land ligt.

Als scheidingslijn tussen land en zee hanteert de BRO de UNCLOS-basislijn. Het beheer van deze basislijn valt onder de verantwoordelijkheid van de Dienst der Hydrografie van het ministerie van Defensie. Deze dienst voert die taak uit op basis van het Zeerechtverdrag van de Verenigde Naties uit 1982, de *United Nations Convention on the Law of the Sea (UNCLOS)*. De basislijn is opgebouwd uit de nulmeterdieptelijn zoals weergegeven op de zeekaarten en enkele rechte basislijnen die onder meer de monding van de Westerschelde en de wateren tussen de Waddeneilanden afsluiten.

De grens tussen land en zee is veranderlijk. De Dienst der Hydrografie stelt de grens opnieuw vast wanneer daartoe voldoende aanleiding is. De BRO hanteert bij inname de meest recente versie van de UNCLOS-basislijn en controleert daarmee of de juiste referentiestelsels gebruikt worden.

Tussen het moment waarop de locatie van een object wordt bepaald en het moment waarop het gegeven in de BRO wordt vastgelegd verloopt enige tijd. In die periode kan de positie van de UNCLOS-basislijn opnieuw zijn vastgesteld, en dan ontstaat er een discrepantie die bij het leveren van gegevens aan de BRO tot problemen kan leiden. Wanneer een dergelijk probleem zich voordoet, wordt de dataleverancier gevraagd contact op te nemen met de registerbeheerder om gezamenlijk tot een oplossing te komen.

Een soortgelijk probleem doet zich voor met betrekking tot de begrenzing van Nederland, met name van het Nederlands territoir. Het Kadaster stelt de grenzen van Nederland ieder jaar vast op 1 januari en legt deze vast in de basisregistratie kadaster. De registerbeheerder controleert bij inname of een object in het gebied ligt dat Nederland en zijn Exclusieve Economische Zone omvat, en hanteert daarbij de actuele grenzen. Ook bij problemen die te herleiden zijn tot een verandering in de begrenzing van Nederland, wordt de dataleverancier gevraagd contact op te nemen met de registerbeheerder om gezamenlijk tot een oplossing te komen.

Binnen het registratiedomein Mijnbouwwet wordt de scheidingslijn tussen land en zee niet bepaald door de UNCLOS-basislijn, maar door een over zee lopende lijn die is vastgelegd in een bijlage bij de Mijnbouwwet. In de BRO wordt deze lijn aangeduid als mijnbouwgrens. Voor de referentiestelsels die bij levering aan de BRO worden toegestaan, is het binnen het registratiedomein Mijnbouwwet van belang te weten of de locatie van een object aan landzijde of aan zeezijde van de mijnbouwgrens ligt. Waar in voorgaande paragrafen 'op land' en 'op zee' is genoemd, houdt dat binnen het registratiedomein Mijnbouwwet in: aan landzijde respectievelijk aan zeezijde van de mijnbouwgrens.

Ook objecten die (ten dele) in het buitenland liggen, kunnen van belang zijn voor het inzicht over de ondergrond in Nederland. Zo wordt bij het hydrologisch beheer van het Nederlands grondgebied soms gebruik gemaakt van grondwatermonitoringnetten, waarvan de bijbehorende grondwatermonitoringputten zowel in Nederland, als in het buitenland liggen. Ook kan het voorkomen dat een mijnstelsel gedeeltelijk in het buitenland ligt, in welk geval de toegang(en) tot dit mijnstelsel in het buitenland kunnen liggen. In dit soort situaties dient de begrenzing van Nederland geen beperking te zijn voor het kunnen registreren van de betreffende ondergrond gegevens. Deze objecten moeten "vanzelfsprekend" wel een Nederlandse bronhouder hebben. Indien van toepassing is in de gegevensdefinitie voorzien dat onder bepaalde condities ook gegevens geregistreerd kunnen worden die (ten dele) in het buitenland liggen.

# Nauwkeurigheid van waarden

Voor zinvol gebruik van attributen, in het bijzonder die met een gemeten, berekende of geschatte waarde, is het noodzakelijk dat de nauwkeurigheid van de waarde van die attributen bekend is. Het begrip *nauwkeurigheid* laat zich in deze context het best omschrijven als de juistheid van een gemeten, berekende of geschatte waarde. In de meeste processen waarin de waarde van een gegeven wordt bepaald, kan de afwijking van de daadwerkelijke waarde slechts via een kalibratie- of statistisch proces worden verkregen. Het resultaat omvat dan niet alleen een van de mogelijke realisaties van een waarde maar ook informatie over de mogelijke spreiding van de waarden.

De BRO gaat ervan uit dat de producenten van gegevens de metingen, berekeningen en schattingen uitvoeren binnen een stelsel van afspraken binnen het desbetreffende werkveld. Uitgangspunt is dat ook de eisen waaraan de gegevens op het gebied van nauwkeurigheid moeten voldoen in afspraken zijn vastgelegd. Dat kunnen praktische werkafspraken zijn, maar ook afspraken die vertaald zijn naar ISO- en NEN-normen. In de catalogus wordt in beginsel verwezen naar die normen. Waar deze normen niet voorzien in afspraken over de nauwkeurigheid, stelt de BRO hieraan specifieke eisen. Deze zijn dan vermeld in de catalogus.

In praktische werkafspraken en normen kan nauwkeurigheid op verschillende manieren zijn geborgd. Eén daarvan is dat aan een methode die volgens een norm wordt toegepast een mogelijke afwijking is verbonden. Zo kan voor een methode om de locatie van een object te bepalen bekend zijn dat deze een afwijking van 50 tot 200 cm ten opzichte van de werkelijke locatie kan veroorzaken. In deze gevallen is in de catalogus een attribuut opgenomen waarin de toegepaste methode wordt vastgelegd, terwijl in de omschrijving van die methode in de waardelijst de mogelijke afwijking is vermeld die aan die methode is verbonden.

Een andere manier is dat een procedure voorschrijft dat degene die een waarde bepaalt, ook de maximale afwijking daarvan vastlegt. Voorbeeld hiervan is dat bij het schatten van een waarde moet worden aangegeven of die waarde bijvoorbeeld maximaal 5, 10 of 20 % kan afwijken van de werkelijke waarde. In deze gevallen is naast het attribuut met de geschatte waarde ook een attribuut opgenomen waarin deze afwijkingsmarge wordt geregistreerd.

# Authentiek gegeven

In de wet is een aantal gegevens expliciet als authentiek aangeduid. Dit wordt in de catalogus nader uitgewerkt; verreweg de meeste gegevens zijn authentiek.

Met de aanduiding authentiek wordt, zoals geformuleerd in de memorie van toelichting op de wet, tot uitdrukking gebracht dat:

a. het gegeven in samenhang met andere gegevens door een groot aantal bestuursorganen in verschillende processen wordt gebruikt en derhalve bestemd is voor gegevensuitwisseling tussen bestuursorganen;

b. de verantwoordelijkheid voor betrouwbaarheid van het gegeven eenduidig geregeld is;

c. het gegeven onderworpen is aan intern en extern kwaliteitsonderzoek, en

d. het gegeven zich leent voor verplicht gebruik door bestuursorganen en eenmalige verstrekking door burgers en bedrijven aan de overheid.

In de praktijk mag een gebruiker van de gegevens ervan uitgaan dat alle gegevens correct zijn. De catalogus moet de gebruiker alle informatie geven die voor een goed begrip daarvan nodig is. Heeft een gebruiker echter gerede twijfel over de juistheid van een authentiek gegeven dan wordt verwacht dat hij de registerbeheerder daarvan op de hoogte brengt. Bronhouders zijn, bij gerede twijfel over de juistheid van een authentiek gegeven of het ontbreken ervan, zelfs verplicht daarvan melding te maken (artikel 30 van de Wet Bro).

Voor alle gegevens is aangegeven of ze authentiek zijn. Ook is voor alle gegevens aangegeven of ze aanwezig moeten zijn en een waarde moeten hebben. Dat is van belang bij het bepalen of de registratie volledig is. Er kunnen dus ook gegevens zijn die authentiek zijn, maar geen waarde hoeven te hebben. Juist omdat er verplichtingen gelden t.a.v. authentieke gegevens, vraagt dit om een korte toelichting. Wanneer een authentiek gegeven geen waarde heeft, moet de gebruiker ervan uitgaan dat het gegeven niet is geproduceerd. Dat geval kan zich uiteraard alleen voordoen wanneer er vrijheid van beslissen bestaat bij de bronhouder of de producent. Voor de duidelijkheid, als er wel een waarde is dan moet die ook in de BRO worden opgenomen. Bij gerede twijfel over het ontbreken van een waarde, moet een bestuursorgaan dat melden.