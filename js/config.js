let respecConfig = {
  useLogo: true,
  useLabel: true,
  //-- title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Catalogus registratie ondergrond Booronderzoek - Geotechnische boormonsterbeschrijving en boormonsteranalyse",
  //subtitle: "Versie 1.0",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",                   // Werkversie
  specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "bro",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "bhr-gt",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2026-04-22",
  //custom header lines  
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "2.3",
  previousVersion: "2.2",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2022-09-01",
  previousMaturity: "def",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      { name: "Geonovum",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Geonovum",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
     ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/BROprogramma/BHR-GT",
//   postProcess: [
//     ...((typeof organisationConfig !== "undefined" && Array.isArray(organisationConfig.postProcess))
//       ? organisationConfig.postProcess
//       : []),
//     () => {
//       const headDl = document.querySelector(".head dl");
//       if (!headDl) return;
//       const participateDt = [...headDl.querySelectorAll("dt")].find(dt => {
//         return dt.textContent && dt.textContent.trim().startsWith("Doe mee");
//       });
//       if (!participateDt || participateDt.querySelector("#logo_bro")) return;

//       const logo = document.createElement("img");
//       logo.id = "logo_bro";
//       logo.src = "https://docs.geostandaarden.nl/bro/gen/logo_bro.png";
//       logo.alt = "Basisregistratie Ondergrond";
//       logo.width = 223;
//       logo.height = 115;
//       logo.setAttribute("align", "right");
//       participateDt.prepend(logo);
//     },
//     () => {
//       try {
//         // bepaal taal (document.lang of default nl)
//         var lang =
//           document.documentElement && document.documentElement.lang
//             ? document.documentElement.lang.split("-")[0]
//             : "nl";
//         lang = lang === "en" ? "en" : "nl";

//         // ReSpec plaatst de SOTD-tekst meestal in #sotd > p
//         var p =
//           document.querySelector("#sotd > p") ||
//           document.querySelector("#sotd");
//         if (!p) return;

//         var vv =
//           organisationConfig.sotdText &&
//           organisationConfig.sotdText[lang] &&
//           organisationConfig.sotdText[lang].vv;
//         if (!vv) return;

//         p.innerHTML = vv;
//       } catch (err) {
//         console.error("setSotdHtml error", err);
//       }
//     },
//   ],  
//   // Create PDF and link to file in header (optional):
//   //alternateFormats: [{label: "pdf", uri: "template.pdf",},],
};
