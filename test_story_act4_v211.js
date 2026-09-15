const fs=require('fs'),vm=require('vm');
const store=new Map(); const dummyEl=()=>null;
const ctx={window:{},structuredClone:global.structuredClone,console,confirm:()=>true,alert:()=>{},setTimeout:(fn)=>fn(),localStorage:{getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)},document:{getElementById:dummyEl,querySelector:dummyEl}};
vm.createContext(ctx);
for(const f of ['5goddesses-datenbank.js','story-boss-decks.js','story-encounter-decks.js','game-engine.js','story-mode.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const E=ctx.window.G5Engine,I=ctx.window.G5STORY_ENCOUNTER_DECKS,B=ctx.window.G5STORY_BOSS_DECKS,S=ctx.window.G5StoryMode;
let pass=0,fail=0; function t(n,ok){console.log((ok?'PASS ':'FAIL ')+n);ok?pass++:fail++;}
const act4=S.events().filter(e=>e.act===4);
t('Akt IV hat 6 Ereignisse',act4.length===6);
t('Akt IV Reihenfolge',act4.map(e=>e.id).join('|')==='act4_prolog|act4_serinith|act4_trix|act4_lilith|act4_sekh|act4_thal');
for(const id of ['act4_serinith','act4_trix','act4_lilith','act4_sekh']){const d=I.get(id);t(`${id}: Deck gültig`,!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t(`${id}: startGame`,!!g&&g.players?.length===2);}catch(e){console.error(e);t(`${id}: startGame`,false);}}
{const id='act4_thal',d=B.get(id);t(`${id}: Bossdeck gültig`,!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t(`${id}: startGame`,!!g&&g.players?.length===2);}catch(e){console.error(e);t(`${id}: startGame`,false);}}
const src=fs.readFileSync('story-mode.js','utf8');
t('Chronik kennt Akt IV',src.includes("4:'Akt IV – Die Leere'"));
t('v2.10 Akt-III Migration zu Akt IV',src.includes("p.completed.includes('act3_nemesis')")&&src.includes("e.id==='act4_prolog'"));
t('Akt-IV Abschluss vorhanden',src.includes('<strong>Akt IV abgeschlossen</strong>'));
t('Service Worker v122',fs.readFileSync('service-worker.js','utf8').includes('5goddesses-pwa-v122'));
t('App-Version v2.11',fs.readFileSync('index.html','utf8').includes('v2.11'));
console.log(`TOTAL ${pass} PASS / ${fail} FAIL`); if(fail)process.exit(1);
