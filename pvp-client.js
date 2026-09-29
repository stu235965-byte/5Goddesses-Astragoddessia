(()=>{
'use strict';
const q=new URLSearchParams(location.search);
const matchId=q.get('pvp'), token=q.get('token'), api=(q.get('api')||'').replace(/\/$/,'');
if(!matchId||!token||!api)return;
const P=window.G5PvP={active:true,matchId,token,api,playerIndex:null,revision:0,syncing:false,lastServerState:null};
const headers={'Content-Type':'application/json','Authorization':`Bearer ${token}`};
const endpoint=(suffix='')=>`${api}/api/matches/${encodeURIComponent(matchId)}${suffix}`;
async function request(url,opts={}){const r=await fetch(url,{...opts,headers:{...headers,...(opts.headers||{})}});const data=await r.json().catch(()=>({}));if(!r.ok)throw Object.assign(new Error(data.error||`HTTP ${r.status}`),{status:r.status,data});return data;}
function status(text,type=''){const el=document.getElementById('gameSetupInfo');if(el){el.hidden=false;el.className='meldung '+type;el.textContent=text;}}
function configureSetup(me){
  document.querySelector('label[for="gameDeckP2"]')?.closest('label')?.setAttribute('hidden','');
  document.getElementById('gameDeckP2')?.closest('label')?.setAttribute('hidden','');
  document.getElementById('gameStartPlayer')?.closest('label')?.setAttribute('hidden','');
  const h=document.querySelector('#gameSetup h2');if(h)h.textContent='Discord-PvP · Deck wählen';
  const start=document.getElementById('gameStart');if(start)start.textContent='Deck für PvP bestätigen';
  const resume=document.getElementById('gameResume');if(resume)resume.hidden=true;
  status(`${me.name}: Wähle dein vollständiges Deck. Das Gefecht startet, sobald beide Spieler bereit sind.`);
}
async function bootstrap(){
  try{
    const m=await request(endpoint());P.playerIndex=m.you.index;P.revision=m.revision||0;configureSetup(m.you);
    const start=document.getElementById('gameStart');
    start?.addEventListener('click',submitDeck,true);
    if(m.state)applyServer(m,true); else poll();
  }catch(e){status(`PvP-Verbindung fehlgeschlagen: ${e.message}`,'warn');}
}
async function submitDeck(ev){
  ev.preventDefault();ev.stopImmediatePropagation();
  const ds=window.G5Engine.decks().filter(window.G5Engine.validDeck);
  const sel=document.getElementById('gameDeckP1');const deck=ds.find(d=>d.id===sel?.value);
  if(!deck)return status('Bitte wähle zuerst ein vollständiges, gültiges Deck.','warn');
  try{await request(endpoint('/deck'),{method:'POST',body:JSON.stringify({deck})});status('Deck bestätigt. Warte auf den Gegenspieler …');poll();}catch(e){status(e.message,'warn');}
}
function applyServer(m,initial=false){
  P.revision=m.revision||P.revision;P.playerIndex=m.you?.index??P.playerIndex;
  if(m.state){P.lastServerState=JSON.stringify(m.state);window.G5PvPBattlefield?.setState(m.state,initial?'Discord-PvP gestartet.':'Gefechtsstand synchronisiert.');}
}
let timer=null;
async function poll(){clearTimeout(timer);try{const m=await request(endpoint());if(m.state){const serialized=JSON.stringify(m.state);if(serialized!==P.lastServerState)applyServer(m,!window.G5PvPBattlefield?.getState());}}catch(e){console.warn('PvP poll',e);}timer=setTimeout(poll,900);}
// Jede bestehende Engine-Aktion speichert bereits über G5Engine.save. Im PvP wird
// dieser Hook zusätzlich als optimistischer, revisionsgesicherter Server-Sync genutzt.
const localSave=window.G5Engine.save.bind(window.G5Engine);let queue=Promise.resolve();
window.G5Engine.save=function(state){
  if(!P.active)return localSave(state);
  const snapshot=JSON.parse(JSON.stringify(state));
  queue=queue.then(async()=>{
    try{const m=await request(endpoint('/state'),{method:'PUT',body:JSON.stringify({revision:P.revision,state:snapshot})});P.revision=m.revision;P.lastServerState=JSON.stringify(snapshot);}
    catch(e){if(e.status===409){const fresh=await request(endpoint());applyServer(fresh);}else throw e;}
  }).catch(e=>console.error('PvP sync',e));
};
window.addEventListener('DOMContentLoaded',bootstrap,{once:true});
if(document.readyState!=='loading')bootstrap();
})();
