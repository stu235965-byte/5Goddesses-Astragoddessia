const fs=require('fs'),vm=require('vm');
const store=new Map(); const dummyEl=()=>null;
const ctx={window:{},structuredClone:global.structuredClone,console,confirm:()=>true,alert:()=>{},setTimeout:(fn)=>fn(),localStorage:{getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)},document:{getElementById:dummyEl,querySelector:dummyEl}};
vm.createContext(ctx);
for(const f of ['5goddesses-datenbank.js','story-boss-decks.js','story-encounter-decks.js','game-engine.js','story-mode.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const E=ctx.window.G5Engine,I=ctx.window.G5STORY_ENCOUNTER_DECKS,B=ctx.window.G5STORY_BOSS_DECKS,S=ctx.window.G5StoryMode;
let pass=0,fail=0; function t(n,ok){console.log((ok?'PASS ':'FAIL ')+n);ok?pass++:fail++;}
const ev=S.events(), act3=ev.filter(e=>e.act===3);
t('Akt III hat 8 Ereignisse',act3.length===8);
t('Akt III Reihenfolge',act3.map(e=>e.id).join('|')==='act3_prolog|act3_jeanne|act3_calypso|act3_mira|act3_zukunft|act3_bruet|act3_skorpia|act3_nemesis');
for(const id of ['act3_jeanne','act3_calypso','act3_mira','act3_zukunft','act3_bruet']){const d=I.get(id);t(`${id}: Deck gültig`,!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t(`${id}: startGame`,!!g&&g.players?.length===2);}catch(e){t(`${id}: startGame`,false);}}
for(const id of ['act3_skorpia','act3_nemesis']){const d=B.get(id);t(`${id}: Bossdeck gültig`,!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t(`${id}: startGame`,!!g&&g.players?.length===2);}catch(e){t(`${id}: startGame`,false);}}
const src=fs.readFileSync('story-mode.js','utf8');
t('Chronik kennt Akt III',src.includes("3:'Akt III – Blutlinien durch die Zeit'"));
t('v2.09 Akt-II Migration zu Akt III',src.includes("p.completed.includes('act2_strikelyn')")&&src.includes("e.id==='act3_prolog'"));
t('Akt-III Abschluss vorhanden',src.includes('<strong>Akt III abgeschlossen</strong>'));
t('Service Worker v121',fs.readFileSync('service-worker.js','utf8').includes('5goddesses-pwa-v121'));
t('App-Version v2.10',fs.readFileSync('index.html','utf8').includes('v2.10'));
console.log(`TOTAL ${pass} PASS / ${fail} FAIL`); if(fail)process.exit(1);
