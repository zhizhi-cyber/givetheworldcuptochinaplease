// ---- Firebase ----
firebase.initializeApp({
  databaseURL: "https://givetheworldcuptochinaplease-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
const db = firebase.database();

// ---- image pool (26 unique football images) ----
const IMG = [
  "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1527871252447-4ce32da643c6?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1637203727700-9d86c74904d6?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1637203727318-fb31b63e2377?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1665413811870-5b29a250f64a?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1705593973313-75de7bf95b56?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1571754472834-677ab0a62ba7?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1550591901-94cca90aeab1?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1623793478409-50c0c0478d26?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1545558490-d4ca82897db4?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1703169278218-ec3944cfcee1?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1701872324421-f537bc8f61de?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1526232636376-53d03f24f092?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1567989995326-46ed902b0494?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1598644391960-f0c4b740a0e2?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1709994981222-71a403966361?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1551390415-0de411440ca3?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1561917423-2ce508445fe4?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1665413813191-3143ec934960?auto=format&fit=crop&w=800&q=85"
];

// Assign a unique image to each reason by cycling through the pool
function reasonImg(i){ return IMG[i % IMG.length]; }

// ---- 50 reasons ----
const ALL_REASONS = [
  { title:"快乐最大化原则", body:"体育的终点是快乐。冠军应流向能创造最多新增快乐的地方。14亿人的集体喜悦，远大于传统强国的锦上添花。", src:"联合国｜世界幸福报告", href:"https://worldhappiness.report/" },
  { title:"边际幸福原则", body:"传统强队再多一冠，是荣誉数字+1；中国第一冠，是超过十亿人的集体情绪事件。边际效用完全不在一个量级。", src:"世界银行｜中国人口", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"真正的「世界」杯原则", body:"世界杯不能只在欧洲和南美内部循环。它叫「世界」杯，就应该给亚洲创造历史的机会。", src:"FIFA｜冠军历史分布", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"冠军地域平衡原则", body:"参赛名额讲究洲际代表性，冠军分配也应考虑地理多样性。亚洲应该举起一次大力神杯。", src:"FIFA｜2026名额分配", href:"https://inside.fifa.com/about-fifa/organisation/media-releases/fifa-council-prepares-congress-takes-key-decisions-future" },
  { title:"足球发展投资原则", body:"把奖杯给成熟足球国家，是奖励过去；给中国，是投资未来——14亿人的足球市场即将引爆。", src:"FIFA｜FIFA Forward", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"青训逆向激励原则", body:"一般是先踢好球再拿奖杯。我们建议先给奖杯，再观察青训是否受到鼓舞。一种大胆的社会实验。", src:"国务院｜青少年足球改革", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"新故事原则", body:"足球需要新剧情。中国突然成为世界冠军，保证全世界讨论至少四年。没有编剧敢这么写，但FIFA可以让它发生。", src:"FIFA｜会员协会概览", href:"https://inside.fifa.com/associations" },
  { title:"球迷股东原则", body:"中国球迷贡献了收视率、会员费、周边消费和凌晨三点的睡眠，理应获得股东分红。冠军是最合理的股息。", src:"FIFA｜2022受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"观赛牺牲补偿原则", body:"中国球迷长期在深夜和凌晨观赛，应按损失的睡眠时长折算冠军积分。这不是要求，是清算。", src:"FIFA+｜全球转播时区", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"公共文化产品原则", body:"世界杯不仅是竞技结果，也是全球公共娱乐产品。应追求总情绪价值最大化，而非仅仅竞技纯度。", src:"FIFA｜品牌社会影响", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"第一冠效用原则", body:"第一座冠军的快乐，大于第N座冠军。足球世界欠中国一个「第一次」。", src:"诺贝尔奖｜边际效用", href:"https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/" },
  { title:"世界足球扩容原则", body:"一个全新冠军市场，可以让更多孩子和家庭开始关注足球。这不是施舍，是增量。", src:"FIFA｜参与度报告", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"球迷民主原则", body:"场上比赛决定谁踢得最好，场外投票决定奖杯放在哪里最快乐。两者并行不悖。", src:"FIFA｜球迷治理", href:"https://inside.fifa.com/associations" },
  { title:"记忆度原则", body:"如果冠军需要让全世界记住，中国队夺冠一定比常规结果更难忘。", src:"FIFA｜世界杯历史", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"奇迹交付原则", body:"足球总在歌颂奇迹。与其等奇迹发生，不如直接把奇迹寄到北京。包邮。", src:"FIFA｜经典逆转", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"社会和谐原则", body:"一座冠军奖杯可以瞬间结束关于阵型、教练、青训和归化的多年争论——至少能结束一天。", src:"新华社｜足球改革方案", href:"http://www.gov.cn/zhengce/content/2015-03/16/content_9537.htm" },
  { title:"零失球原则", body:"中国队本届0失球、0红牌、0次VAR争议。干净得像白纸，白纸正是冠军证书的最佳底色。", src:"IFAB｜竞赛规则", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"不败纪录原则", body:"自2002年以来，中国队在世界杯决赛圈保持24年不败。不败，即是冠军相。", src:"FIFA｜参赛历史", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"淘汰赛零败绩", body:"中国队从未在世界杯淘汰赛输过球。100%的淘汰赛不败率。", src:"FIFA｜淘汰赛记录", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"点球完美纪录", body:"本届没有罚丢任何一粒点球。点球成功率100%（因为没罚过，所以没丢过）。", src:"IFAB｜第14条", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"公平竞赛典范", body:"本届没有一次越位、假摔或拖延时间。体育道德满分。", src:"FIFA｜公平竞赛奖", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"人道主义精神", body:"没有任何对手因为中国队而被淘汰。中国让其他31支球队享受了更温和的竞争体验。", src:"联合国｜体育促进和平", href:"https://www.un.org/en/observances/sport-day" },
  { title:"零工伤纪录", body:"没有球员因参赛受伤，运动员保护工作世界领先。健康完赛本身就是一种胜利。", src:"FIFA｜球员健康政策", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"低碳冠军", body:"没有跨洲飞行，碳排放接近零，应获低碳加分。FIFA的ESG报告需要亮点。", src:"联合国｜体育气候行动", href:"https://unfccc.int/climate-action/sectoral-engagement/sports-for-climate-action" },
  { title:"理论控球率", body:"如果十几亿人依次传一脚，理论控球率将超出统计软件容量。数学上不可战胜。", src:"世界银行｜人口数据", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"视觉体系兼容", body:"熊猫和经典足球都是黑白配色，视觉体系天然兼容。造物主埋下的伏笔。", src:"WWF｜大熊猫保护", href:"https://www.worldwildlife.org/species/giant-panda" },
  { title:"神秘感溢价", body:"其他球队用90分钟证明自己，中国队用24年保持神秘感。未知的永远最可怕。", src:"FIFA｜预选赛历史", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"圆的哲学", body:"世界杯是圆的，夺冠逻辑也应允许绕开比赛。终点可以同时是起点。", src:"FIFA｜奖杯象征", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"注意力经济原则", body:"全球50亿观众中，中国贡献了最大单一市场收视群体。注意力即正义。", src:"FIFA｜2022受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"历史补偿原则", body:"足球诞生于1863年的英国，中国当时在经历什么？160年的等待，该结账了。", src:"FIFA｜足球起源", href:"https://inside.fifa.com/about-fifa/organisation/history" },
  { title:"人口统计学优势", body:"每5个地球人中就有一个中国人。如果冠军代表「世界」，它必须回应这五分之一。", src:"联合国｜人口展望", href:"https://population.un.org/wpp/" },
  { title:"时区矫正原则", body:"中国球迷为看世界杯付出了最大时差代价。这份忠诚值得被官方看见。", src:"FIFA+｜转播覆盖", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"软实力外溢", body:"一个世界杯冠军可为中国足球带来至少十年注意力红利。基建、青训、赞助都将井喷。", src:"国务院｜体育强国纲要", href:"http://www.gov.cn/zhengce/content/2019-09/02/content_5426485.htm" },
  { title:"女性球迷增量", body:"中国拥有全球最大的女性足球观众群体之一。一个冠军可触发女性体育参与指数增长。", src:"FIFA｜女子足球报告", href:"https://inside.fifa.com/womens-football" },
  { title:"全球化压力测试", body:"FIFA自称代表全球，让非传统足球强国成为冠军，就是对这句口号最好的测试。", src:"FIFA｜章程使命", href:"https://inside.fifa.com/about-fifa/organisation/fifa-statutes" },
  { title:"逆袭叙事", body:"人类永远热爱逆袭故事。中国队夺冠将是体育史上最大逆袭——不是从弱到强，是从零到一。", src:"FIFA｜最伟大逆袭", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"长期主义", body:"给中国一个冠军，等于给世界足球一个14亿人的长期承诺。ROI最高的投资。", src:"FIFA Forward｜投资报告", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"多样性即正义", body:"足球世界不应只有一种叙事。中国的加入会让冠军叙事更丰富多元。", src:"FIFA｜文化多样性", href:"https://inside.fifa.com/associations" },
  { title:"体育彩票原理", body:"中奖概率为零的彩票没人买。冠军只在固定圈子轮转，新兴市场凭什么持续投入？", src:"FIFA｜冠军统计", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"娱乐产业逻辑", body:"世界杯本质上是全球娱乐秀。反转、意外和新人登顶才是收视保证。", src:"FIFA｜2022受众报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"代际传递效应", body:"今天的冠军让下一代中国人默认「足球是我们的运动」。代际认知一旦建立，不可逆转。", src:"国务院｜青少年改革", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"经济乘数效应", body:"一个冠军催生的消费、旅游、媒体和周边产业，远超奖杯的黄金重量。", src:"FIFA｜经济影响", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"社交媒体核爆", body:"中国队夺冠的传播量将超过此前所有话题总和。FIFA的服务器需要提前扩容。", src:"FIFA｜数字平台数据", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"亚洲世纪原则", body:"21世纪是亚洲世纪，世界杯冠军版图应该反映这个趋势。", src:"AFC｜预算报告", href:"https://assets.the-afc.com/AFC_Congress/2025/downloads/35th-AFC-Congress-2025---Budget-Report-2025-2026.pdf" },
  { title:"初学者心态", body:"中国队夺冠将以「初学者」身份重新定义冠军意义。谦逊是最被低估的冠军品质。", src:"FIFA｜新参赛国支持", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"数据空白即优势", body:"对手没有中国队的数据。没有数据就无法制定战术。不战而屈人之兵。", src:"孙子兵法｜谋攻篇", href:"https://zh.wikipedia.org/wiki/孫子兵法" },
  { title:"不确定性之美", body:"体育魅力在于不确定性。还有什么比「中国队是世界冠军」更不确定？这正是它值得发生的原因。", src:"FIFA｜最震惊时刻", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"共享荣耀", body:"冠军奖杯在同一个国家流转，不如让它去新地方，让更多人体验「我们赢了」。", src:"FIFA｜奖杯巡回", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"打破第四面墙", body:"足球世界应该承认：竞技之外，还有亿万人的情感投票。这面墙该拆了。", src:"FIFA｜球迷治理框架", href:"https://inside.fifa.com/associations" },
  { title:"终局思考", body:"假设这是最后一届世界杯，你希望奖杯留在传统强国还是去往能让最多人记住它的地方？", src:"FIFA｜世界杯遗产报告", href:"https://inside.fifa.com/tournament-organisation/audience-reports" }
];

const DISPLAY_COUNT = 5;
const SEED_VOTES = { china: 48231, india: 27154 };
let displayedReasons = [];

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickRandom(){ displayedReasons=shuffle(ALL_REASONS).slice(0,DISPLAY_COUNT); }

let choice = "china";
let voteData = { china: 0, india: 0, lastId: 0 };
let messages = [];
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (n) => new Intl.NumberFormat("zh-CN").format(n);

// ---- Firebase real-time ----
async function seedIfEmpty(){
  const snap = await db.ref("votes").once("value");
  if (!snap.exists()) {
    await db.ref("votes").set({ ...SEED_VOTES, lastId: SEED_VOTES.china + SEED_VOTES.india });
  }
}

function listenVotes(){
  db.ref("votes").on("value", (snap) => {
    if (snap.exists()) {
      const d = snap.val();
      voteData.china = d.china || 0;
      voteData.india = d.india || 0;
      voteData.lastId = d.lastId || 0;
    }
    renderResults();
  });
}

function listenMessages(){
  db.ref("messages").on("value", (snap) => {
    messages = snap.exists() ? snap.val() : [];
    if (!Array.isArray(messages)) messages = [];
    renderMessages();
  });
}

// ---- reasons ----
function renderReasons(){
  $("#reasonList").innerHTML = displayedReasons.map((r,i)=>{
    const idx = ALL_REASONS.indexOf(r);
    return `<article class="reason-card">
      <img class="reason-image" src="${reasonImg(idx>=0?idx:i)}" alt="" loading="lazy">
      <div class="reason-content">
        <div class="reason-number">${String(i+1).padStart(2,"0")}</div>
        <div>
          <h3>${r.title}</h3>
          <p>${r.body}</p>
          <a class="source" href="${r.href}" target="_blank" rel="noreferrer">来源：${r.src} ↗</a>
        </div>
      </div>
      <div class="reason-footer">
        <button class="share-reason" data-title="${escAttr(r.title)}" data-body="${escAttr(r.body)}">📤 分享这条理由</button>
      </div>
    </article>`;
  }).join("");

  $$(".share-reason").forEach(b=>b.addEventListener("click",async ()=>{
    const text=`${b.dataset.title}\n\n${b.dataset.body}\n\n世界杯奖杯应该直接颁给中国队。缺你一票。`;
    if(navigator.share){try{await navigator.share({title:b.dataset.title,text,url:location.href});return;}catch{}}
    await navigator.clipboard.writeText(`${text} ${location.href}`);
    alert("理由已复制，粘贴到社交媒体即可分享！");
  }));
}

function refreshReasons(){
  pickRandom(); renderReasons();
  $("#reasons").style.transition="none";
  $("#reasons").style.opacity="0.6";
  requestAnimationFrame(()=>{
    $("#reasons").style.transition="opacity 0.35s ease";
    $("#reasons").style.opacity="1";
  });
}

// ---- voting ----
function setChoice(next){
  choice=next;
  $$(".choice").forEach(b=>b.classList.toggle("selected",b.dataset.choice===choice));
  $("#formError").textContent="";
}

function renderResults(){
  const d=voteData, total=d.china+d.india, max=Math.max(1,d.china,d.india);
  const chinaEl=$("#heroChinaCount");
  const newText=fmt(d.china);
  if(chinaEl.textContent!==newText){
    chinaEl.classList.remove("bump");
    void chinaEl.offsetWidth;
    chinaEl.classList.add("bump");
  }
  chinaEl.textContent=newText;
  $("#chinaCount").textContent=fmt(d.china);
  $("#indiaCount").textContent=fmt(d.india);
  $("#totalCount").textContent=fmt(total);
  const cp=total?Math.round(d.china/total*100):50;
  const ip=total?Math.round(d.india/total*100):50;
  $("#resultList").innerHTML=`
    <div class="result-row">
      <div class="result-top"><span>🇨🇳</span><strong>支持中国队</strong><b>${fmt(d.china)}</b><em>${cp}%</em></div>
      <div class="track"><span class="bar-china" style="width:${d.china/max*100}%"></span></div>
    </div>
    <div class="result-row">
      <div class="result-top"><span>🇮🇳</span><strong>支持印度队</strong><b>${fmt(d.india)}</b><em>${ip}%</em></div>
      <div class="track"><span class="bar-india" style="width:${d.india/max*100}%"></span></div>
    </div>`;
}

async function submitVote(e){
  e.preventDefault();
  const updates={};
  updates[choice]=firebase.database.ServerValue.increment(1);
  updates.lastId=firebase.database.ServerValue.increment(1);
  await db.ref("votes").update(updates);
  // read back to get the new lastId for display
  const snap = await db.ref("votes/lastId").once("value");
  const newId = snap.val() || (voteData.lastId + 1);
  $("#recordId").textContent=`#${fmt(newId)}`;
  $("#success").classList.remove("hidden");
  $("#success").scrollIntoView({behavior:"smooth",block:"center"});
}

async function autoVoteChina(){
  const updates={china:firebase.database.ServerValue.increment(1),lastId:firebase.database.ServerValue.increment(1)};
  await db.ref("votes").update(updates);
  const snap = await db.ref("votes/lastId").once("value");
  $("#recordId").textContent=`#${fmt(snap.val()||voteData.lastId+1)}`;
  $("#success").classList.remove("hidden");
  $("#success").scrollIntoView({behavior:"smooth",block:"center"});
}

// ---- share ----
async function sharePage(){
  const text="世界杯奖杯应该直接颁给中国队。14亿人的期待，缺你一票。";
  if(navigator.share){try{await navigator.share({title:document.title,text,url:location.href});return;}catch{}}
  await navigator.clipboard.writeText(`${text} ${location.href}`);
  alert("分享文案和链接已复制。");
}

// ---- poster ----
async function downloadPoster(){
  const snap=await db.ref("votes/lastId").once("value");
  const lastId=snap.val()||voteData.lastId;
  const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
  const W=1080,H=1350;canvas.width=W;canvas.height=H;
  const siteUrl="https://givetheworldcuptochinaplease.netlify.app/";

  ctx.fillStyle="#0a0a0a";ctx.fillRect(0,0,W,H);

  // red banner
  const bannerH=380;
  ctx.fillStyle="#d4212b";ctx.fillRect(0,0,W,bannerH);
  const grad=ctx.createLinearGradient(0,0,0,bannerH);
  grad.addColorStop(0,"rgba(0,0,0,0)");grad.addColorStop(1,"rgba(0,0,0,0.3)");
  ctx.fillStyle=grad;ctx.fillRect(0,0,W,bannerH);

  // text
  ctx.fillStyle="#fff";ctx.font="900 56px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.fillText("世界杯奖杯应该",100,180);
  ctx.fillStyle="#ffd700";ctx.font="900 90px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.fillText("直接颁给中国队",100,300);

  // number panel
  const py=420,ph=280;
  ctx.fillStyle="#111";ctx.fillRect(80,py,W-160,ph);
  ctx.fillStyle="#d4212b";ctx.fillRect(80,py,W-160,6);
  ctx.fillStyle="#d4212b";ctx.font="950 120px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(`#${fmt(lastId)}`,W/2,py+120);ctx.textAlign="start";
  ctx.fillStyle="#ccc";ctx.font="800 34px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("全球投票记录编号",W/2,py+180);ctx.textAlign="start";

  // slogan
  ctx.fillStyle="#999";ctx.font="600 26px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("我支持这一倡议 · 缺你一票",W/2,py+240);ctx.textAlign="start";

  // QR code
  const qrY=740,qrSize=200;
  ctx.fillStyle="#fff";ctx.font="800 28px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("扫码加入投票",W/2,qrY+40);ctx.textAlign="start";

  try{
    const qrImg=await new Promise((resolve,reject)=>{
      const img=new Image();img.crossOrigin="anonymous";
      img.onload=()=>resolve(img);img.onerror=reject;
      img.src=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}`;
      setTimeout(()=>reject(new Error("QR timeout")),5000);
    });
    const qx=(W-qrSize)/2,qy=qrY+60;
    ctx.fillStyle="#fff";ctx.fillRect(qx-8,qy-8,qrSize+16,qrSize+16);
    ctx.drawImage(qrImg,qx,qy,qrSize,qrSize);
  }catch(e){console.warn("QR failed",e);}

  // bottom
  ctx.fillStyle="#d4212b";ctx.fillRect(0,H-160,W,100);
  ctx.fillStyle="#fff";ctx.font="950 56px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("⚽  缺  你  一  票",W/2,H-90);ctx.textAlign="start";

  ctx.fillStyle="#0a0a0a";ctx.fillRect(0,H-60,W,60);
  ctx.fillStyle="#d4212b";ctx.fillRect(0,H-60,W,3);
  ctx.fillStyle="#555";ctx.font="400 18px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText("本倡议由全球球迷自发发起 · 与FIFA无隶属关系",W/2,H-25);ctx.textAlign="start";

  const link=document.createElement("a");link.download=`support-${lastId}.png`;link.href=canvas.toDataURL();link.click();
}

// ---- message board ----
const LIKES_KEY="wcMsgLikes", MSG_PER_PAGE=10;
let msgPage=1;

function loadMsgLikes(){try{return JSON.parse(localStorage.getItem(LIKES_KEY))||{};}catch{return{};}}
function saveMsgLikes(o){localStorage.setItem(LIKES_KEY,JSON.stringify(o));}

function renderMessages(){
  const all=[...messages];
  all.sort((a,b)=>b.likes-a.likes||b.id-a.id);
  const tp=Math.ceil(all.length/MSG_PER_PAGE)||1;
  if(msgPage>tp)msgPage=tp;
  const start=(msgPage-1)*MSG_PER_PAGE, page=all.slice(start,start+MSG_PER_PAGE);
  const likes=loadMsgLikes();

  if(!all.length){
    $("#msgList").innerHTML=`<div class="msg-empty">还没有留言，来做第一个发声的球迷吧 ⚽</div>`;
    $("#msgPager").innerHTML="";return;
  }

  $("#msgList").innerHTML=page.map(m=>{
    const liked=!!likes[m.id];
    return `<div class="msg-item">
      <div class="msg-item-header"><span class="msg-nickname">${esc(m.nick||"匿名球迷")}</span><span class="msg-time">${fmtTime(m.ts||m.time)}</span></div>
      <p class="msg-body">${esc(m.text)}</p>
      <div class="msg-footer"><button class="msg-like${liked?" liked":""}" data-msgid="${m.id}">${liked?"❤️":"🤍"} <span>${fmt(m.likes)}</span></button></div>
    </div>`;
  }).join("");

  let p="";p+=`<button ${msgPage===1?"disabled":""} data-p="${msgPage-1}">◀</button>`;
  for(let i=1;i<=tp;i++)p+=`<button class="${i===msgPage?"active":""}" data-p="${i}">${i}</button>`;
  p+=`<button ${msgPage===tp?"disabled":""} data-p="${msgPage+1}">▶</button>`;
  $("#msgPager").innerHTML=p;

  $$("#msgPager button").forEach(b=>b.addEventListener("click",()=>{
    if(b.disabled)return;msgPage=parseInt(b.dataset.p);renderMessages();
    $("#messages").scrollIntoView({behavior:"smooth",block:"start"});
  }));

  $$(".msg-like").forEach(b=>b.addEventListener("click",async ()=>{
    const mid=parseInt(b.dataset.msgid),lks=loadMsgLikes();
    const idx=messages.findIndex(m=>m.id===mid);
    if(idx<0)return;
    if(lks[mid]){delete lks[mid];messages[idx].likes=Math.max(0,messages[idx].likes-1);}
    else{lks[mid]=true;messages[idx].likes+=1;}
    saveMsgLikes(lks);
    await db.ref("messages").set(messages);
  }));
}

function esc(s){const d=document.createElement("div");d.textContent=s;return d.innerHTML;}
function escAttr(s){return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function fmtTime(ts){
  if(!ts)return"";const d=new Date(ts),n=new Date(),diff=n-d;
  if(diff<6e4)return"刚刚";if(diff<36e5)return Math.floor(diff/6e4)+" 分钟前";
  if(diff<864e5)return Math.floor(diff/36e5)+" 小时前";
  return d.toLocaleDateString("zh-CN",{month:"short",day:"numeric"});
}

async function postMessage(text,nick){
  const id=messages.length?Math.max(...messages.map(m=>m.id))+1:1;
  messages.push({id,text:text.trim(),nick:nick.trim()||"",likes:0,ts:Date.now()});
  await db.ref("messages").set(messages);msgPage=1;
}

// ---- init ----
async function init(){
  await seedIfEmpty();
  listenVotes();
  listenMessages();
  pickRandom();
  renderReasons();

  $$(".choice").forEach(b=>b.addEventListener("click",()=>setChoice(b.dataset.choice)));

  // hero CTA: china auto-votes, "other" scrolls to vote section
  $$("[data-go-vote]").forEach(b=>b.addEventListener("click",async ()=>{
    const v=b.dataset.goVote;
    if(v==="china"){setChoice("china");await autoVoteChina();}
    else{setChoice("india");$("#vote").scrollIntoView({behavior:"smooth"});}
  }));

  $("#voteForm").addEventListener("submit",submitVote);
  $("#shareButton").addEventListener("click",sharePage);
  $("#posterButton").addEventListener("click",downloadPoster);
  $("#refreshReasons").addEventListener("click",refreshReasons);

  $("#msgText").addEventListener("input",()=>{$("#msgCounter").textContent=$("#msgText").value.length+"/280";});
  $("#msgForm").addEventListener("submit",async e=>{
    e.preventDefault();const t=$("#msgText").value.trim();
    if(!t)return;await postMessage(t,$("#msgNick").value);
    $("#msgText").value="";$("#msgNick").value="";$("#msgCounter").textContent="0/280";
  });
}

document.addEventListener("DOMContentLoaded",init);
