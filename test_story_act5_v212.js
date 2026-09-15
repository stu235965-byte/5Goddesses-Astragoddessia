const fs=require('fs'),vm=require('vm');global.window=global;global.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};global.document={getElementById:()=>null,querySelector:()=>null};global.confirm=()=>true;
for(const f of ['5goddesses-datenbank.js','game-engine.js','story-boss-decks.js','story-encounter-decks.js','story-mode.js'])vm.runInThisContext(fs.readFileSync(__dirname+'/'+f,'utf8'),{filename:f});
let pass=0,fail=0;const t=(n,c)=>{console.log(c?'PASS':'FAIL',n);c?pass++:fail++};const S=G5StoryMode,E=G5Engine,I=G5STORY_ENCOUNTER_DECKS,B=G5STORY_BOSS_DECKS;
const a=S.events().filter(e=>e.act===5);t('Akt V hat 6 Ereignisse',a.length===6);t('Akt V Reihenfolge',a.map(e=>e.id).join('|')==='act5_prolog|act5_arcadia|act5_lilou|act5_alice|act5_rachsucht|act5_baronesse');
for(const id of ['act5_arcadia','act5_lilou','act5_alice','act5_rachsucht']){const d=I.get(id);t(id+' Deck gültig',!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t(id+' startGame',!!g&&g.players?.length===2)}catch(e){console.error(e);t(id+' startGame',false)}}
{const d=B.get('act5_baronesse');t('Baronesse Deck gültig',!!d&&E.validDeck(d));try{const g=E.startGame(S.playerDeck(),d,0);t('Baronesse startGame',!!g&&g.players?.length===2)}catch(e){console.error(e);t('Baronesse startGame',false)}}
console.log(`TOTAL ${pass} PASS / ${fail} FAIL`);process.exitCode=fail?1:0;
