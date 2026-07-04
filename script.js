const STORAGE_KEY = "speechanalyzerpro.locale";
const DEFAULT_LOCALE = "en";

const SUPPORTED_LOCALES = [
  "en",
  "de",
  "es",
  "es-ES",
  "es-MX",
  "fr",
  "fr-CA",
  "it",
  "ja",
  "ko",
  "pt-BR",
  "pt-PT",
  "zh-Hans",
  "zh-Hant"
];

const baseTranslation = {
  meta: {
    title: "SpeechAnalyzer PRO - Local speech transcription for macOS",
    description: "SpeechAnalyzer PRO transcribes audio, reviews timelines, translates text, and exports results locally on macOS."
  },
  skip: "Skip to content",
  language: { label: "Language" },
  nav: { features: "Features", privacy: "Privacy", pricing: "Pricing", support: "Support" },
  hero: {
    eyebrow: "Local transcription for macOS",
    lead: "Turn audio into searchable transcripts, review timeline segments, translate text, and export final documents without sending your files to a server.",
    appStore: "App Store coming soon",
    privacy: "Read privacy policy",
    features: "Explore features",
    fact1Label: "Platform",
    fact1Value: "macOS 26+",
    fact2Label: "Processing",
    fact2Value: "On this Mac",
    fact3Label: "Export",
    fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT"
  },
  strip: {
    localTitle: "Local by design",
    localText: "Audio, transcript text, and translations stay on your Mac.",
    timelineTitle: "Timeline review",
    timelineText: "Inspect segments, copy original text, and translate visible lines.",
    exportTitle: "Translated exports",
    exportText: "Create translated TXT, Markdown, HTML, DOCX, SRT, or VTT files."
  },
  features: {
    eyebrow: "Core workflow",
    title: "From audio queue to translated transcript.",
    text: "SpeechAnalyzer PRO focuses on repeated desktop transcription work: queue files, pause long runs, review a timeline, then export the result in the format your next tool needs.",
    batchTitle: "Batch conversion",
    batchText: "Drag in one or many audio files, choose a recognition language, and process the queue one job at a time.",
    pauseTitle: "Pause and resume",
    pauseText: "Pause a long transcription, handle another item first, then resume near the last finalized segment.",
    timelineTitle: "Timeline translation",
    timelineText: "Translate visible timeline segments for review without changing the original transcript.",
    exportTitle: "Export choices",
    exportText: "Export original transcripts or translated transcripts as TXT, Markdown, HTML, DOCX, SRT, or VTT."
  },
  workflow: {
    eyebrow: "How it works",
    title: "A desktop flow for careful transcript work.",
    text: "SpeechAnalyzer PRO keeps the transcription queue, language selection, output folder, timeline, and translated export controls in one quiet macOS window.",
    step1Label: "Add audio",
    step1Text: "Use the app, drag files into the queue, or send supported audio from Finder.",
    step2Label: "Review timeline",
    step2Text: "Switch between real-time text and timeline segments after conversion completes.",
    step3Label: "Export",
    step3Text: "Re-export originals or create translated files for subtitles, notes, and documents."
  },
  formats: {
    eyebrow: "Audio and output",
    title: "Practical formats for transcription work.",
    text: "Input support covers common audio files used in voice notes, interviews, meetings, and media workflows.",
    inputTitle: "Supported audio",
    outputTitle: "Transcript export",
    finderTitle: "Finder workflow",
    finderText: "Send audio to the app or start Finder translation from contextual actions."
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Transcription and translation stay local.",
    updated: "Last updated: July 4, 2026",
    appTitle: "App privacy",
    appText: "SpeechAnalyzer PRO does not upload your audio, transcript text, or translations. The app is designed around Apple SpeechAnalyzer and Apple Translation frameworks running on your Mac.",
    modelsTitle: "System models",
    modelsText: "Language and translation models are managed by macOS System Settings. The app checks model availability but does not download models itself.",
    storeTitle: "StoreKit exception",
    storeText: "Apple StoreKit purchase, restore, and price-loading flows are Apple system purchase flows. The app does not add its own network API, analytics, or remote logging.",
    siteTitle: "Website privacy",
    siteText: "This static website does not include analytics scripts, advertising trackers, forms, cookies, or online fonts. Cloudflare may process standard request logs as the hosting provider."
  },
  pricing: {
    eyebrow: "Free use and unlock",
    title: "Start free, unlock when you need more.",
    text: "Prices are shown by the App Store for your country or region. This page does not hard-code a price.",
    freeTitle: "Free daily quota",
    freeText: "Use 2 transcription conversions and 2 translated exports per day. Free audio files must be smaller than 100 MB.",
    unlockTitle: "Lifetime unlock",
    unlockText: "A one-time non-consumable purchase removes the daily quota and 100 MB audio file limit.",
    availableTitle: "Availability",
    availableText: "The App Store link will be added when the listing is ready."
  },
  support: {
    eyebrow: "Support",
    title: "Questions, reports, and feedback.",
    text: "Send conversion issues, language model questions, and workflow feedback directly to the developer.",
    note: "Contact is optional. Your message opens in your default mail app, and you control what gets sent.",
    contactAction: "Email developer"
  },
  footer: {
    copy: "SpeechAnalyzer PRO. Local transcription and translated export for macOS.",
    back: "Back to top"
  }
};

