/**
 * ====================================================================
 * SCRIPT INTERACTIF & BILINGUE (EN / FR) - PORTFOLIO ZACHARY ARNAUD
 * Version anglaise prioritaire par défaut au lancement
 * ====================================================================
 */

// État global de l'application
let currentLang = 'en'; // Anglais prioritaire par défaut
let currentAbilityIdx = 0;
let currentExperienceIdx = 0;
let isBioExpanded = false;
let lastEmoteIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
  // Récupère la langue sauvegardée si présente, sinon anglais par défaut
  const savedLang = localStorage.getItem('portfolio_lang');
  if (savedLang === 'fr' || savedLang === 'en') {
    currentLang = savedLang;
  } else {
    currentLang = 'en';
  }

  // Initialisations statiques (structure DOM et écouteurs d'événements)
  initAbilitiesStructure();
  initExperiencesStructure();
  initSideTracker();
  initContactModalEvents();
  initLanguageSwitcher();

  // Application de la langue initiale
  applyLanguage(currentLang);
});

/* ====================================================================
   0. GESTION DU CHANGEMENT DE LANGUE (BILINGUISME EN / FR)
   ==================================================================== */
function getCurrentData() {
  const map = window.CHAMPION_DATA_MAP || {};
  return map[currentLang] || map.en;
}

function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-btn-en');
  const btnFr = document.getElementById('lang-btn-fr');

  function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', currentLang);
    applyLanguage(currentLang);
  }

  if (btnEn) {
    btnEn.addEventListener('click', () => switchLang('en'));
  }
  if (btnFr) {
    btnFr.addEventListener('click', () => switchLang('fr'));
  }
}

function applyLanguage(lang) {
  const data = getCurrentData();
  if (!data) return;

  // 1. Attribut lang du document HTML
  document.documentElement.lang = lang;

  // 2. Boutons du commutateur EN / FR
  const btnEn = document.getElementById('lang-btn-en');
  const btnFr = document.getElementById('lang-btn-fr');
  if (btnEn && btnFr) {
    btnEn.classList.toggle('active', lang === 'en');
    btnFr.classList.toggle('active', lang === 'fr');
  }

  // 3. Titre de page et bouton Me Contacter
  if (data.pageTitle) document.title = data.pageTitle;
  const navContactText = document.getElementById('nav-contact-text');
  if (navContactText && data.nav) navContactText.textContent = data.nav.contactBtn;

  // 4. Tracker latéral fixe
  const trackerOverview = document.getElementById('side-tracker-overview');
  const trackerAbilities = document.getElementById('side-tracker-abilities');
  const trackerExperiences = document.getElementById('side-tracker-experiences');
  if (trackerOverview && data.nav) trackerOverview.textContent = data.nav.overview;
  if (trackerAbilities && data.nav) trackerAbilities.textContent = data.nav.abilities;
  if (trackerExperiences && data.nav) trackerExperiences.textContent = data.nav.experiences;

  // 5. Section Vue d'ensemble (Hero + Carte)
  updateOverviewSection(data);

  // 6. Section Compétences
  updateAbilitiesSection(data);

  // 7. Section Expériences & Projets
  updateExperiencesSection(data);

  // 8. Modale Pop-up de contact
  updateContactModalTexts(data);

  // 9. Pied de page
  const footerText = document.getElementById('footer-text');
  if (footerText && data.footer) footerText.innerHTML = data.footer;
}

/* ====================================================================
   1. SECTION 1 : VUE D'ENSEMBLE (HERO + CARTE INFOS)
   ==================================================================== */
