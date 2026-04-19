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
    { type:"cours",   label:"Cours PDF — Nombres entiers (ch.1) — Yvan Monka",          tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Nombres1.pdf" },
    { type:"cours",   label:"Cours PDF — Nombres décimaux (ch.2) — Yvan Monka",         tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Nombres2.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=LOp-LK2XQ5A" },
    { type:"video",   label:"Vidéo — Reconnaître le rang des chiffres (Yvan Monka)",     tag:"video",   href:"https://www.youtube.com/watch?v=NYD4iynRWMA" },
    { type:"video",   label:"Vidéo — Comparer les nombres décimaux (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=fr5GemewG4Q" },
    { type:"video",   label:"Vidéo — Arrondir un nombre (Yvan Monka)",                   tag:"video",   href:"https://www.youtube.com/watch?v=KvYvKm70y00" },
    { type:"video",   label:"Vidéo — Placer des nombres sur une droite graduée",         tag:"video",   href:"https://www.youtube.com/watch?v=dFq6sJdRbo4" },
    { type:"exo",     label:"Exercice corrigé — Placer des nombres sur une droite",      tag:"exo",     href:"https://www.youtube.com/watch?v=ZBlkMCSIyMk" },
    { type:"exo",     label:"Exercice corrigé — Fraction à écriture décimale",           tag:"exo",     href:"https://www.youtube.com/watch?v=n_x3EAigoB0" },
    { type:"corrige", label:"Contrôle type — Nombres décimaux (Sésamath PDF)",           tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_6N3.pdf" },
  ]},
  { num:"02", title:"Opérations — Addition, soustraction, multiplication", resources:[
    { type:"cours",   label:"Cours PDF — Les opérations (Yvan Monka)",                   tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Operations.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=UyOard2MfNU" },
    { type:"video",   label:"Vidéo — Calculs avec + et − seulement (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=6_UeJI7JWTU" },
    { type:"video",   label:"Vidéo — Calculs avec des parenthèses (Yvan Monka)",         tag:"video",   href:"https://www.youtube.com/watch?v=LN-SKmgrt-wc" },
    { type:"video",   label:"Vidéo — Priorités opératoires (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=a-IG_bjKeJc" },
    { type:"video",   label:"Vidéo — Poser une multiplication (Yvan Monka)",             tag:"video",   href:"https://www.youtube.com/watch?v=4YQi_icWTTI" },
  ]},
  { num:"03", title:"Division et durées", resources:[
    { type:"cours",   label:"Cours PDF — Division et durées (Yvan Monka)",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Divisions1.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=Ge-I7vwsIes" },
    { type:"video",   label:"Vidéo — Poser une division euclidienne (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=2Ocfhucc58g" },
    { type:"video",   label:"Vidéo — Poser une division décimale (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=RbkDd_p_EVU" },
    { type:"video",   label:"Vidéo — Convertir les unités de temps (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=5xtJtMGEQT8" },
    { type:"exo",     label:"Exercice corrigé — Convertir les unités de temps",          tag:"exo",     href:"https://www.youtube.com/watch?v=dgIkLTCEQww" },
  ]},
  { num:"04", title:"Fractions", resources:[
    { type:"cours",   label:"Cours PDF — Fractions (ch.1) — Yvan Monka",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Fra1.pdf" },
    { type:"cours",   label:"Cours PDF — Fractions (ch.2) — Yvan Monka",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Fra2.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=m0HUFgWbgsA" },
    { type:"video",   label:"Vidéo — Représenter un partage avec une fraction",          tag:"video",   href:"https://www.youtube.com/watch?v=_xZkeQM8tm4" },
    { type:"video",   label:"Vidéo — Trouver des fractions égales (Yvan Monka)",         tag:"video",   href:"https://www.youtube.com/watch?v=6AiX2DuI03Q" },
    { type:"video",   label:"Vidéo — Comparer des fractions (Yvan Monka)",               tag:"video",   href:"https://www.youtube.com/watch?v=ZorNhzRGwq4" },
    { type:"video",   label:"Vidéo — Ordonner des fractions (Yvan Monka)",               tag:"video",   href:"https://www.youtube.com/watch?v=zzRX2N3o6xM" },
    { type:"video",   label:"Vidéo — Addition et soustraction de fractions",             tag:"video",   href:"https://www.youtube.com/watch?v=lGShZVQlXMQ" },
    { type:"video",   label:"Vidéo — Calculer la fraction d'une quantité",               tag:"video",   href:"https://www.youtube.com/watch?v=Q5nNel8scIw" },
    { type:"exo",     label:"Exercice corrigé — Comparer des fractions (Yvan Monka)",    tag:"exo",     href:"https://www.youtube.com/watch?v=ZNSUFQyiYIU" },
    { type:"exo",     label:"Exercice corrigé — Addition de fractions (Yvan Monka)",     tag:"exo",     href:"https://www.youtube.com/watch?v=wfzLW6oF7VY" },
    { type:"exo",     label:"Exercices PDF — Fractions 6e (Sésamath)",                   tag:"exo",     href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_6N5.pdf" },
    { type:"corrige", label:"Contrôle type — Fractions (Sésamath PDF)",                  tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_6N5.pdf" },
  ]},
  { num:"05", title:"Proportionnalité et pourcentages", resources:[
    { type:"video",   label:"Vidéo — Reconnaître une proportionnalité (Yvan Monka)",     tag:"video",   href:"https://www.youtube.com/watch?v=qs9vs_W_GD4" },
    { type:"video",   label:"Vidéo — Résoudre un problème (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=mxzNn5zcEqs" },
    { type:"video",   label:"Vidéo — Calculer un pourcentage (Yvan Monka)",              tag:"video",   href:"https://www.youtube.com/watch?v=fCDe27qL4Ko" },
  ]},
  { num:"06", title:"Parallèles, perpendiculaires et angles", resources:[
    { type:"video",   label:"Vidéo — Parallèles et perpendiculaires (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=NYD4iynRWMA" },
    { type:"video",   label:"Vidéo — Mesurer et construire un angle (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=icGHAYyXaE4" },
  ]},
  { num:"07", title:"Triangles et quadrilatères", resources:[
    { type:"video",   label:"Vidéo — Construire un triangle (Yvan Monka)",               tag:"video",   href:"https://www.youtube.com/watch?v=14XxGsJKniI" },
    { type:"video",   label:"Vidéo — Propriétés des quadrilatères (Yvan Monka)",         tag:"video",   href:"https://www.youtube.com/watch?v=MX2ASbYum_I" },
  ]},
  { num:"08", title:"Symétrie axiale et médiatrice", resources:[
    { type:"video",   label:"Vidéo — Symétrique d'un point (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=1m7mBRT3eAc" },
    { type:"video",   label:"Vidéo — La médiatrice d'un segment (Yvan Monka)",           tag:"video",   href:"https://www.youtube.com/watch?v=70UhgN2FssQ" },
  ]},
  { num:"09", title:"Aires et périmètres", resources:[
    { type:"video",   label:"Vidéo — Aire et périmètre du rectangle (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=ZQIowPriBhg" },
    { type:"video",   label:"Vidéo — Aire du triangle (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=i75HKdds3Gc" },
    { type:"video",   label:"Vidéo — Aire et périmètre du disque (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=CqQBuJVMjBE" },
  ]},
  { num:"10", title:"Volumes, statistiques et probabilités", resources:[
    { type:"video",   label:"Vidéo — Volume du pavé droit (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=qabaDLOdk4I" },
    { type:"video",   label:"Vidéo — Lire un diagramme (Yvan Monka)",                    tag:"video",   href:"https://www.youtube.com/watch?v=dFq6sJdRbo4" },
    { type:"video",   label:"Vidéo — Introduction aux probabilités (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=s26CK2wO9x8" },
  ]},
],
"5e": [
  { num:"01", title:"Règles de calcul et priorités", resources:[
    { type:"cours",   label:"Cours PDF — Règles de calcul (Yvan Monka)",                 tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Calcul_num.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=r1dzDGtPm7A" },
    { type:"video",   label:"Vidéo — Priorités opératoires niveau 1 (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=TJH-fiwAt5s" },
    { type:"video",   label:"Vidéo — Priorités opératoires niveau 2 (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=kNOR38ZuBRc" },
    { type:"video",   label:"Vidéo — Calculs avec des quotients (Yvan Monka)",           tag:"video",   href:"https://www.youtube.com/watch?v=yr1anMpCoSM" },
    { type:"exo",     label:"Exercice corrigé — Priorités (1) (Yvan Monka)",             tag:"exo",     href:"https://www.youtube.com/watch?v=qs9vs_W_GD4" },
    { type:"exo",     label:"Exercice corrigé — Priorités (2) (Yvan Monka)",             tag:"exo",     href:"https://www.youtube.com/watch?v=mxzNn5zcEqs" },
  ]},
  { num:"02", title:"Fractions et opérations", resources:[
    { type:"cours",   label:"Cours PDF — Fractions (ch.1) — Yvan Monka",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fract1.pdf" },
    { type:"cours",   label:"Cours PDF — Fractions (ch.2) — Yvan Monka",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fract2.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=m0HUFgWbgsA" },
    { type:"video",   label:"Vidéo — Simplifier une fraction (Yvan Monka)",              tag:"video",   href:"https://www.youtube.com/watch?v=6ce96Tze9nI" },
    { type:"video",   label:"Vidéo — Mettre au même dénominateur (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=B48IJDuyACg" },
    { type:"video",   label:"Vidéo — Additions et soustractions de fractions",           tag:"video",   href:"https://www.youtube.com/watch?v=lGShZVQlXMQ" },
    { type:"exo",     label:"Exercice corrigé — Comparer des fractions (Yvan Monka)",    tag:"exo",     href:"https://www.youtube.com/watch?v=ZNSUFQyiYIU" },
    { type:"exo",     label:"Exercice corrigé — Additions de fractions (Yvan Monka)",    tag:"exo",     href:"https://www.youtube.com/watch?v=wfzLW6oF7VY" },
  ]},
  { num:"03", title:"Arithmétique — Multiples et diviseurs", resources:[
    { type:"cours",   label:"Cours PDF — Arithmétique 5e (Yvan Monka)",                  tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Arith5e.pdf" },
    { type:"video",   label:"Vidéo — Critères de divisibilité (Yvan Monka)",             tag:"video",   href:"https://www.youtube.com/watch?v=BJDE6uOrmYQ" },
    { type:"video",   label:"Vidéo — Reconnaître un nombre premier (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=g9PLLhnCv88" },
    { type:"video",   label:"Vidéo — Décomposer en facteurs premiers (Yvan Monka)",      tag:"video",   href:"https://www.youtube.com/watch?v=BlGaIqNz_pk" },
    { type:"exo",     label:"Exercice corrigé — Facteurs premiers (Yvan Monka)",         tag:"exo",     href:"https://www.youtube.com/watch?v=v5f-yyFC9ck" },
  ]},
  { num:"04", title:"Nombres relatifs", resources:[
    { type:"cours",   label:"Cours PDF — Nombres relatifs 5e (Yvan Monka)",              tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Nomb_rel2.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=YivvFtSuzno" },
    { type:"video",   label:"Vidéo — Découvrir les nombres relatifs (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=GAhNZgDw1XA" },
    { type:"video",   label:"Vidéo — Additions et soustractions (1) (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=9L4lz1NMPoY" },
    { type:"video",   label:"Vidéo — Additions et soustractions (2) (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=6zLbeiq8sns" },
  ]},
  { num:"05", title:"Calcul littéral — Introduction", resources:[
    { type:"video",   label:"Vidéo — Traduire une expression en phrase (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=_yF5ItbcN28" },
    { type:"video",   label:"Vidéo — Calculs avec des quotients (Yvan Monka)",           tag:"video",   href:"https://www.youtube.com/watch?v=yr1anMpCoSM" },
  ]},
  { num:"06", title:"Théorème de Pythagore", resources:[
    { type:"cours",   label:"Cours PDF — Théorème de Pythagore (Yvan Monka)",            tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Pythagore.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=QYM86GzWWG8" },
    { type:"video",   label:"Vidéo — Calculer l'hypoténuse (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=M9sceJ8gzNc" },
    { type:"video",   label:"Vidéo — Réciproque — vérifier un triangle rectangle",       tag:"video",   href:"https://www.youtube.com/watch?v=uyfLil7gzak" },
    { type:"video",   label:"Vidéo — Résoudre un problème avec Pythagore (Yvan Monka)",  tag:"video",   href:"https://www.youtube.com/watch?v=gBuzFW_GlGc" },
    { type:"exo",     label:"Exercice corrigé — Appliquer Pythagore (Yvan Monka)",       tag:"exo",     href:"https://www.youtube.com/watch?v=mzxJG4NBiEY" },
    { type:"corrige", label:"Contrôle type — Pythagore (Sésamath PDF)",                  tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_5G4.pdf" },
  ]},
  { num:"07", title:"Proportionnalité", resources:[
    { type:"video",   label:"Vidéo — Résoudre un problème de proportionnalité",          tag:"video",   href:"https://www.youtube.com/watch?v=mLlLNM5D66M" },
  ]},
  { num:"08", title:"Statistiques et probabilités", resources:[
    { type:"video",   label:"Vidéo — Probabilités — cours et méthode (Yvan Monka)",      tag:"video",   href:"https://www.youtube.com/watch?v=B48IJDuyACg" },
  ]},
],
"4e": [
  { num:"01", title:"Nombres relatifs — Multiplication et division", resources:[
    { type:"cours",   label:"Cours PDF — Nombres relatifs 4e (Yvan Monka)",              tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Nomb_rela.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=mAK5sYfze0w" },
    { type:"video",   label:"Vidéo — Appliquer la règle des signes (1) (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=q-vHvhiizqY" },
    { type:"video",   label:"Vidéo — Appliquer la règle des signes (2) (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=l_BleoCE-3Y" },
    { type:"video",   label:"Vidéo — Calculs avec les relatifs (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=p_-4EYjsOiA" },
    { type:"exo",     label:"Exercice corrigé — Règle des signes (Yvan Monka)",          tag:"exo",     href:"https://www.youtube.com/watch?v=b4WF4_TJGXE" },
    { type:"exo",     label:"Exercice corrigé — Calculs avec relatifs (1) (Yvan Monka)", tag:"exo",     href:"https://www.youtube.com/watch?v=O3mI59OVnJI" },
    { type:"exo",     label:"Exercice corrigé — Calculs avec relatifs (2) (Yvan Monka)", tag:"exo",     href:"https://www.youtube.com/watch?v=dqLjltTjvQQ" },
  ]},
  { num:"02", title:"Fractions — Multiplication et division", resources:[
    { type:"cours",   label:"Cours PDF — Fractions 4e (ch.1) — Yvan Monka",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fractions1.pdf" },
    { type:"cours",   label:"Cours PDF — Fractions 4e (ch.2) — Yvan Monka",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fractions2.pdf" },
    { type:"cours",   label:"Cours PDF — Fractions 4e (ch.3) — Yvan Monka",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fractions3.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=a0Qb812W75c" },
    { type:"video",   label:"Vidéo — Multiplications de fractions (1) (Yvan Monka)",     tag:"video",   href:"https://www.youtube.com/watch?v=j27kXXrw3Xk" },
    { type:"video",   label:"Vidéo — Multiplications de fractions (2) (Yvan Monka)",     tag:"video",   href:"https://www.youtube.com/watch?v=gReBtrld7xU" },
    { type:"video",   label:"Vidéo — Divisions de fractions (Yvan Monka)",               tag:"video",   href:"https://www.youtube.com/watch?v=7_hZWOoMBSA" },
    { type:"exo",     label:"Exercice corrigé — Multiplications de fractions",           tag:"exo",     href:"https://www.youtube.com/watch?v=b8dFkwXgHb8" },
    { type:"exo",     label:"Exercice corrigé — Divisions de fractions (Yvan Monka)",    tag:"exo",     href:"https://www.youtube.com/watch?v=jRgzBx3Fziw" },
    { type:"exo",     label:"Exercice corrigé — Calculs mêlés de fractions",             tag:"exo",     href:"https://www.youtube.com/watch?v=KESHPtVPqCs" },
  ]},
  { num:"03", title:"Puissances et notation scientifique", resources:[
    { type:"cours",   label:"Cours PDF — Puissances (Yvan Monka)",                       tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Puiss.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=IxCzv5FPJ3s" },
    { type:"video",   label:"Vidéo — Notation des puissances (Yvan Monka)",              tag:"video",   href:"https://www.youtube.com/watch?v=jts9wiXPHtk" },
    { type:"video",   label:"Vidéo — Écrire en notation scientifique (Yvan Monka)",      tag:"video",   href:"https://www.youtube.com/watch?v=tzhNCpLRtCY" },
    { type:"exo",     label:"Exercice corrigé — Notation scientifique (1)",              tag:"exo",     href:"https://www.youtube.com/watch?v=W9ZjP-7jk50" },
    { type:"exo",     label:"Exercice corrigé — Notation scientifique (2)",              tag:"exo",     href:"https://www.youtube.com/watch?v=0oOK8wCyXyc" },
  ]},
  { num:"04", title:"Calcul littéral — Développement et factorisation", resources:[
    { type:"cours",   label:"Cours PDF — Calcul littéral (ch.1) — Yvan Monka",          tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19CalcLitt4e-1.pdf" },
    { type:"cours",   label:"Cours PDF — Calcul littéral (ch.2) — Yvan Monka",          tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19CalcLitt4e-2.pdf" },
    { type:"video",   label:"Vidéo — Distributivité simple (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=zRBOouW-O1c" },
    { type:"video",   label:"Vidéo — Développer avec la distributivité (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
    { type:"video",   label:"Vidéo — Double distributivité (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=YS-3JI_z2f0" },
  ]},
  { num:"05", title:"Équations du 1er degré", resources:[
    { type:"cours",   label:"Cours PDF — Équations 4e (Yvan Monka)",                     tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Equations.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=p_-4EYjsOiA" },
    { type:"video",   label:"Vidéo — Résoudre une équation simple (Yvan Monka)",         tag:"video",   href:"https://www.youtube.com/watch?v=Bf11wk3SMTY" },
    { type:"video",   label:"Vidéo — Équation avec développement (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
    { type:"exo",     label:"Exercices PDF — Équations 4e (Sésamath)",                   tag:"exo",     href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_4A3.pdf" },
    { type:"corrige", label:"Contrôle type — Équations (Sésamath PDF)",                  tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_4A3.pdf" },
  ]},
  { num:"06", title:"Théorème de Thalès", resources:[
    { type:"cours",   label:"Cours PDF — Théorème de Thalès (Yvan Monka)",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Thales.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=XcsbENjMFZo" },
    { type:"video",   label:"Vidéo — Calculer une longueur avec Thalès (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=nsc675xcjPc" },
    { type:"video",   label:"Vidéo — Réciproque de Thalès (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=wkimwCoejZ4" },
  ]},
  { num:"07", title:"Trigonométrie dans le triangle rectangle", resources:[
    { type:"cours",   label:"Cours PDF — Trigonométrie (Yvan Monka)",                    tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Trigo.pdf" },
    { type:"video",   label:"Vidéo — Le cosinus — cours (Yvan Monka)",                   tag:"video",   href:"https://www.youtube.com/watch?v=9nwZMLmoag8" },
    { type:"video",   label:"Vidéo — Calculer un angle avec le cosinus (Yvan Monka)",    tag:"video",   href:"https://www.youtube.com/watch?v=0rn5R3-vutQ" },
    { type:"video",   label:"Vidéo — Calculer un côté avec le cosinus (Yvan Monka)",     tag:"video",   href:"https://www.youtube.com/watch?v=Bf11wk3SMTY" },
  ]},
  { num:"08", title:"Statistiques et probabilités", resources:[
    { type:"video",   label:"Vidéo — Calculer une fréquence (Yvan Monka)",               tag:"video",   href:"https://www.youtube.com/watch?v=b4WF4_TJGXE" },
    { type:"video",   label:"Vidéo — Probabilités — cours (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=dqLjltTjvQQ" },
  ]},
],
"3e": [
  { num:"01", title:"Calculs numériques — Fractions et puissances", resources:[
    { type:"cours",   label:"Cours PDF — Calculs numériques 3e (Yvan Monka)",            tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Calc_numeriq.pdf" },
    { type:"video",   label:"Vidéo — Calculs de fractions (1) (Yvan Monka)",             tag:"video",   href:"https://www.youtube.com/watch?v=Z86gfJOKgBg" },
    { type:"video",   label:"Vidéo — Calculs de fractions (2) (Yvan Monka)",             tag:"video",   href:"https://www.youtube.com/watch?v=1yV5scwCwvg" },
    { type:"video",   label:"Vidéo — Calculs de puissances (1) (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=IKmReDkNGp8" },
    { type:"video",   label:"Vidéo — Puissances d'exposant négatif (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=5miQxq30zhY" },
    { type:"video",   label:"Vidéo — Notation scientifique (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=tzhNCpLRtCY" },
    { type:"exo",     label:"Exercice corrigé — Fractions et puissances (Yvan Monka)",   tag:"exo",     href:"https://www.youtube.com/watch?v=WBip-WeQtkM" },
    { type:"exo",     label:"Exercice brevet — Fractions, puissances (Yvan Monka)",      tag:"exo",     href:"https://www.youtube.com/watch?v=15Jad7dbshs" },
  ]},
  { num:"02", title:"Développements — Identités remarquables", resources:[
    { type:"cours",   label:"Cours PDF — Développements 3e (Yvan Monka)",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Dev3e.pdf" },
    { type:"video",   label:"Vidéo — Le cours complet (Yvan Monka)",                     tag:"video",   href:"https://www.youtube.com/watch?v=F78Sm4HCHxA" },
    { type:"video",   label:"Vidéo — Double distributivité (1) (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=YS-3JI_z2f0" },
    { type:"video",   label:"Vidéo — Double distributivité (2) (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=1EPOmbvoAlU" },
    { type:"video",   label:"Vidéo — Identité (a−b)(a+b) = a²−b² (Yvan Monka)",         tag:"video",   href:"https://www.youtube.com/watch?v=6j0oMQlaBYg" },
    { type:"exo",     label:"Exercice corrigé — Développer une expression (Yvan Monka)", tag:"exo",     href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
  ]},
  { num:"03", title:"Factorisations", resources:[
    { type:"cours",   label:"Cours PDF — Factorisations 3e (Yvan Monka)",                tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fact3e.pdf" },
    { type:"video",   label:"Vidéo — Factoriser une expression (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=g1tyDEz71hw" },
    { type:"video",   label:"Vidéo — Factoriser avec une identité remarquable",          tag:"video",   href:"https://www.youtube.com/watch?v=-h9kFZcULz8" },
  ]},
  { num:"04", title:"Équations du 1er degré", resources:[
    { type:"video",   label:"Vidéo — Résoudre une équation (Yvan Monka)",                tag:"video",   href:"https://www.youtube.com/watch?v=3rXse_lbAKk" },
    { type:"video",   label:"Vidéo — Mise en équation d'un problème (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
  ]},
  { num:"05", title:"Fonctions linéaires et affines", resources:[
    { type:"cours",   label:"Cours PDF — Fonctions affines 3e (Yvan Monka)",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fonct_aff.pdf" },
    { type:"video",   label:"Vidéo — Notion de fonction (Yvan Monka)",                   tag:"video",   href:"https://www.youtube.com/watch?v=3rXse_lbAKk" },
    { type:"video",   label:"Vidéo — Fonctions affines — cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=WBip-WeQtkM" },
    { type:"video",   label:"Vidéo — Tracer la représentation graphique (Yvan Monka)",   tag:"video",   href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
  ]},
  { num:"06", title:"Théorème de Thalès et réciproque", resources:[
    { type:"cours",   label:"Cours PDF — Théorème de Thalès 3e (Yvan Monka)",           tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Thales3e.pdf" },
    { type:"video",   label:"Vidéo — Thalès — calculer une longueur (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
    { type:"video",   label:"Vidéo — Réciproque de Thalès (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=0oOK8wCyXyc" },
    { type:"exo",     label:"Exercice brevet — Thalès (Yvan Monka)",                     tag:"exo",     href:"https://www.youtube.com/watch?v=15Jad7dbshs" },
  ]},
  { num:"07", title:"Trigonométrie", resources:[
    { type:"cours",   label:"Cours PDF — Trigonométrie 3e (Yvan Monka)",                 tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Trigo3e.pdf" },
    { type:"video",   label:"Vidéo — sinus et cosinus — cours (Yvan Monka)",             tag:"video",   href:"https://www.youtube.com/watch?v=RtstlSW1Jg0" },
    { type:"video",   label:"Vidéo — La tangente — cours (Yvan Monka)",                  tag:"video",   href:"https://www.youtube.com/watch?v=4kwH1rM992Q" },
    { type:"video",   label:"Vidéo — Calculer un angle avec le sinus (Yvan Monka)",      tag:"video",   href:"https://www.youtube.com/watch?v=5miQxq30zhY" },
    { type:"exo",     label:"Exercice brevet — Trigonométrie (Yvan Monka)",               tag:"exo",     href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
  ]},
  { num:"08", title:"Statistiques et probabilités", resources:[
    { type:"video",   label:"Vidéo — Médiane et quartiles (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=_iwHYbuZ4N8" },
    { type:"video",   label:"Vidéo — Probabilités — cours (Yvan Monka)",                 tag:"video",   href:"https://www.youtube.com/watch?v=IKmReDkNGp8" },
  ]},
  { num:"09", title:"Formulaire brevet — Tout le cours résumé", resources:[
    { type:"cours",   label:"Formulaire PDF complet 3e — tout le cours en 4 pages",      tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Formulaire3e.pdf" },
    { type:"video",   label:"Vidéo — Conseils pour réussir en maths (Yvan Monka)",       tag:"video",   href:"https://www.youtube.com/watch?v=lRr8ietiLRQ" },
    { type:"video",   label:"Vidéo — Comment progresser en maths (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=MGNKeU98DNI" },
    { type:"video",   label:"Vidéo — Gérer son stress avant un contrôle (Yvan Monka)",   tag:"video",   href:"https://www.youtube.com/watch?v=XSOYHlwVPWA" },
  ]},
]
};

const ICONS = { cours:"📄", video:"▶️", exo:"✏️", corrige:"✅" };

function navLinks(activeLevel) {
  return Object.keys(LEVELS).map(l =>
    `<a class="nav-level${l===activeLevel?' active':''}" href="${l===activeLevel?'index.html':'../'+l+'/index.html'}">${l}</a>`
  ).join('');
}

function levelPage(level) {
  const info = LEVELS[level];
  const chapters = DATA[level];
  const cards = chapters.map(ch => {
    const nc=ch.resources.filter(r=>r.tag==='cours').length;
    const ne=ch.resources.filter(r=>r.tag==='exo').length;
    const nv=ch.resources.filter(r=>r.tag==='video').length;
    const ncor=ch.resources.filter(r=>r.tag==='corrige').length;
    return `<a class="chapter-card card" href="ch${ch.num}.html"><div class="ch-head"><div class="ch-num">${ch.num}</div><div class="ch-info"><div class="ch-title">${ch.title}</div><div class="ch-pills">${nc?`<span class="pill cours">📄 ${nc} cours</span>`:''} ${nv?`<span class="pill video">▶️ ${nv} vidéos</span>`:''} ${ne?`<span class="pill exo">✏️ ${ne} exos</span>`:''} ${ncor?`<span class="pill corrige">✅ ${ncor} contrôles</span>`:''}</div></div><span class="ch-arrow">→</span></div></a>`;
  }).join('');
  return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>C'est CARRÉ² — ${level} ${info.name}</title><link rel="stylesheet" href="../shared.css"><style>.level-hero{max-width:720px;margin:0 auto;padding:52px 32px 40px;text-align:center;animation:fadeUp .5s ease both}.level-badge{display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:18px;font-family:'Fraunces',serif;font-weight:600;font-size:28px;background:var(--green-light);color:var(--green);margin-bottom:16px}.level-hero h1{font-family:'Fraunces',serif;font-weight:300;font-size:clamp(28px,5vw,44px);letter-spacing:-1px;color:var(--text);margin-bottom:8px}.level-hero h1 strong{font-weight:600;color:var(--green);font-style:italic}.level-hero p{font-size:15px;color:var(--muted);font-weight:500}.chapters-section{max-width:860px;margin:0 auto;padding:0 32px 80px}.section-label{font-size:11px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--muted);margin-bottom:16px;display:block}.chapters-list{display:flex;flex-direction:column;gap:10px}.chapter-card{display:block;text-decoration:none;color:var(--text)}.ch-head{display:flex;align-items:center;gap:14px;padding:18px 20px}.ch-num{width:40px;height:40px;border-radius:10px;background:var(--green-light);color:var(--green);font-family:'Fraunces',serif;font-weight:600;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,color .2s}.chapter-card:hover .ch-num{background:var(--green);color:#fff}.ch-info{flex:1;min-width:0}.ch-title{font-weight:700;font-size:15px;color:var(--text);margin-bottom:5px}.ch-pills{display:flex;gap:6px;flex-wrap:wrap}.pill.corrige{background:var(--tag-grn-bg);color:var(--tag-grn)}.ch-arrow{color:var(--green-mid);font-size:18px;flex-shrink:0;transition:transform .2s,color .2s}.chapter-card:hover .ch-arrow{transform:translateX(4px);color:var(--green)}@media(max-width:600px){.chapters-section{padding:0 16px 60px}.level-hero{padding:36px 16px 28px}}</style></head><body><header><a class="logo" href="../index.html"><em>C'est</em> CARRÉ²</a><nav class="header-nav">${navLinks(level)}</nav></header><div class="breadcrumb"><a href="../index.html">Accueil</a> › <span>${level} — ${info.name}</span></div><section class="level-hero"><div class="level-badge">${level}</div><h1><strong>${info.name}</strong></h1><p>${info.desc}</p></section><div class="chapters-section"><span class="section-label">${chapters.length} chapitres</span><div class="chapters-list">${cards}</div></div><footer><span class="footer-logo"><em>C'est</em> CARRÉ²</span><nav style="display:flex;gap:20px"><a href="#">Mentions légales</a><a href="#">Contact</a></nav></footer></body></html>`;
}

function chapterPage(level, ch, allChapters) {
  const info = LEVELS[level];
  const idx = allChapters.findIndex(c=>c.num===ch.num);
  const prev = allChapters[idx-1];
  const next = allChapters[idx+1];
  const groups = {cours:[],video:[],exo:[],corrige:[]};
  ch.resources.forEach(r=>{ if(groups[r.tag]) groups[r.tag].push(r); });
  const labels = {cours:'📄 Cours & fiches PDF',video:"▶️ Vidéos explicatives",exo:"✏️ Exercices corrigés",corrige:"✅ Contrôles d'entraînement"};
  const groupedHTML = Object.entries(groups).filter(([,v])=>v.length).map(([tag,items])=>`<div class="res-group"><h3 class="res-group-title">${labels[tag]}</h3><div class="res-list">${items.map(r=>`<a class="res-item" href="${r.href}" target="_blank" rel="noopener"><div class="res-ico ${r.tag}">${ICONS[r.type]||'📎'}</div><span class="res-label">${r.label}</span><span class="res-tag ${r.tag}">${r.tag}</span></a>`).join('')}</div></div>`).join('');
  const nc=ch.resources.filter(r=>r.tag==='cours').length;
  const ne=ch.resources.filter(r=>r.tag==='exo').length;
  const nv=ch.resources.filter(r=>r.tag==='video').length;
  const ncor=ch.resources.filter(r=>r.tag==='corrige').length;
  return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>C'est CARRÉ² — ${level} · ${ch.title}</title><link rel="stylesheet" href="../shared.css"><style>.ch-hero{max-width:800px;margin:0 auto;padding:44px 32px 36px;animation:fadeUp .5s ease both}.ch-level-tag{display:inline-block;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--green);margin-bottom:10px}.ch-hero h1{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(22px,4vw,36px);letter-spacing:-.8px;color:var(--text);margin-bottom:14px;line-height:1.2}.ch-stats{display:flex;gap:10px;flex-wrap:wrap}.ch-stat{background:var(--white);border:1px solid var(--border);border-radius:100px;padding:5px 14px;font-size:12px;font-weight:700;color:var(--text2)}.ch-content{max-width:800px;margin:0 auto;padding:0 32px 80px}.res-group{margin-bottom:32px}.res-group-title{font-size:13px;font-weight:800;color:var(--text2);letter-spacing:.5px;margin-bottom:10px;text-transform:uppercase}.res-list{display:flex;flex-direction:column;gap:8px}.res-tag.corrige,.res-ico.corrige{background:var(--tag-grn-bg);color:var(--tag-grn)}.nav-chapters{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:48px;padding-top:24px;border-top:1px solid var(--border)}.nav-ch-btn{display:flex;align-items:center;gap:8px;padding:12px 18px;border-radius:12px;background:var(--white);border:1.5px solid var(--border);text-decoration:none;color:var(--text2);font-size:13px;font-weight:600;transition:all .15s;max-width:280px}.nav-ch-btn:hover{border-color:var(--green);color:var(--green)}.nav-ch-btn.prev{flex-direction:row-reverse;text-align:right}.nav-ch-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);display:block;margin-bottom:2px}.nav-ch-title{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width:600px){.ch-hero,.ch-content{padding-left:16px;padding-right:16px}}</style></head><body><header><a class="logo" href="../index.html"><em>C'est</em> CARRÉ²</a><nav class="header-nav">${navLinks(level)}</nav></header><div class="breadcrumb"><a href="../index.html">Accueil</a> › <a href="index.html">${level}</a> › <span>${ch.title}</span></div><section class="ch-hero"><span class="ch-level-tag">Chapitre ${ch.num} · ${level} ${info.name}</span><h1>${ch.title}</h1><div class="ch-stats">${nc?`<span class="ch-stat">📄 ${nc} cours</span>`:''} ${nv?`<span class="ch-stat">▶️ ${nv} vidéos</span>`:''} ${ne?`<span class="ch-stat">✏️ ${ne} exercices</span>`:''} ${ncor?`<span class="ch-stat">✅ ${ncor} contrôles</span>`:''}</div></section><div class="ch-content">${groupedHTML}<div class="nav-chapters">${prev?`<a class="nav-ch-btn prev" href="ch${prev.num}.html"><span>←</span><div><span class="nav-ch-label">Chapitre précédent</span><span class="nav-ch-title">${prev.title}</span></div></a>`:'<div></div>'} ${next?`<a class="nav-ch-btn" href="ch${next.num}.html"><div><span class="nav-ch-label">Chapitre suivant</span><span class="nav-ch-title">${next.title}</span></div><span>→</span></a>`:'<div></div>'}</div></div><footer><span class="footer-logo"><em>C'est</em> CARRÉ²</span><nav style="display:flex;gap:20px"><a href="#">Mentions légales</a><a href="#">Contact</a></nav></footer></body></html>`;
}

Object.keys(LEVELS).forEach(level => {
  const dir = path.join(__dirname, level);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir,'index.html'), levelPage(level));
  DATA[level].forEach(ch => {
    fs.writeFileSync(path.join(dir,`ch${ch.num}.html`), chapterPage(level, ch, DATA[level]));
  });
  const total = DATA[level].reduce((acc,ch)=>acc+ch.resources.length, 0);
  console.log(`✅ ${level} — ${DATA[level].length} chapitres — ${total} ressources`);
});
console.log('🎉 Site généré !');
