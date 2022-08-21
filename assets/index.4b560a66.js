var G=Object.defineProperty,K=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var T=(o,a,t)=>a in o?G(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,k=(o,a)=>{for(var t in a||(a={}))Q.call(a,t)&&T(o,t,a[t]);if(J)for(var t of J(a))U.call(a,t)&&T(o,t,a[t]);return o},x=(o,a)=>K(o,V(a));import{j as n,a as e,r as b,F as X,u as Z,B as ee,L as S,R as te,b as A,c as ae,d as ne}from"./vendor.02d7e7c0.js";const re=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};re();const oe="_root_3nlmb_1",le="_enemy_3nlmb_5";var B={root:oe,enemy:le};const ce="_root_1k529_1";var E={root:ce};const ie="_root_pn1z6_1";var se={root:ie};function de(o){const{damage:a}=o;return n("div",{className:se.root,children:[a.num?e("p",{children:"You attack!"}):e("p",{children:"You missed :("}),e("p",{children:a.message?a.message:""}),e("p",{children:a.num?a.num:""})]})}function he(o){const{setEnemy:a,enemy:t}=o,{hp:c,level:r,ac:l,maxhp:i,strength:v,proficiencies:d,weapon:p}=o.player,[u,g]=b.exports.useState(!1),[R,N]=b.exports.useState({message:"",num:0});function $(M,f,m){console.log("attack!",m);let s=f.match(/^\d+/)[0],_=f.match(/\d+$/)[0],h=D(M);if(console.log("attack roll: ",h,t.armor,t.health),h[0]>=t.armor){let y=q(s,_,h[1]);console.log("damage: ",y),N({message:h[1],num:y}),g(!0),setTimeout(()=>{t.health-y>0?a(w=>x(k({},w),{health:w.health-y})):console.log("DEAD ENEMY"),g(!1),N({message:"",num:0})},2e3)}else g(!0),setTimeout(()=>{g(!1)},2e3)}function D(M){let f=Math.floor(Math.random()*20)+1;return f==20?[f+M,"crit"]:[f+M,""]}function q(M,f,m){let s=M*Math.floor(Math.random()*f)+1;switch(m){case"crit":return s*2;default:return s}}return n("div",{className:E.root,children:[u&&e(de,{damage:R}),n("div",{className:E.selected,children:[Object.keys(p).length==0&&e("p",{children:"Go to your Armory to select your weapon!"}),Object.keys(p).length>0&&n("div",{className:E.weapons,children:[e("h3",{children:p.name}),n("p",{children:["Attack: +player strength",e("br",{}),"Damage: ",p.dice," ",p.type,e("br",{}),"Category: ",p.category]}),e("button",{onClick:()=>$(v,p.dice,p.type),children:"Attack!"})]})]}),n("div",{className:E.stats,children:[n("div",{children:[n("p",{children:["Level: ",r]}),n("p",{children:["Armor Class: ",l]}),n("p",{children:["Strength: +",v]})]}),n("p",{children:["Proficiencies:",e("br",{})," ",d.join(", ")]})]}),n("label",{htmlFor:"player-hp",children:["HP ",i]}),n("meter",{id:"player-hp",min:"0",max:i,optimum:i,high:Math.floor(i*(2/3)),low:Math.floor(i*(1/3)),value:c,children:[c,"/100"]})]})}function me(o){var l,i,v;let a=(l=o.light)!=null?l:"#ffffff",t=(i=o.dark)!=null?i:"#000000",c=(v=o.saturated)!=null?v:"#717171",r=[];for(let d=0;d<o.challenge;d++)r.push(d);return r.map(d=>n("svg",{version:"1.1",viewBox:"0 0 74 68.44",style:{enableBackground:"new 0 0 74 68.44"},children:[e("path",{fill:c,d:"M40.02,1.78c0,0-13.48,0.3-16,1.93s-0.3,2.37-5.93,2.37s-7.7,0-9.63,2.07s-1.78,2.07-1.78,8.59s0.3,8.3,1.78,9.48\r c1.48,1.19,2.07,1.78,0,4.15s-3.85,6.22-3.85,10.81s1.19,9.04,2.96,11.56c1.78,2.52,2.52,1.93,0.15,5.19s-6.81,9.04-6.81,9.04h28.44\r c12.34-0.15,27.75,0.08,32.15-3.11c6.02-4.37,8.74-8.15,10.37-15.56c1.63-7.41,1.48-18.37-8.59-22.22s-17.33-1.19-17.33-1.19\r s1.33-7.85,0.89-16.44h-6.81V1.78z"}),e("path",{fill:"#FFF",d:"M10.89,16.13c0,1.48,1.39,2.59,1.39,2.59v-1.3c0,0,0.28,1.41,1.44,2.19l0.22-1.44c0,0,0.56,1.06,2.28,1.44\r v-3.48H10.89z"}),e("path",{fill:t,d:"M34.11,12.11h8.67c0,0,0.22,2.11-0.28,3.22s-2.06,3.28-3.11,3.56h3.44c0,0,0.05,3.61,0,4.67\r c-0.05,1.06-5.88,9.15-10.05,9.88l-0.56-2.17l1.89-5.49l-3.56-7.33L30.83,15L34.11,12.11z"}),e("path",{fill:t,d:"M36.7,38.31c0.85-3.14,4.85-8.14,8.46-9.42c3.61-1.28,8.5-1.33,8.5-1.33v3.71c0,0,1.5-1.54,5.5-1.54\r s5.94,2,7,2.94c1.06,0.94,2.28,3.22,2.28,8.61s-1.07,7.28-3.06,9.33c-1.99,2.06-3.22-6.72-3.22-6.72l-12-6.56l-10.83,1.91\r L36.7,38.31z"}),e("path",{fill:a,d:"M14,52c0.96,0.81,2.52,2.52,1.63,3.48c-0.89,0.96-3.74,3.11-4.98,5.26h12.46c0,0,0.3-1.63,2.59-3.33\r c2.3-1.7,5.61-3.08,7.07-3.68c1.46-0.6,0-5.58,0-5.58l-14.41-0.52L14,52z"}),e("path",{fill:t,d:"M23.56,21.78c-0.44,3.78-3.89,6.67-9,8.56C9.44,32.22,6.78,40.22,10,47.44s7.22,8.11,10.11,8.67\r C23,56.67,33.78,54,35.33,52.44c1.56-1.56,0-7,0-7l-13.02,1.78L18,41.78l5.56-6.67c0,0,9.56-5.56,9.78-6\r c0.22-0.44-2.56-7.33-2.56-7.33H23.56z"}),e("path",{fill:a,d:"M58.22,36c-10.44-5.22-21.56,2.33-24.78,4.22c-3.22,1.89-11.44,7.44-11.89,4c-0.44-3.44,2-5.89,7.89-8.67\r c5.89-2.78,6.89-6.78,6.56-12.22s-2.56-6.56-3.78-7.67c2.44-1.11,3.33-2.89,3.44-5.33c0,0-17,0-18,1s-3.11,1-3.11,0\r s-4.22-1.67-3.89,2.44c0,2.33,0.11,2.89,1.33,2.89s4.89-0.33,6.22,1.44c1.33,1.78,2.11,3.22-0.11,3.22s-7.46,0-7.46,0\r s0.13,2.89,3.69,2.89s15.22,0,15.22,0s-0.22,4.76-4.56,7.04c-4.33,2.29-11.78,3.96-10.22,12.18s9.56,7.78,17,7.89\r c0,0,1.11,3.22-2.78,6c-3.89,2.78-4.56,5.22-4.56,5.22h11.78c0,0,3.67-3.44,4-4.56c0.33-1.11-1.78-8.44,0-9.44s4.67-3.56,9.22-3.44\r c0,0-1.11,2.56-3.89,4.44c-2.78,1.89-4.11,4.67-4.11,4.67l11.78,0.11c0,0,0-1.67,1.33-3c0,2.67-0.22,5.44-3.89,6.22\r c-3.67,0.78-6.22,0.67-9.78,5c0,0,14.56,2.11,20.11-3.22S68.67,41.22,58.22,36z M22.78,15.78c0,0.89-0.72,1.61-1.61,1.61\r c-0.89,0-1.61-0.72-1.61-1.61v-1.56c0-0.89,0.72-1.61,1.61-1.61c0.89,0,1.61,0.72,1.61,1.61V15.78z"}),e("path",{fill:t,d:"M18.52,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S18.52,57.17,18.52,57.17z"}),e("path",{fill:t,d:"M23.06,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S23.06,57.17,23.06,57.17z"}),e("path",{fill:t,d:"M13.98,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C12.43,58.06,13.98,57.17,13.98,57.17z"}),e("path",{fill:t,d:"M31.9,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S31.9,58.95,31.9,58.95z"}),e("path",{fill:t,d:"M36.11,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C34.56,59.84,36.11,58.95,36.11,58.95z"}),e("path",{fill:t,d:"M27.7,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C26.14,59.84,27.7,58.95,27.7,58.95z"}),e("path",{fill:t,d:"M49,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S49,50.61,49,50.61z"}),e("path",{fill:t,d:"M53.21,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C51.65,51.5,53.21,50.61,53.21,50.61z"}),e("path",{fill:t,d:"M44.79,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C43.24,51.5,44.79,50.61,44.79,50.61z"}),e("path",{fill:t,d:"M23.94,13.61c0,0-0.44-4.06,1.78-5.78S30,5.94,32.78,5.94s3.78,0.22,2.83,1.5c-0.94,1.28-2,1.5-4.11,1.61\r c-2.11,0.11-2.72,0.78-2.56,2.11S28.61,13.61,23.94,13.61z"})]},d))}const pe="_root_suxp4_1";var I={root:pe};function ue(o){let a=o.actions;return e("div",{className:I.root,children:a.map(t=>{var r,l;let c=t.damage[0];return n("div",{className:I.action,children:[e("p",{children:t.name}),n("p",{children:["Attack bonus: +",t.attack_bonus]}),n("p",{children:["Damage: ",(r=c.damage_dice)!=null?r:""," ",(l=c.damage_type.name)!=null?l:{}]})]},t.name)})})}const ge="_root_6tyb7_1",fe="_enemyHealth_6tyb7_5",ye="_challenge_6tyb7_17";var z={root:ge,enemyHealth:fe,challenge:ye};function ve(o){const{name:a,armor:t,health:c,maxhp:r,actions:l,challenge:i}=o.enemy;return n(X,{children:[n("div",{className:z.enemyHealth,children:[n("label",{htmlFor:"enemy-hp",children:["HP: ",c]}),n("meter",{id:"enemy-hp",min:"0",max:r,optimum:r,high:Math.floor(r*(2/3)),low:Math.floor(r*(1/3)),value:c,children:[c,"/100"]})]}),n("div",{children:[e("div",{className:z.challenge,children:e(me,{challenge:i,saturated:"#771313"})}),n("div",{className:z.info,children:[n("div",{className:z.text,children:[e("h2",{children:a||"No name :("}),n("p",{children:["Armor class: ",t||"10"]})]}),e(ue,{actions:l})]})]})]})}function _e(o){const{player:a,enemy:t,setEnemy:c,getEnemy:r,addShield:l,addArmor:i,addEnemyToJournal:v,getWeapon:d,loading:p}=o;return n("section",{className:B.root,children:[n("div",{className:B.enemy,children:[p&&"...loading",t.name?e(ve,{enemy:t}):e("button",{onClick:()=>r(),children:"Get Enemy"})]}),e(he,{player:a,enemy:t,setEnemy:c})]})}function we(o){return n("div",{style:{padding:"1rem",maxWidth:"900px",margin:"0 auto",display:"flex",flexDirection:"column"},children:[e("h1",{children:"Hey, thanks for playing this game!"}),n("p",{children:["This is a small game made by Keiran Pillman to practice using React and REST API calls. It is made possible by the ",e("a",{href:"https://www.dnd5eapi.co/",target:"_blank",children:"DND 5e API"}),"."]}),e("p",{children:"You will face random enemies and will be given weapons in order to fight them. Like in Dungeons and Dragons, you will roll dice to attack and determine damage, so your attack might not hit! You will automatically get the first turn once a fight begins, with your enemy attacking second."})]})}const be="_root_17fo5_1",Me="_armory_17fo5_4";var Y={root:be,armory:Me};const ke="_root_1ne5x_1";var xe={root:ke};function Ne(o){const{weapon:a,index:t,setWeapon:c,armory:r}=o,[l,i]=b.exports.useState(a.equipped);return b.exports.useEffect(()=>{i(a.equipped)},[r]),n("div",{className:xe.root,children:[e("h3",{children:a.name}),n("p",{children:["Attack: +player strength",e("br",{}),"Damage: ",a.dice," ",a.type,e("br",{}),"Category: ",a.category]}),l&&e("p",{children:"Equipped"}),e("button",{onClick:()=>c(a,t),children:"Select Weapon"})]})}function Se(o){const{armor:a,weapons:t,shields:c}=o.armory,{setPlayer:r,setArmory:l,armory:i}=o;function v(d,p){let u=x(k({},d),{equipped:!0});l(g=>x(k({},g),{weapons:g.weapons.splice(p,1,u)})),r(g=>x(k({},g),{weapon:u}))}return n("div",{className:Y.root,children:[e("h2",{children:"Weapons"}),e("div",{id:"weapons",className:Y.armory,children:t.map((d,p)=>{let u=`${p}+${d.name}`;return e(Ne,{weapon:d,index:p,setWeapon:v,armory:i},u)})})]})}function Ae(o){const{journal:a}=o,t=a.length>0;return n("div",{children:[e("h2",{children:"Journal"}),!t&&e("p",{children:"Go and fight some enemies! When you have, they will be recorded here."}),a.map((c,r)=>e("h3",{children:c.name},r))]})}const Ee="_root_1qubt_1",ze="_topRow_1qubt_16",$e="_titles_1qubt_24";var L={root:Ee,topRow:ze,titles:$e},De="/dragon-game/assets/dragon-favicon.79bfb29c.svg";function qe(){const[o,a]=b.exports.useState({name:"",armor:10,health:10,maxhp:10,actions:[],challenge:1}),[t,c]=b.exports.useState({level:1,weapon:{},equipped:[],hp:15,maxhp:15,ac:10,strength:2,proficiencies:["Simple Weapons","Light Armor","Shields"]}),[r,l]=b.exports.useState({armor:[],weapons:[],shields:[]}),[i,v]=b.exports.useState([]);b.exports.useEffect(()=>{f()},[]);const{get:d,post:p,response:u,loading:g,error:R}=Z("https://www.dnd5eapi.co");function N(m){l(s=>x(k({},s),{armor:[...s.armor,m]}))}function $(m){let s={name:m.name,challenge:m.challenge};v(_=>[..._,s])}function D(m){l(s=>x(k({},s),{shields:[...s.shields,m]}))}function q(m){l(s=>x(k({},s),{weapons:[...s.weapons,m]}))}async function M(m=1){let s;const _=await d(`/api/monsters?challenge_rating=${m}`);if(u.ok){let y=Math.floor(Math.random()*_.count);s=_.results[y].url}let h=await d(s);if(u.ok){let y=h.actions.filter(w=>{if(w.damage&&w.damage.length>0)return w});a({name:h.name,armor:h.armor_class,health:h.hit_points,maxhp:h.hit_points,actions:y,challenge:m})}}async function f(m="simple-weapons"){var y,w,W,F,P,j,H,O;let s;const _=await d(`/api/equipment-categories/${m}`);if(u.ok){let C=Math.floor(Math.random()*_.equipment.length);s=_.equipment[C].url}const h=await d(s);if(u.ok){let C={name:h.name,desc:(y=h.desc)!=null?y:[],dice:(W=(w=h.damage)==null?void 0:w.damage_dice)!=null?W:"",type:(P=(F=h.damage)==null?void 0:F.damage_type.name)!=null?P:"",category:(j=h.weapon_category)!=null?j:"",rarity:(H=h.rarity)!=null?H:"",properties:(O=h.properties)!=null?O:[],equipped:!1};q(C)}}return e("div",{className:L.root,children:n(ee,{children:[n("header",{children:[n("div",{className:L.topRow,children:[n("div",{className:L.titles,children:[e("img",{src:De,width:"50px"}),n("h1",{children:[n("span",{children:["(Dungeons and)",e("br",{})]})," Dragon Game"]})]}),e(S,{to:"/dragon-game/credits",children:"Credits"})]}),n("nav",{children:[e(S,{to:"/dragon-game/armory",children:"Armory"}),e(S,{to:"/dragon-game/",children:"Arena"}),e(S,{to:"/dragon-game/journal",children:"Journal"})]})]}),e("main",{children:n(te,{children:[e(A,{path:"/dragon-game/credits",element:e(we,{})}),e(A,{path:"/dragon-game/",element:e(_e,{player:t,setPlayer:c,enemy:o,setEnemy:a,getEnemy:M,addShield:D,addArmor:N,addEnemyToJournal:$,getWeapon:f,loading:g})}),e(A,{path:"/dragon-game/armory",element:e(Se,{armory:r,setPlayer:c,setArmory:l})}),e(A,{path:"/dragon-game/journal",element:e(Ae,{journal:i})})]})})]})})}ae.render(e(ne.StrictMode,{children:e(qe,{})}),document.getElementById("root"));