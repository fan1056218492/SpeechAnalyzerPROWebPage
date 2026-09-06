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
    appStore: "Download on the App Store",
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
    updated: "Last updated: September 1, 2026",
    appTitle: "App privacy",
    appText: "SpeechAnalyzer PRO does not upload your audio, transcript text, or translations. The app is designed around Apple SpeechAnalyzer and Apple Translation frameworks running on your Mac.",
    modelsTitle: "System models",
    modelsText: "Language and translation models are managed by macOS System Settings. The app checks model availability but does not download models itself.",
    storeTitle: "No in-app purchases",
    storeText: "SpeechAnalyzer PRO is a paid App Store download. Every feature is included, with no in-app purchases, subscriptions, trials, purchase restoration, or feature unlocking inside the app.",
    siteTitle: "Website privacy",
    siteText: "This static website does not include analytics scripts, advertising trackers, forms, cookies, or online fonts. Cloudflare may process standard request logs as the hosting provider."
  },
  pricing: {
    eyebrow: "One purchase",
    title: "Everything included. No subscription.",
    text: "The App Store shows the price for your country or region. Download once and use every transcription, translation, and export feature.",
    freeTitle: "Complete app",
    freeText: "Batch transcription, pause and resume, local translation, Finder actions, and every export format are included.",
    unlockTitle: "Paid download",
    unlockText: "There are no in-app purchases, daily quotas, file-size paywalls, free trials, or subscriptions.",
    availableTitle: "Available on the App Store",
    availableText: "Get SpeechAnalyzer PRO for macOS 26 or later."
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
    hero: { eyebrow: "Lokale Transkription fuer macOS", lead: "Verwandle Audio in durchsuchbare Transkripte, pruefe Zeitachsensegmente, uebersetze Text und exportiere Dokumente, ohne Dateien an einen Server zu senden.", appStore: "Im App Store laden", privacy: "Datenschutz lesen", features: "Funktionen ansehen", fact1Label: "Plattform", fact1Value: "macOS 26+", fact2Label: "Verarbeitung", fact2Value: "Auf diesem Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Lokal entwickelt", localText: "Audio, Transkripttext und Uebersetzungen bleiben auf deinem Mac.", timelineTitle: "Zeitachsenpruefung", timelineText: "Segmente pruefen, Originaltext kopieren und sichtbare Zeilen uebersetzen.", exportTitle: "Uebersetzte Exporte", exportText: "Erstelle uebersetzte TXT-, Markdown-, HTML-, DOCX-, SRT- oder VTT-Dateien." },
    features: { eyebrow: "Kernablauf", title: "Von der Audio-Warteschlange zum uebersetzten Transkript.", text: "SpeechAnalyzer PRO ist fuer wiederholte Desktop-Transkription gebaut: Dateien einreihen, lange Laeufe pausieren, Zeitachsen pruefen und im passenden Format exportieren.", batchTitle: "Stapelkonvertierung", batchText: "Ziehe eine oder mehrere Audiodateien hinein, waehle eine Erkennungssprache und verarbeite die Warteschlange einzeln.", pauseTitle: "Pausieren und fortsetzen", pauseText: "Pausiere eine lange Transkription, bearbeite zuerst ein anderes Element und setze nahe dem letzten finalen Segment fort.", timelineTitle: "Zeitachsenuebersetzung", timelineText: "Uebersetze sichtbare Zeitachsensegmente zur Pruefung, ohne das Originaltranskript zu aendern.", exportTitle: "Exportoptionen", exportText: "Exportiere Originaltranskripte oder uebersetzte Transkripte als TXT, Markdown, HTML, DOCX, SRT oder VTT." },
    workflow: { eyebrow: "Arbeitsweise", title: "Ein Desktop-Ablauf fuer sorgfaeltige Transkriptarbeit.", text: "SpeechAnalyzer PRO haelt Warteschlange, Sprache, Ausgabeordner, Zeitachse und Uebersetzungsexport in einem ruhigen macOS-Fenster zusammen.", step1Label: "Audio hinzufuegen", step1Text: "Nutze die App, ziehe Dateien in die Warteschlange oder sende unterstuetztes Audio aus dem Finder.", step2Label: "Zeitachse pruefen", step2Text: "Wechsle nach Abschluss zwischen Echtzeittext und Zeitachsensegmenten.", step3Label: "Exportieren", step3Text: "Exportiere Originale erneut oder erstelle uebersetzte Dateien fuer Untertitel, Notizen und Dokumente." },
    formats: { eyebrow: "Audio und Ausgabe", title: "Praktische Formate fuer Transkriptionsarbeit.", text: "Die Eingabe unterstuetzt gaengige Audiodateien aus Sprachnotizen, Interviews, Meetings und Medienablaeufen.", inputTitle: "Unterstuetztes Audio", outputTitle: "Transkriptexport", finderTitle: "Finder-Ablauf", finderText: "Sende Audio an die App oder starte Finder-Uebersetzung ueber Kontextaktionen." },
    privacy: { eyebrow: "Datenschutzrichtlinie", title: "Transkription und Uebersetzung bleiben lokal.", updated: "Zuletzt aktualisiert: 1. September 2026", appTitle: "App-Datenschutz", appText: "SpeechAnalyzer PRO laedt Audio, Transkripttext oder Uebersetzungen nicht hoch. Die App nutzt Apple SpeechAnalyzer und Apple Translation Frameworks auf deinem Mac.", modelsTitle: "Systemmodelle", modelsText: "Sprach- und Uebersetzungsmodelle werden in den macOS Systemeinstellungen verwaltet. Die App prueft die Verfuegbarkeit, laedt Modelle aber nicht selbst herunter.", storeTitle: "Keine In-App-Kaeufe", storeText: "SpeechAnalyzer PRO ist ein kostenpflichtiger App Store-Download. Alle Funktionen sind enthalten; es gibt keine In-App-Kaeufe, Abonnements, Testversionen, Wiederherstellung von Kaeufen oder Funktionsfreischaltungen in der App.", siteTitle: "Website-Datenschutz", siteText: "Diese statische Website enthaelt keine Analytics-Skripte, Werbetracker, Formulare, Cookies oder Online-Schriften. Cloudflare kann als Hostinganbieter Standard-Anfrageprotokolle verarbeiten." },
    pricing: { eyebrow: "Einmal kaufen", title: "Alles enthalten. Kein Abonnement.", text: "Der App Store zeigt den Preis fuer dein Land oder deine Region. Einmal laden und alle Transkriptions-, Uebersetzungs- und Exportfunktionen nutzen.", freeTitle: "Vollstaendige App", freeText: "Stapeltranskription, Pausieren und Fortsetzen, lokale Uebersetzung, Finder-Aktionen und alle Exportformate sind enthalten.", unlockTitle: "Kostenpflichtiger Download", unlockText: "Es gibt keine In-App-Kaeufe, Tageskontingente, Dateigroessen-Paywalls, Testversionen oder Abonnements.", availableTitle: "Im App Store verfuegbar", availableText: "SpeechAnalyzer PRO fuer macOS 26 oder neuer laden." },
    support: { eyebrow: "Support", title: "Fragen, Berichte und Feedback.", text: "Sende Konvertierungsprobleme, Fragen zu Sprachmodellen und Workflow-Feedback direkt an den Entwickler.", note: "Kontakt ist freiwillig. Deine Nachricht wird in deiner Standard-Mail-App geoeffnet, und du bestimmst, was gesendet wird.", contactAction: "Entwickler per E-Mail kontaktieren" },
    footer: { copy: "SpeechAnalyzer PRO. Lokale Transkription und uebersetzter Export fuer macOS.", back: "Nach oben" }
  },
  es: {
    meta: { title: "SpeechAnalyzer PRO - Transcripcion local para macOS", description: "SpeechAnalyzer PRO transcribe audio, revisa lineas de tiempo, traduce texto y exporta resultados localmente en macOS." },
    skip: "Ir al contenido",
    language: { label: "Idioma" },
    nav: { features: "Funciones", privacy: "Privacidad", pricing: "Precio", support: "Soporte" },
    hero: { eyebrow: "Transcripcion local para macOS", lead: "Convierte audio en transcripciones buscables, revisa segmentos, traduce texto y exporta documentos sin enviar archivos a un servidor.", appStore: "Descargar en App Store", privacy: "Leer privacidad", features: "Ver funciones", fact1Label: "Plataforma", fact1Value: "macOS 26+", fact2Label: "Procesamiento", fact2Value: "En este Mac", fact3Label: "Exportacion", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local por diseno", localText: "Audio, transcripciones y traducciones permanecen en tu Mac.", timelineTitle: "Revision por linea de tiempo", timelineText: "Inspecciona segmentos, copia el texto original y traduce lineas visibles.", exportTitle: "Exportaciones traducidas", exportText: "Crea archivos traducidos TXT, Markdown, HTML, DOCX, SRT o VTT." },
    features: { eyebrow: "Flujo principal", title: "De la cola de audio a la transcripcion traducida.", text: "SpeechAnalyzer PRO se centra en trabajo repetido de transcripcion en escritorio: cola de archivos, pausa, revision de linea de tiempo y exportacion.", batchTitle: "Conversion por lotes", batchText: "Arrastra uno o varios audios, elige idioma de reconocimiento y procesa la cola de a un trabajo.", pauseTitle: "Pausar y continuar", pauseText: "Pausa una transcripcion larga, procesa otro elemento y continua cerca del ultimo segmento finalizado.", timelineTitle: "Traduccion de linea de tiempo", timelineText: "Traduce segmentos visibles para revisarlos sin cambiar la transcripcion original.", exportTitle: "Opciones de exportacion", exportText: "Exporta transcripciones originales o traducidas como TXT, Markdown, HTML, DOCX, SRT o VTT." },
    workflow: { eyebrow: "Como funciona", title: "Un flujo de escritorio para revisar transcripciones con cuidado.", text: "SpeechAnalyzer PRO reune cola, idioma, carpeta de salida, linea de tiempo y exportacion traducida en una ventana macOS discreta.", step1Label: "Agregar audio", step1Text: "Usa la app, arrastra archivos a la cola o envia audio compatible desde Finder.", step2Label: "Revisar", step2Text: "Cambia entre texto en tiempo real y segmentos tras completar la conversion.", step3Label: "Exportar", step3Text: "Reexporta originales o crea archivos traducidos para subtitulos, notas y documentos." },
    formats: { eyebrow: "Audio y salida", title: "Formatos practicos para transcripcion.", text: "La entrada cubre audios comunes de notas de voz, entrevistas, reuniones y flujos multimedia.", inputTitle: "Audio compatible", outputTitle: "Exportacion", finderTitle: "Flujo Finder", finderText: "Envia audio a la app o inicia traduccion desde acciones contextuales de Finder." },
    privacy: { eyebrow: "Politica de privacidad", title: "Transcripcion y traduccion permanecen locales.", updated: "Ultima actualizacion: 1 de septiembre de 2026", appTitle: "Privacidad de la app", appText: "SpeechAnalyzer PRO no sube tu audio, texto transcrito ni traducciones. La app usa Apple SpeechAnalyzer y Apple Translation en tu Mac.", modelsTitle: "Modelos del sistema", modelsText: "Los modelos de idioma y traduccion se gestionan en Ajustes del Sistema de macOS. La app comprueba disponibilidad, pero no descarga modelos.", storeTitle: "Sin compras dentro de la app", storeText: "SpeechAnalyzer PRO es una descarga de pago de App Store. Incluye todas las funciones, sin compras dentro de la app, suscripciones, pruebas, restauracion de compras ni desbloqueo de funciones.", siteTitle: "Privacidad del sitio", siteText: "Este sitio estatico no incluye analytics, rastreadores, formularios, cookies ni fuentes en linea. Cloudflare puede procesar registros estandar como proveedor de hosting." },
    pricing: { eyebrow: "Una sola compra", title: "Todo incluido. Sin suscripcion.", text: "App Store muestra el precio para tu pais o region. Descarga una vez y usa todas las funciones de transcripcion, traduccion y exportacion.", freeTitle: "App completa", freeText: "Incluye transcripcion por lotes, pausa y reanudacion, traduccion local, acciones de Finder y todos los formatos de exportacion.", unlockTitle: "Descarga de pago", unlockText: "No hay compras dentro de la app, cuotas diarias, limites de pago por tamano de archivo, pruebas gratuitas ni suscripciones.", availableTitle: "Disponible en App Store", availableText: "Descarga SpeechAnalyzer PRO para macOS 26 o posterior." },
    support: { eyebrow: "Soporte", title: "Preguntas, reportes y comentarios.", text: "Envia problemas de conversion, preguntas de modelos y comentarios de flujo directamente al desarrollador.", note: "El contacto es opcional. Tu mensaje se abre en tu app de correo y controlas lo que se envia.", contactAction: "Enviar email" },
    footer: { copy: "SpeechAnalyzer PRO. Transcripcion local y exportacion traducida para macOS.", back: "Volver arriba" }
  },
  fr: {
    meta: { title: "SpeechAnalyzer PRO - Transcription locale pour macOS", description: "SpeechAnalyzer PRO transcrit l'audio, relit les timelines, traduit le texte et exporte les resultats localement sur macOS." },
    skip: "Aller au contenu",
    language: { label: "Langue" },
    nav: { features: "Fonctions", privacy: "Confidentialite", pricing: "Tarifs", support: "Support" },
    hero: { eyebrow: "Transcription locale pour macOS", lead: "Transformez l'audio en transcriptions consultables, relisez les segments, traduisez le texte et exportez sans envoyer vos fichiers a un serveur.", appStore: "Telecharger sur l'App Store", privacy: "Lire la confidentialite", features: "Voir les fonctions", fact1Label: "Plateforme", fact1Value: "macOS 26+", fact2Label: "Traitement", fact2Value: "Sur ce Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local par conception", localText: "Audio, texte transcrit et traductions restent sur votre Mac.", timelineTitle: "Relecture timeline", timelineText: "Inspectez les segments, copiez l'original et traduisez les lignes visibles.", exportTitle: "Exports traduits", exportText: "Creez des fichiers traduits TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    features: { eyebrow: "Flux principal", title: "De la file audio a la transcription traduite.", text: "SpeechAnalyzer PRO vise le travail de transcription repetitif: file de fichiers, pauses, relecture par timeline et export au bon format.", batchTitle: "Conversion par lot", batchText: "Glissez un ou plusieurs audios, choisissez une langue et traitez la file un element a la fois.", pauseTitle: "Pause et reprise", pauseText: "Mettez une longue transcription en pause, traitez un autre element, puis reprenez pres du dernier segment finalise.", timelineTitle: "Traduction timeline", timelineText: "Traduisez les segments visibles pour relecture sans modifier la transcription originale.", exportTitle: "Choix d'export", exportText: "Exportez les transcriptions originales ou traduites en TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    workflow: { eyebrow: "Fonctionnement", title: "Un flux desktop pour un travail attentif.", text: "SpeechAnalyzer PRO regroupe file, langue, dossier de sortie, timeline et export traduit dans une fenetre macOS sobre.", step1Label: "Ajouter l'audio", step1Text: "Utilisez l'app, glissez des fichiers dans la file ou envoyez l'audio depuis Finder.", step2Label: "Relire", step2Text: "Passez du texte temps reel aux segments apres la conversion.", step3Label: "Exporter", step3Text: "Reexportez les originaux ou creez des fichiers traduits pour sous-titres, notes et documents." },
    formats: { eyebrow: "Audio et sortie", title: "Des formats pratiques pour transcrire.", text: "L'entree couvre les fichiers audio courants des notes vocales, interviews, reunions et flux media.", inputTitle: "Audio pris en charge", outputTitle: "Export", finderTitle: "Flux Finder", finderText: "Envoyez l'audio vers l'app ou lancez une traduction depuis les actions contextuelles Finder." },
    privacy: { eyebrow: "Politique de confidentialite", title: "Transcription et traduction restent locales.", updated: "Derniere mise a jour : 1er septembre 2026", appTitle: "Confidentialite de l'app", appText: "SpeechAnalyzer PRO ne televerse pas votre audio, texte transcrit ou traductions. L'app repose sur Apple SpeechAnalyzer et Apple Translation sur votre Mac.", modelsTitle: "Modeles systeme", modelsText: "Les modeles de langue et traduction sont geres dans les Reglages Systeme de macOS. L'app verifie leur disponibilite mais ne les telecharge pas.", storeTitle: "Aucun achat integre", storeText: "SpeechAnalyzer PRO est un telechargement payant sur l'App Store. Toutes les fonctions sont incluses, sans achat integre, abonnement, essai, restauration d'achat ni deblocage dans l'app.", siteTitle: "Confidentialite du site", siteText: "Ce site statique n'inclut pas d'analytics, traqueurs, formulaires, cookies ni polices en ligne. Cloudflare peut traiter des journaux standards comme hebergeur." },
    pricing: { eyebrow: "Un seul achat", title: "Tout est inclus. Sans abonnement.", text: "L'App Store affiche le prix pour votre pays ou region. Telechargez une fois et utilisez toutes les fonctions de transcription, traduction et exportation.", freeTitle: "App complete", freeText: "La transcription par lots, la pause et reprise, la traduction locale, les actions Finder et tous les formats d'exportation sont inclus.", unlockTitle: "Telechargement payant", unlockText: "Aucun achat integre, quota quotidien, limite payante de taille de fichier, essai gratuit ni abonnement.", availableTitle: "Disponible sur l'App Store", availableText: "Telechargez SpeechAnalyzer PRO pour macOS 26 ou version ulterieure." },
    support: { eyebrow: "Support", title: "Questions, rapports et retours.", text: "Envoyez les problemes de conversion, questions de modeles et retours directement au developpeur.", note: "Le contact est facultatif. Le message s'ouvre dans votre app Mail et vous controlez l'envoi.", contactAction: "Envoyer un e-mail" },
    footer: { copy: "SpeechAnalyzer PRO. Transcription locale et export traduit pour macOS.", back: "Retour en haut" }
  },
  it: {
    meta: { title: "SpeechAnalyzer PRO - Trascrizione locale per macOS", description: "SpeechAnalyzer PRO trascrive audio, rivede timeline, traduce testo ed esporta risultati localmente su macOS." },
    skip: "Vai al contenuto",
    language: { label: "Lingua" },
    nav: { features: "Funzioni", privacy: "Privacy", pricing: "Prezzi", support: "Supporto" },
    hero: { eyebrow: "Trascrizione locale per macOS", lead: "Trasforma audio in trascrizioni ricercabili, rivedi segmenti, traduci testo ed esporta documenti senza inviare file a un server.", appStore: "Scarica su App Store", privacy: "Leggi la privacy", features: "Scopri le funzioni", fact1Label: "Piattaforma", fact1Value: "macOS 26+", fact2Label: "Elaborazione", fact2Value: "Su questo Mac", fact3Label: "Export", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Locale per design", localText: "Audio, testo e traduzioni restano sul tuo Mac.", timelineTitle: "Revisione timeline", timelineText: "Ispeziona segmenti, copia il testo originale e traduci le righe visibili.", exportTitle: "Export tradotti", exportText: "Crea file tradotti TXT, Markdown, HTML, DOCX, SRT o VTT." },
    features: { eyebrow: "Flusso principale", title: "Dalla coda audio alla trascrizione tradotta.", text: "SpeechAnalyzer PRO si concentra sul lavoro ripetuto: code di file, pause, revisione timeline ed export nel formato giusto.", batchTitle: "Conversione batch", batchText: "Trascina uno o piu audio, scegli una lingua e processa la coda un lavoro alla volta.", pauseTitle: "Pausa e ripresa", pauseText: "Metti in pausa una trascrizione lunga, gestisci un altro elemento e riprendi vicino all'ultimo segmento finale.", timelineTitle: "Traduzione timeline", timelineText: "Traduci segmenti visibili per la revisione senza modificare la trascrizione originale.", exportTitle: "Opzioni export", exportText: "Esporta trascrizioni originali o tradotte come TXT, Markdown, HTML, DOCX, SRT o VTT." },
    workflow: { eyebrow: "Come funziona", title: "Un flusso desktop per lavorare con cura.", text: "SpeechAnalyzer PRO raccoglie coda, lingua, cartella di output, timeline ed export tradotto in una finestra macOS tranquilla.", step1Label: "Aggiungi audio", step1Text: "Usa l'app, trascina file nella coda o invia audio supportato dal Finder.", step2Label: "Rivedi", step2Text: "Passa tra testo in tempo reale e segmenti dopo la conversione.", step3Label: "Esporta", step3Text: "Riesporta originali o crea file tradotti per sottotitoli, note e documenti." },
    formats: { eyebrow: "Audio e output", title: "Formati pratici per la trascrizione.", text: "L'input copre audio comuni per note vocali, interviste, riunioni e flussi media.", inputTitle: "Audio supportato", outputTitle: "Export trascrizione", finderTitle: "Flusso Finder", finderText: "Invia audio all'app o avvia traduzione dalle azioni contestuali del Finder." },
    privacy: { eyebrow: "Informativa privacy", title: "Trascrizione e traduzione restano locali.", updated: "Ultimo aggiornamento: 1 settembre 2026", appTitle: "Privacy app", appText: "SpeechAnalyzer PRO non carica audio, testo o traduzioni. L'app usa Apple SpeechAnalyzer e Apple Translation sul tuo Mac.", modelsTitle: "Modelli di sistema", modelsText: "I modelli lingua e traduzione sono gestiti nelle Impostazioni di Sistema macOS. L'app verifica disponibilita ma non scarica modelli.", storeTitle: "Nessun acquisto in-app", storeText: "SpeechAnalyzer PRO e un download a pagamento su App Store. Tutte le funzioni sono incluse, senza acquisti in-app, abbonamenti, prove, ripristino acquisti o sblocchi nell'app.", siteTitle: "Privacy sito", siteText: "Questo sito statico non include analytics, tracker, moduli, cookie o font online. Cloudflare puo elaborare log standard come provider hosting." },
    pricing: { eyebrow: "Un solo acquisto", title: "Tutto incluso. Nessun abbonamento.", text: "L'App Store mostra il prezzo per il tuo paese o regione. Scarica una volta e usa tutte le funzioni di trascrizione, traduzione ed esportazione.", freeTitle: "App completa", freeText: "Sono inclusi trascrizione in batch, pausa e ripresa, traduzione locale, azioni Finder e tutti i formati di esportazione.", unlockTitle: "Download a pagamento", unlockText: "Nessun acquisto in-app, quota giornaliera, limite a pagamento per dimensione file, prova gratuita o abbonamento.", availableTitle: "Disponibile su App Store", availableText: "Scarica SpeechAnalyzer PRO per macOS 26 o versioni successive." },
    support: { eyebrow: "Supporto", title: "Domande, report e feedback.", text: "Invia problemi di conversione, domande sui modelli e feedback direttamente allo sviluppatore.", note: "Il contatto e facoltativo. Il messaggio si apre nell'app Mail e controlli cosa inviare.", contactAction: "Invia email" },
    footer: { copy: "SpeechAnalyzer PRO. Trascrizione locale ed export tradotto per macOS.", back: "Torna su" }
  },
  ja: {
    meta: { title: "SpeechAnalyzer PRO - macOS向けローカル音声文字起こし", description: "SpeechAnalyzer PROは音声を文字起こしし、タイムライン確認、翻訳、書き出しをmacOS上でローカルに行います。" },
    skip: "本文へ移動",
    language: { label: "言語" },
    nav: { features: "機能", privacy: "プライバシー", pricing: "価格", support: "サポート" },
    hero: { eyebrow: "macOS向けローカル文字起こし", lead: "音声を検索可能な文字起こしに変換し、セグメントを確認し、テキストを翻訳して、ファイルをサーバへ送らずに書き出せます。", appStore: "App Storeからダウンロード", privacy: "プライバシーを読む", features: "機能を見る", fact1Label: "プラットフォーム", fact1Value: "macOS 26+", fact2Label: "処理", fact2Value: "このMac上", fact3Label: "書き出し", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "ローカル設計", localText: "音声、文字起こし、翻訳はMac上に残ります。", timelineTitle: "タイムライン確認", timelineText: "セグメントを確認し、原文をコピーし、表示中の行を翻訳できます。", exportTitle: "翻訳書き出し", exportText: "翻訳済みTXT、Markdown、HTML、DOCX、SRT、VTTを作成できます。" },
    features: { eyebrow: "基本ワークフロー", title: "音声キューから翻訳済み文字起こしへ。", text: "SpeechAnalyzer PROはデスクトップの反復作業に向けて、キュー、一時停止、タイムライン確認、必要な形式への書き出しをまとめます。", batchTitle: "一括変換", batchText: "1つまたは複数の音声をドラッグし、認識言語を選び、キューを1件ずつ処理します。", pauseTitle: "一時停止と再開", pauseText: "長い文字起こしを一時停止し、別の項目を先に処理してから最後の確定セグメント付近で再開します。", timelineTitle: "タイムライン翻訳", timelineText: "原文を変更せず、表示中のセグメントを確認用に翻訳します。", exportTitle: "書き出し形式", exportText: "原文または翻訳済みの文字起こしをTXT、Markdown、HTML、DOCX、SRT、VTTで書き出せます。" },
    workflow: { eyebrow: "使い方", title: "丁寧な文字起こし作業のためのデスクトップフロー。", text: "SpeechAnalyzer PROはキュー、言語、出力先、タイムライン、翻訳書き出しを1つのmacOSウィンドウにまとめます。", step1Label: "音声を追加", step1Text: "アプリにドラッグするか、Finderから対応音声を送ります。", step2Label: "確認", step2Text: "変換後にリアルタイムテキストとタイムラインセグメントを切り替えます。", step3Label: "書き出し", step3Text: "原文を再書き出しするか、字幕、メモ、文書用に翻訳ファイルを作成します。" },
    formats: { eyebrow: "音声と出力", title: "文字起こし作業に実用的な形式。", text: "音声メモ、インタビュー、会議、メディア作業で使われる一般的な音声に対応します。", inputTitle: "対応音声", outputTitle: "文字起こし書き出し", finderTitle: "Finderワークフロー", finderText: "音声をアプリへ送るか、Finderのコンテキスト操作から翻訳を開始できます。" },
    privacy: { eyebrow: "プライバシーポリシー", title: "文字起こしと翻訳はローカルに留まります。", updated: "最終更新: 2026年9月1日", appTitle: "アプリのプライバシー", appText: "SpeechAnalyzer PROは音声、文字起こし、翻訳をアップロードしません。Apple SpeechAnalyzerとApple TranslationをMac上で使用します。", modelsTitle: "システムモデル", modelsText: "言語モデルと翻訳モデルはmacOSのシステム設定で管理されます。アプリは利用可否を確認しますが、モデルをダウンロードしません。", storeTitle: "アプリ内課金なし", storeText: "SpeechAnalyzer PROはApp Storeの有料ダウンロードです。すべての機能が含まれ、アプリ内課金、サブスクリプション、無料トライアル、購入の復元、機能のアンロックはありません。", siteTitle: "Webサイトのプライバシー", siteText: "この静的サイトには分析スクリプト、広告トラッカー、フォーム、Cookie、オンラインフォントはありません。Cloudflareがホスティング提供者として標準的なリクエストログを処理する場合があります。" },
    pricing: { eyebrow: "一度だけ購入", title: "すべての機能を収録。サブスクリプションなし。", text: "価格は国または地域に応じてApp Storeに表示されます。一度ダウンロードすれば、文字起こし、翻訳、書き出しの全機能を利用できます。", freeTitle: "完全版アプリ", freeText: "一括文字起こし、一時停止と再開、ローカル翻訳、Finderアクション、すべての書き出し形式が含まれます。", unlockTitle: "有料ダウンロード", unlockText: "アプリ内課金、1日の上限、ファイルサイズによる課金制限、無料トライアル、サブスクリプションはありません。", availableTitle: "App Storeで配信中", availableText: "macOS 26以降対応のSpeechAnalyzer PROをダウンロードできます。" },
    support: { eyebrow: "サポート", title: "質問、報告、フィードバック。", text: "変換の問題、モデルの質問、ワークフローの意見を開発者へ直接送れます。", note: "連絡は任意です。メッセージは既定のメールアプリで開き、送信内容は自分で管理できます。", contactAction: "開発者にメール" },
    footer: { copy: "SpeechAnalyzer PRO。macOS向けローカル文字起こしと翻訳書き出し。", back: "上へ戻る" }
  },
  ko: {
    meta: { title: "SpeechAnalyzer PRO - macOS용 로컬 음성 전사", description: "SpeechAnalyzer PRO는 macOS에서 오디오 전사, 타임라인 검토, 번역, 내보내기를 로컬로 처리합니다." },
    skip: "본문으로 이동",
    language: { label: "언어" },
    nav: { features: "기능", privacy: "개인정보", pricing: "가격", support: "지원" },
    hero: { eyebrow: "macOS용 로컬 전사", lead: "오디오를 검색 가능한 전사로 바꾸고, 타임라인을 검토하고, 텍스트를 번역하고, 파일을 서버로 보내지 않고 내보냅니다.", appStore: "App Store에서 다운로드", privacy: "개인정보 보기", features: "기능 보기", fact1Label: "플랫폼", fact1Value: "macOS 26+", fact2Label: "처리", fact2Value: "이 Mac에서", fact3Label: "내보내기", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "로컬 설계", localText: "오디오, 전사 텍스트, 번역은 Mac에 남아 있습니다.", timelineTitle: "타임라인 검토", timelineText: "세그먼트를 확인하고 원문을 복사하며 보이는 줄을 번역합니다.", exportTitle: "번역 내보내기", exportText: "번역된 TXT, Markdown, HTML, DOCX, SRT, VTT 파일을 만듭니다." },
    features: { eyebrow: "핵심 흐름", title: "오디오 대기열에서 번역된 전사까지.", text: "SpeechAnalyzer PRO는 반복적인 데스크톱 전사 작업을 위해 대기열, 일시정지, 타임라인 검토, 필요한 형식 내보내기를 제공합니다.", batchTitle: "일괄 변환", batchText: "하나 이상의 오디오를 끌어오고 인식 언어를 선택한 뒤 대기열을 하나씩 처리합니다.", pauseTitle: "일시정지 및 재개", pauseText: "긴 전사를 일시정지하고 다른 항목을 먼저 처리한 뒤 마지막 완료 세그먼트 근처에서 재개합니다.", timelineTitle: "타임라인 번역", timelineText: "원본 전사를 바꾸지 않고 보이는 세그먼트를 검토용으로 번역합니다.", exportTitle: "내보내기 선택", exportText: "원본 또는 번역 전사를 TXT, Markdown, HTML, DOCX, SRT, VTT로 내보냅니다." },
    workflow: { eyebrow: "작동 방식", title: "세심한 전사 작업을 위한 데스크톱 흐름.", text: "SpeechAnalyzer PRO는 대기열, 언어, 출력 폴더, 타임라인, 번역 내보내기를 하나의 조용한 macOS 창에 모읍니다.", step1Label: "오디오 추가", step1Text: "앱을 사용하거나 파일을 끌어오거나 Finder에서 지원 오디오를 보냅니다.", step2Label: "검토", step2Text: "변환 완료 후 실시간 텍스트와 타임라인 세그먼트를 전환합니다.", step3Label: "내보내기", step3Text: "원본을 다시 내보내거나 자막, 메모, 문서용 번역 파일을 만듭니다." },
    formats: { eyebrow: "오디오 및 출력", title: "전사 작업에 실용적인 형식.", text: "음성 메모, 인터뷰, 회의, 미디어 작업에 쓰이는 일반 오디오를 지원합니다.", inputTitle: "지원 오디오", outputTitle: "전사 내보내기", finderTitle: "Finder 흐름", finderText: "오디오를 앱으로 보내거나 Finder 컨텍스트 동작에서 번역을 시작합니다." },
    privacy: { eyebrow: "개인정보 처리방침", title: "전사와 번역은 로컬에 남아 있습니다.", updated: "최종 업데이트: 2026년 9월 1일", appTitle: "앱 개인정보", appText: "SpeechAnalyzer PRO는 오디오, 전사 텍스트, 번역을 업로드하지 않습니다. Apple SpeechAnalyzer와 Apple Translation을 Mac에서 사용합니다.", modelsTitle: "시스템 모델", modelsText: "언어 및 번역 모델은 macOS 시스템 설정에서 관리됩니다. 앱은 사용 가능 여부만 확인하며 모델을 다운로드하지 않습니다.", storeTitle: "앱 내 구입 없음", storeText: "SpeechAnalyzer PRO는 App Store 유료 다운로드 앱입니다. 모든 기능이 포함되며 앱 내 구입, 구독, 무료 체험, 구입 복원 또는 기능 잠금 해제가 없습니다.", siteTitle: "웹사이트 개인정보", siteText: "이 정적 사이트에는 분석 스크립트, 광고 추적기, 양식, 쿠키, 온라인 폰트가 없습니다. Cloudflare는 호스팅 제공자로서 표준 요청 로그를 처리할 수 있습니다." },
    pricing: { eyebrow: "한 번만 구입", title: "모든 기능 포함. 구독 없음.", text: "App Store가 국가 또는 지역에 맞는 가격을 표시합니다. 한 번 다운로드하고 모든 전사, 번역 및 내보내기 기능을 사용하세요.", freeTitle: "완전한 앱", freeText: "일괄 전사, 일시 정지 및 계속, 로컬 번역, Finder 동작과 모든 내보내기 형식이 포함됩니다.", unlockTitle: "유료 다운로드", unlockText: "앱 내 구입, 일일 할당량, 파일 크기 유료 제한, 무료 체험 또는 구독이 없습니다.", availableTitle: "App Store에서 이용 가능", availableText: "macOS 26 이상용 SpeechAnalyzer PRO를 다운로드하세요." },
    support: { eyebrow: "지원", title: "질문, 리포트, 피드백.", text: "변환 문제, 언어 모델 질문, 워크플로 피드백을 개발자에게 직접 보냅니다.", note: "연락은 선택 사항입니다. 메시지는 기본 메일 앱에서 열리며 보낼 내용을 직접 관리합니다.", contactAction: "개발자에게 이메일" },
    footer: { copy: "SpeechAnalyzer PRO. macOS용 로컬 전사와 번역 내보내기.", back: "맨 위로" }
  },
  "pt-BR": {
    meta: { title: "SpeechAnalyzer PRO - Transcricao local para macOS", description: "SpeechAnalyzer PRO transcreve audio, revisa linhas do tempo, traduz texto e exporta resultados localmente no macOS." },
    skip: "Ir para o conteudo",
    language: { label: "Idioma" },
    nav: { features: "Recursos", privacy: "Privacidade", pricing: "Preco", support: "Suporte" },
    hero: { eyebrow: "Transcricao local para macOS", lead: "Transforme audio em transcricoes pesquisaveis, revise segmentos, traduza texto e exporte documentos sem enviar arquivos para um servidor.", appStore: "Baixar na App Store", privacy: "Ler privacidade", features: "Ver recursos", fact1Label: "Plataforma", fact1Value: "macOS 26+", fact2Label: "Processamento", fact2Value: "Neste Mac", fact3Label: "Exportacao", fact3Value: "TXT, MD, HTML, DOCX, SRT, VTT" },
    strip: { localTitle: "Local por design", localText: "Audio, texto transcrito e traducoes ficam no seu Mac.", timelineTitle: "Revisao por linha do tempo", timelineText: "Inspecione segmentos, copie o texto original e traduza linhas visiveis.", exportTitle: "Exportacoes traduzidas", exportText: "Crie arquivos traduzidos TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    features: { eyebrow: "Fluxo principal", title: "Da fila de audio a transcricao traduzida.", text: "SpeechAnalyzer PRO foca no trabalho repetido de transcricao no desktop: fila, pausa, revisao e exportacao no formato certo.", batchTitle: "Conversao em lote", batchText: "Arraste um ou varios audios, escolha o idioma de reconhecimento e processe a fila um item por vez.", pauseTitle: "Pausar e continuar", pauseText: "Pause uma transcricao longa, processe outro item e continue perto do ultimo segmento finalizado.", timelineTitle: "Traducao da linha do tempo", timelineText: "Traduza segmentos visiveis para revisao sem alterar a transcricao original.", exportTitle: "Opcoes de exportacao", exportText: "Exporte transcricoes originais ou traduzidas como TXT, Markdown, HTML, DOCX, SRT ou VTT." },
    workflow: { eyebrow: "Como funciona", title: "Um fluxo de desktop para revisar com cuidado.", text: "SpeechAnalyzer PRO junta fila, idioma, pasta de saida, linha do tempo e exportacao traduzida em uma janela macOS discreta.", step1Label: "Adicionar audio", step1Text: "Use o app, arraste arquivos para a fila ou envie audio compatível pelo Finder.", step2Label: "Revisar", step2Text: "Alterne entre texto em tempo real e segmentos depois da conversao.", step3Label: "Exportar", step3Text: "Reexporte originais ou crie arquivos traduzidos para legendas, notas e documentos." },
    formats: { eyebrow: "Audio e saida", title: "Formatos praticos para transcricao.", text: "A entrada cobre audios comuns de notas de voz, entrevistas, reunioes e fluxos de midia.", inputTitle: "Audio compativel", outputTitle: "Exportacao", finderTitle: "Fluxo Finder", finderText: "Envie audio para o app ou inicie traducao pelas acoes contextuais do Finder." },
    privacy: { eyebrow: "Politica de privacidade", title: "Transcricao e traducao ficam locais.", updated: "Ultima atualizacao: 1 de setembro de 2026", appTitle: "Privacidade do app", appText: "SpeechAnalyzer PRO nao envia seu audio, texto transcrito ou traducoes. O app usa Apple SpeechAnalyzer e Apple Translation no seu Mac.", modelsTitle: "Modelos do sistema", modelsText: "Modelos de idioma e traducao sao gerenciados nos Ajustes do Sistema do macOS. O app verifica disponibilidade, mas nao baixa modelos.", storeTitle: "Sem compras no app", storeText: "SpeechAnalyzer PRO e um download pago da App Store. Todos os recursos estao incluidos, sem compras no app, assinaturas, testes, restauracao de compras ou desbloqueio de recursos.", siteTitle: "Privacidade do site", siteText: "Este site estatico nao inclui analytics, rastreadores, formularios, cookies ou fontes online. A Cloudflare pode processar logs padrao como provedora de hospedagem." },
    pricing: { eyebrow: "Uma unica compra", title: "Tudo incluido. Sem assinatura.", text: "A App Store mostra o preco para seu pais ou regiao. Baixe uma vez e use todos os recursos de transcricao, traducao e exportacao.", freeTitle: "App completo", freeText: "Transcricao em lote, pausar e continuar, traducao local, acoes do Finder e todos os formatos de exportacao estao incluidos.", unlockTitle: "Download pago", unlockText: "Nao ha compras no app, cotas diarias, limites pagos por tamanho de arquivo, testes gratuitos ou assinaturas.", availableTitle: "Disponivel na App Store", availableText: "Baixe o SpeechAnalyzer PRO para macOS 26 ou posterior." },
    support: { eyebrow: "Suporte", title: "Perguntas, relatos e feedback.", text: "Envie problemas de conversao, perguntas sobre modelos e feedback diretamente ao desenvolvedor.", note: "O contato e opcional. A mensagem abre no seu app de email padrao, e voce controla o envio.", contactAction: "Enviar email" },
    footer: { copy: "SpeechAnalyzer PRO. Transcricao local e exportacao traduzida para macOS.", back: "Voltar ao topo" }
  },
  "zh-Hans": {
    meta: { title: "SpeechAnalyzer PRO - macOS 本机语音转文字", description: "SpeechAnalyzer PRO 在 macOS 本机完成音频转写、时间轴审阅、文本翻译和译文导出。" },
    skip: "跳转到正文",
    language: { label: "语言" },
    nav: { features: "功能", privacy: "隐私", pricing: "价格", support: "支持" },
    hero: { eyebrow: "macOS 本机转写", lead: "将音频转为可搜索文本，审阅时间轴片段，翻译文本并导出最终文件，而无需把文件发送到服务器。", appStore: "前往 App Store 下载", privacy: "阅读隐私政策", features: "查看功能", fact1Label: "平台", fact1Value: "macOS 26+", fact2Label: "处理方式", fact2Value: "在这台 Mac 上", fact3Label: "导出", fact3Value: "TXT、MD、HTML、DOCX、SRT、VTT" },
    strip: { localTitle: "本机优先", localText: "音频、转写文本和译文都留在你的 Mac 上。", timelineTitle: "时间轴审阅", timelineText: "检查片段、复制原文，并翻译当前可见句子。", exportTitle: "译文导出", exportText: "生成翻译后的 TXT、Markdown、HTML、DOCX、SRT 或 VTT 文件。" },
    features: { eyebrow: "核心工作流", title: "从音频队列到译文转写稿。", text: "SpeechAnalyzer PRO 面向重复的桌面转写工作：排队文件、暂停长任务、审阅时间轴，然后导出到下一个工具需要的格式。", batchTitle: "批量转换", batchText: "拖入一个或多个音频文件，选择识别语言，并按队列逐个处理。", pauseTitle: "暂停与续跑", pauseText: "暂停长音频转写，先处理其他项目，再从最后完成的片段附近继续。", timelineTitle: "时间轴翻译", timelineText: "为审阅翻译当前可见片段，不改写原始转写文本。", exportTitle: "多格式导出", exportText: "将原文或译文导出为 TXT、Markdown、HTML、DOCX、SRT 或 VTT。" },
    workflow: { eyebrow: "使用方式", title: "为认真审阅转写稿设计的桌面流程。", text: "SpeechAnalyzer PRO 将转换队列、语言选择、输出目录、时间轴和译文导出放在一个安静的 macOS 窗口里。", step1Label: "加入音频", step1Text: "在应用内添加、拖入队列，或从 Finder 发送支持的音频。", step2Label: "审阅时间轴", step2Text: "转换完成后，在实时文本和时间轴片段之间切换。", step3Label: "导出", step3Text: "重新导出原文，或创建用于字幕、笔记和文档的译文文件。" },
    formats: { eyebrow: "音频与导出", title: "适合转写工作的实用格式。", text: "输入格式覆盖语音备忘、访谈、会议和媒体工作流中的常见音频文件。", inputTitle: "支持音频", outputTitle: "转写导出", finderTitle: "Finder 工作流", finderText: "从 Finder 将音频发送到应用，或通过右键操作启动翻译。" },
    privacy: { eyebrow: "隐私政策", title: "转写和翻译都留在本机。", updated: "最后更新：2026 年 9 月 1 日", appTitle: "应用隐私", appText: "SpeechAnalyzer PRO 不上传你的音频、转写文本或译文。应用围绕在 Mac 上运行的 Apple SpeechAnalyzer 和 Apple Translation 框架设计。", modelsTitle: "系统模型", modelsText: "语言和翻译模型由 macOS 系统设置管理。应用会检查模型是否可用，但不会自行下载模型。", storeTitle: "无 App 内购买", storeText: "SpeechAnalyzer PRO 是 App Store 一次性付费下载应用。所有功能均已包含，应用内没有购买项目、订阅、试用、恢复购买或功能解锁。", siteTitle: "网站隐私", siteText: "这个静态网站不包含分析脚本、广告跟踪器、表单、Cookie 或在线字体。Cloudflare 作为托管提供商可能会处理标准请求日志。" },
    pricing: { eyebrow: "一次购买", title: "全部功能，无需订阅。", text: "价格由 App Store 根据你的国家或地区显示。下载一次，即可使用全部转写、翻译和导出功能。", freeTitle: "完整应用", freeText: "批量转写、暂停与继续、本机翻译、Finder 操作和全部导出格式均已包含。", unlockTitle: "付费下载", unlockText: "没有 App 内购买、每日额度、文件大小付费限制、免费试用或订阅。", availableTitle: "已在 App Store 上架", availableText: "下载适用于 macOS 26 或更高版本的 SpeechAnalyzer PRO。" },
    support: { eyebrow: "支持", title: "问题、报告和反馈。", text: "可将转换问题、语言模型问题和工作流反馈直接发送给开发者。", note: "联系开发者是可选的。邮件会在默认邮件应用中打开，你可以自行控制发送内容。", contactAction: "联系开发者" },
    footer: { copy: "SpeechAnalyzer PRO。面向 macOS 的本机转写与译文导出。", back: "返回顶部" }
  },
  "zh-Hant": {
    meta: { title: "SpeechAnalyzer PRO - macOS 本機語音轉文字", description: "SpeechAnalyzer PRO 在 macOS 本機完成音訊轉寫、時間軸審閱、文字翻譯和譯文匯出。" },
    skip: "跳至內容",
    language: { label: "語言" },
    nav: { features: "功能", privacy: "隱私", pricing: "價格", support: "支援" },
    hero: { eyebrow: "macOS 本機轉寫", lead: "將音訊轉為可搜尋文字，審閱時間軸片段，翻譯文字並匯出最終檔案，而不用把檔案傳送到伺服器。", appStore: "前往 App Store 下載", privacy: "閱讀隱私政策", features: "查看功能", fact1Label: "平台", fact1Value: "macOS 26+", fact2Label: "處理方式", fact2Value: "在這台 Mac 上", fact3Label: "匯出", fact3Value: "TXT、MD、HTML、DOCX、SRT、VTT" },
    strip: { localTitle: "本機優先", localText: "音訊、轉寫文字和譯文都留在你的 Mac 上。", timelineTitle: "時間軸審閱", timelineText: "檢查片段、複製原文，並翻譯目前可見句子。", exportTitle: "譯文匯出", exportText: "產生翻譯後的 TXT、Markdown、HTML、DOCX、SRT 或 VTT 檔案。" },
    features: { eyebrow: "核心工作流程", title: "從音訊佇列到譯文轉寫稿。", text: "SpeechAnalyzer PRO 面向重複的桌面轉寫工作：排入檔案、暫停長任務、審閱時間軸，然後匯出到下一個工具需要的格式。", batchTitle: "批次轉換", batchText: "拖入一個或多個音訊檔案，選擇辨識語言，並按佇列逐個處理。", pauseTitle: "暫停與續跑", pauseText: "暫停長音訊轉寫，先處理其他項目，再從最後完成的片段附近繼續。", timelineTitle: "時間軸翻譯", timelineText: "為審閱翻譯目前可見片段，不改寫原始轉寫文字。", exportTitle: "多格式匯出", exportText: "將原文或譯文匯出為 TXT、Markdown、HTML、DOCX、SRT 或 VTT。" },
    workflow: { eyebrow: "使用方式", title: "為認真審閱轉寫稿設計的桌面流程。", text: "SpeechAnalyzer PRO 將轉換佇列、語言選擇、輸出目錄、時間軸和譯文匯出放在一個安靜的 macOS 視窗裡。", step1Label: "加入音訊", step1Text: "在 App 內加入、拖入佇列，或從 Finder 傳送支援的音訊。", step2Label: "審閱時間軸", step2Text: "轉換完成後，在即時文字和時間軸片段之間切換。", step3Label: "匯出", step3Text: "重新匯出原文，或建立用於字幕、筆記和文件的譯文檔案。" },
    formats: { eyebrow: "音訊與匯出", title: "適合轉寫工作的實用格式。", text: "輸入格式覆蓋語音備忘、訪談、會議和媒體工作流程中的常見音訊檔案。", inputTitle: "支援音訊", outputTitle: "轉寫匯出", finderTitle: "Finder 工作流程", finderText: "從 Finder 將音訊傳送到 App，或透過右鍵操作啟動翻譯。" },
    privacy: { eyebrow: "隱私政策", title: "轉寫和翻譯都留在本機。", updated: "最後更新：2026 年 9 月 1 日", appTitle: "App 隱私", appText: "SpeechAnalyzer PRO 不上傳你的音訊、轉寫文字或譯文。App 圍繞在 Mac 上執行的 Apple SpeechAnalyzer 和 Apple Translation 框架設計。", modelsTitle: "系統模型", modelsText: "語言和翻譯模型由 macOS 系統設定管理。App 會檢查模型是否可用，但不會自行下載模型。", storeTitle: "無 App 內購買", storeText: "SpeechAnalyzer PRO 是 App Store 一次性付費下載 App。所有功能均已包含，App 內沒有購買項目、訂閱、試用、恢復購買或功能解鎖。", siteTitle: "網站隱私", siteText: "這個靜態網站不包含分析腳本、廣告追蹤器、表單、Cookie 或線上字體。Cloudflare 作為託管提供商可能會處理標準請求日誌。" },
    pricing: { eyebrow: "一次購買", title: "全部功能，無需訂閱。", text: "價格由 App Store 根據你的國家或地區顯示。下載一次，即可使用全部轉寫、翻譯和匯出功能。", freeTitle: "完整 App", freeText: "批次轉寫、暫停與繼續、本機翻譯、Finder 操作和全部匯出格式均已包含。", unlockTitle: "付費下載", unlockText: "沒有 App 內購買、每日額度、檔案大小付費限制、免費試用或訂閱。", availableTitle: "已在 App Store 上架", availableText: "下載適用於 macOS 26 或以上版本的 SpeechAnalyzer PRO。" },
    support: { eyebrow: "支援", title: "問題、回報和意見。", text: "可將轉換問題、語言模型問題和工作流程意見直接傳送給開發者。", note: "聯絡開發者是選填的。郵件會在預設郵件 App 中開啟，你可以自行控制傳送內容。", contactAction: "聯絡開發者" },
    footer: { copy: "SpeechAnalyzer PRO。面向 macOS 的本機轉寫與譯文匯出。", back: "返回頂部" }
  }
};

// 1.2 release-preview copy. Media remains local; this site serves screenshots only.
const reviewCopy = {
  en: ["Version 1.2 · Release preview", "Listen. Correct. Export.", "Jump to a sentence, change playback speed, edit original text or translations, and undo changes. Your edits are saved locally and restored when you reopen the app.", "SpeechAnalyzer PRO review workspace showing a real English transcript", "Actual 1.2 development build with a LibriVox recording of The Importance of Being Earnest. Recognition output requires proofreading; this example is not an accuracy benchmark.", "Video and subtitles", "Import MP4 or MOV, choose an audio track, and preview subtitles. Split or merge cues, adjust timing, and export original, translated, or bilingual SRT/VTT with your chosen line order.", "Before you start", "Requires macOS 26+ and the necessary system speech and translation models, installed through System Settings. MP4/MOV support depends on the codecs macOS can decode; protected video or video without an audio track cannot be transcribed."],
  de: ["Version 1.2 · Versionsvorschau", "Anhören. Korrigieren. Exportieren.", "Springe zu einem Satz, ändere das Wiedergabetempo und bearbeite Originaltext oder Übersetzungen mit Rückgängig-Funktion. Änderungen werden lokal gespeichert und beim nächsten Start wiederhergestellt.", "Korrekturansicht von SpeechAnalyzer PRO mit einer echten englischen Transkription", "Echte Oberfläche der Entwicklungsversion 1.2 mit einer LibriVox-Aufnahme von The Importance of Being Earnest. Erkennungsergebnisse müssen geprüft werden; dieses Beispiel ist kein Genauigkeitsvergleich.", "Video und Untertitel", "Importiere MP4 oder MOV, wähle eine Tonspur und prüfe Untertitel im Video. Teile oder verbinde Segmente, passe Zeiten an und exportiere SRT/VTT im Original, übersetzt oder zweisprachig – mit wählbarer Zeilenreihenfolge.", "Vor dem Start", "Erfordert macOS 26+ und die nötigen Sprach- und Übersetzungsmodelle aus den Systemeinstellungen. MP4/MOV hängt von den unterstützten Codecs ab. Geschützte Videos oder Videos ohne Tonspur können nicht transkribiert werden."],
  fr: ["Version 1.2 · Aperçu", "Écouter. Corriger. Exporter.", "Accédez à une phrase, réglez la vitesse de lecture et modifiez le texte original ou sa traduction avec annulation. Vos corrections sont enregistrées sur le Mac et restaurées au prochain démarrage.", "Espace de relecture de SpeechAnalyzer PRO avec une véritable transcription en anglais", "Interface réelle de la version de développement 1.2, avec un enregistrement LibriVox de The Importance of Being Earnest. Le résultat doit être relu ; cet exemple ne mesure pas la précision de la reconnaissance.", "Vidéo et sous-titres", "Importez un MP4 ou MOV, choisissez une piste audio et prévisualisez les sous-titres. Divisez ou fusionnez les segments, ajustez les temps et exportez en SRT/VTT : original, traduction ou bilingue, avec l’ordre des lignes de votre choix.", "Avant de commencer", "Nécessite macOS 26+ et les modèles de reconnaissance et de traduction installés via Réglages Système. La compatibilité MP4/MOV dépend des codecs décodables par macOS. Les vidéos protégées ou sans piste audio ne sont pas transcrites."],
  es: ["Versión 1.2 · Vista previa", "Escucha. Corrige. Exporta.", "Salta a una frase, cambia la velocidad y edita el original o la traducción con deshacer. Los cambios se guardan localmente y se recuperan al abrir la app.", "Espacio de revisión con una transcripción real en inglés", "Interfaz real de desarrollo 1.2 con una grabación LibriVox de The Importance of Being Earnest. El resultado necesita revisión; no es una prueba de precisión.", "Vídeo y subtítulos", "Importa MP4 o MOV, elige una pista de audio y previsualiza subtítulos. Divide o une segmentos, ajusta tiempos y exporta SRT/VTT originales, traducidos o bilingües con el orden de líneas elegido.", "Antes de empezar", "Requiere macOS 26+ y los modelos de voz y traducción instalados desde Ajustes del Sistema. MP4/MOV depende de los códecs compatibles con macOS. No se transcriben vídeos protegidos o sin pista de audio."],
  it: ["Versione 1.2 · Anteprima", "Ascolta. Correggi. Esporta.", "Vai a una frase, regola la velocità e modifica originale o traduzione con annullamento. Le modifiche vengono salvate sul Mac e ripristinate alla riapertura.", "Area di revisione con una trascrizione inglese reale", "Interfaccia reale della versione di sviluppo 1.2 con una registrazione LibriVox di The Importance of Being Earnest. Il testo va revisionato; non è una misura della precisione.", "Video e sottotitoli", "Importa MP4 o MOV, scegli una traccia audio e visualizza i sottotitoli. Dividi o unisci segmenti, regola i tempi ed esporta SRT/VTT originali, tradotti o bilingui con l’ordine delle righe desiderato.", "Prima di iniziare", "Richiede macOS 26+ e i modelli vocali e di traduzione installati dalle Impostazioni di Sistema. MP4/MOV dipende dai codec decodificabili da macOS. I video protetti o senza traccia audio non possono essere trascritti."],
  ja: ["バージョン 1.2 · プレビュー", "聴く。直す。書き出す。", "文をクリックして再生位置へ移動し、速度を調整。原文や訳文を編集し、取り消しもできます。修正は Mac に保存され、次回起動時に復元されます。", "実際の英語音声を文字起こしした校正画面", "開発版 1.2 の実画面。LibriVox の The Importance of Being Earnest を使用しています。認識結果には校正が必要で、精度を保証する例ではありません。", "動画と字幕", "MP4・MOV を読み込み、音声トラックを選択して字幕をプレビュー。分割・結合や時刻調整を行い、原文・訳文・二言語の SRT/VTT を行順を選んで書き出せます。", "利用前の準備", "macOS 26 以降と、システム設定からインストールした音声・翻訳モデルが必要です。MP4/MOV の対応は macOS のコーデックに依存します。保護された動画や音声トラックのない動画は文字起こしできません。"],
  ko: ["버전 1.2 · 미리 보기", "듣고, 수정하고, 내보내세요.", "문장을 클릭해 이동하고 재생 속도를 조절하세요. 원문과 번역을 편집하고 실행 취소할 수 있습니다. 수정 내용은 Mac에 저장되어 다시 실행할 때 복원됩니다.", "실제 영어 음성으로 만든 교정 화면", "LibriVox의 The Importance of Being Earnest를 사용한 개발 버전 1.2의 실제 화면입니다. 인식 결과는 교정이 필요하며 정확도를 보장하는 사례가 아닙니다.", "동영상과 자막", "MP4 또는 MOV를 불러와 오디오 트랙을 선택하고 자막을 확인하세요. 구간 분할·병합과 시간 조정 후 원문, 번역 또는 이중 언어 SRT/VTT를 원하는 줄 순서로 내보낼 수 있습니다.", "시작하기 전에", "macOS 26 이상 및 시스템 설정에서 설치한 음성·번역 모델이 필요합니다. MP4/MOV 지원은 macOS의 코덱에 따라 다릅니다. 보호된 동영상이나 오디오 트랙이 없는 동영상은 전사할 수 없습니다."],
  "pt-BR": ["Versão 1.2 · Prévia", "Ouça. Corrija. Exporte.", "Vá até uma frase, ajuste a velocidade e edite o original ou a tradução com desfazer. As alterações são salvas no Mac e restauradas ao reabrir o app.", "Área de revisão com uma transcrição real em inglês", "Interface real da versão de desenvolvimento 1.2 com uma gravação LibriVox de The Importance of Being Earnest. O resultado precisa de revisão; este exemplo não mede a precisão.", "Vídeo e legendas", "Importe MP4 ou MOV, escolha uma faixa de áudio e visualize as legendas. Divida ou una trechos, ajuste os tempos e exporte SRT/VTT originais, traduzidos ou bilíngues com a ordem de linhas desejada.", "Antes de começar", "Requer macOS 26+ e os modelos de fala e tradução instalados pelos Ajustes do Sistema. MP4/MOV depende dos codecs do macOS. Vídeos protegidos ou sem faixa de áudio não podem ser transcritos."],
  "zh-Hans": ["1.2 版本预览", "回听、校正，再导出。", "点击句子跳转，调整播放速度，编辑原文或译文，并可撤销修改。修订保存在本机，下次启动时恢复。", "SpeechAnalyzer PRO 校对工作台，显示真实英语转写结果", "来自 1.2 开发构建的真实界面，使用 LibriVox 的《The Importance of Being Earnest》录音。识别结果仍需校对；单个案例不代表准确率。", "视频与字幕", "导入 MP4 或 MOV，选择音轨并同步预览字幕。支持分割、合并、时间调整，以及原文、译文或双语 SRT/VTT 导出，可选择上下行顺序。", "开始前请准备", "需要 macOS 26+，并在系统设置中安装所需语音和翻译模型。MP4/MOV 支持取决于 macOS 可解码的编码；受保护或没有音轨的视频无法转写。"],
  "zh-Hant": ["1.2 版本預覽", "回聽、校正，再匯出。", "點選句子跳轉，調整播放速度，編輯原文或譯文，並可復原修改。修訂儲存在本機，下次啟動時恢復。", "SpeechAnalyzer PRO 校對工作台，顯示真實英語轉寫結果", "來自 1.2 開發版本的真實介面，使用 LibriVox 的《The Importance of Being Earnest》錄音。辨識結果仍需校對；單一案例不代表準確率。", "影片與字幕", "匯入 MP4 或 MOV，選擇音軌並同步預覽字幕。支援分割、合併、時間調整，以及原文、譯文或雙語 SRT/VTT 匯出，可選擇上下行順序。", "開始前請準備", "需要 macOS 26+，並在系統設定中安裝所需語音和翻譯模型。MP4/MOV 支援取決於 macOS 可解碼的編碼；受保護或沒有音軌的影片無法轉寫。"]
};
const reviewKeys = ["version", "title", "text", "alt", "caption", "videoTitle", "videoText", "requirementsTitle", "requirementsText"];
for (const [locale, values] of Object.entries(reviewCopy)) {
  translations[locale].review = Object.fromEntries(reviewKeys.map((key, index) => [key, values[index]]));
  translations[locale].features.timelineText = values[2];
  translations[locale].workflow.step2Text = values[2];
  translations[locale].formats.text = values[8];
}
Object.assign(translations.en.hero, { lead: "Transcribe audio and video, listen back while editing, and export documents or bilingual subtitles. Your media and text stay on your Mac." });
Object.assign(translations.fr.hero, { lead: "Transcrivez vos fichiers audio et vidéo, réécoutez-les en corrigeant le texte, puis exportez des documents ou des sous-titres bilingues. Vos médias et textes restent sur votre Mac." });
Object.assign(translations.de.hero, { lead: "Transkribiere Audio und Video, höre beim Korrigieren nach und exportiere Dokumente oder zweisprachige Untertitel. Medien und Texte bleiben auf deinem Mac." });
translations.en.strip.timelineText = "Listen back, edit original text and translations, and save your corrections locally.";
translations.fr.strip.timelineText = "Réécoutez, corrigez l’original et la traduction, puis conservez vos modifications sur le Mac.";
translations.de.strip.timelineText = "Nachhören, Original und Übersetzung korrigieren und Änderungen lokal speichern.";

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
  for (const element of document.querySelectorAll("[data-i18n-alt]")) {
    const key = element.getAttribute("data-i18n-alt");
    element.alt = deepGet(dictionary, key) || deepGet(translations[DEFAULT_LOCALE], key) || "";
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