function updateOverviewSection(data) {
  // Splash, Sous-titre et Titre
  const splashImg = document.getElementById('overview-splash-img');
  if (splashImg && data.heroSplash) splashImg.src = data.heroSplash;

  const subtitleEl = document.getElementById('overview-subtitle');
  if (subtitleEl) subtitleEl.textContent = data.subtitle;

  const titleEl = document.getElementById('overview-title');
  if (titleEl) titleEl.textContent = data.name;

  // Rôle
  const roleLabel = document.getElementById('role-label-tag');
  if (roleLabel && data.role) roleLabel.textContent = data.role.label || 'ROLE';

  const roleName = document.getElementById('role-name');
  if (roleName && data.role) roleName.textContent = data.role.name;

  // Expérience (barres obliques cyan)
  const barsContainer = document.getElementById('experience-bars');
  if (barsContainer && data.experience) {
    barsContainer.innerHTML = '';
    for (let i = 1; i <= data.experience.max; i++) {
      const bar = document.createElement('span');
      bar.className = `slanted-bar ${i <= data.experience.level ? 'active' : ''}`;
      barsContainer.appendChild(bar);
    }
  }

  const expLabelTag = document.getElementById('experience-label-tag');
  if (expLabelTag && data.experience) expLabelTag.textContent = data.experience.label;

  const expValue = document.getElementById('experience-value');
  if (expValue && data.experience) expValue.textContent = data.experience.value;

  // Biographie avec bouton Voir plus / Read more
  renderBio(data);

  // Bandeau Réseaux & Coordonnées
  const masteryTagLabel = document.getElementById('mastery-tag-label');
  if (masteryTagLabel && data.masteryTag) masteryTagLabel.textContent = data.masteryTag;

  const masteryContainer = document.getElementById('mastery-links-container');
  if (masteryContainer) {
    masteryContainer.innerHTML = '';
    const contactList = data.contacts || [];
    contactList.forEach((item, index) => {
      if (item.type === 'link' || (item.url && !item.value)) {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'contact-link';
        a.textContent = item.label || 'LINKEDIN';
        masteryContainer.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.className = 'contact-text-item';
        span.innerHTML = `<span class="contact-label">${item.label}:</span><span class="contact-value">${item.value}</span>`;
        masteryContainer.appendChild(span);
      }

      if (index < contactList.length - 1) {
        const sep = document.createElement('span');
        sep.className = 'contact-dot-sep';
        sep.textContent = '•';
        masteryContainer.appendChild(sep);
      }
    });
  }
}

function renderBio(data) {
  const bioContainer = document.getElementById('bio-text');
  if (!bioContainer) return;

  const fullBio = data.biography || '';
  const shortBio = fullBio.slice(0, 230) + '...';
  const seeMoreText = data.seeMore || 'READ MORE';
  const seeLessText = data.seeLess || 'READ LESS';

  bioContainer.innerHTML = `
    ${isBioExpanded ? fullBio : shortBio}
    <button id="toggle-bio-btn" class="see-more-link">${isBioExpanded ? seeLessText : seeMoreText}</button>
  `;

  const btn = document.getElementById('toggle-bio-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      isBioExpanded = !isBioExpanded;
      renderBio(getCurrentData());
    });
  }
}

/* ====================================================================
   2. SECTION 2 : COMPÉTENCES
   ==================================================================== */
function initAbilitiesStructure() {
  const data = getCurrentData();
  const iconsTrack = document.getElementById('ability-icons-track');
  const nodesTrack = document.getElementById('ability-nodes-track');
  if (!iconsTrack || !nodesTrack || !data.abilities) return;

  iconsTrack.innerHTML = '';
  nodesTrack.innerHTML = '';

  data.abilities.forEach((ability, index) => {
    // Carte icône
    const card = document.createElement('div');
    card.className = `ability-icon-card ${index === currentAbilityIdx ? 'active' : ''}`;
    card.setAttribute('data-index', index);
    card.innerHTML = `<img src="${ability.icon}" alt="${ability.name}">`;
    card.addEventListener('click', () => selectAbility(index));
    iconsTrack.appendChild(card);

    // Nœud sur la timeline
    const nodeWrapper = document.createElement('div');
    nodeWrapper.className = 'timeline-node-item';
    const dot = document.createElement('span');
    dot.className = `timeline-dot ${index === currentAbilityIdx ? 'active' : ''}`;
    nodeWrapper.appendChild(dot);
    nodesTrack.appendChild(nodeWrapper);
  });
}

function selectAbility(index) {
  currentAbilityIdx = index;
  const data = getCurrentData();
  if (!data.abilities || !data.abilities[index]) return;

  const ability = data.abilities[index];
  const abilityImg = document.getElementById('ability-image-element');
  const titleEl = document.getElementById('ability-title');
  const descEl = document.getElementById('ability-desc');

  // Mise à jour de l'icône active
  document.querySelectorAll('.ability-icon-card').forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });

  // Mise à jour du nœud doré sur la timeline
  document.querySelectorAll('.timeline-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });

  // Textes
  if (titleEl) titleEl.textContent = ability.name.toUpperCase();
  if (descEl) descEl.textContent = ability.description;

  // Image d'illustration
  if (abilityImg) {
    if (!abilityImg.getAttribute('src')) {
      abilityImg.src = ability.image;
      abilityImg.alt = ability.name;
    } else {
      abilityImg.classList.add('fade-out');
      setTimeout(() => {
        abilityImg.src = ability.image;
        abilityImg.alt = ability.name;
        abilityImg.classList.remove('fade-out');
      }, 150);
    }
  }
}

