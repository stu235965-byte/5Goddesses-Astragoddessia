(function(){
'use strict';
const KEY='5goddesses_story_progress_v1';
const ACTS={1:'Akt I – Die Fanfaren der Göttinnen',2:'Akt II – Fragmente einer vergangenen Welt',3:'Akt III – Blutlinien durch die Zeit'};
function actTitle(act){return ACTS[Number(act)]||`Akt ${act}`;}

const EVENTS=[
  {
    id:'act1_prolog',act:1,order:0,title:'Menias Bibliothek',x:53.0,y:18.2,type:'story',
    text:[
      'Zwischen den hohen Regalen ihrer Bibliothek folgt Menia erneut den Spuren der fünf Welten. Unter dem Gebäude liegen jene Katakomben, die kaum jemand außer ihr kennt – und dort wartet der große blaue Kristall.',
      'Die alten Texte berichten von einem gewaltigen Energiekern im Zentrum, der weitere Kristalle speist. Solche Kristalle soll es in den großen Städten aller fünf Welten geben: Oberwelt, Mittelwelt, Astralwelt, Unterwelt und Zwischenwelt.',
      'Als Menia den Kristall berührt, scheint sich in seinem Inneren wieder eine Gestalt abzuzeichnen. Kein gesprochenes Wort erreicht sie – und doch fühlt es sich an, als würde etwas nach ihr rufen. Kurz darauf erscheint Kiki mit einer Nachricht von Martha Kaizer.'
    ],
    post:'Menia schließt die Aufzeichnungen und steckt einige Notizen ein. Wenn Martha persönlich nach ihr verlangt, wird der Auftrag kaum gewöhnlich sein.'
  },
  {
    id:'act1_martha',act:1,order:1,title:'Auftrag von Haus Imperia',x:43.0,y:18.8,type:'encounter',encounter:'act1_martha',
    text:[
      'Martha Kaizer erwartet Menia im Einflussbereich von Haus Imperia. Bevor sie die eigentliche Aufgabe übergibt, will sie sicher sein, dass Menia für die kommenden Auseinandersetzungen vorbereitet ist.',
      'Das Gefecht ist eine Prüfung, kein persönlicher Konflikt. Martha tritt mit Verbündeten an, die ihrer Ordnung und ihrem Schutzgedanken folgen.'
    ],
    post:'Martha akzeptiert Menias Leistung. In mehreren Bezirken der Oberwelt wurden ungewöhnliche Vorgänge an den Kristallanlagen gemeldet. Menia soll herausfinden, ob dahinter ein Angriff, Sabotage – oder etwas völlig anderes steckt.'
  },
  {
    id:'act1_zahira',act:1,order:2,title:'Die unsichtbare Beobachterin',x:46.2,y:23.0,type:'encounter',encounter:'act1_zahira',
    text:[
      'Auf dem Weg zur nächsten Kristallspur merkt Menia, dass sie beobachtet wird. Die Hinweise führen zu Zahira Semiramis.',
      'Zahira gibt kaum etwas preis. Statt einer Erklärung fordert sie Menia heraus – als wolle sie nicht gewinnen, sondern herausfinden, wie viel Menia bereits verstanden hat.'
    ],
    post:'Nach dem Kampf bleibt Zahiras Absicht unklar. Doch eine ihrer Bemerkungen lenkt Menias Blick auf einen von Automata kontrollierten Sperrbezirk. Dort sollen Zugänge zu einer wichtigen Anlage abgeriegelt worden sein.'
  },
  {
    id:'act1_sperrbezirk',act:1,order:3,title:'Sperrbezirk',x:34.0,y:19.0,type:'encounter',encounter:'act1_sperrbezirk',
    text:[
      'Die Z.E.R.O.-Einheiten lassen Menia nicht passieren. Der Bereich steht unter vollständiger Kontrolle der Automata.',
      'Wenn Menia den Ursprung der Störung erreichen will, muss sie sich durch die erste Verteidigungslinie kämpfen.'
    ],
    post:'Hinter der Sperre entdeckt Menia, dass die Maßnahmen nicht nur dem Schutz vor Eindringlingen dienen. Die Automata sichern den Weg zum Kernbereich selbst. Q.U.E.E.N.s Einfluss ist hier überall spürbar.'
  },
  {
    id:'act1_waechter',act:1,order:4,title:'Die Wächter des Kerns',x:41.1,y:12.2,type:'encounter',encounter:'act1_waechter',
    text:[
      'Je näher Menia der Anlage kommt, desto stärker wird das vertraute Pulsieren des Kristalls. Eine zweite Automata-Gruppe blockiert den letzten Zugang.',
      'Diese Wächter sind deutlich aggressiver. Menia erkennt D.E.A.T.H. zwischen den Einheiten – eine fraktionslose Konstruktion, deren Rolle sie noch nicht einordnen kann.'
    ],
    post:'Der letzte Schutzring fällt. Vor Menia liegt der Zugang zu Q.U.E.E.N.s Bereich. Gleichzeitig reagiert der Kristall so stark wie nie zuvor. Irgendetwas verbindet diese Anlage mit den Signalen, die Menia in ihrer Bibliothek gespürt hat.'
  },
  {
    id:'act1_queen',act:1,order:5,title:'Q.U.E.E.N. – Ordnung der Oberwelt',x:37.4,y:15.5,type:'boss',boss:'act1_queen',
    text:[
      'Q.U.E.E.N. stellt sich Menia selbst entgegen. Ihre Z.E.R.O.-Einheiten arbeiten wie Teile einer einzigen Maschine.',
      'Für Menia geht es nicht darum, die Automata zu vernichten. Sie braucht Zugang zu den Informationen hinter Q.U.E.E.N.s Sperre – Informationen über die Kristalle und ihre Verbindung zu den anderen Welten.'
    ],
    post:'Q.U.E.E.N.s Niederlage öffnet Menia den Zugriff auf die gesuchten Daten. Die Störung ist nicht auf die Oberwelt begrenzt. Eine Spur führt deutlich in Richtung Astralwelt. Damit endet der erste Abschnitt von Menias Reise – und zum ersten Mal liegt wirklich eine andere Welt vor ihr.'
  },
  {
    id:'act2_prolog',act:2,order:0,title:'Jenseits des Himmels',x:31.6,y:31.0,type:'story',
    text:[
      'Die Daten aus Q.U.E.E.N.s Anlage weisen auf dieselbe Energiesignatur, die Menia bereits im Kristall unter ihrer Bibliothek gespürt hat. Doch die Spur endet nicht in der Oberwelt. Sie führt über ihre Grenzen hinaus – in die Astralwelt.',
      'Der Übergang ist alles andere als sanft. Als Menia wieder festen Boden unter den Füßen hat, liegt vor ihr eine Welt aus schwebenden Felsen, Lichtströmen und Bauwerken, die jeder vertrauten Vorstellung von Schwerkraft widersprechen. Kiki erholt sich deutlich schneller und fliegt voraus.',
      'Menias Kristallfragment reagiert sofort. Irgendwo in dieser Welt existieren weitere Bruchstücke derselben Macht. Bevor sie ihnen folgen kann, nähert sich jedoch eine Feuer-Magierin, die eine Fremde aus der Oberwelt keineswegs willkommen heißt.'
    ],
    post:'Menia richtet ihre Aufzeichnungen, überprüft das Kristallfragment und folgt Kiki tiefer in die Astralwelt. Die erste Person, die ihren Weg kreuzt, scheint bereits auf sie aufmerksam geworden zu sein.'
  },
  {
    id:'act2_saphira',act:2,order:1,title:'Die ungezähmte Flamme',x:22.2,y:37.3,type:'encounter',encounter:'act2_saphira',
    text:[
      'Saphira hält Menia zunächst für eine Eindringling. Die eigenwillige Feuer-Magierin kennt die Gefahren der Astralwelt und hat keinen Grund, einer Fremden zu vertrauen, die mit einem unbekannten Kristallfragment auftaucht.',
      'Menia versucht zu erklären, weshalb sie Q.U.E.E.N.s Spur bis hierher verfolgt hat. Saphira bleibt misstrauisch. Erst ein Gefecht soll zeigen, ob Menia wirklich nur Antworten sucht oder selbst eine Gefahr für Astranum darstellt.'
    ],
    post:'Saphira erkennt, dass Menia keine Eroberin ist. Sie berichtet von ungewöhnlichen astralen Reaktionen und von Gebieten, in denen sich Wurzeln und fremdartige Kreaturen um alte Fragmente sammeln. Eine dieser Spuren führt zur Wurzelpein und zu Psilo Cybe.'
  },
  {
    id:'act2_psilo',act:2,order:2,title:'Wurzelpein',x:17.5,y:43.7,type:'encounter',encounter:'act2_psilo',
    text:[
      'Die Landschaft verändert sich, je weiter Menia der Spur folgt. Wurzeln durchbrechen Felsen, fremdartige Pflanzen reagieren auf astrale Energie und zwischen den Ruinen breitet sich die Wurzelpein aus.',
      'Im Zentrum dieses Gebietes steht Psilo Cybe. Menias Suche nach einem freigelegten Fragment führt unmittelbar in Psilos Einflussbereich. Keine von beiden ist bereit, der anderen das Fundstück kampflos zu überlassen.'
    ],
    post:'Zwischen den aufgebrochenen Wurzeln findet Menia tatsächlich ein Astralfragment. Es reagiert auf das Stück aus der Oberwelt. Psilo nennt den Namen einer Bezwingerin, die solche Fragmente gezielt sucht: Keyla Dorn.'
  },
  {
    id:'act2_keyla',act:2,order:3,title:'Die Fragmentjägerin',x:10.7,y:28.5,type:'encounter',encounter:'act2_keyla',
    text:[
      'Im Astralfragment-Gebirge trifft Menia auf Keyla Dorn. Keyla erkennt sofort, dass Menia etwas bei sich trägt, das nicht in die Oberwelt gehören dürfte.',
      'Beide wollen Antworten, doch keine ist bereit, ihre Fundstücke einer Fremden anzuvertrauen. Aus dem gegenseitigen Misstrauen entsteht ein Kampf um die Fragmente und um die Frage, wer ihre Bedeutung überhaupt verstehen kann.'
    ],
    post:'Nach dem Gefecht legen Menia und Keyla ihre Fragmente nebeneinander. Ehre, Leben, Verteidigung – und Menias Fundstück aus Q.U.E.E.N.s Anlage – reagieren miteinander. Eine Spur führt weiter zu Evelyn und zu einem Fluch, der mit einem Astralfragment-Drachen verbunden ist.'
  },
  {
    id:'act2_evelyn',act:2,order:4,title:'Der Schattenfluch',x:19.1,y:32.0,type:'encounter',encounter:'act2_evelyn',
    text:[
      'Menia findet Evelyn dort, wo die astrale Energie unruhig wird. Der Schattenfluch, der mit ihr verbunden ist, wirkt zugleich wie Wunde und Schutz – eine Macht, die regeneriert und dennoch ihren Preis fordert.',
      'Evelyn reagiert abweisend auf Menias Fragen nach dem Drachen, den Fragmenten und vor allem nach der Göttin der Astralwelt. Als Menia nicht nachgibt, wird aus dem Gespräch eine offene Konfrontation.'
    ],
    post:'Evelyn bestätigt Menias schlimmsten Verdacht: Die Göttin der Astralwelt ist keine ferne Legende. Sie hat gesprochen, gelenkt und Forderungen gestellt. Die Spur der Fragmente führt damit zum Astranum-Konklave – und zu seiner Magistratin Strikelyn.'
  },
  {
    id:'act2_strikelyn',act:2,order:5,title:'Strikelyn – Magistratin des Astranums',x:26.6,y:34.4,type:'boss',boss:'act2_strikelyn',
    text:[
      'Strikelyn erwartet Menia im Einflussbereich des Astranum-Konklaves. Als brillante Magistratin und ehemalige Kommandantin verkörpert sie die Ordnung der Astralwelt – und sie wurde von der Göttin selbst eingesetzt.',
      'Menia verlangt Zugang zu den Archiven und Antworten auf die Verbindung zwischen Göttin, Fragmenten und den fünf Welten. Strikelyn verweigert beides. Für sie ist Menias Suche längst zu einem Eingriff in Angelegenheiten geworden, deren Folgen die Fremde aus der Oberwelt nicht überblicken kann.',
      'Menia weigert sich umzukehren. Damit entscheidet der Kampf, ob sie ihre Suche fortsetzen kann.'
    ],
    post:'Nach Strikelyns Niederlage erhält Menia Zugang zu einer Spur, die noch weiter zurückreicht. In den Aufzeichnungen findet sie keine einfache Erklärung für die Göttin – sondern eine Verbindung in die Mittelwelt und den Namen Mira Masako. Eine zweite Linie reicht Jahrhunderte weiter bis zu Skorpia Masako. Akt II endet mit einer neuen Frage: Wie können dieselben Spuren nicht nur Welten, sondern auch Zeiten miteinander verbinden?'
  },
  {
    id:'act3_prolog',act:3,order:0,title:'Spuren in die Mittelwelt',x:72.5,y:31.5,type:'story',
    text:[
      'Strikelyns Archive führen Menia aus der Astralwelt in die Mittelwelt. Die Aufzeichnungen nennen Mira Masako vom Chikara-Clan – eine Kriegerin, deren Geschichte mit Astrana-Energie, Tod und Wiederkehr verbunden ist.',
      'Die Mittelwelt wirkt zunächst vertrauter als die schwebenden Landschaften Astranums. Doch zwischen befestigten Städten, alten Orden und den Küstenreichen liegen dieselben Energiespuren, denen Menia seit ihrer Bibliothek folgt.',
      'Kiki kreist über dem Weg, während Menia versucht, Miras Spur aufzunehmen. Noch bevor sie den Chikara-Clan erreicht, gerät sie jedoch in die Konflikte dieser Welt.'
    ],
    post:'Menia folgt den Hinweisen durch die Mittelwelt. Der Weg zu Mira führt zunächst an Kriegerinnen vorbei, die einer Fremden aus der Oberwelt keinen freien Durchmarsch gewähren.'
  },
  {
    id:'act3_jeanne',act:3,order:1,title:'Glut des Morgens',x:76.0,y:35.0,type:'encounter',encounter:'act3_jeanne',
    text:[
      'Jeanne d’Arque stellt sich Menia auf ihrer Reise entgegen. Für Jeanne ist Menias Auftauchen mit fremden Fragmenten und Fragen nach alten Energien Grund genug, ihre Absichten zu prüfen.',
      'Menia will keine Feindschaft mit der Mittelwelt beginnen, doch sie kann ihre Suche auch nicht abbrechen. Wieder entscheidet ein Gefecht darüber, ob sie ihren Weg fortsetzen darf.'
    ],
    post:'Jeanne erkennt Menias Entschlossenheit an. Ihre Hinweise führen Menia weiter in Richtung der Küsten und zu einer Bezwingerin, deren Wege weit weniger geordnet verlaufen: Calypso.'
  },
  {
    id:'act3_calypso',act:3,order:2,title:'Die Freibeuterin',x:91.0,y:49.0,type:'encounter',encounter:'act3_calypso',
    text:[
      'An den Küsten der Mittelwelt kreuzt Calypso Menias Weg. Die Freibeuterin besitzt Informationen über Bewegungen zwischen den Regionen – doch Wissen ist für sie keine kostenlose Ware.',
      'Aus Verhandlung wird Herausforderung. Menia muss beweisen, dass die Spur, der sie folgt, mehr wert ist als ein weiteres Gerücht aus den fünf Welten.'
    ],
    post:'Calypso nennt Menia schließlich den Weg zum Einflussgebiet des Chikara-Clans. Zum ersten Mal scheint Mira Masako nicht mehr nur ein Name aus Strikelyns Archiven zu sein.'
  },
  {
    id:'act3_mira',act:3,order:3,title:'Der schneidende Wind',x:84.2,y:37.0,type:'encounter',encounter:'act3_mira',
    text:[
      'Menia findet Mira Masako. Die Kriegerin des Chikara-Clans begegnet der Fremden wachsam, besonders als Menia nach ihrer Vergangenheit und ihrer Verbindung zur Göttin der Mittelwelt fragt.',
      'Menia spricht von Wiederbelebung, Astrana-Energie und einer Blutlinie, die laut den Archiven weit über Miras eigene Zeit hinausreicht. Mira hat keinen Grund, dieser Geschichte sofort zu glauben.'
    ],
    post:'Nach dem Kampf erzählt Mira von ihrem Tod, ihrer Rückkehr und der Macht, die sie wieder ins Leben brachte. Menia erkennt darin dasselbe Muster, das sie bereits bei Evelyn gesehen hat. Doch Miras Blutlinie führt noch weiter – zu einem Namen aus einer Zeit, die noch gar nicht gekommen ist: Skorpia Masako.'
  },
  {
    id:'act3_zukunft',act:3,order:4,title:'Fremde in der Zukunft',x:62.5,y:50.0,type:'encounter',encounter:'act3_zukunft',
    text:[
      'Die Spur der Masakos endet nicht an einem Ort, sondern an einer anderen Zeit. Menia gelangt nach Genova Toshi – in eine Zukunft, in der Technologie, Astrana und die Kräfte der Zwischenwelt ineinandergreifen.',
      'Dort trifft sie auf Trix Sigma. Portale und Verschiebungen von Raum und Zeit machen schnell deutlich, dass Menias vertraute Regeln hier kaum noch gelten. Trix hält die Fremde aus der Vergangenheit zunächst für eine weitere Störung, die beseitigt werden muss.'
    ],
    post:'Trix’ Spuren führen Menia tiefer in die Zukunft. Hinweise auf den Chikara-Clan existieren noch immer – aber zugleich taucht ein neues Wort immer häufiger auf: Mornak.'
  },
  {
    id:'act3_bruet',act:3,order:5,title:'Flüstern der Brut',x:80.0,y:84.0,type:'encounter',encounter:'act3_bruet',
    text:[
      'Noch bevor Menia Skorpia erreicht, stößt sie auf die Vorzeichen einer größeren Bedrohung. Das Flüstern der Brut kündigt Mornak an, und aus einzelnen Spuren wird das Bild eines Schwarms.',
      'Menia muss sich durch die Brut kämpfen, während Kiki über den dunklen Formationen kreist. Was hier entsteht, ist kein lokaler Konflikt – etwas sammelt Kräfte in einem Ausmaß, das ganze Welten bedrohen könnte.'
    ],
    post:'Hinter den Spuren der Brut findet Menia endlich Skorpia Masako. Doch der Name Mira macht die Begegnung nicht leichter. Für Skorpia klingt Menias Geschichte unmöglich – und gefährlich.'
  },
  {
    id:'act3_skorpia',act:3,order:6,title:'Skorpia Masako – Stahlherz des Clans',x:77.0,y:58.0,type:'boss',boss:'act3_skorpia',
    text:[
      'Skorpia Masako steht Menia als Nachfahrin einer Blutlinie gegenüber, die Menia in der Mittelwelt selbst kennengelernt hat. Jahrhunderte trennen Skorpia von Mira – und genau deshalb hält sie Menias Behauptungen zunächst für eine Provokation.',
      'Menia zeigt ihre Aufzeichnungen und spricht von Mira, Astrana und der Göttin. Skorpia bleibt misstrauisch. Bevor aus den beiden Verbündete werden können, muss Menia beweisen, dass sie weder Miras Namen missbraucht noch Teil der Mornak-Bedrohung ist.'
    ],
    post:'Nach ihrer Niederlage hört Skorpia Menia endlich zu. Die Aufzeichnungen über Mira und die gemeinsamen Spuren überzeugen sie. Aus Gegnerinnen werden widerwillige Verbündete. Skorpia zeigt Menia, was sie selbst verfolgt hat: eine Mornak-Schwarmflotte – und im Zentrum der Bedrohung Nemesis.'
  },
  {
    id:'act3_nemesis',act:3,order:7,title:'Nemesis – Geißel der Galaxie',x:82.0,y:73.5,type:'boss',boss:'act3_nemesis',
    text:[
      'Menia und Skorpia folgen der Schwarmflotte in den Nemesis-Sektor. Dort wartet Nemesis nicht allein: Die Mornak-Brut ist Teil ihrer Macht, und jeder Angriff droht im Schwarm zu verschwinden.',
      'Für Menia ist dies mehr als ein weiterer Kampf. Die Mornak verbinden die Zukunft, die Zwischenwelt und jene rätselhaften Kräfte, die ihre Reise seit der Oberwelt begleiten. Gemeinsam mit Skorpia stellt sie sich der Geißel der Galaxie.'
    ],
    post:'Nemesis fällt und der Schwarm zieht sich zurück. Doch während Menia und Skorpia die Spuren des Kampfes untersuchen, reagiert Menias Kristall erneut. Ein beschädigter Übergang führt tiefer in die Zwischenwelt – zur Leere, zu den Apparaturen und zu Thal Ziris. Akt III endet dort, wo die nächste Frage beginnt: Was wurde in der Zwischenwelt versiegelt?' 
  }
];

const STORY_POOL_KEY='5goddesses_story_pool_v1';
const STORY_DECK_KEY='5goddesses_story_deck_v1';

function defaultProgress(){return {index:0,pendingPost:null,rewardPending:null,rewards:{},completed:[],failed:false,act1Finished:false,act2Finished:false,act3Finished:false,storyFinished:false};}
function load(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(!raw||typeof raw.index!=='number')return defaultProgress();const p={...defaultProgress(),...raw,rewards:{...defaultProgress().rewards,...(raw.rewards||{})}};/* Migration alter Story-Spielstände. */if(p.act1Finished&&p.index===5&&p.completed.includes('act1_queen')&&!p.act2Finished){p.index=EVENTS.findIndex(e=>e.id==='act2_prolog');p.pendingPost=null;p.rewardPending=null;p.failed=false;p.storyFinished=false;}/* v2.10: Wer Akt II in v2.09 abgeschlossen hat, startet direkt mit Akt III. */if(p.act2Finished&&p.completed.includes('act2_strikelyn')&&!p.act3Finished&&(p.storyFinished||p.index===EVENTS.findIndex(e=>e.id==='act2_strikelyn'))){p.index=EVENTS.findIndex(e=>e.id==='act3_prolog');p.pendingPost=null;p.rewardPending=null;p.failed=false;p.storyFinished=false;}save(p);return p;}catch{return defaultProgress();}}
function save(p){localStorage.setItem(KEY,JSON.stringify(p));}
function eventById(id){return EVENTS.find(e=>e.id===id)||null;}
function current(p){return EVENTS[Math.min(p.index,EVENTS.length-1)]||EVENTS[0];}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function db(){return window.GODDESSES_DB?.karten||[];}
function cardByImage(bild){return db().find(c=>c.bild===bild)||null;}
function cardImageByName(name,area){return db().find(c=>c.name===name&&(!area||c.deck_bereich===area))?.bild;}
function pick(name,area){const bild=cardImageByName(name,area);if(!bild)throw new Error(`Menias Starterdeck: Karte fehlt: ${name} (${area})`);return bild;}
function cloneCards(k){return {zuflucht:[...(k.zuflucht||[])],bezwingerinnen:[...(k.bezwingerinnen||[])],astral:[...(k.astral||[])],ruestkammer:[...(k.ruestkammer||[])],entwicklung:[...(k.entwicklung||[])]};}
function starterDeck(){
  return {
    id:'story-menia-starter-v2',name:'Menia · Starterdeck',storyPlayerDeck:true,
    karten:{
      zuflucht:[pick('Das strahlende Schloss Kaizer','zuflucht')],
      bezwingerinnen:[pick('Die glorreiche Eroberin Martha Kaizer','bezwingerinnen'),pick('Die Schöpferin Cassandra','bezwingerinnen'),pick('Der unsichtbare Untergang Menia','bezwingerinnen')],
      astral:[pick('Aufstieg','astral'),pick('Aufopferung der S.H.I.E.L.D.','astral'),pick('ASTRAL-Feuerball','astral'),pick('Rabe der Hoffnung Kiki','astral'),pick('Vollendete Tötungstechnik','astral')],
      ruestkammer:[pick('Die Abenddämmerung Hyhde','ruestkammer'),pick('Die Morgenröte Jakyl','ruestkammer'),pick('Parierdolch','ruestkammer'),pick('Die strahlende Krone Gloria','ruestkammer'),pick('Ubusa Brustpanzer','ruestkammer')],
      entwicklung:[pick('Das strahlende Schloss Kaizer','entwicklung'),pick('Die glorreiche Eroberin Martha Kaizer','entwicklung'),pick('Bastion Fernstille','entwicklung'),pick('Glut des Morgens','entwicklung'),pick('Sanctum Lysandor','entwicklung')]
    }
  };
}
function starterPoolImages(){const k=starterDeck().karten;return [...new Set(Object.values(k).flat())];}
function storyPoolSet(){
  const base=new Set(starterPoolImages());
  try{const a=JSON.parse(localStorage.getItem(STORY_POOL_KEY)||'[]');if(Array.isArray(a))for(const bild of a)if(cardByImage(bild))base.add(bild);}catch{}
  return base;
}
function savePool(set){localStorage.setItem(STORY_POOL_KEY,JSON.stringify([...set]));}
function loadStoryDeckCards(){
  const starter=starterDeck().karten;
  try{
    const raw=JSON.parse(localStorage.getItem(STORY_DECK_KEY)||'null');
    if(!raw)return cloneCards(starter);
    const k=cloneCards(raw);
    // v2.05: unverändertes altes Starterdeck automatisch auf die neu balancierte Astralkammer migrieren.
    const oldStarterAstral=['Aufstieg','Zweifache Bestrafung','Bis zum bitteren Ende','Rabe der Hoffnung Kiki','Vollendete Tötungstechnik'].map(n=>cardImageByName(n,'astral'));
    if(k.astral.length===5 && oldStarterAstral.every((b,i)=>k.astral[i]===b)) k.astral=[...starter.astral];
    // Storydeck darf nur aus freigeschalteten Storykarten bestehen. Zuflucht, Bezwingerinnen und Entwicklung bleiben fest.
    const pool=storyPoolSet();
    k.zuflucht=[...starter.zuflucht];k.bezwingerinnen=[...starter.bezwingerinnen];k.entwicklung=[...starter.entwicklung];
    if(k.astral.length!==5||k.ruestkammer.length!==5||![...k.astral,...k.ruestkammer].every(x=>pool.has(x)))return cloneCards(starter);
    return k;
  }catch{return cloneCards(starter);}
}
function saveStoryDeckCards(k){localStorage.setItem(STORY_DECK_KEY,JSON.stringify(cloneCards(k)));}
function playerDeck(){return {id:'story-menia-custom-v1',name:'Menia · Storydeck',storyPlayerDeck:true,karten:loadStoryDeckCards()};}

function closeDialog(){const m=document.getElementById('storyModal');if(m)m.hidden=true;}
function setHtmlText(root,paragraphs){root.innerHTML=(paragraphs||[]).map(t=>`<p>${esc(t)}</p>`).join('');}
function completeEvent(){
  const p=load(),e=current(p);
  if(!p.completed.includes(e.id))p.completed.push(e.id);
  p.pendingPost=null;p.rewardPending=null;p.failed=false;
  const next=EVENTS[p.index+1]||null;
  if(next){if(next.act!==e.act)p[`act${e.act}Finished`]=true;p.index++;}
  else {p[`act${e.act}Finished`]=true;p.storyFinished=true;}
  save(p);closeDialog();render();
}
function showEvent(e,mode='intro'){
  const p=load(),modal=document.getElementById('storyModal');if(!modal)return;
  document.getElementById('storyDialogAct').textContent=actTitle(e.act);
  document.getElementById('storyDialogTitle').textContent=e.title;
  const text=document.getElementById('storyDialogText');
  const actions=document.getElementById('storyDialogActions');actions.innerHTML='';
  if(mode==='post'){
    setHtmlText(text,[e.post]);
    const b=document.createElement('button');b.className='primary story-fight-button';const next=EVENTS[EVENTS.indexOf(e)+1];b.textContent=!next||next.act!==e.act?`${actTitle(e.act).split(' – ')[0]} abschließen`:'Weiter';b.onclick=completeEvent;actions.appendChild(b);
  }else{
    const paras=[...e.text];if(p.failed)paras.push('Der letzte Versuch ist gescheitert. Menia kann das Gefecht erneut beginnen.');
    setHtmlText(text,paras);
    const b=document.createElement('button');b.className='primary story-fight-button';
    if(e.type==='story'){b.textContent='Weiter';b.onclick=()=>{p.pendingPost=e.id;save(p);showEvent(e,'post');};}
    else {b.textContent=p.failed?'Kampf erneut beginnen':'Kampf beginnen';b.onclick=()=>startBattle(e);}
    actions.appendChild(b);
  }
  modal.hidden=false;
}
function startBattle(e){
  try{
    const deck=playerDeck();
    if(!window.G5Engine?.validDeck(deck))throw new Error('Menias Storydeck ist ungültig. Öffne den Story-Deckbuilder und stelle 5 Astralkammer- sowie 5 Rüstkammerkarten zusammen.');
    closeDialog();window.zeigeSeite?.('game');
    if(e.type==='boss')window.G5StoryBattlefield.startBoss(deck,e.boss,0);else window.G5StoryBattlefield.startEncounter(deck,e.encounter,0);
  }catch(err){console.error(err);alert(`Storykampf konnte nicht gestartet werden: ${err.message}`);window.zeigeSeite?.('story');}
}
function opponentDeckForEvent(e){return e?.type==='boss'?window.G5STORY_BOSS_DECKS?.get?.(e.boss):window.G5STORY_ENCOUNTER_DECKS?.get?.(e.encounter);}
function rewardChoices(e){
  const d=opponentDeckForEvent(e),pool=storyPoolSet();if(!d)return [];
  const all=[...(d.karten?.astral||[]),...(d.karten?.ruestkammer||[])];
  return [...new Set(all)].filter(b=>!pool.has(b)&&['astral','ruestkammer'].includes(cardByImage(b)?.deck_bereich));
}
function closeReward(){const m=document.getElementById('storyRewardModal');if(m)m.hidden=true;}
function claimReward(e,bild){
  const p=load();if(p.rewardPending!==e.id)return;
  const valid=rewardChoices(e);if(!valid.includes(bild))return;
  const pool=storyPoolSet();pool.add(bild);savePool(pool);
  p.rewards[e.id]=bild;p.rewardPending=null;p.pendingPost=e.id;save(p);closeReward();render();showEvent(e,'post');
}
function showReward(e){
  const p=load();if(p.rewards?.[e.id]){p.rewardPending=null;p.pendingPost=e.id;save(p);showEvent(e,'post');return;}
  const choices=rewardChoices(e);
  if(!choices.length){p.rewardPending=null;p.pendingPost=e.id;save(p);showEvent(e,'post');return;}
  const modal=document.getElementById('storyRewardModal'),grid=document.getElementById('storyRewardGrid');if(!modal||!grid)return;
  document.getElementById('storyRewardTitle').textContent=`Beute nach „${e.title}“`;
  grid.innerHTML='';
  for(const bild of choices){
    const k=cardByImage(bild);const b=document.createElement('button');b.type='button';b.className='story-reward-card';
    b.innerHTML=`<img src="${esc(bild)}" alt="${esc(k?.name||'Karte')}"><span>${esc(k?.name||'Karte')}</span><small>${k?.deck_bereich==='astral'?'Astralkammer':'Rüstkammer'}</small>`;
    b.onclick=()=>claimReward(e,bild);grid.appendChild(b);
  }
  modal.hidden=false;
}
function battleFinished(info){
  const p=load(),e=current(p);const expected=(e.type==='boss'?info?.bossId===e.boss:info?.encounterId===e.encounter);if(!expected)return;
  window.G5Engine?.clear?.();
  if(info.won){p.failed=false;p.pendingPost=null;p.rewardPending=e.id;}else{p.failed=true;p.pendingPost=null;p.rewardPending=null;}
  save(p);window.zeigeSeite?.('story');setTimeout(()=>info.won?showReward(e):showEvent(e,'intro'),40);
}

let builderWorking=null;
function fixedDeckSummaryHtml(){
  const s=starterDeck().karten;
  const names=a=>a.map(x=>esc(cardByImage(x)?.name||x)).join(' · ');
  return `<div class="story-builder-fixed"><strong>Fester Teil des Storydecks</strong><p><b>Zuflucht:</b> ${names(s.zuflucht)}</p><p><b>Bezwingerinnen:</b> ${names(s.bezwingerinnen)}</p><p><b>Entwicklung:</b> ${names(s.entwicklung)}</p></div>`;
}
function renderBuilder(){
  if(!builderWorking)return;const pool=storyPoolSet();
  const body=document.getElementById('storyDeckBuilderBody'),info=document.getElementById('storyDeckBuilderInfo');if(!body||!info)return;
  body.innerHTML=fixedDeckSummaryHtml();
  for(const area of ['astral','ruestkammer']){
    const unlocked=[...pool].map(cardByImage).filter(k=>k?.deck_bereich===area).sort((a,b)=>a.name.localeCompare(b.name,'de'));
    const selected=new Set(builderWorking[area]);
    const section=document.createElement('section');section.className='story-builder-section';
    section.innerHTML=`<div class="story-builder-section-head"><h3>${area==='astral'?'Astralkammer':'Rüstkammer'}</h3><span>${selected.size}/5 gewählt · ${unlocked.length} freigeschaltet</span></div>`;
    const grid=document.createElement('div');grid.className='story-builder-grid';
    for(const k of unlocked){
      const b=document.createElement('button');b.type='button';b.className='story-builder-card'+(selected.has(k.bild)?' selected':'');
      b.innerHTML=`<img src="${esc(k.bild)}" alt="${esc(k.name)}"><span>${esc(k.name)}</span>`;
      b.onclick=()=>{const a=builderWorking[area];const i=a.indexOf(k.bild);if(i>=0)a.splice(i,1);else if(a.length<5)a.push(k.bild);else{info.textContent='Es können genau 5 Karten gewählt werden. Entferne zuerst eine Karte.';info.classList.add('error-text');return;}renderBuilder();};
      grid.appendChild(b);
    }
    section.appendChild(grid);body.appendChild(section);
  }
  const okay=builderWorking.astral.length===5&&builderWorking.ruestkammer.length===5;
  info.textContent=okay?'Storydeck ist vollständig. Änderungen können gespeichert werden.':'Wähle genau 5 Astralkammer- und 5 Rüstkammerkarten.';info.classList.toggle('error-text',!okay);
  const saveBtn=document.getElementById('storyDeckBuilderSave');if(saveBtn)saveBtn.disabled=!okay;
}
function openDeckBuilder(){builderWorking=loadStoryDeckCards();renderBuilder();const m=document.getElementById('storyDeckBuilderModal');if(m)m.hidden=false;}
function closeDeckBuilder(){const m=document.getElementById('storyDeckBuilderModal');if(m)m.hidden=true;builderWorking=null;}
function resetBuilderToStarter(){builderWorking=cloneCards(starterDeck().karten);renderBuilder();}
function saveBuilder(){
  if(!builderWorking)return;const d={id:'story-menia-check',storyPlayerDeck:true,karten:cloneCards(builderWorking)};
  if(!window.G5Engine?.validDeck(d)){const info=document.getElementById('storyDeckBuilderInfo');if(info){info.textContent='Dieses Storydeck erfüllt die Deckregeln nicht.';info.classList.add('error-text');}return;}
  saveStoryDeckCards(builderWorking);closeDeckBuilder();render();
}
function chronicleHtml(p){
  const done=EVENTS.filter(e=>p.completed.includes(e.id));if(!done.length)return '<p class="story-empty">Noch keine abgeschlossenen Ereignisse. Menias Chronik füllt sich mit ihrer Reise.</p>';
  let n=0;return Object.keys(ACTS).map(a=>{const events=done.filter(e=>e.act===Number(a));if(!events.length)return '';return `<h3>${esc(actTitle(a))}</h3>`+events.map(e=>{n++;const r=p.rewards?.[e.id]?cardByImage(p.rewards[e.id]):null;return `<article class="chronicle-entry"><div class="chronicle-number">${n}</div><div><h4>${esc(e.title)}</h4><p>${esc(e.post)}</p>${r?`<small class="chronicle-reward">Erhaltene Karte: ${esc(r.name)}</small>`:''}</div></article>`;}).join('');}).join('');
}
function render(){
  const root=document.getElementById('storyNodes');if(!root)return;const p=load();root.innerHTML='';
  EVENTS.forEach((e,i)=>{if(i>p.index)return;const b=document.createElement('button');b.type='button';b.className='story-node';b.style.left=`${e.x}%`;b.style.top=`${e.y}%`;b.setAttribute('aria-label',e.title);const complete=p.completed.includes(e.id);
    if(complete){b.classList.add('completed');b.disabled=true;b.innerHTML='<span>✓</span>';}
    else if(i===p.index&&!p.storyFinished){b.classList.add('current');b.innerHTML=`<span>${e.type==='boss'?'★':'!'}</span><small>${esc(e.title)}</small>`;b.onclick=()=>{if(p.rewardPending===e.id)showReward(e);else showEvent(e,p.pendingPost===e.id?'post':'intro');};}root.appendChild(b);});
  const active=current(p);document.getElementById('storyActTitle').textContent=p.storyFinished?'Akt III abgeschlossen – Fortsetzung folgt':actTitle(active.act);
  document.getElementById('storyChronicleContent').innerHTML=chronicleHtml(p);
  const poolCount=document.getElementById('storyPoolCount');if(poolCount)poolCount.textContent=`Story-Kartenpool: ${storyPoolSet().size} Karten`;
  if(p.storyFinished){const done=document.createElement('div');done.className='story-act-complete';done.innerHTML='<strong>Akt III abgeschlossen</strong><span>Nach Nemesis führt Menias Spur tiefer in die Zwischenwelt. Die Leere, Thal Ziris und die Apparaturen warten in Akt IV.</span>';root.appendChild(done);}
}
function open(){render();const p=load(),e=current(p);if(p.rewardPending===e.id)setTimeout(()=>showReward(e),60);}
function reset(){if(!confirm('Story-Testfortschritt wirklich zurücksetzen? Dabei werden auch alle gewonnenen Storykarten und Änderungen an Menias Storydeck entfernt.'))return;localStorage.removeItem(KEY);localStorage.removeItem(STORY_POOL_KEY);localStorage.removeItem(STORY_DECK_KEY);window.G5Engine?.clear?.();closeDialog();closeReward();closeDeckBuilder();render();}

document.getElementById('storyReset')?.addEventListener('click',reset);
document.getElementById('storyDeckBuilderOpen')?.addEventListener('click',openDeckBuilder);
document.getElementById('storyDialogClose')?.addEventListener('click',closeDialog);
document.querySelector('[data-story-close]')?.addEventListener('click',closeDialog);
document.getElementById('storyRewardClose')?.addEventListener('click',closeReward);
document.getElementById('storyDeckBuilderClose')?.addEventListener('click',closeDeckBuilder);
document.querySelector('[data-story-builder-close]')?.addEventListener('click',closeDeckBuilder);
document.getElementById('storyDeckBuilderSave')?.addEventListener('click',saveBuilder);
document.getElementById('storyDeckBuilderStarter')?.addEventListener('click',resetBuilderToStarter);
window.G5StoryMode={open,render,battleFinished,playerDeck,starterDeck,storyPoolSet,rewardChoices,loadStoryDeckCards,saveStoryDeckCards,openDeckBuilder,reset,events:()=>structuredClone(EVENTS)};
})();
