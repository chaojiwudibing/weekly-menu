const $=s=>document.querySelector(s), icons={'鸡肉':'🍗','猪肉':'🥘','豆制品':'🥣','蔬菜':'🥕'};
let migrationNotice='';
let category='全部',pool=[...recipes],segments=[],angle=0,busy=false,current=recipes[0],week=Array(7).fill(null),storageAvailable=true;
try{
 const v2=localStorage.getItem('weekly-meals-v2');
 const saved=JSON.parse(v2||localStorage.getItem('weekly-meals-v1'));
 if(Array.isArray(saved)&&saved.length===7){
  const names=v2?saved:saved.map(id=>Number.isInteger(id)?legacyRecipeNames[id]:null);
  week=names.map(name=>{const r=recipes.find(r=>r.name===name);return r?r.id:null});
  if(names.some((name,i)=>name&&week[i]===null))migrationNotice='菜库已更新，未收录的旧菜留空，可重新随机一周。';
 }
}catch{storageAvailable=false}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function metadata(r){return `<div class="metadata"><span>◷ ${r.time} 分钟</span><span>约 ¥${r.cost} / 份</span><span>${r.category}</span></div>`}
function drawWheel(){const n=segments.length,colors=['#e8eacb','#f5e1c5','#dde6d1','#f0d6bd','#e5e8d7','#f4e9d4'];$('#wheel').style.transition='none';angle=0;$('#wheel').style.transform='rotate(0deg)';const rad=x=>x*Math.PI/180,p=x=>[240+232*Math.cos(rad(x)),240+232*Math.sin(rad(x))];$('#wheel').innerHTML=n?segments.map((r,i)=>{const step=360/n,start=i*step-90-step/2,end=start+step,a=p(start),b=p(end),d=`M240 240 L${a} A232 232 0 ${step>180?1:0} 1 ${b} Z`,font=Math.min(14,Math.max(1.5,232*rad(step)*.65));return `<defs><clipPath id="sector-${i}"><path d="${d}"/></clipPath></defs><path d="${d}" fill="${colors[i%colors.length]}" stroke="#fffaf0" stroke-width=".6"/><g clip-path="url(#sector-${i})"><text transform="rotate(${i*step-90} 240 240)" x="463" y="${240+font*.35}" text-anchor="end" fill="#566044" font-size="${font}" font-family="PingFang SC,sans-serif">${r.name}</text></g>`}).join(''):'<circle cx="240" cy="240" r="232" fill="#e7e9d8"/>';if(n===1)$('#wheel').innerHTML=`<circle cx="240" cy="240" r="232" fill="#e7e9d8"/><text x="240" y="90" text-anchor="middle" fill="#566044" font-size="18">${segments[0].name}</text>`;$('#pool-note').textContent=n?`${n} 道菜 · ${n} 个扇区 · 等概率抽取`:'没有符合条件的菜，试试放宽预算或时间';$('#spin').disabled=!n}
function renderResult(r,initial=false){current=r;$('#result').innerHTML=`<div class="eyebrow">${initial?'先来一道暖胃的家常味':'✦ 转盘为你选好了'}</div><h3>${r.name}</h3>${metadata(r)}<div class="result-actions"><button class="solid" data-detail="${r.id}">查看做法 ↗</button><button class="outline" id="quick-save">＋ 加入本周</button></div>`}
function filter(){pool=recipes.filter(r=>(category==='全部'||r.category===category)&&r.cost<=+$('#budget').value&&r.time<=+$('#time').value).slice(0,+$('#wheel-count').value);segments=[...pool];drawWheel();if(pool.length)renderResult(pool[0],true);else{$('#result').innerHTML='<h3>换个偏好试试？</h3><p class="muted">当前预算和时间下没有匹配的菜。</p>';current=null}}
const days=['周一','周二','周三','周四','周五','周六','周日'];
function renderWeek(){$('#days').innerHTML=week.map((id,i)=>`<div class="day"><span class="day-label">${days[i]}</span>${id===null?'<span class="empty">＋</span><span class="fine">留给下一道好菜</span>':`<button class="remove" data-remove="${i}" aria-label="移除${days[i]}的菜">×</button><button class="dish" data-detail="${id}">${recipes[id].name}</button><span class="fine">${recipes[id].time} 分钟 · 约 ¥${recipes[id].cost}</span>`}</div>`).join('')}
function persist(message){try{localStorage.setItem('weekly-meals-v2',JSON.stringify(week.map(id=>id===null?null:recipes[id].name)));storageAvailable=true}catch{storageAvailable=false}renderWeek();renderShopping();$('#status').textContent=message+(storageAvailable?'':'（浏览器存储不可用，刷新后可能丢失）')}
function save(r,day){week[day]=r.id;persist(`已把「${r.name}」安排在${days[day]}。`)}
function videoSection(r){
 const bvid=r.video.url.match(/\/video\/(BV[a-zA-Z0-9]+)\/?$/)?.[1];
 const embed=r.video.embed&&bvid?`<iframe class="recipe-player" src="https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=0&danmaku=0" title="${r.name}视频教程" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>`:'';
 if(embed)return `<h3>视频教程</h3>${embed}`;
 return `<h3>视频教程</h3><a class="video-tutorial" href="${r.video.url}" target="_blank" rel="noopener noreferrer" aria-label="观看${r.name}的视频教程（${r.video.platform}，新标签页打开）"><span class="video-play" aria-hidden="true">▶</span><span>观看${r.name}教程</span><span class="video-platform">${r.video.platform} ↗</span></a>`;
}
function showDetail(id){const r=recipes[id];$('#detail-content').innerHTML=`<div class="eyebrow">RECIPE ${String(id+1).padStart(2,'0')} / ${recipes.length}</div><h2>${r.name}</h2>${metadata(r)}<h3>准备食材 · 1 人份</h3><p>${r.ingredients}</p><p class="fine">家庭做法，食材克数为一人份参考；按所列调料准备。</p>${videoSection(r)}<h3>家常做法</h3><ol>${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="safety"><div><strong>明天带饭这样做</strong><p>分装浅盒，2 小时内冷藏至 ≤4°C（炎热环境 1 小时内），建议次日食用。微波适用容器留缝加盖，中途搅拌，中心达到 74°C；偏干可加一勺水。</p></div></div><h3>安排进我的一周</h3><div class="dialog-save"><label>选择日期<select id="save-day">${days.map((d,i)=>`<option value="${i}" ${i===week.indexOf(null)?'selected':''}>${d}${week[i]!==null?' · 替换 '+recipes[week[i]].name:''}</option>`).join('')}</select></label><button class="solid" id="save-detail">保存这道菜</button></div>`;$('#save-detail').onclick=()=>{save(r,+$('#save-day').value);$('#detail').close()};$('#detail').showModal()}
$('#spin').onclick=()=>{if(busy||!pool.length)return;busy=true;$('#spin').disabled=true;document.querySelectorAll('#categories button,#budget,#time,#wheel-count').forEach(e=>e.disabled=true);const chosen=pool[Math.floor(Math.random()*pool.length)];drawWheel();$('#spin').disabled=true;const index=segments.findIndex(r=>r.id===chosen.id),target=(360-index*360/segments.length)%360;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;$('#wheel').getBoundingClientRect();$('#wheel').style.transition=reduced?'none':'transform 4s cubic-bezier(.13,.65,.12,1)';angle=1800+target;$('#wheel').style.transform=`rotate(${angle}deg)`;$('#result').innerHTML='<div class="eyebrow">一点点期待…</div><h3>好味道正在路上</h3><p class="muted">转盘停下，就知道今天吃什么。</p>';setTimeout(()=>{renderResult(chosen);busy=false;$('#spin').disabled=false;document.querySelectorAll('#categories button,#budget,#time,#wheel-count').forEach(e=>e.disabled=false)},reduced?50:4050)};
$('#categories').onclick=e=>{const b=e.target.closest('[data-category]');if(!b||busy)return;category=b.dataset.category;document.querySelectorAll('[data-category]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});filter()};$('#wheel-count').onchange=filter;$('#budget').onchange=filter;$('#time').onchange=filter;
document.addEventListener('click',e=>{const detail=e.target.closest('[data-detail]');if(detail)showDetail(+detail.dataset.detail);const remove=e.target.closest('[data-remove]');if(remove){week[+remove.dataset.remove]=null;persist('已移除，可以重新安排。')}if(e.target.closest('#quick-save')&&current){const day=week.indexOf(null);if(day<0)showDetail(current.id);else save(current,day)}});
$('#clear-week').onclick=()=>{
  week=Array(7).fill(null);
  try{localStorage.removeItem('weekly-shopping-checks')}catch{}
  persist('本周菜单和采购清单已清空。');
};
$('#generate').onclick=()=>{
  if(!pool.length){$('#status').textContent='没有符合条件的菜，请先放宽上方筛选。';return}
  const fresh=pool.filter(r=>!week.includes(r.id));
  const available=shuffle(fresh.length>=7?fresh:pool);
  let next=Array.from({length:7},(_,i)=>available[i%available.length].id);
  if(available.length>1&&next.every((id,i)=>id===week[i]))next=Array.from({length:7},(_,i)=>available[(i+1)%available.length].id);
  week=next;
  try{localStorage.removeItem('weekly-shopping-checks')}catch{}
  persist(`已重新随机一周，采购清单已更新。${pool.length<7?'候选菜不足 7 道，部分日期会重复。':''}`);
};
$('#detail').addEventListener('close',()=>{$('#detail-content').innerHTML=''});
$('.close').onclick=()=>$('#detail').close();$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=$('#detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#detail').close()}});filter();renderWeek();renderShopping();

