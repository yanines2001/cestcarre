// Shared data for all levels
const ALL_DATA = {
  "6e": [
    { num:"01", title:"Nombres entiers et décimaux", resources:[
      { type:"cours",   label:"Cours PDF — Nombres entiers et décimaux",  tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Nombres1.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=LOp-LK2XQ5A" },
      { type:"video",   label:"Vidéo — Comparer les décimaux",            tag:"video",   href:"https://www.youtube.com/watch?v=fr5GemewG4Q" },
      { type:"video",   label:"Vidéo — Arrondir un nombre",               tag:"video",   href:"https://www.youtube.com/watch?v=KvYvKm70y00" },
    ]},
    { num:"02", title:"Opérations — Addition, soustraction, multiplication", resources:[
      { type:"cours",   label:"Cours PDF — Opérations de base",           tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Operations.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=UyOard2MfNU" },
      { type:"video",   label:"Vidéo — Priorités opératoires",            tag:"video",   href:"https://www.youtube.com/watch?v=TJH-fiwAt5s" },
    ]},
    { num:"03", title:"Division et durées", resources:[
      { type:"video",   label:"Vidéo — Effectuer une division",           tag:"video",   href:"https://www.youtube.com/watch?v=idB0-F7b1Yk" },
      { type:"video",   label:"Vidéo — Calculs de durées",                tag:"video",   href:"https://www.youtube.com/watch?v=6_UeJI7JWTU" },
    ]},
    { num:"04", title:"Fractions", resources:[
      { type:"cours",   label:"Cours PDF — Fractions",                    tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/25Nombres2.pdf" },
      { type:"video",   label:"Vidéo — Reconnaître une fraction",         tag:"video",   href:"https://www.youtube.com/watch?v=bpMepmTl4Ww" },
      { type:"video",   label:"Vidéo — Fractions égales",                 tag:"video",   href:"https://www.youtube.com/watch?v=6AiX2DuI03Q" },
      { type:"video",   label:"Vidéo — Comparer et ranger",               tag:"video",   href:"https://www.youtube.com/watch?v=zzRX2N3o6xM" },
      { type:"video",   label:"Vidéo — Problème avec fractions",          tag:"video",   href:"https://www.youtube.com/watch?v=qm8YLSWtGXQ" },
      { type:"exo",     label:"Exercices — Fractions (Sésamath)",         tag:"exo",     href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_6N5.pdf" },
      { type:"corrige", label:"Contrôle type (Sésamath)",                 tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_6N5.pdf" },
    ]},
    { num:"05", title:"Proportionnalité et pourcentages", resources:[
      { type:"video",   label:"Vidéo — Reconnaître une proportionnalité", tag:"video",   href:"https://www.youtube.com/watch?v=qs9vs_W_GD4" },
      { type:"video",   label:"Vidéo — Résoudre un problème",             tag:"video",   href:"https://www.youtube.com/watch?v=mxzNn5zcEqs" },
      { type:"video",   label:"Vidéo — Pourcentages",                     tag:"video",   href:"https://www.youtube.com/watch?v=fCDe27qL4Ko" },
    ]},
    { num:"06", title:"Parallèles, perpendiculaires et angles", resources:[
      { type:"video",   label:"Vidéo — Droites parallèles et perpendiculaires", tag:"video", href:"https://www.youtube.com/watch?v=NYD4iynRWMA" },
      { type:"video",   label:"Vidéo — Mesurer un angle",                  tag:"video",  href:"https://www.youtube.com/watch?v=icGHAYyXaE4" },
    ]},
    { num:"07", title:"Triangles et quadrilatères", resources:[
      { type:"video",   label:"Vidéo — Construire un triangle",           tag:"video",   href:"https://www.youtube.com/watch?v=14XxGsJKniI" },
      { type:"video",   label:"Vidéo — Les quadrilatères",                tag:"video",   href:"https://www.youtube.com/watch?v=MX2ASbYum_I" },
    ]},
    { num:"08", title:"Symétrie axiale et médiatrice", resources:[
      { type:"video",   label:"Vidéo — Symétrique d'un point",            tag:"video",   href:"https://www.youtube.com/watch?v=1m7mBRT3eAc" },
      { type:"video",   label:"Vidéo — La médiatrice",                    tag:"video",   href:"https://www.youtube.com/watch?v=70UhgN2FssQ" },
    ]},
    { num:"09", title:"Aires et périmètres", resources:[
      { type:"video",   label:"Vidéo — Rectangle (aire et périmètre)",    tag:"video",   href:"https://www.youtube.com/watch?v=ZQIowPriBhg" },
      { type:"video",   label:"Vidéo — Triangle",                         tag:"video",   href:"https://www.youtube.com/watch?v=i75HKdds3Gc" },
      { type:"video",   label:"Vidéo — Cercle",                           tag:"video",   href:"https://www.youtube.com/watch?v=CqQBuJVMjBE" },
    ]},
    { num:"10", title:"Volumes, statistiques et probabilités", resources:[
      { type:"video",   label:"Vidéo — Volume du pavé droit",             tag:"video",   href:"https://www.youtube.com/watch?v=qabaDLOdk4I" },
      { type:"video",   label:"Vidéo — Lire un diagramme",                tag:"video",   href:"https://www.youtube.com/watch?v=dFq6sJdRbo4" },
      { type:"video",   label:"Vidéo — Introduction aux probabilités",    tag:"video",   href:"https://www.youtube.com/watch?v=s26CK2wO9x8" },
    ]},
  ],
  "5e": [
    { num:"01", title:"Règles de calcul et priorités", resources:[
      { type:"cours",   label:"Cours PDF — Priorités (Yvan Monka)",       tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Calcul_num.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=r1dzDGtPm7A" },
      { type:"video",   label:"Vidéo — Priorités niveau 1",               tag:"video",   href:"https://www.youtube.com/watch?v=TJH-fiwAt5s" },
      { type:"video",   label:"Vidéo — Priorités niveau 2",               tag:"video",   href:"https://www.youtube.com/watch?v=kNOR38ZuBRc" },
    ]},
    { num:"02", title:"Fractions et opérations", resources:[
      { type:"cours",   label:"Cours PDF — Fractions ch.1",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fract1.pdf" },
      { type:"cours",   label:"Cours PDF — Fractions ch.2",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fract2.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=m0HUFgWbgsA" },
      { type:"video",   label:"Vidéo — Additions et soustractions",       tag:"video",   href:"https://www.youtube.com/watch?v=lGShZVQlXMQ" },
      { type:"exo",     label:"Exercice — Comparer des fractions",        tag:"exo",     href:"https://www.youtube.com/watch?v=ZNSUFQyiYIU" },
    ]},
    { num:"03", title:"Arithmétique — Multiples et diviseurs", resources:[
      { type:"cours",   label:"Cours PDF — Arithmétique",                 tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Arith5e.pdf" },
      { type:"video",   label:"Vidéo — Critères de divisibilité",         tag:"video",   href:"https://www.youtube.com/watch?v=BJDE6uOrmYQ" },
      { type:"video",   label:"Vidéo — Nombres premiers",                 tag:"video",   href:"https://www.youtube.com/watch?v=g9PLLhnCv88" },
    ]},
    { num:"04", title:"Nombres relatifs", resources:[
      { type:"cours",   label:"Cours PDF — Nombres relatifs",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Nomb_rel2.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=YivvFtSuzno" },
      { type:"video",   label:"Vidéo — Additions et soustractions",       tag:"video",   href:"https://www.youtube.com/watch?v=9L4lz1NMPoY" },
    ]},
    { num:"05", title:"Calcul littéral", resources:[
      { type:"video",   label:"Vidéo — Expressions littérales",           tag:"video",   href:"https://www.youtube.com/watch?v=_yF5ItbcN28" },
      { type:"video",   label:"Vidéo — Calculs avec quotients",           tag:"video",   href:"https://www.youtube.com/watch?v=yr1anMpCoSM" },
    ]},
    { num:"06", title:"Théorème de Pythagore", resources:[
      { type:"cours",   label:"Cours PDF — Pythagore",                    tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Pythagore.pdf" },
      { type:"video",   label:"Vidéo — Le cours complet",                 tag:"video",   href:"https://www.youtube.com/watch?v=QYM86GzWWG8" },
      { type:"video",   label:"Vidéo — Calculer l'hypoténuse",            tag:"video",   href:"https://www.youtube.com/watch?v=M9sceJ8gzNc" },
      { type:"video",   label:"Vidéo — Réciproque de Pythagore",          tag:"video",   href:"https://www.youtube.com/watch?v=uyfLil7gzak" },
      { type:"video",   label:"Vidéo — Problème avec Pythagore",          tag:"video",   href:"https://www.youtube.com/watch?v=gBuzFW_GlGc" },
      { type:"exo",     label:"Exercice corrigé — Pythagore",             tag:"exo",     href:"https://www.youtube.com/watch?v=mzxJG4NBiEY" },
    ]},
    { num:"07", title:"Proportionnalité", resources:[
      { type:"video",   label:"Vidéo — Résoudre un problème",             tag:"video",   href:"https://www.youtube.com/watch?v=mLlLNM5D66M" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video",   label:"Vidéo — Probabilités (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=B48IJDuyACg" },
    ]},
  ],
  "4e": [
    { num:"01", title:"Nombres relatifs — Multiplication et division", resources:[
      { type:"cours",   label:"Cours PDF — Nombres relatifs",             tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Nomb_rela.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=mAK5sYfze0w" },
      { type:"video",   label:"Vidéo — Règle des signes (1)",             tag:"video",   href:"https://www.youtube.com/watch?v=q-vHvhiizqY" },
      { type:"video",   label:"Vidéo — Règle des signes (2)",             tag:"video",   href:"https://www.youtube.com/watch?v=l_BleoCE-3Y" },
    ]},
    { num:"02", title:"Fractions — Multiplication et division", resources:[
      { type:"cours",   label:"Cours PDF — Fractions ch.1",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fractions1.pdf" },
      { type:"cours",   label:"Cours PDF — Fractions ch.2",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Fractions2.pdf" },
      { type:"video",   label:"Vidéo — Multiplications de fractions",     tag:"video",   href:"https://www.youtube.com/watch?v=j27kXXrw3Xk" },
      { type:"video",   label:"Vidéo — Divisions de fractions",           tag:"video",   href:"https://www.youtube.com/watch?v=7_hZWOoMBSA" },
    ]},
    { num:"03", title:"Puissances", resources:[
      { type:"cours",   label:"Cours PDF — Puissances",                   tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Puiss.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=IxCzv5FPJ3s" },
      { type:"video",   label:"Vidéo — Notation des puissances",          tag:"video",   href:"https://www.youtube.com/watch?v=jts9wiXPHtk" },
    ]},
    { num:"04", title:"Calcul littéral — Développement et factorisation", resources:[
      { type:"video",   label:"Vidéo — Développer (distributivité)",      tag:"video",   href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
      { type:"video",   label:"Vidéo — Double distributivité",            tag:"video",   href:"https://www.youtube.com/watch?v=YS-3JI_z2f0" },
    ]},
    { num:"05", title:"Équations du 1er degré", resources:[
      { type:"cours",   label:"Cours PDF — Équations",                    tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Equations.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=p_-4EYjsOiA" },
      { type:"video",   label:"Vidéo — Résoudre une équation simple",     tag:"video",   href:"https://www.youtube.com/watch?v=Bf11wk3SMTY" },
      { type:"video",   label:"Vidéo — Mise en équation",                 tag:"video",   href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
      { type:"exo",     label:"Exercices — Équations (Sésamath)",         tag:"exo",     href:"https://manuel.sesamath.net/coll_docs/cah/valide/ds_chapitre_2013_4A3.pdf" },
      { type:"corrige", label:"Contrôle type (Sésamath)",                 tag:"corrige", href:"https://manuel.sesamath.net/coll_docs/cmep/valide/kidimath_DS_4A3.pdf" },
    ]},
    { num:"06", title:"Théorème de Thalès", resources:[
      { type:"video",   label:"Vidéo — Calculer une longueur",            tag:"video",   href:"https://www.youtube.com/watch?v=XcsbENjMFZo" },
      { type:"video",   label:"Vidéo — Réciproque de Thalès",             tag:"video",   href:"https://www.youtube.com/watch?v=nsc675xcjPc" },
    ]},
    { num:"07", title:"Trigonométrie", resources:[
      { type:"video",   label:"Vidéo — Le cosinus",                       tag:"video",   href:"https://www.youtube.com/watch?v=9nwZMLmoag8" },
      { type:"video",   label:"Vidéo — Calculer un angle",                tag:"video",   href:"https://www.youtube.com/watch?v=0rn5R3-vutQ" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video",   label:"Vidéo — Probabilités",                     tag:"video",   href:"https://www.youtube.com/watch?v=b4WF4_TJGXE" },
    ]},
  ],
  "3e": [
    { num:"01", title:"Calculs numériques — Fractions et puissances", resources:[
      { type:"cours",   label:"Cours PDF — Calculs numériques",           tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Calc_numeriq.pdf" },
      { type:"video",   label:"Vidéo — Fractions (Yvan Monka)",           tag:"video",   href:"https://www.youtube.com/watch?v=Z86gfJOKgBg" },
      { type:"video",   label:"Vidéo — Puissances",                       tag:"video",   href:"https://www.youtube.com/watch?v=IKmReDkNGp8" },
      { type:"video",   label:"Vidéo — Notation scientifique",            tag:"video",   href:"https://www.youtube.com/watch?v=tzhNCpLRtCY" },
      { type:"exo",     label:"Exercice brevet — Fractions et puissances",tag:"exo",     href:"https://www.youtube.com/watch?v=15Jad7dbshs" },
    ]},
    { num:"02", title:"Développements", resources:[
      { type:"cours",   label:"Cours PDF — Développements",               tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Dev3e.pdf" },
      { type:"video",   label:"Vidéo — Le cours (Yvan Monka)",            tag:"video",   href:"https://www.youtube.com/watch?v=F78Sm4HCHxA" },
      { type:"video",   label:"Vidéo — Double distributivité",            tag:"video",   href:"https://www.youtube.com/watch?v=YS-3JI_z2f0" },
      { type:"video",   label:"Vidéo — Identité (a-b)(a+b)",              tag:"video",   href:"https://www.youtube.com/watch?v=6j0oMQlaBYg" },
    ]},
    { num:"03", title:"Factorisations", resources:[
      { type:"video",   label:"Vidéo — Factoriser (Yvan Monka)",          tag:"video",   href:"https://www.youtube.com/watch?v=RuWyHq2sABE" },
    ]},
    { num:"04", title:"Équations du 1er degré", resources:[
      { type:"video",   label:"Vidéo — Résoudre une équation",            tag:"video",   href:"https://www.youtube.com/watch?v=g1tyDEz71hw" },
      { type:"video",   label:"Vidéo — Mise en équation",                 tag:"video",   href:"https://www.youtube.com/watch?v=-h9kFZcULz8" },
    ]},
    { num:"05", title:"Fonctions linéaires et affines", resources:[
      { type:"video",   label:"Vidéo — Notion de fonction",               tag:"video",   href:"https://www.youtube.com/watch?v=3rXse_lbAKk" },
      { type:"video",   label:"Vidéo — Fonctions affines",                tag:"video",   href:"https://www.youtube.com/watch?v=WBip-WeQtkM" },
    ]},
    { num:"06", title:"Théorème de Thalès", resources:[
      { type:"video",   label:"Vidéo — Thalès (Yvan Monka)",              tag:"video",   href:"https://www.youtube.com/watch?v=GDHofGGcaI0" },
    ]},
    { num:"07", title:"Trigonométrie", resources:[
      { type:"video",   label:"Vidéo — sinus et cosinus",                 tag:"video",   href:"https://www.youtube.com/watch?v=RtstlSW1Jg0" },
      { type:"video",   label:"Vidéo — La tangente",                      tag:"video",   href:"https://www.youtube.com/watch?v=4kwH1rM992Q" },
    ]},
    { num:"08", title:"Statistiques et probabilités", resources:[
      { type:"video",   label:"Vidéo — Probabilités (Yvan Monka)",        tag:"video",   href:"https://www.youtube.com/watch?v=_iwHYbuZ4N8" },
    ]},
    { num:"09", title:"Formulaire brevet complet", resources:[
      { type:"cours",   label:"Formulaire PDF — Tout le cours 3e",        tag:"cours",   href:"https://www.maths-et-tiques.fr/telech/19Formulaire3e.pdf" },
      { type:"video",   label:"Vidéo — Conseils pour réussir",            tag:"video",   href:"https://www.youtube.com/watch?v=lRr8ietiLRQ" },
    ]},
  ]
};