function updateAbilitiesSection(data) {
  const heading = document.getElementById('abilities-heading');
  if (heading && data.abilitiesHeading) heading.textContent = data.abilitiesHeading;

  // Met à jour les tooltips et textes
  const cards = document.querySelectorAll('.ability-icon-card');
  cards.forEach((card, idx) => {
    if (data.abilities[idx]) {
      card.setAttribute('title', data.abilities[idx].name);
    }
  });

  selectAbility(currentAbilityIdx);
}

/* ====================================================================
   3. SECTION 3 : EXPÉRIENCES & PROJETS
   ==================================================================== */
function initExperiencesStructure() {
  const data = getCurrentData();
  const experiences = data.experiences || [];
  const listContainer = document.getElementById('experiences-vertical-list');
  if (!listContainer || experiences.length === 0) return;

  listContainer.innerHTML = '';
  experiences.forEach((exp, index) => {
    const row = document.createElement('div');
    row.className = `skin-row-item ${index === currentExperienceIdx ? 'active' : ''}`;
    row.setAttribute('data-index', index);

    row.innerHTML = `
      <div class="skin-thumb-box">
        <img src="${exp.thumbnail || exp.splash}" alt="${exp.title}" loading="lazy">
      </div>
      <span class="skin-row-title">${exp.title}</span>
    `;

    row.addEventListener('click', () => {
      selectExperience(index);
    });

    listContainer.appendChild(row);
  });
}

function selectExperience(index) {
  currentExperienceIdx = index;
  const data = getCurrentData();
  const experiences = data.experiences || [];
  if (!experiences[index]) return;

  const exp = experiences[index];
  const splashImg = document.getElementById('skin-active-splash');
  const detailsCard = document.getElementById('experience-details-box');
  const listContainer = document.getElementById('experiences-vertical-list');

  const periodEl = document.getElementById('exp-period');
  const titleEl = document.getElementById('exp-title');
  const roleEl = document.getElementById('exp-role');
  const summaryEl = document.getElementById('exp-summary');
  const highlightsEl = document.getElementById('exp-highlights');

  // Transition fluide
  if (splashImg) splashImg.classList.add('fade-out');
  if (detailsCard) detailsCard.classList.add('fade-out');

  setTimeout(() => {
    if (splashImg) {
      splashImg.src = exp.splash;
      splashImg.alt = exp.title;
    }

    const logoBox = document.getElementById('exp-card-logo-box');
    const logoImg = document.getElementById('exp-card-logo');
    if (logoBox && logoImg) {
      if (exp.logo) {
        logoImg.src = exp.logo;
        logoImg.alt = exp.title;
        logoBox.style.display = 'flex';
      } else {
        logoBox.style.display = 'none';
      }
    }

    if (periodEl) periodEl.textContent = exp.period;
    if (titleEl) titleEl.textContent = exp.title;
    if (roleEl) roleEl.textContent = exp.role;
    if (summaryEl) summaryEl.textContent = exp.summary;

    if (highlightsEl) {
      highlightsEl.innerHTML = '';
      exp.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        highlightsEl.appendChild(li);
      });
    }

    if (splashImg) splashImg.classList.remove('fade-out');
    if (detailsCard) detailsCard.classList.remove('fade-out');
  }, 180);

  if (listContainer) {
    const rows = listContainer.querySelectorAll('.skin-row-item');
    rows.forEach((row, idx) => {
      row.classList.toggle('active', idx === index);
    });
  }
}

function updateExperiencesSection(data) {
  const heading = document.getElementById('skins-main-heading');
  if (heading && data.experiencesHeading) {
    heading.innerHTML = `<span>${data.experiencesHeading.line1}</span><span>${data.experiencesHeading.line2}</span>`;
  }

  // Met à jour les titres de la liste verticale
  const listContainer = document.getElementById('experiences-vertical-list');
  if (listContainer && data.experiences) {
    const rows = listContainer.querySelectorAll('.skin-row-item');
    rows.forEach((row, idx) => {
      const exp = data.experiences[idx];
      if (exp) {
        const titleSpan = row.querySelector('.skin-row-title');
        if (titleSpan) titleSpan.textContent = exp.title;
      }
    });
  }

  selectExperience(currentExperienceIdx);
}

/* ====================================================================
   4. TRACKER LATÉRAL FIXE (SYNCHRONISÉ AVEC LE FOND BLANC)
   ==================================================================== */