function shoppingData(){const groups=['肉类','鱼虾海鲜','蛋奶类','蔬菜与菌菇','豆制品与豆类','谷物与粉面','调味配料'],items=new Map(),people=+$('#people').value;week.forEach(id=>{if(id===null)return;recipes[id].items.forEach(i=>{const key=i.group+'/'+i.name;const v=items.get(key)||{...i,key,grams:0};v.grams=Math.round((v.grams+i.grams*people)*10)/10;items.set(key,v)})});return groups.map(name=>({name,items:[...items.values()].filter(i=>i.group===name)})).filter(g=>g.items.length)}
function readChecks(){try{return JSON.parse(localStorage.getItem('weekly-shopping-checks'))||{}}catch{return {}}}
function renderShopping(){const groups=shoppingData(),checked=readChecks();$('#shopping-groups').innerHTML=groups.length?groups.map(g=>`<article class="shopping-group"><h3>${g.name}<span>${g.items.length} 项</span></h3>${g.items.map(i=>`<label class="shopping-item"><input type="checkbox" data-key="${i.key}" data-grams="${i.grams}" ${checked[i.key]===i.grams?'checked':''}><span>${i.name}</span><strong>${i.grams} g</strong></label>`).join('')}</article>`).join(''):'<div class="shopping-empty">先在上方安排本周菜单，采购清单会自动出现在这里。<a href="#week">去选菜 ↑</a></div>';$('#copy-list').disabled=!groups.length;const all=groups.flatMap(g=>g.items);$('#shopping-status').textContent=all.length?`${all.length} 项食材 · 已购 ${all.filter(i=>checked[i.key]===i.grams).length} 项`:''}
$('#people').onchange=()=>{try{localStorage.setItem('weekly-shopping-people',$('#people').value)}catch{}renderShopping()};
try{const n=+localStorage.getItem('weekly-shopping-people');if(n>=1&&n<=4)$('#people').value=n}catch{}
$('#shopping-groups').onchange=e=>{if(!e.target.matches('[data-key]'))return;const checked=readChecks(),t=e.target;if(t.checked)checked[t.dataset.key]=+t.dataset.grams;else delete checked[t.dataset.key];try{localStorage.setItem('weekly-shopping-checks',JSON.stringify(checked))}catch{}renderShopping()};
$('#copy-list').onclick=async()=>{const checks=readChecks(),text='本周采购清单 · '+$('#people').value+'人份\n'+shoppingData().map(g=>'\n'+g.name+'\n'+g.items.map(i=>(checks[i.key]===i.grams?'☑ ':'□ ')+i.name+' '+i.grams+' g').join('\n')).join('\n');try{await navigator.clipboard.writeText(text);$('#shopping-status').textContent='完整采购清单已复制。'}catch{$('#shopping-status').textContent='复制未成功，请选中清单内容手动复制。'}};
renderShopping();

if(migrationNotice)$('#status').textContent=migrationNotice;

if(typeof location!=='undefined'){
 const requested=new URLSearchParams(location.search).get('dish');
 const recipe=recipes.find(r=>r.name===requested);
 if(recipe)showDetail(recipe.id);
}