const translations = {
  en: baseTranslation,
  de: {
    meta: { title: "SpeechAnalyzer PRO - Lokale Sprachtranskription fuer macOS", description: "SpeechAnalyzer PRO transkribiert Audio, prueft Zeitachsen, uebersetzt Text und exportiert Ergebnisse lokal auf macOS." },
    skip: "Zum Inhalt springen",
    language: { label: "Sprache" },
    nav: { features: "Funktionen", privacy: "Datenschutz", pricing: "Preis", support: "Support" },
    hero: { eyebrow: "Lokale Transkription fuer macOS", lead: "Verwandle Audio in durchsuchbare Transkripte, pruefe Zeitachsensegmente, uebersetze Text und exportiere Dokumente, ohne Dateien an einen Server zu senden.", appStore: "App Store in Kuerze", privacy: "Datenschutz lesen", features: "Funktionen ansehen", fact1Label: "Plattform", fact1Value: "macOS 26+", fact2Label: "Verarbeitung", fact2Value: "Auf diesem Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Lokal entwickelt", localText: "Audio, Transkripttext und Uebersetzungen bleiben auf deinem Mac.", timelineTitle: "Zeitachsenpruefung", timelineText: "Segmente pruefen, Originaltext kopieren und sichtbare Zeilen uebersetzen.", exportTitle: "Uebersetzte Exporte", exportText: "Erstelle uebersetzte TXT-, Markdown-, HTML-, DOCX-, SRT- oder VTT-Dateien." },
    features: { eyebrow: "Kernablauf", title: "Von der Audio-Warteschlange zum uebersetzten Transkript.", text: "SpeechAnalyzer PRO ist fuer wiederholte Desktop-Transkription gebaut: Dateien einreihen, lange Laeufe pausieren, Zeitachsen pruefen und im passenden Format exportieren.", batchTitle: "Stapelkonvertierung", batchText: "Ziehe eine oder mehrere Audiodateien hinein, waehle eine Erkennungssprache und verarbeite die Warteschlange einzeln.", pauseTitle: "Pausieren und fortsetzen", pauseText: "Pausiere eine lange Transkription, bearbeite zuerst ein anderes Element und setze nahe dem letzten finalen Segment fort.", timelineTitle: "Zeitachsenuebersetzung", timelineText: "Uebersetze sichtbare Zeitachsensegmente zur Pruefung, ohne das Originaltranskript zu aendern.", exportTitle: "Exportoptionen", exportText: "Exportiere Originaltranskripte oder uebersetzte Transkripte als TXT, Markdown, HTML, DOCX, SRT oder VTT." },
    workflow: { eyebrow: "Arbeitsweise", title: "Ein Desktop-Ablauf fuer sorgfaeltige Transkriptarbeit.", text: "SpeechAnalyzer PRO haelt Warteschlange, Sprache, Ausgabeordner, Zeitachse und Uebersetzungsexport in einem ruhigen macOS-Fenster zusammen.", step1Label: "Audio hinzufuegen", step1Text: "Nutze die App, ziehe Dateien in die Warteschlange oder sende unterstuetztes Audio aus dem Finder.", step2Label: "Zeitachse pruefen", step2Text: "Wechsle nach Abschluss zwischen Echtzeittext und Zeitachsensegmenten.", step3Label: "Exportieren", step3Text: "Exportiere Originale erneut oder erstelle uebersetzte Dateien fuer Untertitel, Notizen und Dokumente." },
    formats: { eyebrow: "Audio und Ausgabe", title: "Praktische Formate fuer Transkriptionsarbeit.", text: "Die Eingabe unterstuetzt gaengige Audiodateien aus Sprachnotizen, Interviews, Meetings und Medienablaeufen.", inputTitle: "Unterstuetztes Audio", outputTitle: "Transkriptexport", finderTitle: "Finder-Ablauf", finderText: "Sende Audio an die App oder starte Finder-Uebersetzung ueber Kontextaktionen." },
    privacy: { eyebrow: "Datenschutzrichtlinie", title: "Transkription und Uebersetzung bleiben lokal.", updated: "Zuletzt aktualisiert: 4. Juli 2026", appTitle: "App-Datenschutz", appText: "SpeechAnalyzer PRO laedt Audio, Transkripttext oder Uebersetzungen nicht hoch. Die App nutzt Apple SpeechAnalyzer und Apple Translation Frameworks auf deinem Mac.", modelsTitle: "Systemmodelle", modelsText: "Sprach- und Uebersetzungsmodelle werden in den macOS Systemeinstellungen verwaltet. Die App prueft die Verfuegbarkeit, laedt Modelle aber nicht selbst herunter.", storeTitle: "StoreKit-Ausnahme", storeText: "Apple StoreKit-Kauf, Wiederherstellung und Preisabfrage sind Apple-Systemablaeufe. Die App fuegt keine eigene Netzwerk-API, Analyse oder Remote-Protokollierung hinzu.", siteTitle: "Website-Datenschutz", siteText: "Diese statische Website enthaelt keine Analytics-Skripte, Werbetracker, Formulare, Cookies oder Online-Schriften. Cloudflare kann als Hostinganbieter Standard-Anfrageprotokolle verarbeiten." },
    pricing: { eyebrow: "Gratisnutzung und Freischaltung", title: "Kostenlos starten, bei Bedarf freischalten.", text: "Preise werden vom App Store fuer dein Land oder deine Region angezeigt. Diese Seite schreibt keinen Preis fest.", freeTitle: "Kostenloses Tageskontingent", freeText: "Nutze 2 Transkriptionen und 2 uebersetzte Exporte pro Tag. Kostenlose Audiodateien muessen kleiner als 100 MB sein.", unlockTitle: "Dauerhafte Freischaltung", unlockText: "Ein einmaliger nicht verbrauchbarer Kauf entfernt das Tageskontingent und die 100-MB-Grenze.", availableTitle: "Verfuegbarkeit", availableText: "Der App Store-Link wird hinzugefuegt, sobald der Eintrag bereit ist." },
    support: { eyebrow: "Support", title: "Fragen, Berichte und Feedback.", text: "Sende Konvertierungsprobleme, Fragen zu Sprachmodellen und Workflow-Feedback direkt an den Entwickler.", note: "Kontakt ist freiwillig. Deine Nachricht wird in deiner Standard-Mail-App geoeffnet, und du bestimmst, was gesendet wird.", contactAction: "Entwickler per E-Mail kontaktieren" },
    footer: { copy: "SpeechAnalyzer PRO. Lokale Transkription und uebersetzter Export fuer macOS.", back: "Nach oben" }
  },
  es: {
    meta: { title: "SpeechAnalyzer PRO - Transcripcion local para macOS", description: "SpeechAnalyzer PRO transcribe audio, revisa lineas de tiempo, traduce texto y exporta resultados localmente en macOS." },
    skip: "Ir al contenido",
    language: { label: "Idioma" },
    nav: { features: "Funciones", privacy: "Privacidad", pricing: "Precio", support: "Soporte" },
    hero: { eyebrow: "Transcripcion local para macOS", lead: "Convierte audio en transcripciones buscables, revisa segmentos, traduce texto y exporta documentos sin enviar archivos a un servidor.", appStore: "App Store proximamente", privacy: "Leer privacidad", features: "Ver funciones", fact1Label: "Plataforma", fact1Value: "macOS 26+", fact2Label: "Procesamiento", fact2Value: "En este Mac", fact3Label: "Exportacion", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local por diseno", localText: "Audio, transcripciones y traducciones permanecen en tu Mac.", timelineTitle: "Revision por linea de tiempo", timelineText: "Inspecciona segmentos, copia el texto original y traduce lineas visibles.", exportTitle: "Exportaciones traducidas", exportText: "Crea archivos traducidos TXT, Markdown, HTML, DOCX, SRT o VTT." },
    features: { eyebrow: "Flujo principal", title: "De la cola de audio a la transcripcion traducida.", text: "SpeechAnalyzer PRO se centra en trabajo repetido de transcripcion en escritorio: cola de archivos, pausa, revision de linea de tiempo y exportacion.", batchTitle: "Conversion por lotes", batchText: "Arrastra uno o varios audios, elige idioma de reconocimiento y procesa la cola de a un trabajo.", pauseTitle: "Pausar y continuar", pauseText: "Pausa una transcripcion larga, procesa otro elemento y continua cerca del ultimo segmento finalizado.", timelineTitle: "Traduccion de linea de tiempo", timelineText: "Traduce segmentos visibles para revisarlos sin cambiar la transcripcion original.", exportTitle: "Opciones de exportacion", exportText: "Exporta transcripciones originales o traducidas como TXT, Markdown, HTML, DOCX, SRT o VTT." },
    workflow: { eyebrow: "Como funciona", title: "Un flujo de escritorio para revisar transcripciones con cuidado.", text: "SpeechAnalyzer PRO reune cola, idioma, carpeta de salida, linea de tiempo y exportacion traducida en una ventana macOS discreta.", step1Label: "Agregar audio", step1Text: "Usa la app, arrastra archivos a la cola o envia audio compatible desde Finder.", step2Label: "Revisar", step2Text: "Cambia entre texto en tiempo real y segmentos tras completar la conversion.", step3Label: "Exportar", step3Text: "Reexporta originales o crea archivos traducidos para subtitulos, notas y documentos." },
    formats: { eyebrow: "Audio y salida", title: "Formatos practicos para transcripcion.", text: "La entrada cubre audios comunes de notas de voz, entrevistas, reuniones y flujos multimedia.", inputTitle: "Audio compatible", outputTitle: "Exportacion", finderTitle: "Flujo Finder", finderText: "Envia audio a la app o inicia traduccion desde acciones contextuales de Finder." },
    privacy: { eyebrow: "Politica de privacidad", title: "Transcripcion y traduccion permanecen locales.", updated: "Ultima actualizacion: 4 de julio de 2026", appTitle: "Privacidad de la app", appText: "SpeechAnalyzer PRO no sube tu audio, texto transcrito ni traducciones. La app usa Apple SpeechAnalyzer y Apple Translation en tu Mac.", modelsTitle: "Modelos del sistema", modelsText: "Los modelos de idioma y traduccion se gestionan en Ajustes del Sistema de macOS. La app comprueba disponibilidad, pero no descarga modelos.", storeTitle: "Excepcion StoreKit", storeText: "Las compras, restauraciones y carga de precios de Apple StoreKit son flujos del sistema de Apple. La app no agrega API de red propia, analitica ni registros remotos.", siteTitle: "Privacidad del sitio", siteText: "Este sitio estatico no incluye analytics, rastreadores, formularios, cookies ni fuentes en linea. Cloudflare puede procesar registros estandar como proveedor de hosting." },
    pricing: { eyebrow: "Uso gratis y desbloqueo", title: "Empieza gratis y desbloquea cuando necesites mas.", text: "Los precios los muestra App Store para tu pais o region. Esta pagina no fija un precio.", freeTitle: "Cuota diaria gratis", freeText: "Usa 2 conversiones y 2 exportaciones traducidas por dia. Los audios gratis deben ser menores de 100 MB.", unlockTitle: "Desbloqueo permanente", unlockText: "Una compra no consumible de una sola vez elimina la cuota diaria y el limite de 100 MB.", availableTitle: "Disponibilidad", availableText: "El enlace de App Store se agregara cuando la ficha este lista." },
    support: { eyebrow: "Soporte", title: "Preguntas, reportes y comentarios.", text: "Envia problemas de conversion, preguntas de modelos y comentarios de flujo directamente al desarrollador.", note: "El contacto es opcional. Tu mensaje se abre en tu app de correo y controlas lo que se envia.", contactAction: "Enviar email" },
    footer: { copy: "SpeechAnalyzer PRO. Transcripcion local y exportacion traducida para macOS.", back: "Volver arriba" }
  },
  fr: {
    meta: { title: "SpeechAnalyzer PRO - Transcription locale pour macOS", description: "SpeechAnalyzer PRO transcrit l'audio, relit les timelines, traduit le texte et exporte les resultats localement sur macOS." },
    skip: "Aller au contenu",
    language: { label: "Langue" },
    nav: { features: "Fonctions", privacy: "Confidentialite", pricing: "Tarifs", support: "Support" },
    hero: { eyebrow: "Transcription locale pour macOS", lead: "Transformez l'audio en transcriptions consultables, relisez les segments, traduisez le texte et exportez sans envoyer vos fichiers a un serveur.", appStore: "App Store bientot", privacy: "Lire la confidentialite", features: "Voir les fonctions", fact1Label: "Plateforme", fact1Value: "macOS 26+", fact2Label: "Traitement", fact2Value: "Sur ce Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local par conception", localText: "Audio, texte transcrit et traductions restent sur votre Mac.", timelineTitle: "Relecture timeline", timelineText: "Inspectez les segments, copiez l'original et traduisez les lignes visibles.", exportTitle: "Exports traduits", exportText: "Creez des fichiers traduits TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    features: { eyebrow: "Flux principal", title: "De la file audio a la transcription traduite.", text: "SpeechAnalyzer PRO vise le travail de transcription repetitif: file de fichiers, pauses, relecture par timeline et export au bon format.", batchTitle: "Conversion par lot", batchText: "Glissez un ou plusieurs audios, choisissez une langue et traitez la file un element a la fois.", pauseTitle: "Pause et reprise", pauseText: "Mettez une longue transcription en pause, traitez un autre element, puis reprenez pres du dernier segment finalise.", timelineTitle: "Traduction timeline", timelineText: "Traduisez les segments visibles pour relecture sans modifier la transcription originale.", exportTitle: "Choix d'export", exportText: "Exportez les transcriptions originales ou traduites en TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    workflow: { eyebrow: "Fonctionnement", title: "Un flux desktop pour un travail attentif.", text: "SpeechAnalyzer PRO regroupe file, langue, dossier de sortie, timeline et export traduit dans une fenetre macOS sobre.", step1Label: "Ajouter l'audio", step1Text: "Utilisez l'app, glissez des fichiers dans la file ou envoyez l'audio depuis Finder.", step2Label: "Relire", step2Text: "Passez du texte temps reel aux segments apres la conversion.", step3Label: "Exporter", step3Text: "Reexportez les originaux ou creez des fichiers traduits pour sous-titres, notes et documents." },
    formats: { eyebrow: "Audio et sortie", title: "Des formats pratiques pour transcrire.", text: "L'entree couvre les fichiers audio courants des notes vocales, interviews, reunions et flux media.", inputTitle: "Audio pris en charge", outputTitle: "Export", finderTitle: "Flux Finder", finderText: "Envoyez l'audio vers l'app ou lancez une traduction depuis les actions contextuelles Finder." },
    privacy: { eyebrow: "Politique de confidentialite", title: "Transcription et traduction restent locales.", updated: "Derniere mise a jour : 4 juillet 2026", appTitle: "Confidentialite de l'app", appText: "SpeechAnalyzer PRO ne televerse pas votre audio, texte transcrit ou traductions. L'app repose sur Apple SpeechAnalyzer et Apple Translation sur votre Mac.", modelsTitle: "Modeles systeme", modelsText: "Les modeles de langue et traduction sont geres dans les Reglages Systeme de macOS. L'app verifie leur disponibilite mais ne les telecharge pas.", storeTitle: "Exception StoreKit", storeText: "Les achats, restaurations et prix Apple StoreKit sont des flux systeme Apple. L'app n'ajoute pas d'API reseau, d'analytics ni de journalisation distante.", siteTitle: "Confidentialite du site", siteText: "Ce site statique n'inclut pas d'analytics, traqueurs, formulaires, cookies ni polices en ligne. Cloudflare peut traiter des journaux standards comme hebergeur." },
    pricing: { eyebrow: "Gratuit et deblocage", title: "Commencez gratuitement, debloquez si besoin.", text: "Les prix sont affiches par l'App Store selon votre pays ou region. Cette page ne fixe pas de prix.", freeTitle: "Quota quotidien gratuit", freeText: "Utilisez 2 conversions et 2 exports traduits par jour. Les audios gratuits doivent faire moins de 100 Mo.", unlockTitle: "Deblocage a vie", unlockText: "Un achat unique non consommable supprime le quota quotidien et la limite de 100 Mo.", availableTitle: "Disponibilite", availableText: "Le lien App Store sera ajoute lorsque la fiche sera prete." },
    support: { eyebrow: "Support", title: "Questions, rapports et retours.", text: "Envoyez les problemes de conversion, questions de modeles et retours directement au developpeur.", note: "Le contact est facultatif. Le message s'ouvre dans votre app Mail et vous controlez l'envoi.", contactAction: "Envoyer un e-mail" },
    footer: { copy: "SpeechAnalyzer PRO. Transcription locale et export traduit pour macOS.", back: "Retour en haut" }
  },
  it: {
    meta: { title: "SpeechAnalyzer PRO - Trascrizione locale per macOS", description: "SpeechAnalyzer PRO trascrive audio, rivede timeline, traduce testo ed esporta risultati localmente su macOS." },
    skip: "Vai al contenuto",
    language: { label: "Lingua" },
    nav: { features: "Funzioni", privacy: "Privacy", pricing: "Prezzi", support: "Supporto" },
    hero: { eyebrow: "Trascrizione locale per macOS", lead: "Trasforma audio in trascrizioni ricercabili, rivedi segmenti, traduci testo ed esporta documenti senza inviare file a un server.", appStore: "App Store in arrivo", privacy: "Leggi la privacy", features: "Scopri le funzioni", fact1Label: "Piattaforma", fact1Value: "macOS 26+", fact2Label: "Elaborazione", fact2Value: "Su questo Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Locale per design", localText: "Audio, testo e traduzioni restano sul tuo Mac.", timelineTitle: "Revisione timeline", timelineText: "Ispeziona segmenti, copia il testo originale e traduci le righe visibili.", exportTitle: "Export tradotti", exportText: "Crea file tradotti TXT, Markdown, HTML, DOCX, SRT o VTT." },
    features: { eyebrow: "Flusso principale", title: "Dalla coda audio alla trascrizione tradotta.", text: "SpeechAnalyzer PRO si concentra sul lavoro ripetuto: code di file, pause, revisione timeline ed export nel formato giusto.", batchTitle: "Conversione batch", batchText: "Trascina uno o piu audio, scegli una lingua e processa la coda un lavoro alla volta.", pauseTitle: "Pausa e ripresa", pauseText: "Metti in pausa una trascrizione lunga, gestisci un altro elemento e riprendi vicino all'ultimo segmento finale.", timelineTitle: "Traduzione timeline", timelineText: "Traduci segmenti visibili per la revisione senza modificare la trascrizione originale.", exportTitle: "Opzioni export", exportText: "Esporta trascrizioni originali o tradotte come TXT, Markdown, HTML, DOCX, SRT o VTT." },
    workflow: { eyebrow: "Come funziona", title: "Un flusso desktop per lavorare con cura.", text: "SpeechAnalyzer PRO raccoglie coda, lingua, cartella di output, timeline ed export tradotto in una finestra macOS tranquilla.", step1Label: "Aggiungi audio", step1Text: "Usa l'app, trascina file nella coda o invia audio supportato dal Finder.", step2Label: "Rivedi", step2Text: "Passa tra testo in tempo reale e segmenti dopo la conversione.", step3Label: "Esporta", step3Text: "Riesporta originali o crea file tradotti per sottotitoli, note e documenti." },
    formats: { eyebrow: "Audio e output", title: "Formati pratici per la trascrizione.", text: "L'input copre audio comuni per note vocali, interviste, riunioni e flussi media.", inputTitle: "Audio supportato", outputTitle: "Export trascrizione", finderTitle: "Flusso Finder", finderText: "Invia audio all'app o avvia traduzione dalle azioni contestuali del Finder." },
    privacy: { eyebrow: "Informativa privacy", title: "Trascrizione e traduzione restano locali.", updated: "Ultimo aggiornamento: 4 luglio 2026", appTitle: "Privacy app", appText: "SpeechAnalyzer PRO non carica audio, testo o traduzioni. L'app usa Apple SpeechAnalyzer e Apple Translation sul tuo Mac.", modelsTitle: "Modelli di sistema", modelsText: "I modelli lingua e traduzione sono gestiti nelle Impostazioni di Sistema macOS. L'app verifica disponibilita ma non scarica modelli.", storeTitle: "Eccezione StoreKit", storeText: "Acquisto, ripristino e prezzi Apple StoreKit sono flussi di sistema Apple. L'app non aggiunge API di rete, analytics o log remoti.", siteTitle: "Privacy sito", siteText: "Questo sito statico non include analytics, tracker, moduli, cookie o font online. Cloudflare puo elaborare log standard come provider hosting." },
    pricing: { eyebrow: "Uso gratuito e sblocco", title: "Inizia gratis, sblocca quando serve.", text: "I prezzi sono mostrati dall'App Store per paese o regione. Questa pagina non fissa un prezzo.", freeTitle: "Quota giornaliera gratis", freeText: "Usa 2 conversioni e 2 export tradotti al giorno. Gli audio gratuiti devono essere sotto 100 MB.", unlockTitle: "Sblocco a vita", unlockText: "Un acquisto non consumabile una tantum rimuove quota giornaliera e limite 100 MB.", availableTitle: "Disponibilita", availableText: "Il link App Store sara aggiunto quando la scheda sara pronta." },
    support: { eyebrow: "Supporto", title: "Domande, report e feedback.", text: "Invia problemi di conversione, domande sui modelli e feedback direttamente allo sviluppatore.", note: "Il contatto e facoltativo. Il messaggio si apre nell'app Mail e controlli cosa inviare.", contactAction: "Invia email" },
    footer: { copy: "SpeechAnalyzer PRO. Trascrizione locale ed export tradotto per macOS.", back: "Torna su" }
  },
  ja: {
    meta: { title: "SpeechAnalyzer PRO - macOS向けローカル音声文字起こし", description: "SpeechAnalyzer PROは音声を文字起こしし、タイムライン確認、翻訳、書き出しをmacOS上でローカルに行います。" },
    skip: "本文へ移動",
    language: { label: "言語" },
    nav: { features: "機能", privacy: "プライバシー", pricing: "価格", support: "サポート" },
    hero: { eyebrow: "macOS向けローカル文字起こし", lead: "音声を検索可能な文字起こしに変換し、セグメントを確認し、テキストを翻訳して、ファイルをサーバへ送らずに書き出せます。", appStore: "App Store近日公開", privacy: "プライバシーを読む", features: "機能を見る", fact1Label: "プラットフォーム", fact1Value: "macOS 26+", fact2Label: "処理", fact2Value: "このMac上", fact3Label: "書き出し", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "ローカル設計", localText: "音声、文字起こし、翻訳はMac上に残ります。", timelineTitle: "タイムライン確認", timelineText: "セグメントを確認し、原文をコピーし、表示中の行を翻訳できます。", exportTitle: "翻訳書き出し", exportText: "翻訳済みTXT、Markdown、HTML、DOCX、SRT、VTTを作成できます。" },
    features: { eyebrow: "基本ワークフロー", title: "音声キューから翻訳済み文字起こしへ。", text: "SpeechAnalyzer PROはデスクトップの反復作業に向けて、キュー、一時停止、タイムライン確認、必要な形式への書き出しをまとめます。", batchTitle: "一括変換", batchText: "1つまたは複数の音声をドラッグし、認識言語を選び、キューを1件ずつ処理します。", pauseTitle: "一時停止と再開", pauseText: "長い文字起こしを一時停止し、別の項目を先に処理してから最後の確定セグメント付近で再開します。", timelineTitle: "タイムライン翻訳", timelineText: "原文を変更せず、表示中のセグメントを確認用に翻訳します。", exportTitle: "書き出し形式", exportText: "原文または翻訳済みの文字起こしをTXT、Markdown、HTML、DOCX、SRT、VTTで書き出せます。" },
    workflow: { eyebrow: "使い方", title: "丁寧な文字起こし作業のためのデスクトップフロー。", text: "SpeechAnalyzer PROはキュー、言語、出力先、タイムライン、翻訳書き出しを1つのmacOSウィンドウにまとめます。", step1Label: "音声を追加", step1Text: "アプリにドラッグするか、Finderから対応音声を送ります。", step2Label: "確認", step2Text: "変換後にリアルタイムテキストとタイムラインセグメントを切り替えます。", step3Label: "書き出し", step3Text: "原文を再書き出しするか、字幕、メモ、文書用に翻訳ファイルを作成します。" },
    formats: { eyebrow: "音声と出力", title: "文字起こし作業に実用的な形式。", text: "音声メモ、インタビュー、会議、メディア作業で使われる一般的な音声に対応します。", inputTitle: "対応音声", outputTitle: "文字起こし書き出し", finderTitle: "Finderワークフロー", finderText: "音声をアプリへ送るか、Finderのコンテキスト操作から翻訳を開始できます。" },
    privacy: { eyebrow: "プライバシーポリシー", title: "文字起こしと翻訳はローカルに留まります。", updated: "最終更新: 2026年7月4日", appTitle: "アプリのプライバシー", appText: "SpeechAnalyzer PROは音声、文字起こし、翻訳をアップロードしません。Apple SpeechAnalyzerとApple TranslationをMac上で使用します。", modelsTitle: "システムモデル", modelsText: "言語モデルと翻訳モデルはmacOSのシステム設定で管理されます。アプリは利用可否を確認しますが、モデルをダウンロードしません。", storeTitle: "StoreKitの例外", storeText: "Apple StoreKitの購入、復元、価格読み込みはAppleのシステム購入フローです。アプリ独自のネットワークAPI、分析、リモートログは追加しません。", siteTitle: "Webサイトのプライバシー", siteText: "この静的サイトには分析スクリプト、広告トラッカー、フォーム、Cookie、オンラインフォントはありません。Cloudflareがホスティング提供者として標準的なリクエストログを処理する場合があります。" },
    pricing: { eyebrow: "無料利用とアンロック", title: "無料で始め、必要になったらアンロック。", text: "価格はApp Storeが国または地域に応じて表示します。このページでは固定価格を記載しません。", freeTitle: "無料の1日枠", freeText: "1日あたり2回の文字起こしと2回の翻訳書き出しを利用できます。無料音声は100 MB未満です。", unlockTitle: "永久アンロック", unlockText: "1回限りの非消耗型購入で、1日枠と100 MB制限を解除します。", availableTitle: "提供状況", availableText: "App Storeリンクは掲載準備ができ次第追加します。" },
    support: { eyebrow: "サポート", title: "質問、報告、フィードバック。", text: "変換の問題、モデルの質問、ワークフローの意見を開発者へ直接送れます。", note: "連絡は任意です。メッセージは既定のメールアプリで開き、送信内容は自分で管理できます。", contactAction: "開発者にメール" },
    footer: { copy: "SpeechAnalyzer PRO。macOS向けローカル文字起こしと翻訳書き出し。", back: "上へ戻る" }
  },
  ko: {
    meta: { title: "SpeechAnalyzer PRO - macOS용 로컬 음성 전사", description: "SpeechAnalyzer PRO는 macOS에서 오디오 전사, 타임라인 검토, 번역, 내보내기를 로컬로 처리합니다." },
    skip: "본문으로 이동",
    language: { label: "언어" },
    nav: { features: "기능", privacy: "개인정보", pricing: "가격", support: "지원" },
    hero: { eyebrow: "macOS용 로컬 전사", lead: "오디오를 검색 가능한 전사로 바꾸고, 타임라인을 검토하고, 텍스트를 번역하고, 파일을 서버로 보내지 않고 내보냅니다.", appStore: "App Store 출시 예정", privacy: "개인정보 보기", features: "기능 보기", fact1Label: "플랫폼", fact1Value: "macOS 26+", fact2Label: "처리", fact2Value: "이 Mac에서", fact3Label: "내보내기", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "로컬 설계", localText: "오디오, 전사 텍스트, 번역은 Mac에 남아 있습니다.", timelineTitle: "타임라인 검토", timelineText: "세그먼트를 확인하고 원문을 복사하며 보이는 줄을 번역합니다.", exportTitle: "번역 내보내기", exportText: "번역된 TXT, Markdown, HTML, DOCX, SRT, VTT 파일을 만듭니다." },
    features: { eyebrow: "핵심 흐름", title: "오디오 대기열에서 번역된 전사까지.", text: "SpeechAnalyzer PRO는 반복적인 데스크톱 전사 작업을 위해 대기열, 일시정지, 타임라인 검토, 필요한 형식 내보내기를 제공합니다.", batchTitle: "일괄 변환", batchText: "하나 이상의 오디오를 끌어오고 인식 언어를 선택한 뒤 대기열을 하나씩 처리합니다.", pauseTitle: "일시정지 및 재개", pauseText: "긴 전사를 일시정지하고 다른 항목을 먼저 처리한 뒤 마지막 완료 세그먼트 근처에서 재개합니다.", timelineTitle: "타임라인 번역", timelineText: "원본 전사를 바꾸지 않고 보이는 세그먼트를 검토용으로 번역합니다.", exportTitle: "내보내기 선택", exportText: "원본 또는 번역 전사를 TXT, Markdown, HTML, DOCX, SRT, VTT로 내보냅니다." },
    workflow: { eyebrow: "작동 방식", title: "세심한 전사 작업을 위한 데스크톱 흐름.", text: "SpeechAnalyzer PRO는 대기열, 언어, 출력 폴더, 타임라인, 번역 내보내기를 하나의 조용한 macOS 창에 모읍니다.", step1Label: "오디오 추가", step1Text: "앱을 사용하거나 파일을 끌어오거나 Finder에서 지원 오디오를 보냅니다.", step2Label: "검토", step2Text: "변환 완료 후 실시간 텍스트와 타임라인 세그먼트를 전환합니다.", step3Label: "내보내기", step3Text: "원본을 다시 내보내거나 자막, 메모, 문서용 번역 파일을 만듭니다." },
    formats: { eyebrow: "오디오 및 출력", title: "전사 작업에 실용적인 형식.", text: "음성 메모, 인터뷰, 회의, 미디어 작업에 쓰이는 일반 오디오를 지원합니다.", inputTitle: "지원 오디오", outputTitle: "전사 내보내기", finderTitle: "Finder 흐름", finderText: "오디오를 앱으로 보내거나 Finder 컨텍스트 동작에서 번역을 시작합니다." },
    privacy: { eyebrow: "개인정보 처리방침", title: "전사와 번역은 로컬에 남아 있습니다.", updated: "최종 업데이트: 2026년 7월 4일", appTitle: "앱 개인정보", appText: "SpeechAnalyzer PRO는 오디오, 전사 텍스트, 번역을 업로드하지 않습니다. Apple SpeechAnalyzer와 Apple Translation을 Mac에서 사용합니다.", modelsTitle: "시스템 모델", modelsText: "언어 및 번역 모델은 macOS 시스템 설정에서 관리됩니다. 앱은 사용 가능 여부만 확인하며 모델을 다운로드하지 않습니다.", storeTitle: "StoreKit 예외", storeText: "Apple StoreKit 구입, 복원, 가격 불러오기는 Apple 시스템 구입 흐름입니다. 앱은 자체 네트워크 API, 분석, 원격 로그를 추가하지 않습니다.", siteTitle: "웹사이트 개인정보", siteText: "이 정적 사이트에는 분석 스크립트, 광고 추적기, 양식, 쿠키, 온라인 폰트가 없습니다. Cloudflare는 호스팅 제공자로서 표준 요청 로그를 처리할 수 있습니다." },
    pricing: { eyebrow: "무료 사용 및 잠금 해제", title: "무료로 시작하고 필요할 때 잠금 해제하세요.", text: "가격은 App Store가 국가 또는 지역에 맞게 표시합니다. 이 페이지는 가격을 고정하지 않습니다.", freeTitle: "무료 일일 할당량", freeText: "하루에 전사 2회와 번역 내보내기 2회를 사용할 수 있습니다. 무료 오디오는 100 MB보다 작아야 합니다.", unlockTitle: "평생 잠금 해제", unlockText: "1회 비소모성 구입으로 일일 할당량과 100 MB 제한을 제거합니다.", availableTitle: "사용 가능 여부", availableText: "App Store 링크는 등록이 준비되면 추가됩니다." },
    support: { eyebrow: "지원", title: "질문, 리포트, 피드백.", text: "변환 문제, 언어 모델 질문, 워크플로 피드백을 개발자에게 직접 보냅니다.", note: "연락은 선택 사항입니다. 메시지는 기본 메일 앱에서 열리며 보낼 내용을 직접 관리합니다.", contactAction: "개발자에게 이메일" },
    footer: { copy: "SpeechAnalyzer PRO. macOS용 로컬 전사와 번역 내보내기.", back: "맨 위로" }
  },
  "pt-BR": {
    meta: { title: "SpeechAnalyzer PRO - Transcricao local para macOS", description: "SpeechAnalyzer PRO transcreve audio, revisa linhas do tempo, traduz texto e exporta resultados localmente no macOS." },
    skip: "Ir para o conteudo",
    language: { label: "Idioma" },
    nav: { features: "Recursos", privacy: "Privacidade", pricing: "Preco", support: "Suporte" },
    hero: { eyebrow: "Transcricao local para macOS", lead: "Transforme audio em transcricoes pesquisaveis, revise segmentos, traduza texto e exporte documentos sem enviar arquivos para um servidor.", appStore: "App Store em breve", privacy: "Ler privacidade", features: "Ver recursos", fact1Label: "Plataforma", fact1Value: "macOS 26+", fact2Label: "Processamento", fact2Value: "Neste Mac", fact3Label: "Exportacao", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local por design", localText: "Audio, texto transcrito e traducoes ficam no seu Mac.", timelineTitle: "Revisao por linha do tempo", timelineText: "Inspecione segmentos, copie o texto original e traduza linhas visiveis.", exportTitle: "Exportacoes traduzidas", exportText: "Crie arquivos traduzidos TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    features: { eyebrow: "Fluxo principal", title: "Da fila de audio a transcricao traduzida.", text: "SpeechAnalyzer PRO foca no trabalho repetido de transcricao no desktop: fila, pausa, revisao e exportacao no formato certo.", batchTitle: "Conversao em lote", batchText: "Arraste um ou varios audios, escolha o idioma de reconhecimento e processe a fila um item por vez.", pauseTitle: "Pausar e continuar", pauseText: "Pause uma transcricao longa, processe outro item e continue perto do ultimo segmento finalizado.", timelineTitle: "Traducao da linha do tempo", timelineText: "Traduza segmentos visiveis para revisao sem alterar a transcricao original.", exportTitle: "Opcoes de exportacao", exportText: "Exporte transcricoes originais ou traduzidas como TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    workflow: { eyebrow: "Como funciona", title: "Um fluxo de desktop para revisar com cuidado.", text: "SpeechAnalyzer PRO junta fila, idioma, pasta de saida, linha do tempo e exportacao traduzida em uma janela macOS discreta.", step1Label: "Adicionar audio", step1Text: "Use o app, arraste arquivos para a fila ou envie audio compatível pelo Finder.", step2Label: "Revisar", step2Text: "Alterne entre texto em tempo real e segmentos depois da conversao.", step3Label: "Exportar", step3Text: "Reexporte originais ou crie arquivos traduzidos para legendas, notas e documentos." },
    formats: { eyebrow: "Audio e saida", title: "Formatos praticos para transcricao.", text: "A entrada cobre audios comuns de notas de voz, entrevistas, reunioes e fluxos de midia.", inputTitle: "Audio compativel", outputTitle: "Exportacao", finderTitle: "Fluxo Finder", finderText: "Envie audio para o app ou inicie traducao pelas acoes contextuais do Finder." },
    privacy: { eyebrow: "Politica de privacidade", title: "Transcricao e traducao ficam locais.", updated: "Ultima atualizacao: 4 de julho de 2026", appTitle: "Privacidade do app", appText: "SpeechAnalyzer PRO nao envia seu audio, texto transcrito ou traducoes. O app usa Apple SpeechAnalyzer e Apple Translation no seu Mac.", modelsTitle: "Modelos do sistema", modelsText: "Modelos de idioma e traducao sao gerenciados nos Ajustes do Sistema do macOS. O app verifica disponibilidade, mas nao baixa modelos.", storeTitle: "Excecao StoreKit", storeText: "Compra, restauracao e carregamento de precos do Apple StoreKit sao fluxos de sistema da Apple. O app nao adiciona API de rede propria, analytics ou logs remotos.", siteTitle: "Privacidade do site", siteText: "Este site estatico nao inclui analytics, rastreadores, formularios, cookies ou fontes online. A Cloudflare pode processar logs padrao como provedora de hospedagem." },
    pricing: { eyebrow: "Uso gratis e desbloqueio", title: "Comece gratis e desbloqueie quando precisar.", text: "Os precos sao mostrados pela App Store para seu pais ou regiao. Esta pagina nao fixa um preco.", freeTitle: "Cota diaria gratis", freeText: "Use 2 conversoes e 2 exportacoes traduzidas por dia. Audios gratis devem ter menos de 100 MB.", unlockTitle: "Desbloqueio vitalicio", unlockText: "Uma compra unica nao consumivel remove a cota diaria e o limite de 100 MB.", availableTitle: "Disponibilidade", availableText: "O link da App Store sera adicionado quando a pagina estiver pronta." },
    support: { eyebrow: "Suporte", title: "Perguntas, relatos e feedback.", text: "Envie problemas de conversao, perguntas sobre modelos e feedback diretamente ao desenvolvedor.", note: "O contato e opcional. A mensagem abre no seu app de email padrao, e voce controla o envio.", contactAction: "Enviar email" },
    footer: { copy: "SpeechAnalyzer PRO. Transcricao local e exportacao traduzida para macOS.", back: "Voltar ao topo" }
  },
  "zh-Hans": {
    meta: { title: "SpeechAnalyzer PRO - macOS 本机语音转文字", description: "SpeechAnalyzer PRO 在 macOS 本机完成音频转写、时间轴审阅、文本翻译和译文导出。" },
    skip: "跳转到正文",
    language: { label: "语言" },
    nav: { features: "功能", privacy: "隐私", pricing: "价格", support: "支持" },
    hero: { eyebrow: "macOS 本机转写", lead: "将音频转为可搜索文本，审阅时间轴片段，翻译文本并导出最终文件，而无需把文件发送到服务器。", appStore: "App Store 即将开放", privacy: "阅读隐私政策", features: "查看功能", fact1Label: "平台", fact1Value: "macOS 26+", fact2Label: "处理方式", fact2Value: "在这台 Mac 上", fact3Label: "导出", fact3Value: "TXT、MD、HTML、DOCX、SRT、VTT" },
    strip: { localTitle: "本机优先", localText: "音频、转写文本和译文都留在你的 Mac 上。", timelineTitle: "时间轴审阅", timelineText: "检查片段、复制原文，并翻译当前可见句子。", exportTitle: "译文导出", exportText: "生成翻译后的 TXT、Markdown、HTML、DOCX、SRT 或 VTT 文件。" },
    features: { eyebrow: "核心工作流", title: "从音频队列到译文转写稿。", text: "SpeechAnalyzer PRO 面向重复的桌面转写工作：排队文件、暂停长任务、审阅时间轴，然后导出到下一个工具需要的格式。", batchTitle: "批量转换", batchText: "拖入一个或多个音频文件，选择识别语言，并按队列逐个处理。", pauseTitle: "暂停与续跑", pauseText: "暂停长音频转写，先处理其他项目，再从最后完成的片段附近继续。", timelineTitle: "时间轴翻译", timelineText: "为审阅翻译当前可见片段，不改写原始转写文本。", exportTitle: "多格式导出", exportText: "将原文或译文导出为 TXT、Markdown、HTML、DOCX、SRT 或 VTT。" },
    workflow: { eyebrow: "使用方式", title: "为认真审阅转写稿设计的桌面流程。", text: "SpeechAnalyzer PRO 将转换队列、语言选择、输出目录、时间轴和译文导出放在一个安静的 macOS 窗口里。", step1Label: "加入音频", step1Text: "在应用内添加、拖入队列，或从 Finder 发送支持的音频。", step2Label: "审阅时间轴", step2Text: "转换完成后，在实时文本和时间轴片段之间切换。", step3Label: "导出", step3Text: "重新导出原文，或创建用于字幕、笔记和文档的译文文件。" },
    formats: { eyebrow: "音频与导出", title: "适合转写工作的实用格式。", text: "输入格式覆盖语音备忘、访谈、会议和媒体工作流中的常见音频文件。", inputTitle: "支持音频", outputTitle: "转写导出", finderTitle: "Finder 工作流", finderText: "从 Finder 将音频发送到应用，或通过右键操作启动翻译。" },
    privacy: { eyebrow: "隐私政策", title: "转写和翻译都留在本机。", updated: "最后更新：2026 年 7 月 4 日", appTitle: "应用隐私", appText: "SpeechAnalyzer PRO 不上传你的音频、转写文本或译文。应用围绕在 Mac 上运行的 Apple SpeechAnalyzer 和 Apple Translation 框架设计。", modelsTitle: "系统模型", modelsText: "语言和翻译模型由 macOS 系统设置管理。应用会检查模型是否可用，但不会自行下载模型。", storeTitle: "StoreKit 例外", storeText: "Apple StoreKit 购买、恢复购买和价格读取属于 Apple 系统购买流程。应用不新增自己的网络 API、分析统计或远程日志。", siteTitle: "网站隐私", siteText: "这个静态网站不包含分析脚本、广告跟踪器、表单、Cookie 或在线字体。Cloudflare 作为托管提供商可能会处理标准请求日志。" },
    pricing: { eyebrow: "免费使用与解锁", title: "先免费开始，需要更多时再解锁。", text: "价格由 App Store 根据你的国家或地区显示。本页面不写死价格。", freeTitle: "每日免费额度", freeText: "每天可使用 2 次转写转换和 2 次译文导出。免费音频文件必须小于 100 MB。", unlockTitle: "永久解锁", unlockText: "一次性非消耗型购买会移除每日额度和 100 MB 音频限制。", availableTitle: "上架状态", availableText: "App Store 链接会在页面准备好后添加。" },
    support: { eyebrow: "支持", title: "问题、报告和反馈。", text: "可将转换问题、语言模型问题和工作流反馈直接发送给开发者。", note: "联系开发者是可选的。邮件会在默认邮件应用中打开，你可以自行控制发送内容。", contactAction: "联系开发者" },
    footer: { copy: "SpeechAnalyzer PRO。面向 macOS 的本机转写与译文导出。", back: "返回顶部" }
  },
  "zh-Hant": {
    meta: { title: "SpeechAnalyzer PRO - macOS 本機語音轉文字", description: "SpeechAnalyzer PRO 在 macOS 本機完成音訊轉寫、時間軸審閱、文字翻譯和譯文匯出。" },
    skip: "跳至內容",
    language: { label: "語言" },
    nav: { features: "功能", privacy: "隱私", pricing: "價格", support: "支援" },
    hero: { eyebrow: "macOS 本機轉寫", lead: "將音訊轉為可搜尋文字，審閱時間軸片段，翻譯文字並匯出最終檔案，而不用把檔案傳送到伺服器。", appStore: "App Store 即將開放", privacy: "閱讀隱私政策", features: "查看功能", fact1Label: "平台", fact1Value: "macOS 26+", fact2Label: "處理方式", fact2Value: "在這台 Mac 上", fact3Label: "匯出", fact3Value: "TXT、MD、HTML、DOCX、SRT、VTT" },
    strip: { localTitle: "本機優先", localText: "音訊、轉寫文字和譯文都留在你的 Mac 上。", timelineTitle: "時間軸審閱", timelineText: "檢查片段、複製原文，並翻譯目前可見句子。", exportTitle: "譯文匯出", exportText: "產生翻譯後的 TXT、Markdown、HTML、DOCX、SRT 或 VTT 檔案。" },
    features: { eyebrow: "核心工作流程", title: "從音訊佇列到譯文轉寫稿。", text: "SpeechAnalyzer PRO 面向重複的桌面轉寫工作：排入檔案、暫停長任務、審閱時間軸，然後匯出到下一個工具需要的格式。", batchTitle: "批次轉換", batchText: "拖入一個或多個音訊檔案，選擇辨識語言，並按佇列逐個處理。", pauseTitle: "暫停與續跑", pauseText: "暫停長音訊轉寫，先處理其他項目，再從最後完成的片段附近繼續。", timelineTitle: "時間軸翻譯", timelineText: "為審閱翻譯目前可見片段，不改寫原始轉寫文字。", exportTitle: "多格式匯出", exportText: "將原文或譯文匯出為 TXT、Markdown、HTML、DOCX、SRT 或 VTT。" },
    workflow: { eyebrow: "使用方式", title: "為認真審閱轉寫稿設計的桌面流程。", text: "SpeechAnalyzer PRO 將轉換佇列、語言選擇、輸出目錄、時間軸和譯文匯出放在一個安靜的 macOS 視窗裡。", step1Label: "加入音訊", step1Text: "在 App 內加入、拖入佇列，或從 Finder 傳送支援的音訊。", step2Label: "審閱時間軸", step2Text: "轉換完成後，在即時文字和時間軸片段之間切換。", step3Label: "匯出", step3Text: "重新匯出原文，或建立用於字幕、筆記和文件的譯文檔案。" },
    formats: { eyebrow: "音訊與匯出", title: "適合轉寫工作的實用格式。", text: "輸入格式覆蓋語音備忘、訪談、會議和媒體工作流程中的常見音訊檔案。", inputTitle: "支援音訊", outputTitle: "轉寫匯出", finderTitle: "Finder 工作流程", finderText: "從 Finder 將音訊傳送到 App，或透過右鍵操作啟動翻譯。" },
    privacy: { eyebrow: "隱私政策", title: "轉寫和翻譯都留在本機。", updated: "最後更新：2026 年 7 月 4 日", appTitle: "App 隱私", appText: "SpeechAnalyzer PRO 不上傳你的音訊、轉寫文字或譯文。App 圍繞在 Mac 上執行的 Apple SpeechAnalyzer 和 Apple Translation 框架設計。", modelsTitle: "系統模型", modelsText: "語言和翻譯模型由 macOS 系統設定管理。App 會檢查模型是否可用，但不會自行下載模型。", storeTitle: "StoreKit 例外", storeText: "Apple StoreKit 購買、恢復購買和價格讀取屬於 Apple 系統購買流程。App 不新增自己的網路 API、分析統計或遠端日誌。", siteTitle: "網站隱私", siteText: "這個靜態網站不包含分析腳本、廣告追蹤器、表單、Cookie 或線上字體。Cloudflare 作為託管提供商可能會處理標準請求日誌。" },
    pricing: { eyebrow: "免費使用與解鎖", title: "先免費開始，需要更多時再解鎖。", text: "價格由 App Store 根據你的國家或地區顯示。本頁面不寫死價格。", freeTitle: "每日免費額度", freeText: "每天可使用 2 次轉寫轉換和 2 次譯文匯出。免費音訊檔案必須小於 100 MB。", unlockTitle: "永久解鎖", unlockText: "一次性非消耗型購買會移除每日額度和 100 MB 音訊限制。", availableTitle: "上架狀態", availableText: "App Store 連結會在頁面準備好後加入。" },
    support: { eyebrow: "支援", title: "問題、回報和意見。", text: "可將轉換問題、語言模型問題和工作流程意見直接傳送給開發者。", note: "聯絡開發者是選填的。郵件會在預設郵件 App 中開啟，你可以自行控制傳送內容。", contactAction: "聯絡開發者" },
    footer: { copy: "SpeechAnalyzer PRO。面向 macOS 的本機轉寫與譯文匯出。", back: "返回頂部" }
  }
};

translations["es-ES"] = translations.es;
translations["es-MX"] = translations.es;
translations["fr-CA"] = translations.fr;
translations["pt-PT"] = translations["pt-BR"];

function deepGet(object, path) {
  return path.split(".").reduce((value, key) => value && value[key], object);
}

function normalizeLocale(locale) {
  if (!locale) return DEFAULT_LOCALE;
  if (SUPPORTED_LOCALES.includes(locale)) return locale;
  const base = locale.split("-")[0];
  if (SUPPORTED_LOCALES.includes(base)) return base;
  return DEFAULT_LOCALE;
}

function preferredLocale() {
  const params = new URLSearchParams(window.location.search);
  const queryLocale = normalizeLocale(params.get("lang"));
  if (params.has("lang")) return queryLocale;

  try {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (storedLocale) return normalizeLocale(storedLocale);
  } catch {
    return normalizeLocale(navigator.language);
  }

  return normalizeLocale(navigator.language);
}

function applyLocale(locale) {
  const normalized = normalizeLocale(locale);
  const dictionary = translations[normalized] || translations[DEFAULT_LOCALE];

  document.documentElement.lang = normalized;
  document.title = dictionary.meta.title;
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  if (description) description.setAttribute("content", dictionary.meta.description);
  if (ogTitle) ogTitle.setAttribute("content", dictionary.meta.title);
  if (ogDescription) ogDescription.setAttribute("content", dictionary.meta.description);

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.getAttribute("data-i18n");
    const value = deepGet(dictionary, key) || deepGet(translations[DEFAULT_LOCALE], key);
    if (value) element.textContent = value;
  }

  const select = document.getElementById("language-select");
  if (select) select.value = normalized;

  try {
    window.localStorage.setItem(STORAGE_KEY, normalized);
  } catch {
    // The language still applies even when local storage is unavailable.
  }
}

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLocale(event.target.value);
  });
}

applyLocale(preferredLocale());