function initSideTracker() {
  const tracker = document.getElementById('side-tracker');
  const trackerItems = document.querySelectorAll('.side-tracker-item');
  const sections = [
    document.getElementById('overview'),
    document.getElementById('abilities'),
    document.getElementById('experiences')
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;
    let currentId = 'overview';

    sections.forEach(sec => {
      if (!sec) return;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    trackerItems.forEach(item => {
      item.classList.toggle('active', item.dataset.target === currentId);
    });

    if (tracker) {
      tracker.classList.toggle('on-light-bg', currentId === 'experiences');
    }
  });
}

/* ====================================================================
   5. MODALE POP-UP CONTACT LIGHT (AVEC ÉMOTE ALÉATOIRE & EASTER EGG)
   ==================================================================== */
function updateContactModalTexts(data) {
  const modalConfig = data.contactModal || {};
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');
  const modalEyebrow = document.getElementById('modal-eyebrow');
  const linkedinBadge = document.getElementById('modal-linkedin-badge');
  const emailLabel = document.getElementById('modal-email-label');
  const phoneLabel = document.getElementById('modal-phone-label');
  const emailCopyBtn = document.getElementById('modal-email-copy-label');
  const phoneCopyBtn = document.getElementById('modal-phone-copy-label');

  if (modalTitle && modalConfig.title) modalTitle.textContent = modalConfig.title;
  if (modalMessage && modalConfig.message) modalMessage.textContent = modalConfig.message;
  if (modalEyebrow && modalConfig.tagline) modalEyebrow.textContent = modalConfig.tagline;
  if (linkedinBadge && modalConfig.openLabel) linkedinBadge.textContent = modalConfig.openLabel;
  if (emailLabel && modalConfig.emailLabel) emailLabel.textContent = modalConfig.emailLabel;
  if (phoneLabel && modalConfig.phoneLabel) phoneLabel.textContent = modalConfig.phoneLabel;

  if (emailCopyBtn && !emailCopyBtn.closest('.modal-copy-btn').classList.contains('copied')) {
    emailCopyBtn.textContent = modalConfig.copyLabel || 'COPY';
  }
  if (phoneCopyBtn && !phoneCopyBtn.closest('.modal-copy-btn').classList.contains('copied')) {
    phoneCopyBtn.textContent = modalConfig.copyLabel || 'COPY';
  }
}

function pickRandomEmote() {
  const data = getCurrentData();
  const modalConfig = data.contactModal || {};
  const emotes = modalConfig.emotes || [];
  const emoteImg = document.getElementById('modal-random-emote');
  const pedestal = document.querySelector('.modal-emote-pedestal');

  if (!emoteImg) return;

  const rare = modalConfig.rareEmote;
  // 3% de chance d'obtenir l'émote rare T1 GOAT
  const isRare = rare && Math.random() < (rare.chance || 0.03);

  let chosenSrc;
  if (isRare) {
    chosenSrc = rare.src;
    if (pedestal) pedestal.classList.add('t1-rare-glow');
  } else {
    if (pedestal) pedestal.classList.remove('t1-rare-glow');
    if (emotes.length === 0) return;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * emotes.length);
    } while (emotes.length > 1 && randomIndex === lastEmoteIndex);
    lastEmoteIndex = randomIndex;
    chosenSrc = emotes[randomIndex];
  }

  // Animation pop de l'émote
  emoteImg.style.animation = 'none';
  void emoteImg.offsetWidth;
  emoteImg.src = chosenSrc;
  emoteImg.style.animation = '';
}

function initContactModalEvents() {
  const modal = document.getElementById('contact-modal');
  const openBtn = document.getElementById('open-contact-modal-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('contact-modal-backdrop');

  if (!modal || !openBtn) return;

  function openModal() {
    pickRandomEmote();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Fermeture via la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Copie rapide avec retour visuel adapté à la langue
  function setupCopyButton(btnId, rowId, textToCopy) {
    const btn = document.getElementById(btnId);
    const row = document.getElementById(rowId);
    if (!btn || !row) return;

    function handleCopy(e) {
      e.stopPropagation();
      const currentConfig = (getCurrentData().contactModal) || {};
      const copyLabel = currentConfig.copyLabel || 'COPY';
      const copiedLabel = currentConfig.copiedLabel || 'COPIED!';

      navigator.clipboard.writeText(textToCopy).then(() => {
        const label = btn.querySelector('.copy-label') || btn;
        label.textContent = copiedLabel;
        btn.classList.add('copied');

        setTimeout(() => {
          label.textContent = copyLabel;
          btn.classList.remove('copied');
        }, 1800);
      }).catch(err => {
        console.error('Erreur lors de la copie:', err);
      });
    }

    btn.addEventListener('click', handleCopy);
    row.addEventListener('click', (e) => {
      if (e.target !== btn && !btn.contains(e.target)) {
        handleCopy(e);
      }
    });
  }

  setupCopyButton('btn-copy-email', 'modal-copy-email', 'zacharyarnaud7@gmail.com');
  setupCopyButton('btn-copy-phone', 'modal-copy-phone', '+33 7 83 22 39 74');
}
