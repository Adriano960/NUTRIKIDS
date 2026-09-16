const colors={green:"#4d934f",blue:"#2c81a1",teal:"#167d83",yellow:"#f0bd4a",orange:"#ed9342",red:"#df7165",purple:"#7562a7"};
function svg(content,label=""){return `<svg viewBox="0 0 100 100" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`}
const stroke=`stroke="${colors.teal}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"`;
const iconShapes={
  apple:svg(`<path d="M51 28c-8-12 2-19 10-20"/><path d="M53 23c-8-8-18-3-20 3"/><path d="M48 30C20 17 12 46 26 68c12 20 31 20 45 0 15-23 4-49-23-38Z" fill="#e56f61" ${stroke}/><path d="M57 18c8-8 15-7 20-4-5 7-11 9-20 4Z" fill="#6da94e"/>`,"Maçã"),
  banana:svg(`<path d="M18 53c15 24 41 30 66 6 4-4 6-9 4-14-3 6-8 8-14 10-21 8-38-1-48-15-7-9-14-4-8 13Z" fill="#f1c34d" ${stroke}/><path d="M77 43l10-5M21 36l-6-5" ${stroke}/>`,"Banana"),
  orange:svg(`<circle cx="50" cy="53" r="29" fill="#f29a3d" ${stroke}/><path d="M50 24v-9M50 15c8-6 16-3 20 2-8 4-14 4-20-2ZM35 40l15 13 15-13M35 67l15-14 15 14" fill="none" ${stroke}/>`,"Laranja"),
  broccoli:svg(`<path d="M27 54c-4-11 2-21 13-22 3-13 22-17 30-5 12-3 20 8 15 19 8 6 3 18-7 19H31c-8 0-11-6-4-11Z" fill="#68a64d" ${stroke}/><path d="M46 63v23M57 62v24M40 86h25" ${stroke}/>`,"Brócolis"),
  carrot:svg(`<path d="M50 37 68 75c-11 11-25 11-36 0l18-38Z" fill="#e98c3d" ${stroke}/><path d="M50 37c-9-13-18-14-23-10M50 37c0-16 8-21 14-23M50 37c9-12 18-12 24-8" fill="none" ${stroke}/>`,"Cenoura"),
  grain:svg(`<path d="M50 85V22M50 34c-18-7-22-17-20-22 12 0 20 8 20 22ZM50 46c18-7 22-17 20-22-12 0-20 8-20 22ZM50 58c-18-7-22-17-20-22 12 0 20 8 20 22ZM50 70c18-7 22-17 20-22-12 0-20 8-20 22Z" fill="#e4b74b" ${stroke}/>`,"Cereais"),
  protein:svg(`<path d="M20 63c9-25 18-36 29-36s20 11 31 36c-18 12-42 12-60 0Z" fill="#d98268" ${stroke}/><path d="M33 49h34" ${stroke}/>`,"Proteínas"),
  milk:svg(`<path d="M34 24h32l4 12v45c-13 8-27 8-40 0V36l4-12Z" fill="#f7fbfa" ${stroke}/><path d="M35 42h30M41 29h18" ${stroke}/>`,"Laticínios"),
  water:svg(`<path d="M31 23h38l-4 60H35l-4-60Z" fill="#e9f7fb" ${stroke}/><path d="M35 57c9-5 20 7 30 0" fill="none" ${stroke}/>`,"Hidratação"),
  move:svg(`<circle cx="50" cy="21" r="9" fill="#e7b08b" ${stroke}/><path d="M50 31v29M50 39 30 52M50 39l20 9M50 60 34 82M50 60l21 17" fill="none" ${stroke}/>`,"Atividade física"),
  growth:svg(`<path d="M25 78h50M32 78V30M32 30h38M44 42h18M44 54h18M44 66h18" fill="none" ${stroke}/><path d="M40 78V68M48 78V59M56 78V48M64 78V38" fill="none" stroke="#6da94e" stroke-width="6" stroke-linecap="round"/>`,"Crescimento"),
  sleep:svg(`<path d="M24 67c9-19 29-21 43-9 5 4 8 9 9 16H24Z" fill="#9b9ad0" ${stroke}/><path d="M67 28h10M72 23v10M30 22c14 2 20 16 13 27-5 7-13 9-21 6 11-5 14-22 8-33Z" fill="#e9c95b" ${stroke}/>`,"Sono"),
  play:svg(`<path d="M28 38h44v44H28z" fill="#f3c94e" ${stroke}/><path d="m39 52 9 8 14-17" fill="none" ${stroke}/><path d="M25 28h50" ${stroke}/>`,"Jogos"),
  education:svg(`<path d="M16 28 50 17l34 11-34 12-34-12Z" fill="#4b9ab8" ${stroke}/><path d="M25 36v27c17 8 33 8 50 0V36M50 42v31" fill="#fff" ${stroke}/>`,"Educação"),
  family:svg(`<circle cx="50" cy="23" r="10" fill="#e5ad88" ${stroke}/><circle cx="27" cy="37" r="8" fill="#e5ad88" ${stroke}/><circle cx="73" cy="37" r="8" fill="#e5ad88" ${stroke}/><path d="M31 70c0-17 11-27 19-27s19 10 19 27M10 74c1-14 8-22 17-22s16 8 17 22M56 74c1-14 8-22 17-22s16 8 17 22" fill="#5d9f72" ${stroke}/>`,"Família"),
  parent:svg(`<circle cx="38" cy="31" r="11" fill="#e4ad88" ${stroke}/><circle cx="67" cy="34" r="10" fill="#e4ad88" ${stroke}/><path d="M20 78c0-20 10-31 20-31s20 11 20 31M49 78c0-18 9-29 18-29s18 11 18 29" fill="#3b83a1" ${stroke}/>`,"Pais"),
  student:svg(`<circle cx="50" cy="29" r="12" fill="#e4ad88" ${stroke}/><path d="M28 80c1-24 10-35 22-35s21 11 22 35" fill="#477ea2" ${stroke}/><path d="M30 23h40l-7-8H37l-7 8Z" fill="#294d75" ${stroke}/><path d="M67 50v29M62 68h17" ${stroke}/>`,"Estudantes"),
  plus:svg(`<circle cx="50" cy="50" r="30" fill="#eaf7ef" ${stroke}/><path d="M50 35v30M35 50h30" ${stroke}/`,"Adicionar"),
  minus:svg(`<circle cx="50" cy="50" r="30" fill="#fff0ee" stroke="#df7165" stroke-width="3"/><path d="M35 50h30" stroke="#df7165" stroke-width="3" stroke-linecap="round"/>`,"Remover"),
  close:svg(`<circle cx="50" cy="50" r="30" fill="#f6f8f8" ${stroke}/><path d="m39 39 22 22M61 39 39 61" ${stroke}/>`,"Fechar"),
  back:svg(`<path d="M70 50H31M45 35 30 50l15 15" fill="none" ${stroke}/>`,"Voltar"),
  forward:svg(`<path d="M30 50h39M55 35l15 15-15 15" fill="none" ${stroke}/>`,"Avançar"),
  search:svg(`<circle cx="44" cy="44" r="21" fill="none" ${stroke}/><path d="m60 60 18 18" ${stroke}/>`,"Pesquisar"),
  calendar:svg(`<rect x="22" y="25" width="56" height="55" rx="8" fill="#fff" ${stroke}/><path d="M22 42h56M35 18v15M65 18v15M34 54h7M47 54h7M60 54h7M34 67h7M47 67h7" ${stroke}/>`,"Calendário"),
  chart:svg(`<path d="M22 78V25M22 78h58" fill="none" ${stroke}/><path d="M31 65 45 51l10 8 18-23" fill="none" stroke="#5d9f72" stroke-width="5" stroke-linecap="round"/><path d="m65 36 8 0-1 8" fill="none" stroke="#5d9f72" stroke-width="3"/>`,"Gráfico"),
  heart:svg(`<path d="M50 77C25 61 19 50 25 39c5-10 18-12 25-3 7-9 20-7 25 3 6 11 0 22-25 38Z" fill="#e96e63" ${stroke}/>`,"Favorito"),
  check:svg(`<circle cx="50" cy="50" r="30" fill="#eaf7ef" stroke="#5d9f72" stroke-width="3"/><path d="m35 51 10 10 21-23" fill="none" stroke="#5d9f72" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,"Concluído")
};

const categories=[
 ["Alimentação","food","apple"],["Frutas","food","orange"],["Vegetais","health","broccoli"],["Cereais","food","grain"],["Proteínas","food","protein"],["Laticínios","food","milk"],["Hidratação","health","water"],["Atividade física","health","move"],["Crescimento","progress","growth"],["Sono","health","sleep"],["Jogos","education","play"],["Educação","education","education"],["Família","family","family"],["Pais","family","parent"],["Estudantes","education","student"]
];
const foods={
 "Frutas":[["Maçã","apple"],["Banana","banana"],["Laranja","orange"],["Mamão","orange"],["Manga","apple"],["Melancia","orange"],["Morango","apple"],["Uva","orange"],["Abacaxi","apple"],["Pera","apple"],["Goiaba","apple"],["Melão","orange"],["Kiwi","apple"],["Tangerina","orange"],["Maracujá","orange"],["Caju","apple"],["Acerola","orange"],["Coco","apple"]],
 "Vegetais":[["Cenoura","carrot"],["Brócolis","broccoli"],["Tomate","orange"],["Batata","apple"],["Abóbora","orange"],["Beterraba","apple"],["Chuchu","cucumber"],["Pepino","cucumber"],["Couve","leaf"],["Alface","leaf"],["Espinafre","leaf"],["Milho","grain"],["Vagem","leaf"],["Abobrinha","cucumber"],["Berinjela","apple"],["Batata-doce","apple"],["Cebola","apple"],["Alho","apple"],["Pimentão","orange"],["Rúcula","leaf"]],
 "Cereais":[["Arroz","grain"],["Aveia","grain"],["Quinoa","grain"],["Feijão","bean"],["Lentilha","bean"],["Milho","grain"],["Grão-de-bico","bean"],["Outros","grain"]],
 "Proteínas":[["Frango","protein"],["Peixe","protein"],["Ovo","protein"],["Carne","protein"],["Feijão","bean"],["Lentilha","bean"],["Grão-de-bico","bean"],["Outras fontes","protein"]],
 "Laticínios":[["Leite","milk"],["Leite (garrafa)","milk"],["Iogurte","milk"],["Queijo","milk"]],
 "Hidratação":[["Copo de água","water"],["Garrafa","water"],["Jarra","water"],["Bebedouro","water"]]
};
iconShapes.cucumber=svg(`<path d="M18 54c10-25 45-31 66-8-9 28-45 38-66 8Z" fill="#69a55a" ${stroke}/><path d="M36 46c9-4 19-4 28 1M31 58c10-3 23-2 34 3" fill="none" stroke="#3f824d" stroke-width="2"/>`,"Pepino");
iconShapes.leaf=svg(`<path d="M50 84V31M50 47C28 43 19 29 20 20c16 0 27 9 30 27M50 61c21-4 30-17 30-28-16 0-27 9-30 28Z" fill="#6ba853" ${stroke}/>`,"Folha");
iconShapes.bean=svg(`<ellipse cx="42" cy="51" rx="20" ry="29" transform="rotate(-30 42 51)" fill="#9c633e" ${stroke}/><ellipse cx="65" cy="48" rx="16" ry="23" transform="rotate(30 65 48)" fill="#b4794a" ${stroke}/>`,"Leguminosa");

const activities=["Caminhada","Corrida","Futebol","Dança","Bicicleta","Natação","Pular corda","Alongamento","Brincadeira no parque","Circuito de movimentos"];
const hydration=[["Copo de água","water"],["Garrafa","water"],["Jarra","water"],["Bebedouro","water"],["Gota gráfica","water"],["Água sendo adicionada","water"]];
const stages=["Semente no solo","Pequeno broto","Planta jovem","Planta crescendo","Planta saudável","Planta desenvolvida"];
const achievements=["Primeira refeição","Primeiro desafio","Sequência de dias","Hidratação","Movimento","Alimentação variada","Novos alimentos","Progresso","Conhecimento","Conquista especial"];
const ui=["plus","minus","close","back","forward","search","calendar","chart","heart","check"];

document.getElementById("categoryGrid").innerHTML=categories.map(([name,,shape])=>`<article class="visual-card"><div class="visual-icon">${iconShapes[shape]}</div><h3>${name}</h3><p>SVG NutriKids</p></article>`).join("");

const tabs=document.getElementById("foodTabs");
Object.keys(foods).forEach((cat,i)=>{const b=document.createElement("button");b.className="tab"+(i===0?" active":"");b.textContent=cat;b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderFoods(cat)};tabs.appendChild(b)});
function renderFoods(cat){document.getElementById("foodGrid").innerHTML=foods[cat].map(([name,shape])=>`<article class="food-card"><div class="food-art">${iconShapes[shape]||iconShapes.apple}</div><h3>${name}</h3><small>${cat}</small></article>`).join("")}
renderFoods("Frutas");

document.getElementById("hydrationGrid").innerHTML=hydration.map(([n,s])=>`<article class="feature-card"><div class="big-icon">${iconShapes[s]}</div><h3>${n}</h3><p>Elemento transparente e reutilizável.</p></article>`).join("");

document.getElementById("activityGrid").innerHTML=activities.map((n,i)=>`<article class="activity-card"><div class="activity-art"><div class="runner" style="left:${25+i%4*15}%;transform:rotate(${i%2?'-12':'12'}deg)"></div></div><h3>${n}</h3><p>Movimento seguro e divertido.</p></article>`).join("");

document.getElementById("plantGrid").innerHTML=stages.map((n,i)=>`<article class="plant-card"><div class="plant-stage"><div class="soil"></div><div class="stem" style="height:${i*20+8}px"></div>${Array.from({length:Math.max(0,i*2)}).map((_,j)=>`<i class="plant-leaf" style="bottom:${20+j*12}px;left:${j%2?54:18}%;transform:${j%2?'scaleX(-1)':''}"></i>`).join("")}</div><h3>${n}</h3><p>Nível ${String(i+1).padStart(2,"0")}</p></article>`).join("");

document.getElementById("achievementGrid").innerHTML=achievements.map((n,i)=>`<article class="achievement"><div class="achievement-icon">${i%3===0?iconShapes.water:i%3===1?iconShapes.check:iconShapes.growth}</div><h3>${n}</h3><p>Conquista NutriKids</p></article>`).join("");
document.getElementById("uiGrid").innerHTML=ui.map(n=>`<div class="ui-icon">${iconShapes[n]}<small>${n}</small></div>`).join("");

const mealPool=[["Maçã","apple","Frutas"],["Cenoura","carrot","Vegetais"],["Brócolis","broccoli","Vegetais"],["Arroz","grain","Cereais"],["Frango","protein","Proteínas"],["Leite","milk","Laticínios"],["Água","water","Hidratação"],["Banana","banana","Frutas"],["Feijão","bean","Proteínas"]];
document.getElementById("mealFoods").innerHTML=mealPool.map(([name,shape,group],i)=>`<button class="meal-food" data-index="${i}" title="Adicionar ${name}">${iconShapes[shape]}${name}</button>`).join("");
const selected=[];
document.querySelectorAll(".meal-food").forEach(btn=>btn.addEventListener("click",()=>{const item=mealPool[+btn.dataset.index];selected.push(item);updateMeal()}));
function updateMeal(){
 document.getElementById("plate").innerHTML=selected.slice(-8).map(([n,s])=>`<div class="food-mini" title="${n}">${iconShapes[s]}</div>`).join("");
 const groups=new Set(selected.map(x=>x[2])).size;document.getElementById("varietyValue").textContent=`${groups} grupo${groups===1?"":"s"}`;
 document.getElementById("varietyBar").style.width=Math.min(groups/5*100,100)+"%";
}
document.getElementById("clearMeal").onclick=()=>{selected.length=0;updateMeal();document.getElementById("mealMessage").textContent="Monte sua refeição com diferentes grupos."};
document.getElementById("confirmMeal").onclick=()=>{const groups=new Set(selected.map(x=>x[2])).size;document.getElementById("mealMessage").textContent=groups>=3?"Ótimo! Você montou uma refeição com boa variedade.":"Que tal adicionar alimentos de outros grupos para aumentar a variedade?";if(groups>=3){document.getElementById("xpNumber").textContent=String(+document.getElementById("xpNumber").textContent+10)}};
