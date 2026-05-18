/* ============================================================
 * SEGNO STUDIO — translations
 * ------------------------------------------------------------
 * Single source of truth for every translatable string on the
 * site. Keys are nested by section. EN is the canonical/default
 * voice; ES mirrors it conceptually with similar character
 * count so layout holds.
 *
 * ADDING A NEW STRING:
 *   1. Give the element a `data-i18n="path.to.key"` attribute.
 *   2. Add `path.to.key` here under BOTH `en` and `es`.
 *   3. That's it — applyLang() will pick it up automatically.
 *
 * NEVER leave a key in only one language.
 * NEVER hardcode UI text in HTML/JS — always go through here.
 * Brand names, gear models, platforms (Netflix, HBO, Vimeo,
 * Dolby Atmos, AKG K701, etc.) are NOT translated.
 * ============================================================ */
window.I18N = {
  en: {
    // ── Topbar dynamic labels (used via JS templates) ─────────
    "topbar.scene": "Scene",
    "topbar.voices": "voices",
    "topbar.lang.aria": "Language",
    "topbar.lang.en": "English",
    "topbar.lang.es": "Spanish",

    // ── Hero service links ────────────────────────────────────
    "hero.experiences": "Immersive Experiences",
    "hero.installations": "Interactive Installations",
    "hero.sound": "Music + Sound Design",
    "hero.apps": "Apps + Web Design",
    "hero.workshops": "Workshops",

    // ── Back-button label (proper noun, same both langs) ──────
    "back.brand": "Segno Studio",

    // ── EXPERIENCES section ───────────────────────────────────
    "exp.brand": "Immersive Experiences",
    "exp.nav.home": "Projects",
    "exp.nav.dome": "Fulldome",
    "exp.nav.performance": "Performance",
    "exp.title.home": "Projects",
    "exp.kicker.home": "Immersive Experiences",
    "exp.title.dome": "Fulldome",
    "exp.kicker.dome": "Immersive Experiences",
    "exp.title.performance": "Performance",
    "exp.kicker.performance": "Immersive Experiences",

    // ── INSTALLATIONS section ─────────────────────────────────
    "inst.brand": "Interactive Installations",
    "inst.nav.home": "Projects",
    "inst.nav.interactive": "Interactive",
    "inst.nav.corporate": "Corporate",
    "inst.nav.events": "Events",
    "inst.title.home": "Projects",
    "inst.kicker.home": "Interactive Installations",
    "inst.title.interactive": "Interactive",
    "inst.kicker.interactive": "Interactive",
    "inst.title.corporate": "Corporate",
    "inst.kicker.corporate": "Corporate",
    "inst.title.events": "Events",
    "inst.kicker.events": "Events",

    // ── APPS section ──────────────────────────────────────────
    "apps.brand": "Apps & Web",
    "apps.nav.home": "Projects",
    "apps.nav.ar": "AR",
    "apps.nav.retail": "Retail",
    "apps.title.home": "Applications",
    "apps.kicker.home": "Apps & Web",
    "apps.title.ar": "AR",
    "apps.kicker.ar": "Augmented Reality",
    "apps.title.retail": "Retail",
    "apps.kicker.retail": "Retail",

    // ── WORKSHOPS section ─────────────────────────────────────
    "wsh.brand": "Workshops",
    "wsh.nav.home": "Home",
    "wsh.nav.banda": "Banda de Robots",
    "wsh.nav.micra": "MicRA",
    "wsh.nav.astrologio": "Astro.log.io",
    "wsh.nav.ciclomusic": "Ciclomusic",
    "wsh.title.home": "Workshops",
    "wsh.kicker.home": "Creative laboratories",
    "wsh.card.tag.workshop": "Workshop",
    "wsh.card.tag.lab": "Workshop · Laboratory",

    // Banda de Robots detail
    "wsh.banda.kicker": "Workshop · Educational innovation",
    "wsh.banda.title": "Banda de Robots",
    // MicRA detail
    "wsh.micra.kicker": "Collective creation laboratory",
    "wsh.micra.title": "MicRA · Micropraxiscopio",
    // Astro.log.io detail
    "wsh.astrologio.kicker": "Laboratory · Art + science + technology",
    "wsh.astrologio.title": "Astro.log.io",
    // Ciclomusic stub
    "wsh.ciclomusic.kicker": "Workshop",
    "wsh.ciclomusic.title": "Ciclomusic",

    // ── SOUND section ─────────────────────────────────────────
    "snd.brand": "Segno Sound",
    "snd.nav.home": "Projects",
    "snd.nav.film": "Film / Series",
    "snd.nav.animation": "Animation",
    "snd.nav.sonic": "Sonic Brand",
    "snd.nav.openings": "Openings",
    "snd.nav.advertising": "Advertising",
    "snd.nav.services": "Services",
    "snd.nav.about": "About",
    "snd.nav.contact": "Contact",
    "snd.title.home": "Projects",
    "snd.kicker.home": "Portfolio",
    "snd.title.film": "Film / Series",
    "snd.kicker.film": "Film &amp; Series",
    "snd.title.animation": "Animation / Gaming",
    "snd.kicker.animation": "Animation &amp; Gaming",
    "snd.title.sonic": "Sonic Brand",
    "snd.kicker.sonic": "Sonic Brand",
    "snd.title.openings": "Openings",
    "snd.kicker.openings": "Openings",
    "snd.title.advertising": "Advertising",
    "snd.kicker.advertising": "Advertising",

    // SERVICES view
    "snd.services.kicker": "Made for broadcast. Built for every screen.",
    "snd.services.title": "Services",
    "snd.stats.projects.label": "Projects delivered",
    "snd.stats.countries.label": "Countries",
    "snd.stats.atmos.label": "Certified mix",
    "snd.studio.caption.control":  "Control room · Dolby Atmos + 5.1 Genelec",
    "snd.studio.caption.desk":     "Mix station · Mac Pro M4",
    "snd.studio.caption.booth":    "Recording booth · Neumann U87i",
    "snd.studio.caption.live":     "Live room · 7.1 surround system",
    "snd.studio.caption.lounge":   "Kitchenette",
    "snd.studio.caption.altview":  "Integrated view · Control + Booth",
    // Service blocks
    "snd.svc.music.kicker":   "Original Music",
    "snd.svc.music.title":    "Music Composition &amp; Supervision",
    "snd.svc.music.body":     "We craft original sonic identities for series, campaigns and brands that need music that doesn't sound like a library. From composition to supervision, we work tight to the creative brief and the production timeline.",
    "snd.svc.design.kicker":  "Sound Design",
    "snd.svc.design.title":   "Sound Design &amp; Audio Post-Production",
    "snd.svc.design.body":    "Sound design, dialog editing, FX and mix for film, series, advertising and interactive experiences. Every delivery meets the technical standards of the most demanding platforms — no compromises along the way.",
    "snd.svc.recording.kicker": "Recording",
    "snd.svc.recording.title":  "Voice &amp; Instrument Recording",
    "snd.svc.recording.body":   "Acoustically treated booth with Neumann U87i, Rode NT2-A and Shure SM7B. Voiceover, dubbing, choir, acoustic instrument sessions and portable field recording with Zoom H4 Ambisonics and Tascam.",
    "snd.svc.voice.kicker":  "Voice &amp; Dubbing",
    "snd.svc.voice.title":   "Voiceover, Dubbing &amp; Voice Acting",
    "snd.svc.voice.body":    "Network of professional voice actors in native English and Latin American Spanish, with in-booth direction, translation and script adaptation. Broadcast-ready delivery — no back-and-forth.",
    "snd.svc.mix.kicker":    "Mixing · Mastering · Atmos",
    "snd.svc.mix.title":     "Mixing &amp; Mastering",
    "snd.svc.mix.body":      "Monitoring system in Dolby Atmos, 5.1 Genelec, 2.0 Event 20/20 BAS and Yamaha NS-10M. We deliver in Stereo, Surround, Ambisonics and Dolby Atmos — the format your platform requires, without negotiating the reference.",
    "snd.svc.sonic.kicker":  "Sonic Branding",
    "snd.svc.sonic.title":   "Sonic Identity",
    "snd.svc.sonic.body":    "We design the sonic universe of your brand: sound logo, audio system for touchpoints, music for corporate events and campaigns. Clients across Argentina, Uruguay and 20+ countries.",
    "snd.rider.title": "Technical Rider",

    // ABOUT view
    "snd.about.kicker":     "Who we are",
    "snd.about.title":      "About",
    "snd.about.studio.kicker": "Studio",
    "snd.about.studio.title":  "Segno Sound",
    "snd.about.studio.body":   "Production company specializing in original music composition, sound design, sonic identity, audio editing, dubbing and surround mixing. With 400+ projects delivered for global platforms, we bring technical precision and creative vision to every production.",
    "snd.about.industry.kicker": "Industry",
    "snd.about.industry.title":  "What we do",
    "snd.about.industry.body":   "Music productions, film, TV, advertising, sonic identity, video games, broadcasting and podcasts.",
    "snd.about.stats.projects": "Projects",
    "snd.about.stats.years":    "Years",
    "snd.about.stats.reach":    "Reach",
    "snd.about.stats.global":   "Global",

    // CONTACT view
    "snd.contact.kicker": "Get in touch",
    "snd.contact.title":  "Contact",
    "snd.contact.email.label":   "Email",
    "snd.contact.phone.label":   "Phone",
    "snd.contact.address.label": "Address",
    "snd.contact.address.value": "Tronador 2030<br>Buenos Aires, Argentina",

    // ── Footer contact block ──────────────────────────────────
    "footer.contact.title": "Contact",

    // ── Page metadata ─────────────────────────────────────────
    "meta.title":       "SEGNO STUDIO — Interactive Installations, Immersive Experiences, Sound Design",
    "meta.description": "SEGNO STUDIO — interactive installations, immersive experiences, music and sound design, apps & web, and innovation workshops. 400+ projects for global platforms.",
    "meta.og.title":    "SEGNO STUDIO",
    "meta.og.desc":     "Interactive installations, immersive experiences, music and sound design, apps & web, workshops.",
  },

  es: {
    // ── Topbar dynamic labels ─────────────────────────────────
    "topbar.scene": "Escena",
    "topbar.voices": "voces",
    "topbar.lang.aria": "Idioma",
    "topbar.lang.en": "Inglés",
    "topbar.lang.es": "Español",

    // ── Hero service links ────────────────────────────────────
    "hero.experiences": "Experiencias Inmersivas",
    "hero.installations": "Instalaciones Interactivas",
    "hero.sound": "Música + Diseño Sonoro",
    "hero.apps": "Apps + Diseño Web",
    "hero.workshops": "Talleres",

    "back.brand": "Segno Studio",

    // ── EXPERIENCIAS ──────────────────────────────────────────
    "exp.brand": "Experiencias Inmersivas",
    "exp.nav.home": "Proyectos",
    "exp.nav.dome": "Fulldome",
    "exp.nav.performance": "Performance",
    "exp.title.home": "Proyectos",
    "exp.kicker.home": "Experiencias Inmersivas",
    "exp.title.dome": "Fulldome",
    "exp.kicker.dome": "Experiencias Inmersivas",
    "exp.title.performance": "Performance",
    "exp.kicker.performance": "Experiencias Inmersivas",

    // ── INSTALACIONES ─────────────────────────────────────────
    "inst.brand": "Instalaciones Interactivas",
    "inst.nav.home": "Proyectos",
    "inst.nav.interactive": "Interactivas",
    "inst.nav.corporate": "Corporativo",
    "inst.nav.events": "Eventos",
    "inst.title.home": "Proyectos",
    "inst.kicker.home": "Instalaciones Interactivas",
    "inst.title.interactive": "Interactivas",
    "inst.kicker.interactive": "Interactivas",
    "inst.title.corporate": "Corporativo",
    "inst.kicker.corporate": "Corporativo",
    "inst.title.events": "Eventos",
    "inst.kicker.events": "Eventos",

    // ── APPS ──────────────────────────────────────────────────
    "apps.brand": "Apps & Web",
    "apps.nav.home": "Proyectos",
    "apps.nav.ar": "AR",
    "apps.nav.retail": "Retail",
    "apps.title.home": "Aplicaciones",
    "apps.kicker.home": "Apps & Web",
    "apps.title.ar": "AR",
    "apps.kicker.ar": "Realidad Aumentada",
    "apps.title.retail": "Retail",
    "apps.kicker.retail": "Retail",

    // ── TALLERES ──────────────────────────────────────────────
    "wsh.brand": "Talleres",
    "wsh.nav.home": "Inicio",
    "wsh.nav.banda": "Banda de Robots",
    "wsh.nav.micra": "MicRA",
    "wsh.nav.astrologio": "Astro.log.io",
    "wsh.nav.ciclomusic": "Ciclomusic",
    "wsh.title.home": "Talleres",
    "wsh.kicker.home": "Laboratorios creativos",
    "wsh.card.tag.workshop": "Taller",
    "wsh.card.tag.lab": "Taller · Laboratorio",

    "wsh.banda.kicker": "Taller · Innovación educativa",
    "wsh.banda.title": "Banda de Robots",
    "wsh.micra.kicker": "Laboratorio de creación colectiva",
    "wsh.micra.title": "MicRA · Micropraxiscopio",
    "wsh.astrologio.kicker": "Laboratorio · Arte + ciencia + tecnología",
    "wsh.astrologio.title": "Astro.log.io",
    "wsh.ciclomusic.kicker": "Taller",
    "wsh.ciclomusic.title": "Ciclomusic",

    // ── SONIDO ────────────────────────────────────────────────
    "snd.brand": "Segno Sound",
    "snd.nav.home": "Proyectos",
    "snd.nav.film": "Cine / Series",
    "snd.nav.animation": "Animación",
    "snd.nav.sonic": "Identidad Sonora",
    "snd.nav.openings": "Aperturas",
    "snd.nav.advertising": "Publicidad",
    "snd.nav.services": "Servicios",
    "snd.nav.about": "Nosotros",
    "snd.nav.contact": "Contacto",
    "snd.title.home": "Proyectos",
    "snd.kicker.home": "Portfolio",
    "snd.title.film": "Cine / Series",
    "snd.kicker.film": "Cine &amp; Series",
    "snd.title.animation": "Animación / Juegos",
    "snd.kicker.animation": "Animación &amp; Juegos",
    "snd.title.sonic": "Identidad Sonora",
    "snd.kicker.sonic": "Identidad Sonora",
    "snd.title.openings": "Aperturas",
    "snd.kicker.openings": "Aperturas",
    "snd.title.advertising": "Publicidad",
    "snd.kicker.advertising": "Publicidad",

    // SERVICES view
    "snd.services.kicker": "Hecho para broadcast. Pensado para cada pantalla.",
    "snd.services.title": "Servicios",
    "snd.stats.projects.label": "Proyectos entregados",
    "snd.stats.countries.label": "Países",
    "snd.stats.atmos.label": "Mezcla certificada",
    "snd.studio.caption.control":  "Sala de control · Dolby Atmos + 5.1 Genelec",
    "snd.studio.caption.desk":     "Estación de mezcla · Mac Pro M4",
    "snd.studio.caption.booth":    "Cabina de grabación · Neumann U87i",
    "snd.studio.caption.live":     "Sala live · Sistema surround 7.1",
    "snd.studio.caption.lounge":   "Kitchenette",
    "snd.studio.caption.altview":  "Vista integrada · Control + Cabina",
    "snd.svc.music.kicker":   "Música original",
    "snd.svc.music.title":    "Composición y Supervisión Musical",
    "snd.svc.music.body":     "Creamos identidades sonoras originales para series, campañas y marcas que necesitan música que no suene a biblioteca. Desde la composición hasta la supervisión, trabajamos integrados al brief creativo y a los tiempos de producción.",
    "snd.svc.design.kicker":  "Diseño sonoro",
    "snd.svc.design.title":   "Diseño sonoro y Postproducción de Audio",
    "snd.svc.design.body":    "Diseño sonoro, edición de diálogos, efectos y mezcla para cine, series, publicidad y experiencias interactivas. Cada entrega cumple los estándares técnicos de las plataformas más exigentes — sin compromisos en el camino.",
    "snd.svc.recording.kicker": "Grabación",
    "snd.svc.recording.title":  "Grabación de voces e instrumentos",
    "snd.svc.recording.body":   "Cabina acondicionada acústicamente con Neumann U87i, Rode NT2-A y Shure SM7B. Sesiones de voces en off, doblaje, coros, instrumentos acústicos y field recording portátil con Zoom H4 Ambisonics y Tascam.",
    "snd.svc.voice.kicker":  "Voz y Doblaje",
    "snd.svc.voice.title":   "Voiceover, Doblaje y Locución",
    "snd.svc.voice.body":    "Red de actores de voz profesionales en inglés nativo y español latinoamericano, con dirección en sala, traducción y adaptación de guiones. Entrega lista para broadcast — sin idas y vueltas.",
    "snd.svc.mix.kicker":    "Mezcla · Mastering · Atmos",
    "snd.svc.mix.title":     "Mezcla &amp; Mastering",
    "snd.svc.mix.body":      "Sistema de monitoreo Dolby Atmos, 5.1 Genelec, 2.0 Event 20/20 BAS y Yamaha NS-10M. Entregamos en Stereo, Surround, Ambisonics y Dolby Atmos — el formato que tu plataforma exige, sin negociar la referencia.",
    "snd.svc.sonic.kicker":  "Identidad sonora",
    "snd.svc.sonic.title":   "Identidad sonora",
    "snd.svc.sonic.body":    "Diseñamos el universo sonoro de tu marca: logo sonoro, sistema de audio para puntos de contacto, música para eventos corporativos y campañas. Clientes en Argentina, Uruguay y más de 20 países.",
    "snd.rider.title": "Rider técnico",

    // ABOUT view
    "snd.about.kicker":     "Quiénes somos",
    "snd.about.title":      "Nosotros",
    "snd.about.studio.kicker": "Estudio",
    "snd.about.studio.title":  "Segno Sound",
    "snd.about.studio.body":   "Productora especializada en composición musical original, diseño sonoro, identidad sonora, edición de audio, doblaje y mezcla surround. Con más de 400 proyectos entregados para plataformas globales, aportamos precisión técnica y visión creativa a cada producción.",
    "snd.about.industry.kicker": "Industria",
    "snd.about.industry.title":  "Qué hacemos",
    "snd.about.industry.body":   "Producciones musicales, cine, TV, publicidad, identidad sonora, videojuegos, broadcasting y podcasts.",
    "snd.about.stats.projects": "Proyectos",
    "snd.about.stats.years":    "Años",
    "snd.about.stats.reach":    "Alcance",
    "snd.about.stats.global":   "Global",

    // CONTACT view
    "snd.contact.kicker": "Ponete en contacto",
    "snd.contact.title":  "Contacto",
    "snd.contact.email.label":   "Correo",
    "snd.contact.phone.label":   "Teléfono",
    "snd.contact.address.label": "Dirección",
    "snd.contact.address.value": "Tronador 2030<br>Buenos Aires, Argentina",

    "footer.contact.title": "Contacto",

    "meta.title":       "SEGNO STUDIO — Instalaciones Interactivas, Experiencias Inmersivas, Diseño Sonoro",
    "meta.description": "SEGNO STUDIO — instalaciones interactivas, experiencias inmersivas, música y diseño sonoro, apps & web, y talleres de innovación. Más de 400 proyectos para plataformas globales.",
    "meta.og.title":    "SEGNO STUDIO",
    "meta.og.desc":     "Instalaciones interactivas, experiencias inmersivas, música y diseño sonoro, apps & web, talleres.",
  },
};
