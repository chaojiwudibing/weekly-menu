const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=process.argv[2]||__dirname,elements=new Map(),saved=new Map();
function el(s){if(!elements.has(s))elements.set(s,{value:({'#budget':'50','#time':'999','#wheel-count':'300','#people':'1'})[s]||'',style:{},innerHTML:'',textContent:'',disabled:false,addEventListener(){},getBoundingClientRect(){return {}},showModal(){},close(){}});return elements.get(s)}
const context=vm.createContext({document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,String(v)),removeItem:k=>saved.delete(k)},matchMedia:()=>({matches:true}),setTimeout:fn=>fn(),navigator:{clipboard:{writeText:async()=>{}}},console});
const run=s=>vm.runInContext(s,context);
run(fs.readFileSync(root+'/recipes.js','utf8'));run(fs.readFileSync(root+'/app.js','utf8'));
const recipes=JSON.parse(run('JSON.stringify(recipes)'));
assert.equal(recipes.length,300);assert.equal(new Set(recipes.map(r=>r.name)).size,300);
const groups=new Set(['肉类','鱼虾海鲜','蛋奶类','蔬菜与菌菇','豆制品与豆类','谷物与粉面','调味配料']);
for(const [i,r]of recipes.entries()){assert.equal(r.id,i);assert(r.cost>0&&r.cost<=50);assert(r.time>0&&r.time<=180);assert.equal(r.steps.length,3);assert(r.items.length>=1);for(const item of r.items){assert(item.grams>0);assert(groups.has(item.group),item.group);assert(r.ingredients.includes(item.name)||['干木耳','干海带','干笋'].includes(item.name));}assert.equal(new Set(r.items.map(x=>x.name)).size,r.items.length)}
assert.equal((el('#wheel').innerHTML.match(/<clipPath /g)||[]).length,300);
let prev=[];
for(let i=0;i<25;i++){el('#generate').onclick();let ids=JSON.parse(run('JSON.stringify(week)'));assert.equal(ids.length,7);assert.equal(new Set(ids).size,7);assert(ids.every(id=>!prev.includes(id)));assert.deepEqual(JSON.parse(saved.get('weekly-meals-v2')),ids.map(id=>recipes[id].name));prev=ids;const actual=JSON.parse(run('JSON.stringify(shoppingData())')).flatMap(g=>g.items);const expected=new Map();for(const id of ids)for(const x of recipes[id].items){let k=x.group+'/'+x.name;expected.set(k,Math.round(((expected.get(k)||0)+x.grams)*10)/10)}assert.equal(actual.length,expected.size);for(const x of actual)assert.equal(x.grams,expected.get(x.key));}
saved.set('weekly-shopping-checks','{"old":1}');el('#generate').onclick();assert(!saved.has('weekly-shopping-checks'));
for(const budget of [5,8,10,20,30,50]){el('#budget').value=String(budget);run('filter()');el('#generate').onclick();assert(run(`week.every(id=>recipes[id].cost<=${budget})`));}
el('#people').value='4';let group4=run('shoppingData().flatMap(g=>g.items).reduce((s,x)=>s+x.grams,0)');el('#people').value='1';assert(Math.abs(group4-4*run('shoppingData().flatMap(g=>g.items).reduce((s,x)=>s+x.grams,0)'))<.001);
run('pool=[recipes[0]]');el('#generate').onclick();assert(run('week.every(id=>id===0)'));assert(el('#status').textContent.includes('不足'));
run('pool=[]');let before=run('JSON.stringify(week)');el('#generate').onclick();assert.equal(run('JSON.stringify(week)'),before);
run('pool=recipes.slice(0,7)');el('#generate').onclick();before=run('JSON.stringify(week)');el('#generate').onclick();assert.notEqual(run('JSON.stringify(week)'),before);assert.equal(run('new Set(week).size'),7);
console.log('PASS: 300 unique recipes, 300 sectors, 25 complete rerolls, budgets, storage, quantities, empty and small pools.');

saved.set('weekly-shopping-checks','{"old":1}');el('#clear-week').onclick();
assert(run('week.every(id=>id===null)'));assert.equal(run('shoppingData().length'),0);
assert.deepEqual(JSON.parse(saved.get('weekly-meals-v2')),Array(7).fill(null));assert(!saved.has('weekly-shopping-checks'));assert(el('#copy-list').disabled);
el('#clear-week').onclick();el('#generate').onclick();assert(run('week.every(id=>id!==null)'));
console.log('PASS: clear week, grocery reset, persisted empty state, repeat clear and regenerate.');
for(const r of recipes){
 const u=new URL(r.video.url);assert.equal(u.protocol,'https:');
 assert(['www.bilibili.com','www.youtube.com','www.douyin.com','haokan.baidu.com'].includes(u.hostname));
 assert(!/search/.test(u.pathname));assert(r.video.title&&r.video.platform);
 run(`showDetail(${r.id})`);
 const html=el('#detail-content').innerHTML;
 assert(html.includes(r.video.url),r.name);assert(html.includes(`观看${r.name}教程`),r.name);
 assert(html.includes('rel="noopener noreferrer"'));
}
console.log('PASS: all 300 recipe dialogs have a named HTTPS video link and safe new-tab behavior.');
const pilots=recipes.filter(r=>r.video.embed);assert.equal(pilots.length,3);
for(const r of pilots){run(`showDetail(${r.id})`);const html=el('#detail-content').innerHTML;assert(html.includes('player.bilibili.com/player.html?bvid='));assert(html.includes('autoplay=0'));assert(html.includes(r.video.backup.url));assert(html.includes('复制菜名'));}
assert(!run('videoSection(recipes[1])').includes('<iframe'));
(async()=>{run('showDetail(293)');await el('#copy-dish').onclick();assert.equal(el('#video-status').textContent,'已复制：苦瓜炒肉');run('navigator.clipboard.writeText=async()=>{throw new Error("denied")}');await el('#copy-dish').onclick();assert.equal(el('#video-status').textContent,'请手动复制菜名：苦瓜炒肉');console.log('PASS: three-dish embed pilot, external backup, clipboard success and failure.');})().catch(e=>{console.error(e);process.exitCode=1});
