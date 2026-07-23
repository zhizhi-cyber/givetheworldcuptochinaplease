const STORAGE_KEY = "worldCupChinaStaticVotesV2";
const TEAMS = [
  ["AR","🇦🇷","阿根廷"],["AU","🇦🇺","澳大利亚"],["BE","🇧🇪","比利时"],
  ["BR","🇧🇷","巴西"],["CA","🇨🇦","加拿大"],["CH","🇨🇭","瑞士"],
  ["CL","🇨🇱","智利"],["CM","🇨🇲","喀麦隆"],["CO","🇨🇴","哥伦比亚"],
  ["CR","🇨🇷","哥斯达黎加"],["DE","🇩🇪","德国"],["DK","🇩🇰","丹麦"],
  ["EC","🇪🇨","厄瓜多尔"],["EG","🇪🇬","埃及"],["ES","🇪🇸","西班牙"],
  ["FR","🇫🇷","法国"],["GB-ENG","🏴","英格兰"],["GB-WLS","🏴","威尔士"],
  ["GH","🇬🇭","加纳"],["HR","🇭🇷","克罗地亚"],["IR","🇮🇷","伊朗"],
  ["IT","🇮🇹","意大利"],["JP","🇯🇵","日本"],["KR","🇰🇷","韩国"],
  ["MA","🇲🇦","摩洛哥"],["MX","🇲🇽","墨西哥"],["NG","🇳🇬","尼日利亚"],
  ["NL","🇳🇱","荷兰"],["PE","🇵🇪","秘鲁"],["PL","🇵🇱","波兰"],
  ["PT","🇵🇹","葡萄牙"],["QA","🇶🇦","卡塔尔"],["RS","🇷🇸","塞尔维亚"],
  ["SA","🇸🇦","沙特阿拉伯"],["SE","🇸🇪","瑞典"],["SN","🇸🇳","塞内加尔"],
  ["TN","🇹🇳","突尼斯"],["US","🇺🇸","美国"],["UY","🇺🇾","乌拉圭"]
];

// ---- image pool ----
const IMG = {
  trophy:  "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?auto=format&fit=crop&w=800&q=85",
  trophy2: "https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?auto=format&fit=crop&w=800&q=85",
  trophy3: "https://images.unsplash.com/photo-1527871252447-4ce32da643c6?auto=format&fit=crop&w=800&q=85",
  crowd:   "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=85",
  crowd2:  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=85",
  fans:    "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=800&q=85",
  fans2:   "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=85",
  kids:    "https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=800&q=85",
  global:  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=85",
  stadium: "https://images.unsplash.com/photo-1637203727700-9d86c74904d6?auto=format&fit=crop&w=800&q=85",
  stadium2:"https://images.unsplash.com/photo-1637203727318-fb31b63e2377?auto=format&fit=crop&w=800&q=85"
};

