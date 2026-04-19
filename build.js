const fs = require('fs');
const path = require('path');

const LEVELS = {
  "6e": { name: "Sixième",   desc: "Les bases du collège : nombres, fractions, géométrie." },
  "5e": { name: "Cinquième", desc: "On monte en puissance : relatifs, Pythagore, calcul littéral." },
  "4e": { name: "Quatrième", desc: "Les chapitres clés : équations, Thalès, trigonométrie." },
  "3e": { name: "Troisième", desc: "La ligne droite vers le brevet." },
};

const DATA = {
  "6e": [
    { num:"01", title:"Nombres entiers et décimaux", resources:[
      { type:"cours", label:"Cours PDF — Nombres entiers et décimaux", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/25Nombres1.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=LOp-LK2XQ5A" },
      { type:"video", label:"Vidéo — Comparer les décimaux", tag:"video", href:"https://www.youtube.com/watch?v=fr5GemewG4Q" },
      { type:"video", label:"Vidéo — Arrondir un nombre", tag:"video", href:"https://www.youtube.com/watch?v=KvYvKm70y00" },
    ]},
    { num:"02", title:"Opérations — Addition, soustraction, multiplication", resources:[
      { type:"cours", label:"Cours PDF — Opérations de base", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/25Operations.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=UyOard2MfNU" },
      { type:"video", label:"Vidéo — Priorités opératoires", tag:"video", href:"https://www.youtube.com/watch?v=TJH-fiwAt5s" },
    ]},
    { num:"03", title:"Division et durées", resources:[
      { type:"video", label:"Vidéo — Effectuer une division", tag:"video", href:"https://www.youtube.com/watch?v=idB0-F7b1Yk" },
      { type:"video", label:"Vidéo — Calculs de durées", tag:"video", href:"https://www.youtube.com/watch?v=6_UeJI7JWTU" },
    ]},
    { num:"04", title:"Fractions", resources:[
      { type:"cours",   label:"Cours PDF — Fractions", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/25Nombres2.pdf" },
      { type:"video",   label:"Vidéo — Reconnaître une fraction", tag:"video", href:"https://www.youtube.com/watch?v=bpMepmTl4Ww" },
      { type:"video",   label:"Vidéo — Fractions égales", tag:"video", href:"https://www.youtube.com/watch?v=6AiX2DuI03Q" },
      { type:"video",   label:"Vidéo — Comparer et ranger", tag:"video", href:"https://www.youtube.com/watch?v=zzRX2N3o6xM" },
      { type:"video",   label:"Vidéo — Problème avec fractions", tag:"video", href:"https://www.youtube.com/watch?v=qm8YLSWtGXQ" },
      { type:"exo",     label:"Exercices — Fractions (Sésamath)", tag:"exo", href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_6N5.pdf" },
      { type:"corrige", label:"Contrôle type (Sésamath)", tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_6N5.pdf" },
    ]},
    { num:"05", title:"Proportionnalité et pourcentages", resources:[
      { type:"video", label:"Vidéo — Reconnaître une proportionnalité", tag:"video", href:"https://www.youtube.com/watch?v=qs9vs_W_GD4" },
      { type:"video", label:"Vidéo — Résoudre un problème", tag:"video", href:"https://www.youtube.com/watch?v=mxzNn5zcEqs" },
      { type:"video", label:"Vidéo — Pourcentages", tag:"video", href:"https://www.youtube.com/watch?v=fCDe27qL4Ko" },
    ]},
    { num:"06", title:"Parallèles, perpendiculaires et angles", resources:[
      { type:"video", label:"Vidéo — Droites parallèles et perpendiculaires", tag:"video", href:"https://www.youtube.com/watch?v=NYD4iynRWMA" },
      { type:"video", label:"Vidéo — Mesurer un angle", tag:"video", href:"https://www.youtube.com/watch?v=icGHAYyXaE4" },
    ]},
    { num:"07", title:"Triangles et quadrilatères", resources:[
      { type:"video", label:"Vidéo — Construire un triangle", tag:"video", href:"https://www.youtube.com/watch?v=14XxGsJKniI" },
      { type:"video", label:"Vidéo — Les quadrilatères", tag:"video", href:"https://www.youtube.com/watch?v=MX2ASbYum_I" },
    ]},
    { num:"08", title:"Symétrie axiale et médiatrice", resources:[
      { type:"video", label:"Vidéo — Symétrique d'un point", tag:"video", href:"https://www.youtube.com/watch?v=1m7mBRT3eAc" },
      { type:"video", label:"Vidéo — La médiatrice", tag:"video", href:"https://www.youtube.com/watch?v=70UhgN2FssQ" },
    ]},
    { num:"09", title:"Aires et périmètres", resources:[
      { type:"video", label:"Vidéo — Rectangle", tag:"video", href:"https://www.youtube.com/watch?v=ZQIowPriBhg" },
      { type:"video", label:"Vidéo — Triangle", tag:"video", href:"https://www.youtube.com/watch?v=i75HKdds3Gc" },
      { type:"video", label:"Vidéo — Cercle", tag:"video", href:"https://www.youtube.com/watch?v=CqQBuJVMjBE" },
    ]},
    { num:"10", title:"Volumes, statistiques et probabilités", resources:[
      { type:"video", label:"Vidéo — Volume du pavé droit", tag:"video", href:"https://www.youtube.com/watch?v=qabaDLOdk4I" },
      { type:"video", label:"Vidéo — Lire un diagramme", tag:"video", href:"https://www.youtube.com/watch?v=dFq6sJdRbo4" },
      { type:"video", label:"Vidéo — Introduction aux probabilités", tag:"video", href:"https://www.youtube.com/watch?v=s26CK2wO9x8" },
    ]},
  ],
  "5e": [
    { num:"01", title:"Règles de calcul et priorités", resources:[
      { type:"cours", label:"Cours PDF — Priorités", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Calcul_num.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=r1dzDGtPm7A" },
      { type:"video", label:"Vidéo — Priorités niveau 1", tag:"video", href:"https://www.youtube.com/watch?v=TJH-fiwAt5s" },
      { type:"video", label:"Vidéo — Priorités niveau 2", tag:"video", href:"https://www.youtube.com/watch?v=kNOR38ZuBRc" },
    ]},
    { num:"02", title:"Fractions et opérations", resources:[
      { type:"cours", label:"Cours PDF — Fractions ch.1", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Fract1.pdf" },
      { type:"cours", label:"Cours PDF — Fractions ch.2", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Fract2.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=m0HUFgWbgsA" },
      { type:"video", label:"Vidéo — Additions et soustractions", tag:"video", href:"https://www.youtube.com/watch?v=lGShZVQlXMQ" },
      { type:"exo", label:"Exercice — Comparer des fractions", tag:"exo", href:"https://www.youtube.com/watch?v=ZNSUFQyiYIU" },
    ]},
    { num:"03", title:"Arithmétique — Multiples et diviseurs", resources:[
      { type:"cours", label:"Cours PDF — Arithmétique", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Arith5e.pdf" },
      { type:"video", label:"Vidéo — Critères de divisibilité", tag:"video", href:"https://www.youtube.com/watch?v=BJDE6uOrmYQ" },
      { type:"video", label:"Vidéo — Nombres premiers", tag:"video", href:"https://www.youtube.com/watch?v=g9PLLhnCv88" },
    ]},
    { num:"04", title:"Nombres relatifs", resources:[
      { type:"cours", label:"Cours PDF — Nombres relatifs", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Nomb_rel2.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=YivvFtSuzno" },
      { type:"video", label:"Vidéo — Additions et soustractions", tag:"video", href:"https://www.youtube.com/watch?v=9L4lz1NMPoY" },
    ]},
    { num:"05", title:"Calcul littéral", resources:[
      { type:"video", label:"Vidéo — Expressions littérales", tag:"video", href:"https://www.youtube.com/watch?v=_yF5ItbcN28" },
      { type:"video", label:"Vidéo — Calculs avec quotients", tag:"video", href:"https://www.youtube.com/watch?v=yr1anMpCoSM" },
    ]},
    { num:"06", title:"Théorème de Pythagore", resources:[
      { type:"cours",   label:"Cours PDF — Pythagore", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Pythagore.pdf" },
      { type:"video",   label:"Vidéo — Le cours complet", tag:"video", href:"https://www.youtube.com/watch?v=QYM86GzWWG8" },
      { type:"video",   label:"Vidéo — Calculer l'hypoténuse", tag:"video", href:"https://www.youtube.com/watch?v=M9sceJ8gzNc" },
      { type:"video",   label:"Vidéo — Réciproque de Pythagore", tag:"video", href:"https://www.youtube.com/watch?v=uyfLil7gzak" },
      { type:"video",   label:"Vidéo — Problème avec Pythagore", tag:"video", href:"https://www.youtube.com/watch?v=gBuzFW_GlGc" },
      { type:"exo",     label:"Exercice corrigé — Pythagore", tag:"exo", href:"https://www.youtube.com/watch?v=mzxJG4NBiEY" },
    ]},
    { num:"07", title:"Proportionnalité", resources:[
      { type:"video", label:"Vidéo — Résoudre un problème", tag:"video", href:"https://www.youtube.com/watch?v=mLlLNM5D66M" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video", label:"Vidéo — Probabilités (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=B48IJDuyACg" },
    ]},
  ],
  "4e": [
    { num:"01", title:"Nombres relatifs — Multiplication et division", resources:[
      { type:"cours", label:"Cours PDF — Nombres relatifs", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Nomb_rela.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=mAK5sYfze0w" },
      { type:"video", label:"Vidéo — Règle des signes (1)", tag:"video", href:"https://www.youtube.com/watch?v=q-vHvhiizqY" },
      { type:"video", label:"Vidéo — Règle des signes (2)", tag:"video", href:"https://www.youtube.com/watch?v=l_BleoCE-3Y" },
    ]},
    { num:"02", title:"Fractions — Multiplication et division", resources:[
      { type:"cours", label:"Cours PDF — Fractions ch.1", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Fractions1.pdf" },
      { type:"cours", label:"Cours PDF — Fractions ch.2", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Fractions2.pdf" },
      { type:"video", label:"Vidéo — Multiplications de fractions", tag:"video", href:"https://www.youtube.com/watch?v=j27kXXrw3Xk" },
      { type:"video", label:"Vidéo — Divisions de fractions", tag:"video", href:"https://www.youtube.com/watch?v=7_hZWOoMBSA" },
    ]},
    { num:"03", title:"Puissances", resources:[
      { type:"cours", label:"Cours PDF — Puissances", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Puiss.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=IxCzv5FPJ3s" },
      { type:"video", label:"Vidéo — Notation des puissances", tag:"video", href:"https://www.youtube.com/watch?v=jts9wiXPHtk" },
    ]},
    { num:"04", title:"Calcul littéral — Développement et factorisation", resources:[
      { type:"video", label:"Vidéo — Développer (distributivité)", tag:"video", href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
      { type:"video", label:"Vidéo — Double distributivité", tag:"video", href:"https://www.youtube.com/watch?v=YS-3JI_z2f0" },
    ]},
    { num:"05", title:"Équations du 1er degré", resources:[
      { type:"cours",   label:"Cours PDF — Équations", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Equations.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=p_-4EYjsOiA" },
      { type:"video",   label:"Vidéo — Résoudre une équation simple", tag:"video", href:"https://www.youtube.com/watch?v=Bf11wk3SMTY" },
      { type:"video",   label:"Vidéo — Mise en équation", tag:"video", href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
      { type:"exo",     label:"Exercices — Équations (Sésamath)", tag:"exo", href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_4A3.pdf" },
      { type:"corrige", label:"Contrôle type (Sésamath)", tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_4A3.pdf" },
    ]},
    { num:"06", title:"Théorème de Thalès", resources:[
      { type:"video", label:"Vidéo — Calculer une longueur", tag:"video", href:"https://www.youtube.com/watch?v=XcsbENjMFZo" },
      { type:"video", label:"Vidéo — Réciproque de Thalès", tag:"video", href:"https://www.youtube.com/watch?v=nsc675xcjPc" },
    ]},
    { num:"07", title:"Trigonométrie", resources:[
      { type:"video", label:"Vidéo — Le cosinus", tag:"video", href:"https://www.youtube.com/watch?v=9nwZMLmoag8" },
      { type:"video", label:"Vidéo — Calculer un angle", tag:"video", href:"https://www.youtube.com/watch?v=0rn5R3-vutQ" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video", label:"Vidéo — Probabilités", tag:"video", href:"https://www.youtube.com/watch?v=b4WF4_TJGXE" },
    ]},
  ],
  "3e": [
    { num:"01", title:"Calculs numériques — Fractions et puissances", resources:[
      { type:"cours", label:"Cours PDF — Calculs numériques", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Calc_numeriq.pdf" },
      { type:"video", label:"Vidéo — Fractions (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=Z86gfJOKgBg" },
      { type:"video", label:"Vidéo — Puissances", tag:"video", href:"https://www.youtube.com/watch?v=IKmReDkNGp8" },
      { type:"video", label:"Vidéo — Notation scientifique", tag:"video", href:"https://www.youtube.com/watch?v=tzhNCpLRtCY" },
      { type:"exo", label:"Exercice brevet — Fractions et puissances", tag:"exo", href:"https://www.youtube.com/watch?v=15Jad7dbshs" },
    ]},
    { num:"02", title:"Développements — Identités remarquables", resources:[
      { type:"cours", label:"Cours PDF — Développements", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Dev3e.pdf" },
      { type:"video", label:"Vidéo — Le cours (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=F78Sm4HCHxA" },
      { type:"video", label:"Vidéo — Identité (a-b)(a+b)", tag:"video", href:"https://www.youtube.com/watch?v=6j0oMQlaBYg" },
    ]},
    { num:"03", title:"Factorisations", resources:[
      { type:"video", label:"Vidéo — Factoriser (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
    ]},
    { num:"04", title:"Équations du 1er degré", resources:[
      { type:"video", label:"Vidéo — Résoudre une équation", tag:"video", href:"https://www.youtube.com/watch?v=g1tyDEz71hw" },
      { type:"video", label:"Vidéo — Mise en équation", tag:"video", href:"https://www.youtube.com/watch?v=-h9kFZcULz8" },
    ]},
    { num:"05", title:"Fonctions linéaires et affines", resources:[
      { type:"video", label:"Vidéo — Notion de fonction", tag:"video", href:"https://www.youtube.com/watch?v=3rXse_lbAKk" },
      { type:"video", label:"Vidéo — Fonctions affines", tag:"video", href:"https://www.youtube.com/watch?v=WBip-WeQtkM" },
    ]},
    { num:"06", title:"Théorème de Thalès", resources:[
      { type:"video", label:"Vidéo — Thalès (Yvan Monka)", tag:"video", href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
    ]},
    { num:"07", title:"Trigonométrie", resources:[
      { type:"video", label:"Vidéo — sinus et cosinus", tag:"video", href:"https://www.youtube.com/watch?v=RtstlSW1Jg0" },
      { type:"video", label:"Vidéo — La tangente", tag:"video", href:"https://www.youtube.com/watch?v=4kwH1rM992Q" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video", label:"Vidéo — Probabilités", tag:"video", href:"https://www.youtube.com/watch?v=_iwHYbuZ4N8" },
    ]},
    { num:"09", title:"Formulaire brevet complet", resources:[
      { type:"cours", label:"Formulaire PDF — Tout le cours 3e", tag:"cours", href:"https://www.maths-et-tiques.fr/telech/19Formulaire3e.pdf" },
      { type:"video", label:"Vidéo — Conseils pour réussir", tag:"video", href:"https://www.youtube.com/watch?v=lRr8ietiLRQ" },
    ]},
  ]
};

const ICONS = { cours:"📄", video:"▶️", exo:"✏️", corrige:"✅" };

function tagColor(tag) {
  const m = { cours:"tag-pink", video:"tag-sun", exo:"tag-blue", corrige:"tag-grn" };
  return m[tag] || "tag-grn";
}

// ── Generate level page ──────────────────────────────
function levelPage(level) {
  const info = LEVELS[level];
  const chapters = DATA[level];
  const navLinks = Object.keys(LEVELS).map(l =>
    `<a class="nav-level${l===level?' active':''}" href="${l===level?'index.html':'../'+l+'/index.html'}">${l}</a>`
  ).join('');

  const chapterCards = chapters.map(ch => {
    const nc = ch.resources.filter(r=>r.tag==='cours').length;
    const ne = ch.resources.filter(r=>r.tag==='exo').length;
    const nv = ch.resources.filter(r=>r.tag==='video').length;
    const pills = [
      nc ? `<span class="pill cours">📄 ${nc} cours</span>` : '',
      ne ? `<span class="pill exo">✏️ ${ne} exos</span>` : '',
      nv ? `<span class="pill video">▶️ ${nv} vidéos</span>` : '',
    ].filter(Boolean).join('');

    return `
    <a class="chapter-card card" href="ch${ch.num}.html">
      <div class="ch-head">
        <div class="ch-num">${ch.num}</div>
        <div class="ch-info">
          <div class="ch-title">${ch.title}</div>
          <div class="ch-pills">${pills}</div>
        </div>
        <span class="ch-arrow">→</span>
      </div>
    </a>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>C'est CARRÉ² — ${level} ${info.name}</title>
<link rel="stylesheet" href="../shared.css">
<style>
  .level-hero { max-width:720px; margin:0 auto; padding:52px 32px 40px; text-align:center; animation:fadeUp .5s ease both; }
  .level-badge { display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; border-radius:18px; font-family:'Fraunces',serif; font-weight:600; font-size:28px; background:var(--green-light); color:var(--green); margin-bottom:16px; }
  .level-hero h1 { font-family:'Fraunces',serif; font-weight:300; font-size:clamp(28px,5vw,44px); letter-spacing:-1px; color:var(--text); margin-bottom:8px; }
  .level-hero h1 strong { font-weight:600; color:var(--green); font-style:italic; }
  .level-hero p { font-size:15px; color:var(--muted); font-weight:500; }

  .chapters-section { max-width:860px; margin:0 auto; padding:0 32px 80px; }
  .section-label { font-size:11px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; color:var(--muted); margin-bottom:16px; display:block; }

  .chapters-list { display:flex; flex-direction:column; gap:10px; }

  .chapter-card {
    display:block; text-decoration:none; color:var(--text);
    padding:0; overflow:hidden;
  }
  .ch-head { display:flex; align-items:center; gap:14px; padding:18px 20px; }
  .ch-num { width:40px; height:40px; border-radius:10px; background:var(--green-light); color:var(--green); font-family:'Fraunces',serif; font-weight:600; font-size:16px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background .2s, color .2s; }
  .chapter-card:hover .ch-num { background:var(--green); color:#fff; }
  .ch-info { flex:1; min-width:0; }
  .ch-title { font-weight:700; font-size:15px; color:var(--text); margin-bottom:5px; }
  .ch-pills { display:flex; gap:6px; flex-wrap:wrap; }
  .ch-arrow { color:var(--green-mid); font-size:18px; flex-shrink:0; transition:transform .2s, color .2s; }
  .chapter-card:hover .ch-arrow { transform:translateX(4px); color:var(--green); }

  @media(max-width:600px){ .chapters-section{padding:0 16px 60px;} .level-hero{padding:36px 16px 28px;} }
</style>
</head>
<body>
<header>
  <a class="logo" href="../index.html"><em>C'est</em> CARRÉ²</a>
  <nav class="header-nav">${navLinks}</nav>
</header>

<div class="breadcrumb">
  <a href="../index.html">Accueil</a> › <span>${level} — ${info.name}</span>
</div>

<section class="level-hero">
  <div class="level-badge">${level}</div>
  <h1><strong>${info.name}</strong></h1>
  <p>${info.desc}</p>
</section>

<div class="chapters-section">
  <span class="section-label">${chapters.length} chapitres</span>
  <div class="chapters-list">${chapterCards}</div>
</div>

<footer>
  <span class="footer-logo"><em>C'est</em> CARRÉ²</span>
  <nav style="display:flex;gap:20px;"><a href="#">Mentions légales</a><a href="#">Contact</a></nav>
</footer>
</body>
</html>`;
}

// ── Generate chapter page ─────────────────────────────
function chapterPage(level, ch, allChapters) {
  const info = LEVELS[level];
  const idx = allChapters.findIndex(c => c.num === ch.num);
  const prev = allChapters[idx - 1];
  const next = allChapters[idx + 1];

  const navLinks = Object.keys(LEVELS).map(l =>
    `<a class="nav-level${l===level?' active':''}" href="${'../'+l+'/index.html'}">${l}</a>`
  ).join('');

  const resources = ch.resources.map(r => `
    <a class="res-item" href="${r.href}" target="_blank" rel="noopener">
      <div class="res-ico ${r.tag}">${ICONS[r.type]||'📎'}</div>
      <span class="res-label">${r.label}</span>
      <span class="res-tag ${r.tag}">${r.tag}</span>
    </a>`).join('');

  const groupedHTML = (() => {
    const groups = { cours: [], video: [], exo: [], corrige: [] };
    ch.resources.forEach(r => { if (groups[r.tag]) groups[r.tag].push(r); });
    const labels = { cours:'📄 Cours', video:'▶️ Vidéos', exo:'✏️ Exercices', corrige:'✅ Corrigés & contrôles' };
    return Object.entries(groups).filter(([,v])=>v.length).map(([tag, items]) => `
      <div class="res-group">
        <h3 class="res-group-title">${labels[tag]}</h3>
        <div class="res-list">
          ${items.map(r=>`
            <a class="res-item" href="${r.href}" target="_blank" rel="noopener">
              <div class="res-ico ${r.tag}">${ICONS[r.type]||'📎'}</div>
              <span class="res-label">${r.label}</span>
              <span class="res-tag ${r.tag}">${r.tag}</span>
            </a>`).join('')}
        </div>
      </div>`).join('');
  })();

  const nc = ch.resources.filter(r=>r.tag==='cours').length;
  const ne = ch.resources.filter(r=>r.tag==='exo').length;
  const nv = ch.resources.filter(r=>r.tag==='video').length;
  const ncor = ch.resources.filter(r=>r.tag==='corrige').length;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>C'est CARRÉ² — ${level} · ${ch.title}</title>
<link rel="stylesheet" href="../shared.css">
<style>
  .ch-hero { max-width:800px; margin:0 auto; padding:44px 32px 36px; animation:fadeUp .5s ease both; }
  .ch-level-tag { display:inline-block; font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:var(--green); margin-bottom:10px; }
  .ch-hero h1 { font-family:'Fraunces',serif; font-weight:600; font-size:clamp(24px,4vw,38px); letter-spacing:-0.8px; color:var(--text); margin-bottom:14px; line-height:1.2; }
  .ch-stats { display:flex; gap:10px; flex-wrap:wrap; }
  .ch-stat { background:var(--white); border:1px solid var(--border); border-radius:100px; padding:5px 14px; font-size:12px; font-weight:700; color:var(--text2); }

  .ch-content { max-width:800px; margin:0 auto; padding:0 32px 80px; }

  .res-group { margin-bottom:32px; }
  .res-group-title { font-size:13px; font-weight:800; color:var(--text2); letter-spacing:.5px; margin-bottom:10px; text-transform:uppercase; }
  .res-list { display:flex; flex-direction:column; gap:8px; }

  .nav-chapters { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-top:48px; padding-top:24px; border-top:1px solid var(--border); }
  .nav-ch-btn { display:flex; align-items:center; gap:8px; padding:12px 18px; border-radius:12px; background:var(--white); border:1.5px solid var(--border); text-decoration:none; color:var(--text2); font-size:13px; font-weight:600; transition:all .15s; max-width:280px; }
  .nav-ch-btn:hover { border-color:var(--green); color:var(--green); }
  .nav-ch-btn.prev { flex-direction:row-reverse; text-align:right; }
  .nav-ch-label { font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:.8px; color:var(--muted); display:block; margin-bottom:2px; }
  .nav-ch-title { display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

  @media(max-width:600px){ .ch-hero,.ch-content{padding-left:16px;padding-right:16px;} }
</style>
</head>
<body>
<header>
  <a class="logo" href="../index.html"><em>C'est</em> CARRÉ²</a>
  <nav class="header-nav">${navLinks}</nav>
</header>

<div class="breadcrumb">
  <a href="../index.html">Accueil</a> ›
  <a href="index.html">${level}</a> ›
  <span>${ch.title}</span>
</div>

<section class="ch-hero">
  <span class="ch-level-tag">Chapitre ${ch.num} · ${level} ${info.name}</span>
  <h1>${ch.title}</h1>
  <div class="ch-stats">
    ${nc ? `<span class="ch-stat">📄 ${nc} cours</span>` : ''}
    ${nv ? `<span class="ch-stat">▶️ ${nv} vidéos</span>` : ''}
    ${ne ? `<span class="ch-stat">✏️ ${ne} exercices</span>` : ''}
    ${ncor ? `<span class="ch-stat">✅ ${ncor} corrigés</span>` : ''}
  </div>
</section>

<div class="ch-content">
  ${groupedHTML}

  <div class="nav-chapters">
    ${prev ? `<a class="nav-ch-btn prev" href="ch${prev.num}.html"><span>←</span><div><span class="nav-ch-label">Chapitre précédent</span><span class="nav-ch-title">${prev.title}</span></div></a>` : '<div></div>'}
    ${next ? `<a class="nav-ch-btn" href="ch${next.num}.html"><div><span class="nav-ch-label">Chapitre suivant</span><span class="nav-ch-title">${next.title}</span></div><span>→</span></a>` : '<div></div>'}
  </div>
</div>

<footer>
  <span class="footer-logo"><em>C'est</em> CARRÉ²</span>
  <nav style="display:flex;gap:20px;"><a href="#">Mentions légales</a><a href="#">Contact</a></nav>
</footer>
</body>
</html>`;
}

// ── Build all pages ──────────────────────────────────
Object.keys(LEVELS).forEach(level => {
  const dir = path.join(__dirname, level);
  fs.mkdirSync(dir, { recursive: true });

  // level page
  fs.writeFileSync(path.join(dir, 'index.html'), levelPage(level));

  // chapter pages
  DATA[level].forEach(ch => {
    fs.writeFileSync(path.join(dir, `ch${ch.num}.html`), chapterPage(level, ch, DATA[level]));
  });

  console.log(`✅ ${level} — ${DATA[level].length} chapitres générés`);
});

console.log('🎉 Site généré !');
