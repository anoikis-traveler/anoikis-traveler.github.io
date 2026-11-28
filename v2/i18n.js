/* Anoikis Traveler v2 · languages (EN, FR, DE, ES)
   The pages are written in English. This file translates what is on screen, as it appears:
   - text and the title / placeholder / aria-label of every element, matched on the whole English phrase;
   - a few phrases with numbers or names in them, through patterns (RX).
   The choice is kept in localStorage "at.lang", shared with the home page and the guide. */
(function(){
const LANGS = ['en', 'fr', 'de', 'es'];
const pick = () => {
  const q = new URLSearchParams(location.search).get('lang'); if (LANGS.includes(q)) return q;
  try{ const s = localStorage.getItem('at.lang'); if (LANGS.includes(s)) return s; }catch(e){}
  for (const l of navigator.languages || [navigator.language || 'en']){ const c = String(l).slice(0, 2).toLowerCase(); if (LANGS.includes(c)) return c; }
  return 'en';
};
const lang = pick();

// English → [fr, de, es]
const D = {
  // top bar
  'Appraisal':['Estimation', 'Schätzung', 'Tasación'], 'Fitting':['Fitting', 'Fitting', 'Fitting'], 'Guide':['Guide', 'Anleitung', 'Guía'], 'Mail':['Mail', 'Mail', 'Correo'],
  'Admin':['Admin', 'Admin', 'Admin'], 'Payments':['Paiements', 'Zahlungen', 'Pagos'],
  'Find a system…':['Chercher un système…', 'System suchen…', 'Buscar un sistema…'], 'Find a system':['Chercher un système', 'System suchen', 'Buscar un sistema'],
  'Region':['Région', 'Region', 'Región'], 'Regions with an active wormhole connection':['Régions avec une connexion WH active', 'Regionen mit aktiver Wurmloch-Verbindung', 'Regiones con una conexión de agujero de gusano activa'],
  'Language':['Langue', 'Sprache', 'Idioma'],
  '🏷 System names':['🏷 Noms des systèmes', '🏷 Systemnamen', '🏷 Nombres de sistemas'], '🏷 Show system names':['🏷 Afficher les noms', '🏷 Namen zeigen', '🏷 Mostrar nombres'], '🏷 Hide system names':['🏷 Cacher les noms', '🏷 Namen ausblenden', '🏷 Ocultar nombres'],
  'Show or hide the names of all the systems (hover a system to see its name)':['Afficher ou cacher le nom de tous les systèmes (survoler un système montre son nom)', 'Namen aller Systeme ein- oder ausblenden (beim Überfahren erscheint der Name)', 'Mostrar u ocultar los nombres de todos los sistemas (al pasar el ratón se ve el nombre)'],
  // window frame
  'Fold':['Replier', 'Einklappen', 'Plegar'], 'Close':['Fermer', 'Schließen', 'Cerrar'], 'Close (reopen it from the Windows window)':['Fermer (la rouvrir depuis Fenêtres)', 'Schließen (über Fenster wieder öffnen)', 'Cerrar (reabrir desde Ventanas)'],
  'Drag to resize · double-click: original size':['Glisser pour redimensionner · double-clic : taille d\'origine', 'Ziehen zum Ändern der Größe · Doppelklick: Originalgröße', 'Arrastrar para cambiar el tamaño · doble clic: tamaño original'],
  // Display
  'Display':['Affichage', 'Anzeige', 'Visualización'], 'Colour':['Couleur', 'Farbe', 'Color'], 'Colour systems by':['Colorer les systèmes selon', 'Systeme färben nach', 'Colorear los sistemas por'],
  'Grey + wormholes':['Gris + wormholes', 'Grau + Wurmlöcher', 'Gris + agujeros de gusano'], 'Security':['Sécurité', 'Sicherheit', 'Seguridad'], 'Constellation':['Constellation', 'Konstellation', 'Constelación'],
  'Follow me':['Me suivre', 'Mir folgen', 'Seguirme'], 'Top view':['Vue de dessus', 'Draufsicht', 'Vista superior'], 'Alliance logos':['Logos d\'alliance', 'Allianzlogos', 'Logos de alianza'],
  'Height lines':['Lignes de hauteur', 'Höhenlinien', 'Líneas de altura'], 'Recenter':['Recentrer', 'Zentrieren', 'Centrar'],
  'Switch region and recenter automatically when your character jumps':['Change de région et recentre quand ton perso saute', 'Wechselt die Region und zentriert, wenn dein Charakter springt', 'Cambia de región y centra cuando tu personaje salta'],
  'Top-down view, like the in-game map':['Vue de dessus, comme la carte du jeu', 'Draufsicht wie die Karte im Spiel', 'Vista desde arriba, como el mapa del juego'],
  '2D: the chain as cards, like a wormhole mapper':['2D : la chaîne en cadres, comme un mapper', '2D: die Kette als Karten, wie ein Wurmloch-Mapper', '2D: la cadena en tarjetas, como un mapper'],
  'Null-sec: the logo of the alliance holding the sovereignty on each system':['Null-sec : le logo de l\'alliance qui tient chaque système', 'Nullsec: das Logo der Allianz mit der Souveränität', 'Null-sec: el logo de la alianza que tiene la soberanía'],
  'Vertical lines from every system to the region\'s mid plane':['Traits verticaux de chaque système vers le plan du milieu', 'Senkrechte Linien von jedem System zur Mittelebene', 'Líneas verticales de cada sistema al plano medio'],
  // Windows
  'Windows':['Fenêtres', 'Fenster', 'Ventanas'], 'Your group':['Ton groupe', 'Deine Gruppe', 'Tu grupo'], 'Maps':['Cartes', 'Karten', 'Mapas'], 'Settings':['Réglages', 'Einstellungen', 'Ajustes'], 'Site owner':['Site owner', 'Seitenbesitzer', 'Propietario'],
  'Characters':['Personnages', 'Charaktere', 'Personajes'], 'Pilots':['Pilotes', 'Piloten', 'Pilotos'], 'Region info':['Infos région', 'Regionsinfo', 'Info de región'], 'Info':['Infos', 'Info', 'Info'],
  'Chain':['Chaîne', 'Kette', 'Cadena'], 'All chains':['Toutes les chaînes', 'Alle Ketten', 'Todas las cadenas'], 'Pochven':['Pochven', 'Pochven', 'Pochven'],
  'Statistics':['Statistiques', 'Statistiken', 'Estadísticas'], 'Active systems':['Systèmes actifs', 'Aktive Systeme', 'Sistemas activos'], 'My pilots':['Mes pilotes', 'Meine Piloten', 'Mis pilotos'],
  'Signatures':['Signatures', 'Signaturen', 'Firmas'], 'WH holders':['Habitants des WH', 'WH-Bewohner', 'Habitantes de WH'], 'Hub routes':['Routes vers les hubs', 'Routen zu Handelszentren', 'Rutas a los hubs'],
  'Jump bridges':['Jump bridges', 'Sprungbrücken', 'Puentes de salto'], 'Assets':['Assets', 'Besitz', 'Activos'], 'Colours':['Couleurs', 'Farben', 'Colores'],
  'Holes by pilot':['Trous par pilote', 'Löcher pro Pilot', 'Agujeros por piloto'], 'Forum banner':['Bannière forum', 'Forumbanner', 'Banner del foro'],
  'Reset windows':['Replacer les fenêtres', 'Fenster zurücksetzen', 'Restablecer ventanas'], 'Put every window back in its place':['Remet chaque fenêtre à sa place', 'Setzt jedes Fenster an seinen Platz zurück', 'Vuelve a colocar cada ventana en su sitio'],
  'Click to close it':['Clic pour la fermer', 'Klicken zum Schließen', 'Clic para cerrarla'], 'Click to open it where it was':['Clic pour la rouvrir à sa place', 'Klicken zum Öffnen an alter Stelle', 'Clic para abrirla donde estaba'],
  'Folded at the bottom left: click to open it':['Repliée en bas à gauche : clic pour l\'ouvrir', 'Unten links eingeklappt: klicken zum Öffnen', 'Plegada abajo a la izquierda: clic para abrirla'],
  'Route':['Route', 'Route', 'Ruta'],
  // Settings
  'Map':['Carte', 'Karte', 'Mapa'], 'Wormholes':['Wormholes', 'Wurmlöcher', 'Agujeros de gusano'], 'Kills':['Kills', 'Kills', 'Muertes'], 'Refresh':['Rafraîchissement', 'Aktualisierung', 'Actualización'],
  'Search a setting…':['Chercher un réglage…', 'Einstellung suchen…', 'Buscar un ajuste…'], 'No setting matches.':['Aucun réglage ne correspond.', 'Keine passende Einstellung.', 'Ningún ajuste coincide.'],
  'Back to the defaults':['Tout remettre par défaut', 'Alles zurücksetzen', 'Volver a los valores por defecto'], 'Kept in this browser.':['Gardé dans ce navigateur.', 'In diesem Browser gespeichert.', 'Guardado en este navegador.'],
  'Back to the default':['Valeur par défaut', 'Standardwert', 'Valor por defecto'], 'default':['défaut', 'Standard', 'por defecto'],
  'Names of all the systems on the map (otherwise only your pilot\'s system and the other regions\')':['Nom de tous les systèmes (sinon seulement celui de ton pilote et des autres régions)', 'Namen aller Systeme (sonst nur das deines Piloten und der anderen Regionen)', 'Nombre de todos los sistemas (si no, solo el de tu piloto y de las otras regiones)'],
  'Names of the constellations':['Noms des constellations', 'Namen der Konstellationen', 'Nombres de las constelaciones'],
  'A selected route stands out, the rest of the map almost transparent':['La route choisie ressort, le reste de la carte presque transparent', 'Die gewählte Route hebt sich ab, der Rest fast durchsichtig', 'La ruta elegida resalta, el resto casi transparente'],
  'ESS: share of the bounties going to the main bank (estimate)':['ESS : part des primes vers la banque (estimation)', 'ESS: Anteil der Kopfgelder an der Hauptbank (Schätzung)', 'ESS: parte de las recompensas al banco (estimación)'],
  'ESS: mean bounty of one NPC kill at -1.0 true security':['ESS : prime moyenne d\'un NPC à -1.0', 'ESS: mittleres Kopfgeld pro NPC bei -1,0', 'ESS: recompensa media por NPC a -1.0'],
  'Tunnel animation along the connection when your pilot jumps from one system to the next':['Animation tunnel le long de la connexion quand ton pilote saute', 'Tunnel-Animation entlang der Verbindung beim Sprung', 'Animación de túnel a lo largo de la conexión al saltar'],
  'Tunnel animation length':['Durée de l\'animation tunnel', 'Dauer der Tunnel-Animation', 'Duración de la animación de túnel'],
  'The map turns slowly around the selected system':['La carte tourne lentement autour du système choisi', 'Die Karte dreht sich langsam um das gewählte System', 'El mapa gira despacio alrededor del sistema elegido'],
  'Turning speed':['Vitesse de rotation', 'Drehgeschwindigkeit', 'Velocidad de giro'],
  'Start turning again after you stop touching the map for':['Reprendre la rotation après une pause de', 'Wieder drehen nach einer Pause von', 'Volver a girar tras una pausa de'],
  'Zoom on the system a new wormhole opens to':['Zoomer sur le système où s\'ouvre un nouveau WH', 'Auf das System eines neuen Wurmlochs zoomen', 'Acercar al sistema donde se abre un nuevo WH'],
  'Show the alliance logo (or the region) in big':['Afficher en grand le logo d\'alliance (ou la région)', 'Allianzlogo (oder Region) groß zeigen', 'Mostrar en grande el logo de alianza (o la región)'],
  'Show it for':['L\'afficher pendant', 'Anzeigen für', 'Mostrarlo durante'],
  'Show the region (or the sovereignty holder) when you change region or leave a wormhole':['Afficher la région (ou la souveraineté) en changeant de région ou en sortant d\'un WH', 'Region (oder Souverän) beim Regionswechsel oder Verlassen eines WH zeigen', 'Mostrar la región (o la soberanía) al cambiar de región o salir de un WH'],
  'Show the holder\'s logo each time you jump into a wormhole of the WH holders list':['Logo de l\'habitant à chaque entrée dans un WH de la liste', 'Logo des Bewohners bei jedem Sprung in ein gelistetes WH', 'Logo del habitante al entrar en un WH de la lista'],
  'Kill alarms: a blinking red halo on systems with a recent kill':['Alarme de kill : halo rouge clignotant après un kill récent', 'Kill-Alarm: blinkender roter Ring nach einem Kill', 'Alarma de muerte: halo rojo parpadeante tras una muerte'],
  'Halo on a known-space system after a kill':['Halo sur un système K-space après un kill', 'Ring in K-Space nach einem Kill', 'Halo en K-space tras una muerte'],
  'Halo on a wormhole system after a kill':['Halo sur un système WH après un kill', 'Ring in einem WH-System nach einem Kill', 'Halo en un sistema WH tras una muerte'],
  'Ask zKillboard every':['Interroger zKillboard toutes les', 'zKillboard abfragen alle', 'Consultar zKillboard cada'],
  'Chain maps (Alpha, Beta…) in 2D: systems as cards on a grid':['Cartes de chaîne (Alpha, Beta…) en 2D : systèmes en cadres', 'Kettenkarten (Alpha, Beta…) in 2D: Systeme als Karten', 'Mapas de cadena (Alpha, Beta…) en 2D: sistemas en tarjetas'],
  'Size of the systems on the map (100 = normal)':['Taille des systèmes (100 = normal)', 'Größe der Systeme (100 = normal)', 'Tamaño de los sistemas (100 = normal)'],
  'Name of the followed pilot (bottom) and of the region (top): text size (0 = hidden)':['Grand nom du pilote (bas) et de la région (haut) : taille (0 = caché)', 'Name des Piloten (unten) und der Region (oben): Größe (0 = aus)', 'Nombre del piloto (abajo) y de la región (arriba): tamaño (0 = oculto)'],
  'A pilot counts as "map open" if heard from within':['Un pilote est « carte ouverte » s\'il a donné signe de vie depuis', 'Ein Pilot gilt als „Karte offen“, wenn gehört innerhalb von', 'Un piloto cuenta como «mapa abierto» si se supo de él en'],
  'Show a pilot\'s name on a system for':['Afficher le nom d\'un pilote sur un système pendant', 'Pilotennamen am System zeigen für', 'Mostrar el nombre de un piloto en un sistema durante'],
  'Read your characters\' positions every':['Lire la position de tes persos toutes les', 'Positionen deiner Charaktere lesen alle', 'Leer la posición de tus personajes cada'],
  'Add a wormhole on the map when one of your characters jumps through one':['Ajouter un WH sur la carte quand un de tes persos le traverse', 'Wurmloch eintragen, wenn ein Charakter hindurchspringt', 'Añadir un WH al mapa cuando uno de tus personajes lo cruza'],
  'An expired hole blinks, then disappears after':['Un trou expiré clignote, puis disparaît après', 'Ein abgelaufenes Loch blinkt und verschwindet nach', 'Un agujero caducado parpadea y desaparece tras'],
  'Two groups are the same chain within':['Deux groupes forment une même chaîne à moins de', 'Zwei Gruppen sind eine Kette innerhalb von', 'Dos grupos son la misma cadena a menos de'],
  'Thera & Turnur connections (EVE-Scout) every':['Connexions Thera et Turnur (EVE-Scout) toutes les', 'Thera- und Turnur-Verbindungen (EVE-Scout) alle', 'Conexiones de Thera y Turnur (EVE-Scout) cada'],
  'Incursions every':['Incursions toutes les', 'Inkursionen alle', 'Incursiones cada'], 'Your assets every':['Tes assets toutes les', 'Dein Besitz alle', 'Tus activos cada'],
  'Statistics (kills, jumps…) every':['Statistiques (kills, jumps…) toutes les', 'Statistiken (Kills, Sprünge…) alle', 'Estadísticas (muertes, saltos…) cada'],
  'jumps':['sauts', 'Sprünge', 'saltos'],
  // Characters
  'Make this character active':['Rendre ce perso actif', 'Diesen Charakter aktiv setzen', 'Activar este personaje'], 'Active: the map follows this character':['Actif : la carte suit ce perso', 'Aktiv: die Karte folgt diesem Charakter', 'Activo: el mapa sigue a este personaje'],
  'Online':['En ligne', 'Online', 'En línea'], 'Offline':['Hors ligne', 'Offline', 'Desconectado'], 'Unknown':['Inconnu', 'Unbekannt', 'Desconocido'],
  '· no autopilot':['· sans autopilote', '· ohne Autopilot', '· sin piloto automático'], 'Logged in without Set destination':['Connecté sans Set destination', 'Ohne „Ziel setzen“ angemeldet', 'Conectado sin «Fijar destino»'],
  'Log this character out of this browser':['Déconnecter ce perso de ce navigateur', 'Diesen Charakter in diesem Browser abmelden', 'Cerrar la sesión de este personaje en este navegador'],
  'No character yet. Log in to show your position, set destinations and follow your jumps.':['Aucun perso pour l\'instant. Connecte-toi pour voir ta position, envoyer des destinations et suivre tes sauts.', 'Noch kein Charakter. Melde dich an, um deine Position zu sehen, Ziele zu setzen und Sprünge zu verfolgen.', 'Aún no hay personaje. Conéctate para ver tu posición, fijar destinos y seguir tus saltos.'],
  'Leave the demo':['Quitter la démo', 'Demo verlassen', 'Salir de la demo'], 'Add a character':['Ajouter un perso', 'Charakter hinzufügen', 'Añadir un personaje'], 'Log in with EVE':['Connexion avec EVE', 'Mit EVE anmelden', 'Conectarse con EVE'],
  'Allow "Set destination" (autopilot)':['Autoriser « Set destination » (autopilote)', '„Ziel setzen“ erlauben (Autopilot)', 'Permitir «Fijar destino» (piloto automático)'],
  'Allow reading assets (shown on the map, stays in this browser)':['Autoriser la lecture des assets (sur la carte, reste dans ce navigateur)', 'Besitz lesen erlauben (auf der Karte, bleibt im Browser)', 'Permitir leer los activos (en el mapa, se queda en este navegador)'],
  'Allow reading standings (contacts)':['Autoriser la lecture des contacts', 'Kontakte lesen erlauben', 'Permitir leer los contactos'], 'Allow importing jump bridges':['Autoriser l\'import des jump bridges', 'Import von Sprungbrücken erlauben', 'Permitir importar puentes de salto'],
  'Everything here is simulated.':['Tout ici est simulé.', 'Alles hier ist simuliert.', 'Todo aquí es simulado.'],
  'One login for the whole site. Tokens stay in this browser.':['Une seule connexion pour tout le site. Les jetons restent dans ce navigateur.', 'Ein Login für die ganze Seite. Die Tokens bleiben im Browser.', 'Un solo inicio de sesión para todo el sitio. Los tokens se quedan en este navegador.'],
  'Map of':['Carte de', 'Karte von', 'Mapa de'], 'free, no limit on characters':['gratuite, sans limite de persos', 'kostenlos, ohne Charakterlimit', 'gratis, sin límite de personajes'], '. Nothing to pay.':['. Rien à payer.', '. Nichts zu zahlen.', '. Nada que pagar.'],
  ': send ISK to':[' : envoie des ISK à', ': sende ISK an', ': envía ISK a'], 'for':['pour', 'für', 'para'], 'with this reason:':['avec cette raison :', 'mit diesem Grund:', 'con este motivo:'], 'Copy':['Copier', 'Kopieren', 'Copiar'],
  'pays for the whole map, whoever sends it':['paie pour toute la carte, peu importe qui envoie', 'bezahlt für die ganze Karte, egal wer sendet', 'paga todo el mapa, lo envíe quien lo envíe'], 'pricing':['tarifs', 'Preise', 'precios'],
  'Connecting to your shared map…':['Connexion à ta carte partagée…', 'Verbinde mit deiner geteilten Karte…', 'Conectando con tu mapa compartido…'],
  'No shared map for this character: nothing to pay.':['Pas de carte partagée pour ce perso : rien à payer.', 'Keine geteilte Karte für diesen Charakter: nichts zu zahlen.', 'Sin mapa compartido para este personaje: nada que pagar.'],
  // Pilots
  'Map open':['Carte ouverte', 'Karte offen', 'Mapa abierto'], 'Map closed':['Carte fermée', 'Karte geschlossen', 'Mapa cerrado'], 'Nobody has the map open.':['Personne n\'a la carte ouverte.', 'Niemand hat die Karte offen.', 'Nadie tiene el mapa abierto.'],
  '(you)':['(toi)', '(du)', '(tú)'], 'Position unknown':['Position inconnue', 'Position unbekannt', 'Posición desconocida'], 'position unknown':['position inconnue', 'Position unbekannt', 'posición desconocida'],
  'Select this pilot: map, routes, destination and assets follow it':['Choisir ce pilote : carte, routes, destination et assets le suivent', 'Diesen Piloten wählen: Karte, Routen, Ziel und Besitz folgen ihm', 'Elegir este piloto: mapa, rutas, destino y activos lo siguen'],
  'This character has no shared map: corpmates appear here once the map owner gives it access.':['Ce perso n\'a pas de carte partagée : tes équipiers apparaîtront ici quand le propriétaire de la carte lui donnera accès.', 'Dieser Charakter hat keine geteilte Karte: Mitspieler erscheinen hier, sobald der Kartenbesitzer Zugang gibt.', 'Este personaje no tiene mapa compartido: tus compañeros aparecerán aquí cuando el dueño del mapa le dé acceso.'],
  'One name per line, to add them to an access list in game (bookmark folder, structure…)':['Un nom par ligne, pour une liste d\'accès en jeu (dossier de bookmarks, structure…)', 'Ein Name pro Zeile, für eine Zugangsliste im Spiel', 'Un nombre por línea, para una lista de acceso en el juego'],
  'Copy failed':['Copie impossible', 'Kopieren fehlgeschlagen', 'No se pudo copiar'],
  // My pilots
  'Click a pilot to follow it.':['Clique sur un pilote pour le suivre.', 'Klicke auf einen Piloten, um ihm zu folgen.', 'Haz clic en un piloto para seguirlo.'],
  'This computer':['Cet ordinateur', 'Dieser Computer', 'Este ordenador'], 'Other computers':['Autres ordinateurs', 'Andere Computer', 'Otros ordenadores'],
  ': logged in in this browser.':[' : connectés dans ce navigateur.', ': in diesem Browser angemeldet.', ': conectados en este navegador.'],
  ': your alts on the shared map, added by you.':[' : tes alts sur la carte partagée, ajoutés par toi.', ': deine Twinks auf der geteilten Karte, von dir hinzugefügt.', ': tus alts en el mapa compartido, añadidos por ti.'],
  'Add one of your alts from the map…':['Ajouter un de tes alts présent sur la carte…', 'Einen deiner Twinks von der Karte hinzufügen…', 'Añadir uno de tus alts del mapa…'], 'Add':['Ajouter', 'Hinzufügen', 'Añadir'],
  'followed':['suivi', 'verfolgt', 'seguido'], 'active':['actif', 'aktiv', 'activo'],
  // Follow
  'Follow your pilot again':['Suivre à nouveau ton pilote', 'Deinem Piloten wieder folgen', 'Volver a seguir a tu piloto'], 'Not following':['Pilote non suivi', 'Nicht verfolgt', 'Sin seguir'],
  'Follow me is still on: the map comes back on your next jump. Click to go back now.':['« Me suivre » est toujours actif : la carte revient à ton prochain saut. Clic pour y revenir maintenant.', '„Mir folgen“ ist noch an: die Karte kehrt beim nächsten Sprung zurück. Klicken, um jetzt zurückzukehren.', '«Seguirme» sigue activo: el mapa vuelve en tu próximo salto. Clic para volver ahora.'],
  // private map
  'Private map':['Carte privée', 'Private Karte', 'Mapa privado'],
  'This character is not on any shared map yet.':['Ce perso n\'est encore sur aucune carte partagée.', 'Dieser Charakter ist noch auf keiner geteilten Karte.', 'Este personaje aún no está en ningún mapa compartido.'],
  'Ask the owner of your group\'s map to add this character, or watch the demo to see what the map does.':['Demande au propriétaire de la carte de ton groupe d\'ajouter ce perso, ou regarde la démo pour voir ce que fait la carte.', 'Bitte den Besitzer der Karte deiner Gruppe, diesen Charakter hinzuzufügen, oder sieh dir die Demo an.', 'Pide al dueño del mapa de tu grupo que añada este personaje, o mira la demo para ver lo que hace el mapa.'],
  'Watch the demo':['Voir la démo', 'Demo ansehen', 'Ver la demo'], 'Read the guide':['Lire le guide', 'Anleitung lesen', 'Leer la guía'],
  'The map itself works for everyone: regions, routes, Thera and Turnur. Only your group\'s wormholes and pilots need the access.':['La carte elle-même marche pour tout le monde : régions, routes, Thera et Turnur. Seuls les wormholes et les pilotes de ton groupe demandent l\'accès.', 'Die Karte selbst funktioniert für alle: Regionen, Routen, Thera und Turnur. Nur die Wurmlöcher und Piloten deiner Gruppe brauchen Zugang.', 'El mapa funciona para todos: regiones, rutas, Thera y Turnur. Solo los agujeros y pilotos de tu grupo necesitan acceso.'],
  'Drag to rotate · Shift+drag or right-drag to pan · Wheel to zoom · Click a system: rotation and zoom then turn around it · Right-click a system: destination, home, ENTER / EXIT':['Glisser : rotation · Maj+glisser ou clic droit glissé : déplacer · Molette : zoom · Clic sur un système : la carte tourne autour · Clic droit : destination, HOME, ENTER / EXIT', 'Ziehen: drehen · Umschalt+Ziehen oder Rechtsziehen: verschieben · Mausrad: Zoom · Klick auf ein System: Drehung darum · Rechtsklick: Ziel, HOME, ENTER / EXIT', 'Arrastrar: girar · Mayús+arrastrar o clic derecho: mover · Rueda: zoom · Clic en un sistema: gira a su alrededor · Clic derecho: destino, HOME, ENTER / EXIT'],
  '⟿ No active wormhole':['⟿ Aucun WH actif', '⟿ Kein aktives Wurmloch', '⟿ Ningún WH activo'],
  'No home yet: right-click a system → "⌂ Set as HOME"':['Pas encore de HOME : clic droit sur un système → « ⌂ Set as HOME »', 'Noch kein HOME: Rechtsklick auf ein System → „⌂ Set as HOME“', 'Aún sin HOME: clic derecho en un sistema → «⌂ Set as HOME»'],
  // Info (system / region)
  'System':['Système', 'System', 'Sistema'], 'Gates':['Portes', 'Tore', 'Portales'], 'Neighbouring regions':['Régions voisines', 'Nachbarregionen', 'Regiones vecinas'],
  'Wormholes in this region':['Wormholes de cette région', 'Wurmlöcher in dieser Region', 'Agujeros de gusano en esta región'], 'Pilots here':['Pilotes ici', 'Piloten hier', 'Pilotos aquí'],
  'Pilots in this region':['Pilotes dans cette région', 'Piloten in dieser Region', 'Pilotos en esta región'], 'Jump bridge':['Jump bridge', 'Sprungbrücke', 'Puente de salto'],
  'Your assets here':['Tes assets ici', 'Dein Besitz hier', 'Tus activos aquí'], '☣ Incursion':['☣ Incursion', '☣ Inkursion', '☣ Incursión'], 'You are here':['Tu es ici', 'Du bist hier', 'Estás aquí'],
  'Set destination':['Destination', 'Ziel setzen', 'Fijar destino'], 'Add waypoint':['Ajouter un waypoint', 'Wegpunkt hinzufügen', 'Añadir punto de ruta'], 'Back to region':['Retour à la région', 'Zurück zur Region', 'Volver a la región'],
  'Show the list':['Voir la liste', 'Liste zeigen', 'Ver la lista'], 'None':['Aucun', 'Keine', 'Ninguno'], 'Nobody shared on the mapper is here.':['Aucun pilote partagé ici.', 'Kein geteilter Pilot hier.', 'Ningún piloto compartido aquí.'],
  'None on your mapper chain.':['Aucun sur ta chaîne.', 'Keine in deiner Kette.', 'Ninguno en tu cadena.'], '(uses jump bridges)':['(passe par des jump bridges)', '(über Sprungbrücken)', '(usa puentes de salto)'],
  '(uses wormholes)':['(passe par des wormholes)', '(über Wurmlöcher)', '(usa agujeros de gusano)'], '⌂ Set as HOME':['⌂ Définir comme HOME', '⌂ Als HOME setzen', '⌂ Fijar como HOME'],
  '⌂ Remove HOME':['⌂ Retirer HOME', '⌂ HOME entfernen', '⌂ Quitar HOME'], 'Set as ENTER':['Définir comme ENTER', 'Als ENTER setzen', 'Fijar como ENTER'], 'Set as EXIT':['Définir comme EXIT', 'Als EXIT setzen', 'Fijar como EXIT'],
  'Remove ENTER':['Retirer ENTER', 'ENTER entfernen', 'Quitar ENTER'], 'Remove EXIT':['Retirer EXIT', 'EXIT entfernen', 'Quitar EXIT'], 'Network':['Réseau', 'Netz', 'Red'], 'Set by hand':['Défini à la main', 'Von Hand gesetzt', 'Fijado a mano'],
  'Your permanent home system (kept in this browser, used by the mapper too)':['Ton système HOME permanent (gardé dans ce navigateur, utilisé aussi par le mapper)', 'Dein festes HOME-System (im Browser gespeichert, auch vom Mapper genutzt)', 'Tu sistema HOME permanente (guardado en este navegador, también lo usa el mapper)'],
  'Automatic once standings are read (Characters window option)':['Automatique une fois les contacts lus (option de la fenêtre Personnages)', 'Automatisch, sobald Kontakte gelesen sind (Option im Fenster Charaktere)', 'Automático cuando se leen los contactos (opción de la ventana Personajes)'],
  'just now':['à l\'instant', 'gerade eben', 'ahora mismo'], 'staging':['staging', 'Staging', 'staging'], 'Systems':['Systèmes', 'Systeme', 'Sistemas'], 'systems':['systèmes', 'Systeme', 'sistemas'],
  // Colours
  'Connection colours':['Couleurs des connexions', 'Verbindungsfarben', 'Colores de las conexiones'], 'Wormholes lead to':['Les wormholes mènent vers', 'Wurmlöcher führen nach', 'Los agujeros llevan a'],
  'Gates, bridges and routes':['Portes, bridges et routes', 'Tore, Brücken und Routen', 'Portales, puentes y rutas'], 'Wormhole state (Chain window, other colour modes)':['État des wormholes (fenêtre Chaîne, autres modes)', 'Wurmloch-Zustand (Kettenfenster, andere Farbmodi)', 'Estado de los agujeros (ventana Cadena, otros modos)'],
  'Marks on systems':['Marques sur les systèmes', 'Markierungen an Systemen', 'Marcas en los sistemas'], 'Standings / threat (dots, frames, WH holders)':['Contacts / menace (points, cadres, habitants WH)', 'Ansehen / Bedrohung (Punkte, Rahmen, WH-Bewohner)', 'Contactos / amenaza (puntos, marcos, habitantes WH)'],
  'Reset all colours and blinking':['Remettre toutes les couleurs et le clignotement', 'Alle Farben und das Blinken zurücksetzen', 'Restablecer colores y parpadeo'], 'blink':['clignote', 'blinkt', 'parpadea'],
  'Gate':['Porte', 'Tor', 'Portal'], 'Gate between constellations':['Porte entre constellations', 'Tor zwischen Konstellationen', 'Portal entre constelaciones'], 'Gate to another region':['Porte vers une autre région', 'Tor in eine andere Region', 'Portal a otra región'],
  'Wormhole (when not coloured by destination)':['Wormhole (sans couleur de destination)', 'Wurmloch (ohne Zielfarbe)', 'Agujero (sin color de destino)'], 'Wormhole: mass reduced':['Wormhole : masse réduite', 'Wurmloch: Masse reduziert', 'Agujero: masa reducida'],
  'Wormhole: mass critical':['Wormhole : masse critique', 'Wurmloch: Masse kritisch', 'Agujero: masa crítica'], 'Wormhole: end of life':['Wormhole : fin de vie', 'Wurmloch: Lebensende', 'Agujero: fin de vida'],
  'Route on the map':['Route sur la carte', 'Route auf der Karte', 'Ruta en el mapa'], 'Autopilot route':['Route de l\'autopilote', 'Autopilot-Route', 'Ruta del piloto automático'],
  '☣ Incursion (ring and label)':['☣ Incursion (anneau et étiquette)', '☣ Inkursion (Ring und Beschriftung)', '☣ Incursión (anillo y etiqueta)'], '☠ Recent kill (blinking halo)':['☠ Kill récent (halo clignotant)', '☠ Kürzlicher Kill (blinkender Ring)', '☠ Muerte reciente (halo parpadeante)'],
  '⌂ HOME, ENTER, EXIT (gold marks)':['⌂ HOME, ENTER, EXIT (marques dorées)', '⌂ HOME, ENTER, EXIT (goldene Markierungen)', '⌂ HOME, ENTER, EXIT (marcas doradas)'],
  'Friendly (positive standing)':['Ami (contact positif)', 'Freundlich (positives Ansehen)', 'Amigo (contacto positivo)'], 'Low (neutral)':['Faible (neutre)', 'Niedrig (neutral)', 'Baja (neutral)'],
  'Medium (negative)':['Moyenne (négatif)', 'Mittel (negativ)', 'Media (negativo)'], 'High (−5 or less)':['Haute (−5 ou moins)', 'Hoch (−5 oder weniger)', 'Alta (−5 o menos)'], 'Extreme (−10)':['Extrême (−10)', 'Extrem (−10)', 'Extrema (−10)'],
  // lot 3: wormholes
  'My position':['Ma position', 'Meine Position', 'Mi posición'], '◎ My position':['◎ Ma position', '◎ Meine Position', '◎ Mi posición'], 'Back to your pilot':['Revenir à ton pilote', 'Zurück zu deinem Piloten', 'Volver a tu piloto'],
  'their own map':['leur propre carte', 'ihre eigene Karte', 'su propio mapa'], 'Class':['Classe', 'Klasse', 'Clase'], 'Statics':['Statics', 'Statics', 'Estáticos'], 'Effect':['Effet', 'Effekt', 'Efecto'], 'unknown':['inconnus', 'unbekannt', 'desconocidos'],
  'Exits of the chain':['Sorties de la chaîne', 'Ausgänge der Kette', 'Salidas de la cadena'], 'Isolated chain':['Chaîne isolée', 'Isolierte Kette', 'Cadena aislada'],
  'No exit to known space and no Thera or Turnur: your pilots cannot reach it from New Eden right now.':['Aucune sortie vers le K-space ni vers Thera ou Turnur : tes pilotes ne peuvent pas l\'atteindre depuis New Eden pour l\'instant.', 'Kein Ausgang in den K-Space und kein Thera oder Turnur: deine Piloten erreichen sie gerade nicht von New Eden aus.', 'Sin salida al K-space ni a Thera o Turnur: tus pilotos no pueden llegar desde New Eden ahora mismo.'],
  'Remove this chain from your map':['Retirer cette chaîne de ta carte', 'Diese Kette von deiner Karte entfernen', 'Quitar esta cadena de tu mapa'], 'Click again to confirm':['Clique encore pour confirmer', 'Zum Bestätigen erneut klicken', 'Haz clic otra vez para confirmar'],
  '⇪ Import a Pathfinder or Wanderer export':['⇪ Importer un export Pathfinder ou Wanderer', '⇪ Pathfinder- oder Wanderer-Export importieren', '⇪ Importar una exportación de Pathfinder o Wanderer'],
  'Pathfinder: Map → Settings → Import/Export → Export · Wanderer: map settings → Export':['Pathfinder : Map → Settings → Import/Export → Export · Wanderer : réglages de la carte → Export', 'Pathfinder: Map → Settings → Import/Export → Export · Wanderer: Karteneinstellungen → Export', 'Pathfinder: Map → Settings → Import/Export → Export · Wanderer: ajustes del mapa → Export'],
  'Not a Pathfinder or Wanderer export (a .json file from their Export button)':['Ce n\'est pas un export Pathfinder ou Wanderer (fichier .json de leur bouton Export)', 'Kein Pathfinder- oder Wanderer-Export (eine .json-Datei vom Export-Knopf)', 'No es una exportación de Pathfinder o Wanderer (archivo .json de su botón Export)'],
  'No pilot followed yet: log in from the Characters window':['Aucun pilote suivi : connecte-toi depuis la fenêtre Personnages', 'Noch kein verfolgter Pilot: melde dich im Fenster Charaktere an', 'Ningún piloto seguido: conéctate desde la ventana Personajes'],
  'wormhole chain':['chaîne de wormholes', 'Wurmloch-Kette', 'cadena de agujeros de gusano'], 'J-space':['J-space', 'J-Space', 'J-space'], 'Known space':['K-space', 'K-Space', 'K-space'],
  'In this map':['Sur cette carte', 'Auf dieser Karte', 'En este mapa'], 'Wormhole space':['Espace WH', 'Wurmlochraum', 'Espacio WH'],
  'WH on the map':['WH sur la carte', 'WH auf der Karte', 'WH en el mapa'], 'chain':['chaîne', 'Kette', 'cadena'], 'chains':['chaînes', 'Ketten', 'cadenas'],
  'All the wormholes on your map, every region together':['Tous les wormholes de ta carte, toutes régions confondues', 'Alle Wurmlöcher deiner Karte, alle Regionen zusammen', 'Todos los agujeros de tu mapa, todas las regiones juntas'],
  // lot 4: navigation
  'Shortest':['Plus court', 'Kürzeste', 'Más corta'], 'Safer (high-sec)':['Plus sûr (high-sec)', 'Sicherer (Highsec)', 'Más segura (high-sec)'], 'Less secure':['Moins sûr', 'Unsicherer', 'Menos segura'],
  'Clear':['Effacer', 'Löschen', 'Borrar'], '✦ Focus on':['✦ Focus activé', '✦ Fokus an', '✦ Foco activado'], '✦ Focus off':['✦ Focus coupé', '✦ Fokus aus', '✦ Foco desactivado'],
  'A selected route stands out and the rest of the map fades: switch it on or off':['La route choisie ressort et le reste s\'efface : activer ou couper', 'Die gewählte Route hebt sich ab, der Rest verblasst: ein- oder ausschalten', 'La ruta elegida resalta y el resto se atenúa: activar o desactivar'],
  'Forget this route (the in-game route is not changed)':['Oublier cette route (la route en jeu ne change pas)', 'Diese Route vergessen (die Route im Spiel bleibt)', 'Olvidar esta ruta (la ruta del juego no cambia)'],
  'Use the same setting as your in-game autopilot':['Prends le même réglage que ton autopilote en jeu', 'Gleiche Einstellung wie dein Autopilot im Spiel', 'Usa el mismo ajuste que tu piloto automático'],
  'also through Thera / Turnur (and the holes of your chain)':['aussi par Thera / Turnur (et les trous de ta chaîne)', 'auch über Thera / Turnur (und die Löcher deiner Kette)', 'también por Thera / Turnur (y los agujeros de tu cadena)'],
  'Add a system (staging, market…)':['Ajouter un système (staging, marché…)', 'System hinzufügen (Staging, Markt…)', 'Añadir un sistema (staging, mercado…)'], 'Remove this system from the list':['Retirer ce système de la liste', 'System aus der Liste entfernen', 'Quitar este sistema de la lista'],
  'Unknown system':['Système inconnu', 'Unbekanntes System', 'Sistema desconocido'], 'Hub':['Hub', 'Hub', 'Hub'], 'Safest':['Plus sûr', 'Sicherste', 'Más segura'], 'Shortest · WH':['Plus court · WH', 'Kürzeste · WH', 'Más corta · WH'], 'Safest · WH':['Plus sûr · WH', 'Sicherste · WH', 'Más segura · WH'],
  'From':['Depuis', 'Von', 'Desde'], 'The pilot the routes start from':['Le pilote d\'où partent les routes', 'Der Pilot, von dem die Routen starten', 'El piloto desde el que salen las rutas'], 'computing…':['calcul…', 'berechne…', 'calculando…'],
  'Draw this route on the map':['Tracer cette route sur la carte', 'Diese Route auf der Karte zeigen', 'Dibujar esta ruta en el mapa'], 'Show on the map':['Voir sur la carte', 'Auf der Karte zeigen', 'Ver en el mapa'],
  'The first hole is right here: jump it, then':['Le premier trou est ici : saute-le, puis', 'Das erste Loch ist hier: spring hindurch, dann', 'El primer agujero está aquí: sáltalo y luego'],
  'Show them on the map and use them in routes':['Les afficher sur la carte et les utiliser dans les routes', 'Auf der Karte zeigen und in Routen nutzen', 'Mostrarlos en el mapa y usarlos en las rutas'],
  'share with my map':['partager avec ma carte', 'mit meiner Karte teilen', 'compartir con mi mapa'], 'Import from EVE':['Importer depuis EVE', 'Aus EVE importieren', 'Importar desde EVE'],
  'Write them on your shared map so your group gets them too':['Les écrire sur ta carte partagée pour que ton groupe les ait aussi', 'Auf deine geteilte Karte schreiben, damit deine Gruppe sie auch hat', 'Escribirlos en tu mapa compartido para que tu grupo también los tenga'],
  'Your character\'s Ansiblex, found through EVE (needs the jump bridge permission at login)':['Les Ansiblex de ton perso, trouvés via EVE (demande la permission jump bridges à la connexion)', 'Die Ansiblex deines Charakters über EVE (braucht die Sprungbrücken-Berechtigung)', 'Los Ansiblex de tu personaje vía EVE (requiere el permiso de puentes al conectarte)'],
  'Jump bridges shared with your map':['Jump bridges partagés avec ta carte', 'Sprungbrücken mit deiner Karte geteilt', 'Puentes compartidos con tu mapa'],
  '📦 Your assets here':['📦 Tes assets ici', '📦 Dein Besitz hier', '📦 Tus activos aquí'],
  '🟧 Set as ENTER':['🟧 Définir comme ENTER', '🟧 Als ENTER setzen', '🟧 Fijar como ENTER'], '🟩 Set as EXIT':['🟩 Définir comme EXIT', '🟩 Als EXIT setzen', '🟩 Fijar como EXIT'],
  // lot 5: intel
  'Activity':['Activité', 'Aktivität', 'Actividad'], 'Ratting':['Ratting', 'Ratting', 'Ratting'], 'Traffic':['Trafic', 'Verkehr', 'Tráfico'], 'PvP':['PvP', 'PvP', 'PvP'],
  'Figures of the last hour (CCP).':['Chiffres de la dernière heure (CCP).', 'Zahlen der letzten Stunde (CCP).', 'Cifras de la última hora (CCP).'], 'The busiest systems of this map':['Les systèmes les plus actifs de cette carte', 'Die aktivsten Systeme dieser Karte', 'Los sistemas más activos de este mapa'],
  'Rats/h':['NPC/h', 'NPC/h', 'NPC/h'], 'Jumps/h':['Sauts/h', 'Sprünge/h', 'Saltos/h'], 'Kills/h':['Kills/h', 'Kills/h', 'Muertes/h'],
  'No activity in the last hour on this map.':['Aucune activité dans la dernière heure sur cette carte.', 'Keine Aktivität in der letzten Stunde auf dieser Karte.', 'Sin actividad en la última hora en este mapa.'],
  'Holder':['Habitant', 'Bewohner', 'Habitante'], '🔍 guess':['🔍 deviner', '🔍 schätzen', '🔍 adivinar'], 'Guess who lives here':['Deviner qui habite ici', 'Schätzen, wer hier wohnt', 'Adivinar quién vive aquí'],
  '(guessed, confirmed by you)':['(deviné, confirmé par toi)', '(geschätzt, von dir bestätigt)', '(adivinado, confirmado por ti)'],
  'No clue: nothing on zKillboard here for 30 days.':['Aucun indice : rien sur zKillboard ici depuis 30 jours.', 'Kein Hinweis: seit 30 Tagen nichts auf zKillboard.', 'Sin pistas: nada en zKillboard aquí en 30 días.'],
  'Wormhole':['Wormhole', 'Wurmloch', 'Agujero'], 'Holder (corporation or alliance)':['Habitant (corpo ou alliance)', 'Bewohner (Corp oder Allianz)', 'Habitante (corporación o alianza)'], 'Threat':['Menace', 'Bedrohung', 'Amenaza'],
  'optional':['facultatif', 'optional', 'opcional'], 'No wormhole yet.':['Aucun wormhole pour l\'instant.', 'Noch kein Wurmloch.', 'Aún no hay agujeros.'], 'Remove':['Retirer', 'Entfernen', 'Quitar'],
  'Show what your pilots will see':['Voir ce que verront tes pilotes', 'Zeigen, was deine Piloten sehen', 'Ver lo que verán tus pilotos'],
  'Who lives in a wormhole: each time a pilot of yours jumps into it, while it is on your chain, the holder\'s logo shows in big.':['Qui habite un wormhole : à chaque fois qu\'un de tes pilotes y entre, tant qu\'il est sur ta chaîne, le logo de l\'habitant s\'affiche en grand.', 'Wer in einem Wurmloch wohnt: springt einer deiner Piloten hinein, solange es auf deiner Kette ist, erscheint das Logo groß.', 'Quién vive en un agujero: cada vez que uno de tus pilotos entra, mientras esté en tu cadena, el logo del habitante aparece en grande.'],
  'add another':['en ajouter un', 'weiteren hinzufügen', 'añadir otro'], 'Corporation or alliance, exact name':['Corpo ou alliance, nom exact', 'Corp oder Allianz, genauer Name', 'Corporación o alianza, nombre exacto'],
  'No clue: no corporation seen twice here on zKillboard in 180 days.':['Aucun indice : aucune corpo vue deux fois ici sur zKillboard en 180 jours.', 'Kein Hinweis: keine Corp in 180 Tagen zweimal hier auf zKillboard.', 'Sin pistas: ninguna corporación vista dos veces aquí en zKillboard en 180 días.'],
  'Analyse a wormhole':['Analyser un wormhole', 'Wurmloch analysieren', 'Analizar un agujero'], 'who lives there, from its kills':['qui l\'habite, d\'après ses kills', 'wer dort wohnt, aus seinen Kills', 'quién vive allí, según sus muertes'],
  '🔍 Analyse':['🔍 Analyser', '🔍 Analysieren', '🔍 Analizar'], 'Write a wormhole name (e.g. J131656).':['Écris un nom de wormhole (ex. J131656).', 'Gib einen Wurmlochnamen ein (z. B. J131656).', 'Escribe el nombre de un agujero (p. ej. J131656).'],
  // v2 banner
  'New version, being rebuilt':['Nouvelle version, en cours de refonte', 'Neue Version, im Umbau', 'Nueva versión, en reconstrucción'], 'Back to the current map':['Retour à la carte actuelle', 'Zurück zur aktuellen Karte', 'Volver al mapa actual'],
};
// phrases with numbers or names: [pattern, fr, de, es] ($1, $2 … are the parts in brackets)
const RX = [
  [/^Probably \((.+), (\d+) kills over (\d+) days\): click the ones who live here$/, 'Probablement ($1, $2 kills sur $3 jours) : clique ceux qui habitent ici', 'Wahrscheinlich ($1, $2 Kills in $3 Tagen): klicke die Bewohner an', 'Probablemente ($1, $2 muertes en $3 días): marca los que viven aquí'],
  [/^seen (\d+) days · (\d+) kills · (\d+) losses · (\d+) structures lost$/, 'vue $1 jours · $2 kills · $3 pertes · $4 structure(s) perdue(s)', '$1 Tage gesehen · $2 Kills · $3 Verluste · $4 Strukturen verloren', 'vista $1 días · $2 muertes · $3 pérdidas · $4 estructura(s) perdida(s)'],
  [/^seen (\d+) days · (\d+) kills · (\d+) losses$/, 'vue $1 jours · $2 kills · $3 pertes', '$1 Tage gesehen · $2 Kills · $3 Verluste', 'vista $1 días · $2 muertes · $3 pérdidas'],
  [/^zKillboard, last (\d+) days$/, 'zKillboard, $1 derniers jours', 'zKillboard, letzte $1 Tage', 'zKillboard, últimos $1 días'],
  [/^(.+): removed from (.+)$/, '$1 : retiré de $2', '$1: aus $2 entfernt', '$1: quitado de $2'],
  [/^Looking \((.+)\)…$/, 'Recherche ($1)…', 'Suche ($1)…', 'Buscando ($1)…'],
  [/^Probably \((.+)\):$/, 'Probablement ($1) :', 'Wahrscheinlich ($1):', 'Probablemente ($1):'],
  [/^(.+): holder of (.+)$/, '$1 : habitant de $2', '$1: Bewohner von $2', '$1: habitante de $2'],
  [/^Go to (.+)$/, 'Aller à $1', 'Gehe zu $1', 'Ir a $1'],
  [/^✕ Mark the (.+) connection collapsed$/, '✕ Marquer la connexion $1 effondrée', '✕ Verbindung $1 als kollabiert markieren', '✕ Marcar la conexión de $1 colapsada'],
  [/^↺ (.+) connection: restore$/, '↺ Connexion $1 : rétablir', '↺ Verbindung $1: wiederherstellen', '↺ Conexión de $1: restaurar'],
  [/^(\d+) jumps · (.+)$/, '$1 sauts · $2', '$1 Sprünge · $2', '$1 saltos · $2'],
  [/^(\d+) WH on the map$/, '$1 WH sur la carte', '$1 WH auf der Karte', '$1 WH en el mapa'],
  [/^(\d+) chains?$/, '$1 chaîne(s)', '$1 Kette(n)', '$1 cadena(s)'],
  [/^(\d+) systems?$/, '$1 systèmes', '$1 Systeme', '$1 sistemas'],
  [/^(\d+) systems? \((\d+) WH \+ (\d+) K-space\)$/, '$1 systèmes ($2 WH + $3 K-space)', '$1 Systeme ($2 WH + $3 K-Space)', '$1 sistemas ($2 WH + $3 K-space)'],
  [/^wormhole chain · (\d+) systems? \((\d+) WH \+ (\d+) K-space\)$/, 'chaîne de wormholes · $1 systèmes ($2 WH + $3 K-space)', 'Wurmloch-Kette · $1 Systeme ($2 WH + $3 K-Space)', 'cadena de agujeros · $1 sistemas ($2 WH + $3 K-space)'],
  [/^(\d+) here · click: its map$/, '$1 ici · clic : sa carte', '$1 hier · Klick: ihre Karte', '$1 aquí · clic: su mapa'],
  [/^(\d+) here · (\d+) in New Eden$/, '$1 ici · $2 dans New Eden', '$1 hier · $2 in New Eden', '$1 aquí · $2 en New Eden'],
  [/^(.+): (\d+) wormholes? added(.*)$/, '$1 : $2 wormhole(s) ajouté(s)$3', '$1: $2 Wurmloch/-löcher hinzugefügt$3', '$1: $2 agujero(s) añadido(s)$3'],
  [/^(.+) · isolated$/, '$1 · isolée', '$1 · isoliert', '$1 · aislada'],
  [/^(\d+\s*\w+) ago$/, 'il y a $1', 'vor $1', 'hace $1'],
  [/^No route from (.+) with this region's gates and your mapper's wormholes\.$/, 'Pas de route depuis $1 avec les portes de cette région et les wormholes de ta carte.', 'Keine Route von $1 über die Tore dieser Region und die Wurmlöcher deiner Karte.', 'No hay ruta desde $1 con los portales de esta región y los agujeros de tu mapa.'],
  [/^(.+) \(neighbouring region\)$/, '$1 (région voisine)', '$1 (Nachbarregion)', '$1 (región vecina)'],
  [/^From your standings \((.+)\)$/, 'D\'après tes contacts ($1)', 'Aus deinen Kontakten ($1)', 'Según tus contactos ($1)'],
  [/^⟿ WH regions \((\d+)\)$/, '⟿ Régions WH ($1)', '⟿ WH-Regionen ($1)', '⟿ Regiones WH ($1)'],
  [/^⟿ WH regions \((\d+)\) · (\d+) chains?$/, '⟿ Régions WH ($1) · $2 chaîne(s)', '⟿ WH-Regionen ($1) · $2 Kette(n)', '⟿ Regiones WH ($1) · $2 cadena(s)'],
  [/^⌂ HOME set to (.+)$/, '⌂ HOME défini : $1', '⌂ HOME gesetzt: $1', '⌂ HOME fijado: $1'],
  [/^Centre the map on (.+) \(your home\)$/, 'Centrer la carte sur $1 (ton HOME)', 'Karte auf $1 zentrieren (dein HOME)', 'Centrar el mapa en $1 (tu HOME)'],
  [/^Map closed \((\d+)\)$/, 'Carte fermée ($1)', 'Karte geschlossen ($1)', 'Mapa cerrado ($1)'],
  [/^Map closed \(last news (\d+) min ago\)$/, 'Carte fermée (dernières nouvelles il y a $1 min)', 'Karte geschlossen (zuletzt vor $1 Min.)', 'Mapa cerrado (últimas noticias hace $1 min)'],
  [/^⧉ Copy the (\d+) names$/, '⧉ Copier les $1 noms', '⧉ Die $1 Namen kopieren', '⧉ Copiar los $1 nombres'],
  [/^✓ Copied — paste them in game$/, '✓ Copié — colle-les en jeu', '✓ Kopiert — im Spiel einfügen', '✓ Copiado — pégalos en el juego'],
  [/^↩ Back to (.+)$/, '↩ Retour à $1', '↩ Zurück zu $1', '↩ Volver a $1'],
  [/^Show (.+) on the map$/, 'Montrer $1 sur la carte', '$1 auf der Karte zeigen', 'Mostrar $1 en el mapa'],
  [/^alt of (.+)$/, 'alt de $1', 'Twink von $1', 'alt de $1'],
  [/^(\d+) characters$/, '$1 persos', '$1 Charaktere', '$1 personajes'],
  [/^(\d+) M ISK \/ week$/, '$1 M ISK / semaine', '$1 M ISK / Woche', '$1 M ISK / semana'],
  [/^Log out (.+)$/, 'Déconnecter $1', '$1 abmelden', 'Cerrar sesión de $1'],
  [/^Back to (\d.*)$/, 'Valeur par défaut : $1', 'Standard: $1', 'Por defecto: $1'],
  [/^Copied: (.+)$/, 'Copié : $1', 'Kopiert: $1', 'Copiado: $1'],
  [/^(.+): position not shared on the map right now$/, '$1 : position non partagée sur la carte pour l\'instant', '$1: Position derzeit nicht geteilt', '$1: posición no compartida ahora mismo'],
];
const li = { fr:0, de:1, es:2 }[lang];
function t(s){
  if (lang === 'en' || s == null) return s;
  const k = String(s), m = k.match(/^(\s*)([\s\S]*?)(\s*)$/), core = m[2];
  if (!core) return k;
  const d = D[core]; if (d) return m[1] + d[li] + m[3];
  for (const r of RX){ const x = core.match(r[0]); if (x) return m[1] + core.replace(r[0], r[1 + li]) + m[3]; }
  return k;
}
const ATTRS = ['title', 'placeholder', 'aria-label'];
function walk(root){
  if (lang === 'en' || !root) return;
  if (root.nodeType === 3){ const v = root.nodeValue, n = t(v); if (n !== v) root.nodeValue = n; return; }
  if (root.nodeType !== 1 || root.closest && root.closest('[data-noi18n],svg,script,style')) return;
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, { acceptNode:n => n.nodeType === 1 && (n.matches('svg,script,style,[data-noi18n]')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  let n = root;
  do{
    if (n.nodeType === 3){ const v = n.nodeValue; if (/[A-Za-z]/.test(v)){ const x = t(v); if (x !== v) n.nodeValue = x; } }
    else for (const a of ATTRS){ const v = n.getAttribute(a); if (v){ const x = t(v); if (x !== v) n.setAttribute(a, x); } }
  } while ((n = tw.nextNode()));
}
let obs = null;
function start(){
  document.documentElement.lang = lang;
  if (lang === 'en') return;
  walk(document.body);
  obs = new MutationObserver(ms => { for (const m of ms){
    if (m.type === 'characterData') walk(m.target);
    else if (m.type === 'attributes') walk(m.target.nodeType === 1 ? m.target : null);
    else m.addedNodes.forEach(walk); } });
  obs.observe(document.body, { subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:ATTRS });
}
function set(l){ if (!LANGS.includes(l) || l === lang) return; try{ localStorage.setItem('at.lang', l); }catch(e){} const u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.toString(); }
// the four buttons: <span data-langs></span>
function buttons(){ document.querySelectorAll('[data-langs]').forEach(box => { box.innerHTML = LANGS.map(l => `<button type="button" data-l="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join(''); box.querySelectorAll('[data-l]').forEach(b => b.onclick = () => set(b.dataset.l)); }); }
window.I18N = { lang, t, set, walk, buttons, LANGS };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { buttons(); start(); }); else { buttons(); start(); }
})();