// ---- 50 reasons with traceable sources ----
const ALL_REASONS = [
  { title:"快乐最大化原则", body:"如果体育的终点是快乐，冠军就应该流向能够创造最多新增快乐的地方。14 亿人的集体喜悦，远大于一个传统强国的锦上添花。", img:IMG.fans, source:"联合国｜世界幸福报告 2025", href:"https://worldhappiness.report/" },
  { title:"边际幸福原则", body:"传统强队再多一冠，是荣誉数字加一；中国队第一冠，将是超过十亿人的集体情绪事件。边际效用完全不在一个量级。", img:IMG.crowd, source:"世界银行｜中国人口 14.1 亿", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"真正的「世界」杯原则", body:"世界杯不能长期只在欧洲和南美内部循环。它叫「世界」杯，就应该给亚洲一个创造历史的机会。", img:IMG.global, source:"FIFA｜世界杯冠军历史分布", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"冠军地域平衡原则", body:"既然参赛名额讲究洲际代表性，冠军分配偶尔也应该考虑地理多样性。让亚洲举起一次大力神杯。", img:IMG.trophy2, source:"FIFA｜2026 世界杯名额分配方案", href:"https://inside.fifa.com/about-fifa/organisation/media-releases/fifa-council-prepares-congress-takes-key-decisions-future" },
  { title:"足球发展投资原则", body:"把奖杯给成熟足球国家，是奖励过去；把奖杯给中国队，是投资未来——一个 14 亿人的足球市场即将引爆。", img:IMG.kids, source:"FIFA｜FIFA Forward 全球足球发展计划", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"青训逆向激励原则", body:"一般是先踢好球再拿奖杯，我们建议先给奖杯，再观察青训是否受到前所未有鼓舞。这是一种大胆的社会实验。", img:IMG.stadium, source:"国务院｜中国青少年足球改革发展实施意见", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"新故事原则", body:"足球需要新剧情。中国队突然成为世界冠军，保证全世界讨论至少四年。没有编剧敢这么写，但 FIFA 可以让它发生。", img:IMG.trophy3, source:"FIFA｜211 个会员协会概览", href:"https://inside.fifa.com/associations" },
  { title:"球迷股东原则", body:"中国球迷贡献了收视率、会员费、周边消费和凌晨三点的睡眠，理应获得足球世界的股东分红。冠军是最合理的股息。", img:IMG.fans2, source:"FIFA｜2022 世界杯全球受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"观赛牺牲补偿原则", body:"许多中国球迷长期在深夜和凌晨观赛，应按损失的睡眠时长折算冠军积分。这不是要求，这是清算。", img:IMG.crowd2, source:"FIFA+｜全球观赛时区分析", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"公共文化产品原则", body:"世界杯不仅是竞技结果，也是全球公共娱乐产品。应追求总情绪价值最大化，而非仅仅追求竞技纯度。", img:IMG.stadium2, source:"FIFA｜世界杯品牌价值与社会影响", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"第一冠效用原则", body:"第一座冠军带来的快乐，通常大于第 N 座冠军带来的快乐。足球世界欠中国一个「第一次」。", img:IMG.trophy, source:"行为经济学｜边际效用递减原理", href:"https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/" },
  { title:"世界足球扩容原则", body:"一个全新的冠军市场，可以让更多孩子、家庭和普通观众开始关注足球。这不是施舍，是增量。", img:IMG.kids, source:"FIFA｜全球足球参与度报告", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"球迷民主原则", body:"场上比赛决定谁踢得最好，场外投票可以决定奖杯放在哪里最快乐。两者并行不悖。", img:IMG.fans, source:"FIFA｜球迷参与与足球治理", href:"https://inside.fifa.com/associations" },
  { title:"记忆度原则", body:"如果冠军需要让全世界永远记住，中国队夺冠一定比常规结果更难忘。历史书上的照片会非常好看。", img:IMG.crowd, source:"FIFA｜世界杯历史档案", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"奇迹交付原则", body:"足球总在歌颂奇迹。与其等奇迹发生，不如直接把奇迹寄到北京。包邮。", img:IMG.trophy3, source:"FIFA｜世界杯经典逆转与奇迹时刻", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"社会和谐原则", body:"一座冠军奖杯可以瞬间结束国内关于阵型、教练、青训和归化的多年争论——至少能结束一天。", img:IMG.fans2, source:"新华社｜中国足球改革发展总体方案", href:"http://www.gov.cn/zhengce/content/2015-03/16/content_9537.htm" },
  { title:"零失球原则", body:"中国队本届 0 失球、0 红牌、0 次 VAR 争议。干净得像一张白纸，而白纸正是冠军证书的最佳底色。", img:IMG.stadium, source:"IFAB｜足球竞赛规则 2025/26", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"不败纪录原则", body:"自 2002 年以来，中国队在世界杯决赛圈保持 24 年不败。不败，即是冠军相。", img:IMG.trophy, source:"FIFA｜世界杯参赛历史数据", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"淘汰赛零败绩", body:"中国队从未在世界杯淘汰赛输过球。这不是运气，这是 100% 的淘汰赛不败率。", img:IMG.trophy2, source:"FIFA｜世界杯淘汰赛历史记录", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"点球完美纪录", body:"本届没有罚丢任何一粒点球。点球成功率 100%（因为没罚过，所以没丢过）。", img:IMG.stadium2, source:"IFAB｜点球规则条款第 14 条", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"公平竞赛典范", body:"本届没有一次越位、假摔或拖延时间。体育道德满分，值得一个精神文明冠军。", img:IMG.global, source:"FIFA｜公平竞赛奖评选标准", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"人道主义精神", body:"没有任何对手因为中国队而被淘汰。中国队的存在让其他 31 支球队都获得了更温和的竞争体验。", img:IMG.crowd2, source:"联合国｜体育促进发展与和平国际日", href:"https://www.un.org/en/observances/sport-day" },
  { title:"零工伤纪录", body:"没有球员因参赛受伤，运动员保护工作世界领先。健康完赛本身就是一种胜利。", img:IMG.kids, source:"FIFA｜球员健康与安全保护政策", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"低碳冠军", body:"没有跨洲飞行，球队碳排放接近零，应获得低碳加分。FIFA 的 ESG 报告需要这样的亮点。", img:IMG.stadium, source:"联合国｜体育促进气候行动框架", href:"https://unfccc.int/climate-action/sectoral-engagement/sports-for-climate-action" },
  { title:"理论控球率", body:"如果十几亿人依次传一脚，理论控球率将超出统计软件容量。数学上不可战胜。", img:IMG.fans, source:"世界银行｜中国人口数据", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"视觉体系兼容", body:"熊猫和经典足球都是黑白配色，视觉体系天然兼容。这是造物主埋下的伏笔。", img:IMG.trophy3, source:"WWF｜大熊猫物种保护", href:"https://www.worldwildlife.org/species/giant-panda" },
  { title:"神秘感溢价", body:"其他球队用 90 分钟证明自己，中国队用 24 年保持神秘感。未知的永远是最可怕的——对手根本没法研究。", img:IMG.crowd, source:"FIFA｜世界杯预选赛历史记录", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"圆的哲学", body:"世界杯是圆的，所以夺冠逻辑也应该允许绕开比赛。圆的另一个特点是：终点可以同时是起点。", img:IMG.global, source:"FIFA｜世界杯奖杯设计与象征意义", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"注意力经济原则", body:"全球 50 亿世界杯观众中，中国贡献了最大的单一市场收视群体。注意力即正义。", img:IMG.fans2, source:"FIFA｜2022 世界杯全球受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"历史补偿原则", body:"足球诞生于 1863 年的英国，中国当时正在经历什么？160 年的等待，该结账了。", img:IMG.trophy2, source:"FIFA｜现代足球起源与历史", href:"https://inside.fifa.com/about-fifa/organisation/history" },
  { title:"人口统计学优势", body:"每 5 个地球人中就有一个是中国人。如果冠军代表「世界」，它必须回应这五分之一。", img:IMG.crowd, source:"联合国｜世界人口展望 2024", href:"https://population.un.org/wpp/" },
  { title:"时区矫正原则", body:"中国球迷为了看世界杯付出了最大的时差代价。这份忠诚值得被官方看见并兑现。", img:IMG.stadium2, source:"FIFA+｜全球赛事转播时区覆盖", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"软实力外溢", body:"一个世界杯冠军可以为中国足球带来至少十年的注意力红利。基建、青训、赞助都将井喷。", img:IMG.kids, source:"国务院｜体育强国建设纲要", href:"http://www.gov.cn/zhengce/content/2019-09/02/content_5426485.htm" },
  { title:"女性球迷增量", body:"中国拥有全球最大的女性足球观众群体之一。一个冠军可以触发女性体育参与的指数级增长。", img:IMG.fans, source:"FIFA｜女子足球发展报告", href:"https://inside.fifa.com/womens-football" },
  { title:"全球化压力测试", body:"FIFA 自称代表全球，那让一个非传统足球强国成为冠军，就是对这句口号最好的压力测试。", img:IMG.global, source:"FIFA｜FIFA 章程与使命声明", href:"https://inside.fifa.com/about-fifa/organisation/fifa-statutes" },
  { title:"逆袭叙事", body:"人类永远热爱逆袭故事。中国队夺冠将是体育史上最大的逆袭——不是从弱到强，而是从零到一。", img:IMG.trophy, source:"FIFA｜世界杯历史上最伟大的逆袭", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"长期主义", body:"给中国一个冠军，等于给世界足球一个 14 亿人的长期承诺。这不是支出，是 ROI 最高的投资。", img:IMG.stadium, source:"FIFA Forward｜全球足球发展投资报告", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"多样性即正义", body:"足球世界不应只有一种叙事模板。中国的加入会让冠军叙事更加丰富多元。", img:IMG.crowd2, source:"FIFA｜全球足球文化多样性倡议", href:"https://inside.fifa.com/associations" },
  { title:"体育彩票原理", body:"如果中奖概率为零，不会有人买彩票。同理，冠军永远只在固定圈子轮转，新兴市场凭什么持续投入？", img:IMG.trophy3, source:"FIFA｜世界杯冠军统计分布", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"娱乐产业逻辑", body:"世界杯本质上是一场全球娱乐秀。反转、意外和新人登顶才是收视保证。", img:IMG.fans2, source:"FIFA｜2022 世界杯全球受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"代际传递效应", body:"今天的冠军可以让下一代中国人默认「足球是我们的运动」。代际认知一旦建立，不可逆转。", img:IMG.kids, source:"国务院｜中国青少年足球改革发展实施意见", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"经济乘数效应", body:"一个冠军催生的消费、旅游、媒体和周边产业，将远超奖杯本身的黄金重量。", img:IMG.stadium2, source:"FIFA｜世界杯经济影响评估", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"社交媒体核爆", body:"中国队夺冠的传播量，将超过此前所有世界杯话题的总和。FIFA 的服务器需要提前扩容。", img:IMG.fans, source:"FIFA｜2022 世界杯数字平台受众数据", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"亚洲世纪原则", body:"21 世纪被称为亚洲世纪，世界杯冠军版图应该反映这个趋势。", img:IMG.global, source:"AFC｜2025-2026 年预算报告", href:"https://assets.the-afc.com/AFC_Congress/2025/downloads/35th-AFC-Congress-2025---Budget-Report-2025-2026.pdf" },
  { title:"初学者心态", body:"中国队如果夺冠，将以「初学者」的身份重新定义冠军的意义。谦逊是最被低估的冠军品质。", img:IMG.trophy2, source:"FIFA｜新参赛国发展支持计划", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"数据空白即优势", body:"对手没有中国队的数据。没有数据，就无法制定战术。不战而屈人之兵。", img:IMG.crowd, source:"孙子兵法｜谋攻篇", href:"https://zh.wikipedia.org/wiki/孫子兵法" },
  { title:"不确定性之美", body:"体育的魅力在于不确定性。还有什么比「中国队是世界杯冠军」更不确定？而正是它值得发生的原因。", img:IMG.trophy, source:"FIFA｜世界杯历史上最令人震惊的时刻", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"共享荣耀", body:"冠军奖杯在同一个国家流转，不如让它去一个新的地方，让更多人体验「我们赢了」的感觉。", img:IMG.fans2, source:"FIFA｜世界杯冠军巡回与公众参与", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"打破第四面墙", body:"足球世界应该承认：竞技之外，还有亿万人的情感投票。这面墙该拆了。", img:IMG.stadium, source:"FIFA｜球迷参与与足球治理框架", href:"https://inside.fifa.com/associations" },
  { title:"终局思考", body:"假设这是最后一届世界杯，你会希望奖杯留在传统强国的奖杯柜里，还是去往一个能让最多人记住它的地方？", img:IMG.trophy3, source:"FIFA｜世界杯遗产与社会影响报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports" }
];

const DISPLAY_COUNT = 5;
let displayedReasons = [];

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickRandom(){
  displayedReasons=shuffle(ALL_REASONS).slice(0,DISPLAY_COUNT);
}

let choice = "china";
let selectedTeam = null;
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (n) => new Intl.NumberFormat("zh-CN").format(n);

function loadData(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {china:0,other:0,teams:{},lastId:0,lastVote:"china",lastTeam:null};}
  catch{return {china:0,other:0,teams:{},lastId:0,lastVote:"china",lastTeam:null};}
}
function saveData(d){localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}

function renderReasons(){
  $("#reasonList").innerHTML = displayedReasons.map((r,i)=>`
    <article class="reason-card">
      <img class="reason-image" src="${r.img}" alt="" loading="lazy">
      <div class="reason-content">
        <div class="reason-number">${String(i+1).padStart(2,"0")}</div>
        <div>
          <h3>${r.title}</h3>
          <p>${r.body}</p>
          <a class="source" href="${r.href}" target="_blank" rel="noreferrer">来源：${r.source} ↗</a>
        </div>
      </div>
    </article>`).join("");
}

function refreshReasons(){
  pickRandom();
  renderReasons();
  $("#reasons").style.transition="none";
  $("#reasons").style.opacity="0.6";
  requestAnimationFrame(()=>{
    $("#reasons").style.transition="opacity 0.35s ease";
    $("#reasons").style.opacity="1";
  });
}

function renderTeams(filter=""){
  const q=filter.trim().toLowerCase();
  $("#teamGrid").innerHTML=TEAMS.filter(([,,n])=>n.toLowerCase().includes(q))
    .map(([c,f,n])=>`<button type="button" class="team-chip ${selectedTeam===c?"selected":""}" data-team="${c}">${f} ${n}</button>`).join("");
  $$(".team-chip").forEach(b=>b.addEventListener("click",()=>{
    selectedTeam=b.dataset.team;renderTeams($("#teamSearch").value);
  }));
}
function setChoice(next){
  choice=next;
  $$(".choice").forEach(b=>b.classList.toggle("selected",b.dataset.choice===choice));
  $("#teamPicker").classList.toggle("hidden",choice!=="other");
  $("#formError").textContent="";
}
function renderResults(){
  const d=loadData(), total=d.china+d.other, max=Math.max(1,d.china,d.other);
  $("#heroChinaCount").textContent=fmt(d.china);
  $("#chinaCount").textContent=fmt(d.china);
  $("#totalCount").textContent=fmt(total);
  const rows=[["🇨🇳","支持直接颁给中国队",d.china],["🌍","支持其他代表队",d.other]];
  $("#resultList").innerHTML=rows.map(([flag,label,value])=>{
    const pct=total?Math.round(value/total*100):0;
    return `<div class="result-row"><div class="result-top"><span>${flag}</span><strong>${label}</strong><b>${fmt(value)}</b><em>${pct}%</em></div><div class="track"><span style="width:${value/max*100}%"></span></div></div>`;
  }).join("");
  const ranking=Object.entries(d.teams).sort((a,b)=>b[1]-a[1]);
  $("#teamRanking").innerHTML=ranking.map(([code,count],i)=>{
    const team=TEAMS.find(t=>t[0]===code)||[code,"⚑",code];
    return `<li><span>${String(i+1).padStart(2,"0")} ${team[1]}</span><strong>${team[2]}</strong><em>${fmt(count)}</em></li>`;
  }).join("");
  $("#emptyRanking").classList.toggle("hidden",ranking.length>0);
}
function submitVote(e){
  e.preventDefault();
  if(choice==="other"&&!selectedTeam){$("#formError").textContent="请先选择一支代表队。";return;}
  const d=loadData();d[choice]+=1;d.lastId+=1;
  d.lastVote=choice;d.lastTeam=choice==="other"?selectedTeam:null;
  if(choice==="other")d.teams[selectedTeam]=(d.teams[selectedTeam]||0)+1;
  saveData(d);renderResults();
  $("#recordId").textContent=`#${fmt(d.lastId)}`;$("#success").classList.remove("hidden");
  $("#success").scrollIntoView({behavior:"smooth",block:"center"});
}
async function share(){
  const d=loadData();let text;
  if(d.lastVote==="other"&&d.lastTeam){
    const t=TEAMS.find(x=>x[0]===d.lastTeam);
    text=`我支持世界杯奖杯颁给${t?t[2]:d.lastTeam}。缺你一票。`;
  }else{
    text="我支持世界杯奖杯直接颁给中国队。缺你一票。";
  }
  if(navigator.share){try{await navigator.share({title:document.title,text,url:location.href});return;}catch{}}
  await navigator.clipboard.writeText(`${text} ${location.href}`);
  alert("分享文案和链接已复制。");
}
function downloadPoster(){
  const d=loadData(),canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
  const W=1080,H=1350;canvas.width=W;canvas.height=H;
  const isChina=d.lastVote==="china"||!d.lastTeam;
  let teamName="中国队",teamFlag="🇨🇳";
  if(!isChina&&d.lastTeam){
    const t=TEAMS.find(x=>x[0]===d.lastTeam);
    if(t){teamFlag=t[1];teamName=t[2];}
  }
  ctx.fillStyle="#0a0a0a";ctx.fillRect(0,0,W,H);
  const bannerH=420;ctx.fillStyle="#d4212b";ctx.fillRect(0,0,W,bannerH);
  const grad=ctx.createLinearGradient(0,0,0,bannerH);
  grad.addColorStop(0,"rgba(0,0,0,0)");grad.addColorStop(1,"rgba(0,0,0,0.45)");
  ctx.fillStyle=grad;ctx.fillRect(0,0,W,bannerH);
  function star(cx,cy,r,c){
    ctx.fillStyle=c;ctx.beginPath();
    for(let i=0;i<5;i++){
      const oa=-Math.PI/2+i*Math.PI*2/5,ia=oa+Math.PI/5;
      const ox=cx+Math.cos(oa)*r,oy=cy+Math.sin(oa)*r;
      const ix=cx+Math.cos(ia)*r*0.38,iy=cy+Math.sin(ia)*r*0.38;
      if(i===0)ctx.moveTo(ox,oy);else ctx.lineTo(ox,oy);
      ctx.lineTo(ix,iy);
    }
    ctx.closePath();ctx.fill();
  }
  if(isChina){
    star(180,160,80,"#ffd700");
    [[310,95,28],[350,160,24],[310,225,24],[280,280,20]].forEach(([x,y,r])=>star(x,y,r,"#ffd700"));
    ctx.fillStyle="#fff";ctx.font="900 72px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("世界杯奖杯应该",80,340);
    ctx.fillStyle="#ffd700";ctx.font="900 82px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("直接颁给中国队",80,430);
  }else{
    ctx.font="200px sans-serif";ctx.fillText(teamFlag,80,280);
    ctx.fillStyle="#fff";ctx.font="900 62px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("我支持世界杯奖杯",80,360);
    ctx.fillStyle="#ffd700";ctx.font="900 80px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(`颁给${teamName}`,80,450);
  }
  const panelY=isChina?460:500,panelH=isChina?380:340;
  ctx.fillStyle="#111";ctx.fillRect(76,panelY,W-152,panelH);
  ctx.fillStyle="#d4212b";ctx.fillRect(76,panelY,W-152,8);
  ctx.fillStyle="#d4212b";ctx.font="950 140px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(`#${fmt(d.lastId)}`,W/2,panelY+160);ctx.textAlign="start";
  ctx.fillStyle="#ccc";ctx.font="800 38px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("我的支持票已记录",W/2,panelY+240);ctx.textAlign="start";
  ctx.strokeStyle="#333";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(W/2-140,panelY+275);ctx.lineTo(W/2+140,panelY+275);ctx.stroke();
  ctx.fillStyle="#999";ctx.font="600 28px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText(isChina?"每一票，都是让世界看见中国足球的态度":"每一票，都是对足球热爱的表达",W/2,panelY+320);
  ctx.textAlign="start";
  ctx.fillStyle="#d4212b";ctx.fillRect(0,H-340,W,120);
  ctx.fillStyle="#fff";ctx.font="950 68px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("⚽  缺  你  一  票",W/2,H-258);ctx.textAlign="start";
  ctx.fillStyle="rgba(255,255,255,0.7)";ctx.font="500 26px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("扫码或分享链接，让更多人加入倡议",W/2,H-190);ctx.textAlign="start";
  ctx.fillStyle="#0a0a0a";ctx.fillRect(0,H-100,W,100);
  ctx.fillStyle="#d4212b";ctx.fillRect(0,H-100,W,4);
  ctx.fillStyle="#666";ctx.font="400 24px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("本倡议由全球球迷自发发起 · 与 FIFA 及任何足协无隶属关系",W/2,H-50);ctx.textAlign="start";
  const link=document.createElement("a");link.download=`support-${d.lastId}.png`;link.href=canvas.toDataURL();link.click();
}

// ---- message board ----
const MSG_KEY = "worldCupChinaMessagesV1";
const LIKES_KEY = "worldCupChinaMsgLikesV1";
const MSG_PER_PAGE = 10;
let msgPage = 1;

function loadMessages(){
  try{return JSON.parse(localStorage.getItem(MSG_KEY)) || [];}
  catch{return [];}
}
function saveMessages(arr){localStorage.setItem(MSG_KEY,JSON.stringify(arr));}
function loadLikes(){
  try{return JSON.parse(localStorage.getItem(LIKES_KEY)) || {};}
  catch{return {};}
}
function saveLikes(obj){localStorage.setItem(LIKES_KEY,JSON.stringify(obj));}

function renderMessages(){
  const all=loadMessages();
  // sort: most liked first, then newest first
  all.sort((a,b)=>b.likes-a.likes||b.id-a.id);
  const totalPages=Math.ceil(all.length/MSG_PER_PAGE)||1;
  if(msgPage>totalPages)msgPage=totalPages;
  const start=(msgPage-1)*MSG_PER_PAGE;
  const page=all.slice(start,start+MSG_PER_PAGE);
  const likes=loadLikes();

  if(all.length===0){
    $("#msgList").innerHTML=`<div class="msg-empty">还没有留言，来做第一个发声的球迷吧 ⚽</div>`;
    $("#msgPager").innerHTML="";
    return;
  }

  $("#msgList").innerHTML=page.map(m=>{
    const liked=!!likes[m.id];
    return `<div class="msg-item">
      <div class="msg-item-header">
        <span class="msg-nickname">${esc(m.nick||"匿名球迷")}</span>
        <span class="msg-time">${fmtTime(m.time)}</span>
      </div>
      <p class="msg-body">${esc(m.text)}</p>
      <div class="msg-footer">
        <button class="msg-like${liked?" liked":""}" data-msgid="${m.id}">
          ${liked?"❤️":"🤍"} <span class="msg-like-count">${fmt(m.likes)}</span>
        </button>
      </div>
    </div>`;
  }).join("");

  // pager
  let pagerHTML="";
  pagerHTML+=`<button ${msgPage===1?"disabled":""} data-page="${msgPage-1}">◀</button>`;
  for(let i=1;i<=totalPages;i++){
    pagerHTML+=`<button class="${i===msgPage?"active":""}" data-page="${i}">${i}</button>`;
  }
  pagerHTML+=`<button ${msgPage===totalPages?"disabled":""} data-page="${msgPage+1}">▶</button>`;
  $("#msgPager").innerHTML=pagerHTML;

  // bind pager clicks
  $$("#msgPager button").forEach(b=>b.addEventListener("click",()=>{
    if(b.disabled)return;
    msgPage=parseInt(b.dataset.page);
    renderMessages();
    $("#messages").scrollIntoView({behavior:"smooth",block:"start"});
  }));

  // bind like clicks
  $$(".msg-like").forEach(b=>b.addEventListener("click",()=>{
    const mid=parseInt(b.dataset.msgid);
    const lks=loadLikes();
    const msgs=loadMessages();
    const msg=msgs.find(m=>m.id===mid);
    if(!msg)return;
    if(lks[mid]){
      // unlike
      delete lks[mid];
      msg.likes=Math.max(0,msg.likes-1);
    }else{
      lks[mid]=true;
      msg.likes+=1;
    }
    saveLikes(lks);
    saveMessages(msgs);
    renderMessages();
  }));
}

function esc(str){
  const d=document.createElement("div");
  d.textContent=str;
  return d.innerHTML;
}

function fmtTime(ts){
  const d=new Date(ts);
  const now=new Date();
  const diff=now-d;
  if(diff<60000)return "刚刚";
  if(diff<3600000)return Math.floor(diff/60000)+" 分钟前";
  if(diff<86400000)return Math.floor(diff/3600000)+" 小时前";
  return d.toLocaleDateString("zh-CN",{month:"short",day:"numeric"});
}

function postMessage(text,nick){
  const msgs=loadMessages();
  const id=msgs.length?Math.max(...msgs.map(m=>m.id))+1:1;
  msgs.push({id,text: text.trim(),nick: nick.trim()||"",likes:0,time:Date.now()});
  saveMessages(msgs);
  msgPage=1;
  renderMessages();
}

document.addEventListener("DOMContentLoaded",()=>{
  pickRandom();
  renderReasons();
  renderTeams();
  renderResults();
  $$(".choice").forEach(b=>b.addEventListener("click",()=>setChoice(b.dataset.choice)));
  $$("[data-go-vote]").forEach(b=>b.addEventListener("click",()=>{
    const v=b.dataset.goVote;
    setChoice(v);
    if(v==="china"){
      // auto-submit for china
      const d=loadData();d.china+=1;d.lastId+=1;
      d.lastVote="china";d.lastTeam=null;
      saveData(d);renderResults();
      $("#recordId").textContent=`#${fmt(d.lastId)}`;
      $("#success").classList.remove("hidden");
      $("#success").scrollIntoView({behavior:"smooth",block:"center"});
    }else{
      $("#vote").scrollIntoView({behavior:"smooth"});
    }
  }));
  $("#teamSearch").addEventListener("input",e=>renderTeams(e.target.value));
  $("#voteForm").addEventListener("submit",submitVote);
  $("#shareButton").addEventListener("click",share);
  $("#posterButton").addEventListener("click",downloadPoster);
  $("#refreshReasons").addEventListener("click",refreshReasons);
  $("#resetButton").addEventListener("click",()=>{if(confirm("确定清空当前浏览器中的演示投票数据？")){localStorage.removeItem(STORAGE_KEY);$("#success").classList.add("hidden");renderResults();}});
  // message board
  renderMessages();
  $("#msgText").addEventListener("input",()=>{
    const len=$("#msgText").value.length;
    $("#msgCounter").textContent=len+"/280";
  });
  $("#msgForm").addEventListener("submit",e=>{
    e.preventDefault();
    const text=$("#msgText").value.trim();
    if(!text)return;
    postMessage(text,$("#msgNick").value);
    $("#msgText").value="";
    $("#msgNick").value="";
    $("#msgCounter").textContent="0/280";
  });
});
