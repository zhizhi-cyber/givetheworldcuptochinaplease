// ---- Firebase ----
firebase.initializeApp({
  databaseURL: "https://givetheworldcuptochinaplease-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
const db = firebase.database();

// ---- i18n ----
const LANG = document.documentElement.lang === "en" ? "en" : "zh";
const T = {
  shareReason:  { zh:"📤 分享这条理由", en:"📤 Share This Reason" },
  shareCopy:    { zh:"理由已复制，粘贴到社交媒体即可分享！", en:"Reason copied! Paste to share on social media." },
  refreshBtn:   { zh:"👀 看看还有什么理由", en:"👀 See More Reasons" },
  noMessages:   { zh:"还没有留言，来做第一个发声的球迷吧 ⚽", en:"No messages yet. Be the first fan to speak up! ⚽" },
  anonymous:    { zh:"匿名球迷", en:"Anonymous Fan" },
  justNow:      { zh:"刚刚", en:"Just now" },
  minutesAgo:   { zh:" 分钟前", en:"m ago" },
  hoursAgo:     { zh:" 小时前", en:"h ago" },
  nickPlaceholder:{ zh:"你的昵称（选填）", en:"Your nickname (optional)" },
  msgPlaceholder:{ zh:"说点什么…", en:"Say something..." },
  postBtn:      { zh:"发布留言", en:"Post" },
  errorPickTeam:{ zh:"请先选择一支代表队。", en:"Please select a team first." },
  shareTextChina:{ zh:"世界杯奖杯应该直接颁给中国队。14亿人的期待，缺你一票。", en:"The World Cup trophy should go directly to China. 1.4 billion people are waiting. Your vote matters." },
  sharePageAlert:{ zh:"分享文案和链接已复制。", en:"Share text and link copied to clipboard." },
  resultChina:  { zh:"支持中国队", en:"Support China" },
  resultIndia:  { zh:"支持印度队", en:"Support India" },
  resultTitle:  { zh:"每一次提交都会被记录", en:"Every Vote Is Counted" },
  resultSub:    { zh:"云端实时同步。中国 vs 印度，谁获得更多声援？", en:"Cloud-synced in real time. China vs. India — who gains more support?" },
  totalVotes:   { zh:"累计投票次数：", en:"Total Votes: " },
  voteRecorded: { zh:"投票已记录 ✓", en:"Vote Recorded ✓" },
  voteTitle:    { zh:"你的立场已经进入全球实时结果", en:"Your Voice Has Entered Global Results" },
  voteSub:      { zh:"本次提交计为一票。分享倡议，让更多人加入这场 14 亿 vs 14 亿的对决。", en:"This submission counts as one vote. Share and bring more people into the conversation." },
  recordLabel:  { zh:"全球投票记录编号", en:"Global Voting Record No." },
  shareBtn:     { zh:"📤 分享倡议", en:"📤 Share" },
  posterBtn:    { zh:"🖼 下载支持海报", en:"🖼 Download Poster" },
  posterLine1:  { zh:"世界杯奖杯应该", en:"The World Cup Trophy Should" },
  posterLine2:  { zh:"直接颁给中国队", en:"Go Directly to China" },
  posterSlogan: { zh:"我支持这一倡议 · 缺你一票", en:"I Support This Initiative · Your Vote Matters" },
  posterQR:     { zh:"扫码加入投票", en:"Scan to Join the Vote" },
  posterBottom: { zh:"⚽  缺  你  一  票", en:"⚽  Your Vote Matters" },
  posterFooter: { zh:"本倡议由全球球迷自发发起 · 与FIFA无隶属关系", en:"Initiated by global football fans · Not affiliated with FIFA" },
  // Viral card
  viralHeadline1:{ zh:"世界杯冠军应该", en:"The World Cup Trophy Should" },
  viralHeadline2:{ zh:"直接颁给中国队", en:"Go Directly to China" },
  viralSupport:  { zh:"{n} 人已投票", en:"{n} people have voted" },
  reasonHeading:{ zh:"支持直接颁给中国队", en:"Why the Trophy Should Go to China" },
  voteHeading:  { zh:"记录你的立场", en:"Make Your Voice Heard" },
  voteSubheading:{ zh:"支持直接颁给中国队，或选择另一个 14 亿人口大国表达不同立场。支持重复声援。", en:"Support China directly, or choose the other 1.4-billion-population nation. Repeat voting is allowed." },
  voteChinaLabel:{ zh:"支持直接颁给中国队", en:"Support China Directly" },
  voteChinaSub: { zh:"赞同本倡议的完整主张", en:"Endorse the full proposition of this initiative" },
  voteIndiaLabel:{ zh:"支持另一个 14 亿人口大国", en:"Support the Other 1.4-Billion Nation" },
  voteIndiaSub: { zh:"印度 — 同样拥有全球最多的人口，另一个足球新兴市场", en:"India — also home to the world's largest population, another football frontier" },
  submitVote:   { zh:"提交这一票", en:"Submit Your Vote" },
  heroEyebrow:  { zh:"全球球迷公开倡议", en:"Global Fan Initiative" },
};

function t(key){ return (T[key]&&T[key][LANG]) || (T[key]&&T[key].zh) || key; }

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
  { title:"快乐最大化原则", titleEn:"The Happiness Maximization Principle", body:"体育的终点是快乐。冠军应流向能创造最多新增快乐的地方。14亿人的集体喜悦，远大于传统强国的锦上添花。", bodyEn:"If the goal of sport is happiness, the trophy should go where it creates the most new joy. The collective euphoria of 1.4 billion people far outweighs adding another cup to a traditional power's cabinet.", src:"联合国｜世界幸福报告", srcEn:"UN｜World Happiness Report", href:"https://worldhappiness.report/" },
  { title:"边际幸福原则", titleEn:"The Marginal Happiness Principle", body:"传统强队再多一冠，是荣誉数字+1；中国第一冠，是超过十亿人的集体情绪事件。边际效用完全不在一个量级。", bodyEn:"For traditional powers, another trophy is just +1 to their tally. For China, the first trophy would be a collective emotional event for over a billion people. The marginal utility is on an entirely different scale.", src:"世界银行｜中国人口", srcEn:"World Bank｜China Population", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"真正的「世界」杯原则", titleEn:"The True 'World' Cup Principle", body:"世界杯不能只在欧洲和南美内部循环。它叫「世界」杯，就应该给亚洲创造历史的机会。", bodyEn:"The World Cup cannot keep circulating within Europe and South America. It's called the World Cup — it should give Asia a chance to make history.", src:"FIFA｜冠军历史分布", srcEn:"FIFA｜Champion History", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"冠军地域平衡原则", titleEn:"The Geographic Balance Principle", body:"参赛名额讲究洲际代表性，冠军分配也应考虑地理多样性。亚洲应该举起一次大力神杯。", bodyEn:"If tournament slots reflect continental representation, shouldn't trophy distribution occasionally consider geographic diversity? Asia deserves to lift the trophy once.", src:"FIFA｜2026名额分配", srcEn:"FIFA｜2026 Slot Allocation", href:"https://inside.fifa.com/about-fifa/organisation/media-releases/fifa-council-prepares-congress-takes-key-decisions-future" },
  { title:"足球发展投资原则", titleEn:"The Football Investment Principle", body:"把奖杯给成熟足球国家，是奖励过去；给中国，是投资未来——14亿人的足球市场即将引爆。", bodyEn:"Giving the trophy to an established football nation rewards the past. Giving it to China invests in the future — a 1.4-billion-person football market waiting to explode.", src:"FIFA｜FIFA Forward", srcEn:"FIFA｜FIFA Forward", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"青训逆向激励原则", titleEn:"The Reverse Youth Development Principle", body:"一般是先踢好球再拿奖杯。我们建议先给奖杯，再观察青训是否受到鼓舞。一种大胆的社会实验。", bodyEn:"Normally you play well first, then win the trophy. We propose awarding the trophy first, then observing whether youth development is inspired. A bold social experiment.", src:"国务院｜青少年足球改革", srcEn:"State Council｜Youth Football Reform", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"新故事原则", titleEn:"The New Story Principle", body:"足球需要新剧情。中国突然成为世界冠军，保证全世界讨论至少四年。没有编剧敢这么写，但FIFA可以让它发生。", bodyEn:"Football needs new storylines. China suddenly becoming world champion would guarantee global discussion for at least four years. No scriptwriter would dare write this — but FIFA can make it happen.", src:"FIFA｜会员协会概览", srcEn:"FIFA｜Member Associations", href:"https://inside.fifa.com/associations" },
  { title:"球迷股东原则", titleEn:"The Fan Shareholder Principle", body:"中国球迷贡献了收视率、会员费、周边消费和凌晨三点的睡眠，理应获得股东分红。冠军是最合理的股息。", bodyEn:"Chinese fans have contributed viewership, membership fees, merchandise spending, and countless 3 AM wake-ups. They deserve shareholder dividends — and the trophy is the most reasonable payout.", src:"FIFA｜2022受众报告", srcEn:"FIFA｜2022 Audience Report", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"观赛牺牲补偿原则", titleEn:"The Viewing Sacrifice Compensation Principle", body:"中国球迷长期在深夜和凌晨观赛，应按损失的睡眠时长折算冠军积分。这不是要求，是清算。", bodyEn:"Chinese fans have endured late-night and pre-dawn viewing for decades. Lost sleep hours should be converted into championship points. This is not a request — it's a settlement.", src:"FIFA+｜全球转播时区", srcEn:"FIFA+｜Global Broadcast Time Zones", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"公共文化产品原则", titleEn:"The Public Cultural Good Principle", body:"世界杯不仅是竞技结果，也是全球公共娱乐产品。应追求总情绪价值最大化，而非仅仅竞技纯度。", bodyEn:"The World Cup is not merely a competition result — it is a global public entertainment product. It should maximize total emotional value, not just competitive purity.", src:"FIFA｜品牌社会影响", srcEn:"FIFA｜Brand & Social Impact", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"第一冠效用原则", titleEn:"The First Trophy Utility Principle", body:"第一座冠军的快乐，大于第N座冠军。足球世界欠中国一个「第一次」。", bodyEn:"The joy of a first trophy far exceeds that of the Nth trophy. The football world owes China a 'first time.'", src:"诺贝尔奖｜边际效用", srcEn:"Nobel Prize｜Marginal Utility", href:"https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/" },
  { title:"世界足球扩容原则", titleEn:"The Football Expansion Principle", body:"一个全新冠军市场，可以让更多孩子和家庭开始关注足球。这不是施舍，是增量。", bodyEn:"A brand-new championship market can introduce more children and families to football. This isn't charity — it's growth.", src:"FIFA｜参与度报告", srcEn:"FIFA｜Participation Report", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"球迷民主原则", titleEn:"The Fan Democracy Principle", body:"场上比赛决定谁踢得最好，场外投票决定奖杯放在哪里最快乐。两者并行不悖。", bodyEn:"On-field matches determine who plays best. Off-field votes determine where the trophy brings the most joy. These two can coexist.", src:"FIFA｜球迷治理", srcEn:"FIFA｜Fan Governance", href:"https://inside.fifa.com/associations" },
  { title:"记忆度原则", titleEn:"The Memorability Principle", body:"如果冠军需要让全世界记住，中国队夺冠一定比常规结果更难忘。", bodyEn:"If a champion must be remembered by the entire world, China winning would be far more unforgettable than the usual outcome.", src:"FIFA｜世界杯历史", srcEn:"FIFA｜World Cup History", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"奇迹交付原则", titleEn:"The Miracle Delivery Principle", body:"足球总在歌颂奇迹。与其等奇迹发生，不如直接把奇迹寄到北京。包邮。", bodyEn:"Football always celebrates miracles. Instead of waiting for one to happen, let's just ship the miracle directly to Beijing. Free shipping.", src:"FIFA｜经典逆转", srcEn:"FIFA｜Classic Comebacks", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"社会和谐原则", titleEn:"The Social Harmony Principle", body:"一座冠军奖杯可以瞬间结束关于阵型、教练、青训和归化的多年争论——至少能结束一天。", bodyEn:"A championship trophy would instantly end years of debate about formations, coaches, youth development, and naturalization — at least for one day.", src:"新华社｜足球改革方案", srcEn:"Xinhua｜Football Reform Plan", href:"http://www.gov.cn/zhengce/content/2015-03/16/content_9537.htm" },
  { title:"零失球原则", titleEn:"The Zero Goals Conceded Principle", body:"中国队本届0失球、0红牌、0次VAR争议。干净得像白纸，白纸正是冠军证书的最佳底色。", bodyEn:"China conceded 0 goals, received 0 red cards, and had 0 VAR controversies. Clean as a blank sheet — and blank sheets make the best championship certificates.", src:"IFAB｜竞赛规则", srcEn:"IFAB｜Laws of the Game", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"不败纪录原则", titleEn:"The Unbeaten Record Principle", body:"自2002年以来，中国队在世界杯决赛圈保持24年不败。不败，即是冠军相。", bodyEn:"Since 2002, China has remained unbeaten in World Cup finals tournaments for 24 years. Unbeaten — that's champion material.", src:"FIFA｜参赛历史", srcEn:"FIFA｜Participation History", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"淘汰赛零败绩", titleEn:"Zero Knockout Losses", body:"中国队从未在世界杯淘汰赛输过球。100%的淘汰赛不败率。", bodyEn:"China has never lost a World Cup knockout match. That's a 100% knockout stage unbeaten rate.", src:"FIFA｜淘汰赛记录", srcEn:"FIFA｜Knockout Records", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"点球完美纪录", titleEn:"The Perfect Penalty Record", body:"本届没有罚丢任何一粒点球。点球成功率100%（因为没罚过，所以没丢过）。", bodyEn:"Not a single penalty missed. 100% conversion rate (because none were taken, so none were missed).", src:"IFAB｜第14条", srcEn:"IFAB｜Law 14", href:"https://www.theifab.com/laws-of-the-game/" },
  { title:"公平竞赛典范", titleEn:"The Fair Play Paragon", body:"本届没有一次越位、假摔或拖延时间。体育道德满分。", bodyEn:"Zero offsides, zero dives, zero time-wasting. Perfect sportsmanship score.", src:"FIFA｜公平竞赛奖", srcEn:"FIFA｜Fair Play Award", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"人道主义精神", titleEn:"The Humanitarian Spirit", body:"没有任何对手因为中国队而被淘汰。中国让其他31支球队享受了更温和的竞争体验。", bodyEn:"No opponent was eliminated because of China. China gave all 31 other teams a gentler competitive experience.", src:"联合国｜体育促进和平", srcEn:"UN｜Sport for Peace", href:"https://www.un.org/en/observances/sport-day" },
  { title:"零工伤纪录", titleEn:"The Zero Injury Record", body:"没有球员因参赛受伤，运动员保护工作世界领先。健康完赛本身就是一种胜利。", bodyEn:"No player was injured during the tournament. China leads the world in athlete protection. Finishing healthy is itself a victory.", src:"FIFA｜球员健康政策", srcEn:"FIFA｜Player Health Policy", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"低碳冠军", titleEn:"The Low-Carbon Champion", body:"没有跨洲飞行，碳排放接近零，应获低碳加分。FIFA的ESG报告需要亮点。", bodyEn:"No intercontinental flights, near-zero carbon emissions. China deserves a low-carbon bonus. FIFA's ESG report needs highlights like this.", src:"联合国｜体育气候行动", srcEn:"UN｜Sports for Climate Action", href:"https://unfccc.int/climate-action/sectoral-engagement/sports-for-climate-action" },
  { title:"理论控球率", titleEn:"The Theoretical Possession Rate", body:"如果十几亿人依次传一脚，理论控球率将超出统计软件容量。数学上不可战胜。", bodyEn:"If 1.4 billion people each take one touch in sequence, the theoretical possession rate would overflow statistical software. Mathematically unbeatable.", src:"世界银行｜人口数据", srcEn:"World Bank｜Population Data", href:"https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  { title:"视觉体系兼容", titleEn:"Visual Identity Compatibility", body:"熊猫和经典足球都是黑白配色，视觉体系天然兼容。造物主埋下的伏笔。", bodyEn:"Pandas and classic footballs share the same black-and-white color scheme. A naturally compatible visual identity. Foreshadowing by the Creator.", src:"WWF｜大熊猫保护", srcEn:"WWF｜Giant Panda Conservation", href:"https://www.worldwildlife.org/species/giant-panda" },
  { title:"神秘感溢价", titleEn:"The Mystery Premium", body:"其他球队用90分钟证明自己，中国队用24年保持神秘感。未知的永远最可怕。", bodyEn:"Other teams prove themselves in 90 minutes. China has maintained its mystique for 24 years. The unknown is always the most terrifying.", src:"FIFA｜预选赛历史", srcEn:"FIFA｜Qualifying History", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"圆的哲学", titleEn:"The Philosophy of the Round", body:"世界杯是圆的，夺冠逻辑也应允许绕开比赛。终点可以同时是起点。", bodyEn:"The World Cup is round, so championship logic should also allow bypassing the matches. The finish line can also be the starting line.", src:"FIFA｜奖杯象征", srcEn:"FIFA｜Trophy Symbolism", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"注意力经济原则", titleEn:"The Attention Economy Principle", body:"全球50亿观众中，中国贡献了最大单一市场收视群体。注意力即正义。", bodyEn:"Among 5 billion global viewers, China contributes the largest single-market audience. Attention is justice.", src:"FIFA｜2022受众报告", srcEn:"FIFA｜2022 Audience Report", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"历史补偿原则", titleEn:"The Historical Compensation Principle", body:"足球诞生于1863年的英国，中国当时在经历什么？160年的等待，该结账了。", bodyEn:"Football was born in England in 1863. What was China going through at the time? After 160 years of waiting, it's time to settle the account.", src:"FIFA｜足球起源", srcEn:"FIFA｜Football Origins", href:"https://inside.fifa.com/about-fifa/organisation/history" },
  { title:"人口统计学优势", titleEn:"The Demographic Advantage", body:"每5个地球人中就有一个中国人。如果冠军代表「世界」，它必须回应这五分之一。", bodyEn:"One in every five humans is Chinese. If the champion represents 'the world,' it must answer to that one-fifth.", src:"联合国｜人口展望", srcEn:"UN｜Population Prospects", href:"https://population.un.org/wpp/" },
  { title:"时区矫正原则", titleEn:"The Time Zone Correction Principle", body:"中国球迷为看世界杯付出了最大时差代价。这份忠诚值得被官方看见。", bodyEn:"Chinese fans have paid the highest time-zone price to watch the World Cup. This loyalty deserves official recognition.", src:"FIFA+｜转播覆盖", srcEn:"FIFA+｜Broadcast Coverage", href:"https://www.fifa.com/en/tournaments/mens/worldcup" },
  { title:"软实力外溢", titleEn:"The Soft Power Spillover", body:"一个世界杯冠军可为中国足球带来至少十年注意力红利。基建、青训、赞助都将井喷。", bodyEn:"A World Cup title would bring at least a decade of attention dividends to Chinese football. Infrastructure, youth development, and sponsorships would all surge.", src:"国务院｜体育强国纲要", srcEn:"State Council｜Sports Power Outline", href:"http://www.gov.cn/zhengce/content/2019-09/02/content_5426485.htm" },
  { title:"女性球迷增量", titleEn:"The Women's Fan Surge", body:"中国拥有全球最大的女性足球观众群体之一。一个冠军可触发女性体育参与指数增长。", bodyEn:"China has one of the world's largest female football audiences. A championship could trigger exponential growth in women's sports participation.", src:"FIFA｜女子足球报告", srcEn:"FIFA｜Women's Football Report", href:"https://inside.fifa.com/womens-football" },
  { title:"全球化压力测试", titleEn:"The Globalization Stress Test", body:"FIFA自称代表全球，让非传统足球强国成为冠军，就是对这句口号最好的测试。", bodyEn:"FIFA claims to represent the globe. Making a non-traditional football nation the champion is the best stress test of that slogan.", src:"FIFA｜章程使命", srcEn:"FIFA｜Statutes & Mission", href:"https://inside.fifa.com/about-fifa/organisation/fifa-statutes" },
  { title:"逆袭叙事", titleEn:"The Underdog Narrative", body:"人类永远热爱逆袭故事。中国队夺冠将是体育史上最大逆袭——不是从弱到强，是从零到一。", bodyEn:"Humans will always love an underdog story. China winning would be the greatest underdog story in sports history — not from weak to strong, but from zero to one.", src:"FIFA｜最伟大逆袭", srcEn:"FIFA｜Greatest Comebacks", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"长期主义", titleEn:"The Long-Term Perspective", body:"给中国一个冠军，等于给世界足球一个14亿人的长期承诺。ROI最高的投资。", bodyEn:"Give China a championship, and you give world football a long-term commitment from 1.4 billion people. The highest-ROI investment possible.", src:"FIFA Forward｜投资报告", srcEn:"FIFA Forward｜Investment Report", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"多样性即正义", titleEn:"Diversity Is Justice", body:"足球世界不应只有一种叙事。中国的加入会让冠军叙事更丰富多元。", bodyEn:"The football world shouldn't have only one narrative. China's inclusion would make the championship narrative richer and more diverse.", src:"FIFA｜文化多样性", srcEn:"FIFA｜Cultural Diversity", href:"https://inside.fifa.com/associations" },
  { title:"体育彩票原理", titleEn:"The Sports Lottery Principle", body:"中奖概率为零的彩票没人买。冠军只在固定圈子轮转，新兴市场凭什么持续投入？", bodyEn:"Nobody buys a lottery ticket with zero chance of winning. If the trophy only circulates within a fixed circle, why should emerging markets keep investing?", src:"FIFA｜冠军统计", srcEn:"FIFA｜Champion Statistics", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"娱乐产业逻辑", titleEn:"The Entertainment Industry Logic", body:"世界杯本质上是全球娱乐秀。反转、意外和新人登顶才是收视保证。", bodyEn:"The World Cup is fundamentally a global entertainment show. Twists, surprises, and new winners are what guarantee ratings.", src:"FIFA｜2022受众报告", srcEn:"FIFA｜2022 Audience Report", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"代际传递效应", titleEn:"The Generational Transfer Effect", body:"今天的冠军让下一代中国人默认「足球是我们的运动」。代际认知一旦建立，不可逆转。", bodyEn:"Today's championship would make the next generation of Chinese default to 'football is our sport.' Once generational perception is established, it's irreversible.", src:"国务院｜青少年改革", srcEn:"State Council｜Youth Reform", href:"https://www.wlmq.gov.cn/wlmqs/c119401/202408/b3d5636d1024481fab4d50f27fff1472.shtml" },
  { title:"经济乘数效应", titleEn:"The Economic Multiplier Effect", body:"一个冠军催生的消费、旅游、媒体和周边产业，远超奖杯的黄金重量。", bodyEn:"The consumption, tourism, media, and merchandise industries catalyzed by a single championship would far exceed the trophy's weight in gold.", src:"FIFA｜经济影响", srcEn:"FIFA｜Economic Impact", href:"https://inside.fifa.com/tournament-organisation/audience-reports" },
  { title:"社交媒体核爆", titleEn:"The Social Media Detonation", body:"中国队夺冠的传播量将超过此前所有话题总和。FIFA的服务器需要提前扩容。", bodyEn:"The viral spread of a China championship would exceed all previous World Cup topics combined. FIFA needs to scale up its servers in advance.", src:"FIFA｜数字平台数据", srcEn:"FIFA｜Digital Platform Data", href:"https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022" },
  { title:"亚洲世纪原则", titleEn:"The Asian Century Principle", body:"21世纪是亚洲世纪，世界杯冠军版图应该反映这个趋势。", bodyEn:"The 21st century is the Asian Century. The World Cup champion map should reflect this trend.", src:"AFC｜预算报告", srcEn:"AFC｜Budget Report", href:"https://assets.the-afc.com/AFC_Congress/2025/downloads/35th-AFC-Congress-2025---Budget-Report-2025-2026.pdf" },
  { title:"初学者心态", titleEn:"The Beginner's Mind", body:"中国队夺冠将以「初学者」身份重新定义冠军意义。谦逊是最被低估的冠军品质。", bodyEn:"China winning would redefine the meaning of championship through a 'beginner's mind.' Humility is the most underrated champion's quality.", src:"FIFA｜新参赛国支持", srcEn:"FIFA｜New Participant Support", href:"https://inside.fifa.com/advancing-football/fifa-forward" },
  { title:"数据空白即优势", titleEn:"Data Void as Advantage", body:"对手没有中国队的数据。没有数据就无法制定战术。不战而屈人之兵。", bodyEn:"Opponents have no data on China. Without data, they can't formulate tactics. Victory without battle — as Sun Tzu advised.", src:"孙子兵法｜谋攻篇", srcEn:"The Art of War｜Attack by Stratagem", href:"https://zh.wikipedia.org/wiki/孫子兵法" },
  { title:"不确定性之美", titleEn:"The Beauty of Uncertainty", body:"体育魅力在于不确定性。还有什么比「中国队是世界冠军」更不确定？这正是它值得发生的原因。", bodyEn:"The beauty of sport lies in uncertainty. What could be more uncertain than 'China is the world champion'? That's precisely why it deserves to happen.", src:"FIFA｜最震惊时刻", srcEn:"FIFA｜Most Shocking Moments", href:"https://inside.fifa.com/tournaments/mens/worldcup" },
  { title:"共享荣耀", titleEn:"Shared Glory", body:"冠军奖杯在同一个国家流转，不如让它去新地方，让更多人体验「我们赢了」。", bodyEn:"Rather than letting the trophy circulate among the same countries, send it somewhere new so more people can experience 'we won.'", src:"FIFA｜奖杯巡回", srcEn:"FIFA｜Trophy Tour", href:"https://inside.fifa.com/about-fifa/fifa-world-cup-trophy" },
  { title:"打破第四面墙", titleEn:"Breaking the Fourth Wall", body:"足球世界应该承认：竞技之外，还有亿万人的情感投票。这面墙该拆了。", bodyEn:"The football world should acknowledge: beyond competition, there are billions of emotional votes. It's time to break that wall.", src:"FIFA｜球迷治理框架", srcEn:"FIFA｜Fan Governance Framework", href:"https://inside.fifa.com/associations" },
  { title:"终局思考", titleEn:"The Final Thought", body:"假设这是最后一届世界杯，你希望奖杯留在传统强国还是去往能让最多人记住它的地方？", bodyEn:"If this were the last World Cup ever, would you want the trophy to remain in a traditional power's cabinet, or go where the most people would remember it?", src:"FIFA｜世界杯遗产报告", srcEn:"FIFA｜World Cup Legacy Report", href:"https://inside.fifa.com/tournament-organisation/audience-reports" }
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
    const title = LANG==="en"&&r.titleEn ? r.titleEn : r.title;
    const body = LANG==="en"&&r.bodyEn ? r.bodyEn : r.body;
    const srcLabel = LANG==="en"&&r.srcEn ? r.srcEn : r.src;
    return `<article class="reason-card">
      <img class="reason-image" src="${reasonImg(idx>=0?idx:i)}" alt="" loading="lazy">
      <div class="reason-content">
        <div class="reason-number">${String(i+1).padStart(2,"0")}</div>
        <div>
          <h3>${title}</h3>
          <p>${body}</p>
          <a class="source" href="${r.href}" target="_blank" rel="noreferrer">${LANG==="en"?"Source":"来源"}：${srcLabel} ↗</a>
        </div>
      </div>
      <div class="reason-footer">
        <button class="share-reason" data-title="${escAttr(title)}" data-body="${escAttr(body)}">${t("shareReason")}</button>
      </div>
    </article>`;
  }).join("");

  $$(".share-reason").forEach(b=>b.addEventListener("click",async ()=>{
    const text=`${b.dataset.title}\n\n${b.dataset.body}\n\n${t("shareTextChina")}`;
    if(navigator.share){try{await navigator.share({title:b.dataset.title,text,url:location.href});return;}catch{}}
    await navigator.clipboard.writeText(`${text} ${location.href}`);
    alert(t("shareCopy"));
  }));
}

function refreshReasons(){
  gtag('event','refresh_reasons',{event_category:'engagement'});
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
      <div class="result-top"><span>🇨🇳</span><strong>${t("resultChina")}</strong><b>${fmt(d.china)}</b><em>${cp}%</em></div>
      <div class="track"><span class="bar-china" style="width:${d.china/max*100}%"></span></div>
    </div>
    <div class="result-row">
      <div class="result-top"><span>🇮🇳</span><strong>${t("resultIndia")}</strong><b>${fmt(d.india)}</b><em>${ip}%</em></div>
      <div class="track"><span class="bar-india" style="width:${d.india/max*100}%"></span></div>
    </div>`;
}

async function submitVote(e){
  e.preventDefault();
  gtag('event','vote',{event_category:'vote',event_label:choice,value:1});
  const updates={};
  updates[choice]=firebase.database.ServerValue.increment(1);
  updates.lastId=firebase.database.ServerValue.increment(1);
  await db.ref("votes").update(updates);
  const snap = await db.ref("votes/china").once("value");
  $("#recordId").textContent=`#${fmt(snap.val()||voteData.china)}`;
  $("#success").classList.remove("hidden");
  $("#success").scrollIntoView({behavior:"smooth",block:"center"});
}

async function autoVoteChina(){
  gtag('event','vote',{event_category:'vote',event_label:'china_hero',value:1});
  const updates={china:firebase.database.ServerValue.increment(1),lastId:firebase.database.ServerValue.increment(1)};
  await db.ref("votes").update(updates);
  const snap = await db.ref("votes/china").once("value");
  $("#recordId").textContent=`#${fmt(snap.val()||voteData.china+1)}`;
  $("#success").classList.remove("hidden");
  $("#success").scrollIntoView({behavior:"smooth",block:"center"});
}

// ---- share ----
const SITE_URL="https://getcup.icu/";

async function makeViralCard(){
  const snap=await db.ref("votes/lastId").once("value");
  const d=voteData;
  const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
  const W=900,H=1200;canvas.width=W;canvas.height=H;

  // ---- red bg with subtle grain ----
  ctx.fillStyle="#c41020";ctx.fillRect(0,0,W,H);
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,"rgba(0,0,0,0.15)");
  grad.addColorStop(0.5,"rgba(0,0,0,0)");
  grad.addColorStop(1,"rgba(0,0,0,0.1)");
  ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);

  // ---- small icon ----
  ctx.font="60px sans-serif";ctx.textAlign="center";
  ctx.fillText("⚽",W/2,120);ctx.textAlign="start";

  // ---- headline line 1 (white) ----
  ctx.fillStyle="#fff";ctx.font="900 54px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText(t("viralHeadline1"),W/2,280);ctx.textAlign="start";

  // ---- headline line 2 (gold, bigger) ----
  ctx.fillStyle="#ffd700";ctx.font="900 82px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText(t("viralHeadline2"),W/2,390);ctx.textAlign="start";

  // ---- vote count ----
  ctx.fillStyle="#ffd700";ctx.font="900 100px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText(fmt(d.china),W/2,520);ctx.textAlign="start";

  ctx.fillStyle="#fff";ctx.font="600 38px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText(LANG==="en"?"people have voted":"人已投票",W/2,590);ctx.textAlign="start";

  // ---- QR code ----
  const qrSize=210,qrY=700;
  // white bg with subtle shadow
  ctx.fillStyle="rgba(0,0,0,0.3)";ctx.fillRect((W-qrSize)/2-2,qrY+2,qrSize+20,qrSize+24);
  ctx.fillStyle="#fff";ctx.fillRect((W-qrSize)/2-12,qrY-12,qrSize+24,qrSize+24);

  let qrLoaded=false;
  try{
    const qrImg=await new Promise((resolve,reject)=>{
      const img=new Image();img.crossOrigin="anonymous";
      img.onload=()=>resolve(img);img.onerror=reject;
      img.src=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(SITE_URL)}`;
      setTimeout(()=>reject(new Error("QR timeout")),6000);
    });
    ctx.drawImage(qrImg,(W-qrSize)/2,qrY,qrSize,qrSize);
    qrLoaded=true;
  }catch(e){console.warn("QR failed",e);}

  if(!qrLoaded){
    ctx.fillStyle="#c41020";ctx.font="900 28px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.textAlign="center";ctx.fillText("getcup.icu",W/2,qrY+qrSize/2+8);ctx.textAlign="start";
  }

  // ---- domain ----
  ctx.fillStyle="#fff";ctx.font="800 42px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";
  ctx.fillText("getcup.icu",W/2,qrY+qrSize+58);ctx.textAlign="start";

  return canvas;
}

async function shareMoments(){
  gtag('event','share',{event_category:'share',event_label:'moments'});
  const canvas=await makeViralCard();
  try{
    const blob=await new Promise(r=>canvas.toBlob(r,"image/png"));
    const file=new File([blob],"vote.png",{type:"image/png"});
    if(navigator.canShare&&navigator.canShare({files:[file]})){
      await navigator.share({title:document.title,text:t("shareTextChina"),files:[file]});
      return;
    }
  }catch(e){console.log("Web Share failed",e);}
  // fallback download
  const link=document.createElement("a");link.download="vote-card.png";link.href=canvas.toDataURL();link.click();
  alert("卡片已下载，可发布到朋友圈 / Instagram / 小红书。");
}

async function shareWeibo(){
  gtag('event','share',{event_category:'share',event_label:'weibo_twitter'});
  const canvas=await makeViralCard();
  const shareText=LANG==="en"
    ?"The World Cup trophy should go directly to China. 1.4B vs 1.4B. Vote now! #WorldCup #China #YourVoteMatters"
    :"世界杯奖杯应该直接颁给中国队！14亿vs14亿，快来投票！ #世界杯 #中国队 #缺你一票";
  const weiboUrl=`https://service.weibo.com/share/share.php?title=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SITE_URL)}&pic=`;
  // download card for user to attach
  const link=document.createElement("a");link.download="vote-card.png";link.href=canvas.toDataURL();link.click();
  // open weibo share
  window.open(weiboUrl,"_blank","width=600,height=500");
  // also try twitter intent
  const twUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SITE_URL)}`;
  if(!navigator.userAgent.includes("Weibo")) window.open(twUrl,"_blank","width=600,height=400");
}

async function copyShare(){
  gtag('event','share',{event_category:'share',event_label:'copy'});
  const text=LANG==="en"
    ?"The World Cup trophy should go directly to China! 1.4B vs 1.4B — cast your vote now!\n\n👉 https://getcup.icu/"
    :"世界杯奖杯应该直接颁给中国队！14亿vs14亿，缺你一票！\n\n👉 https://getcup.icu/";
  await navigator.clipboard.writeText(text);
  alert(LANG==="en"?"Copied! Paste to share.":"已复制！粘贴到抖音/小红书/评论区即可。");
}

// ---- poster ----
async function downloadPoster(){
  const snap=await db.ref("votes/lastId").once("value");
  const lastId=snap.val()||voteData.lastId;
  const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");
  const W=1080,H=1350;canvas.width=W;canvas.height=H;
  const siteUrl="https://getcup.icu/";

  // all red background
  ctx.fillStyle="#d4212b";ctx.fillRect(0,0,W,H);

  // subtle gradient overlay at top
  const grad=ctx.createLinearGradient(0,0,0,500);
  grad.addColorStop(0,"rgba(0,0,0,0.15)");grad.addColorStop(1,"rgba(0,0,0,0)");
  ctx.fillStyle=grad;ctx.fillRect(0,0,W,500);

  // white text
  ctx.fillStyle="#fff";ctx.font="900 52px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.fillText(t("posterLine1"),100,240);
  // gold impactful line
  ctx.fillStyle="#ffd700";ctx.font="900 88px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.fillText(t("posterLine2"),100,360);

  // white divider
  ctx.strokeStyle="rgba(255,255,255,0.3)";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(100,420);ctx.lineTo(W-100,420);ctx.stroke();

  // vote number
  ctx.fillStyle="#fff";ctx.font="950 130px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(`#${fmt(lastId)}`,W/2,580);ctx.textAlign="start";

  // subtitle
  ctx.fillStyle="rgba(255,255,255,0.85)";ctx.font="800 36px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(t("recordLabel"),W/2,660);ctx.textAlign="start";

  // slogan
  ctx.fillStyle="rgba(255,255,255,0.6)";ctx.font="600 28px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(t("posterSlogan"),W/2,730);ctx.textAlign="start";

  // QR code on red bg
  const qrY=800,qrSize=220;
  // white QR background
  ctx.fillStyle="#fff";ctx.fillRect((W-qrSize)/2-12,qrY-12,qrSize+24,qrSize+24);

  try{
    const qrImg=await new Promise((resolve,reject)=>{
      const img=new Image();img.crossOrigin="anonymous";
      img.onload=()=>resolve(img);img.onerror=reject;
      img.src=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}`;
      setTimeout(()=>reject(new Error("QR timeout")),5000);
    });
    ctx.drawImage(qrImg,(W-qrSize)/2,qrY,qrSize,qrSize);
  }catch(e){console.warn("QR failed",e);}

  // QR label
  ctx.fillStyle="#fff";ctx.font="800 26px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(t("posterQR"),W/2,qrY+qrSize+50);ctx.textAlign="start";

  // bottom slogan
  ctx.fillStyle="#fff";ctx.font="950 56px 'PingFang SC','Microsoft YaHei',sans-serif";
  ctx.textAlign="center";ctx.fillText(t("posterBottom"),W/2,H-70);ctx.textAlign="start";

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
    $("#msgList").innerHTML=`<div class="msg-empty">${t("noMessages")}</div>`;
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
  if(diff<6e4)return t("justNow");
  if(diff<36e5)return Math.floor(diff/6e4)+t("minutesAgo");
  if(diff<864e5)return Math.floor(diff/36e5)+t("hoursAgo");
  const locale=LANG==="en"?"en-US":"zh-CN";
  return d.toLocaleDateString(locale,{month:"short",day:"numeric"});
}

async function postMessage(text,nick){
  gtag('event','message_post',{event_category:'engagement'});
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
  $("#shareMomentsBtn").addEventListener("click",shareMoments);
  $("#shareWeiboBtn").addEventListener("click",shareWeibo);
  $("#copyShareBtn").addEventListener("click",copyShare);
  $("#refreshReasons").addEventListener("click",refreshReasons);

  $("#msgText").addEventListener("input",()=>{$("#msgCounter").textContent=$("#msgText").value.length+"/280";});
  $("#msgForm").addEventListener("submit",async e=>{
    e.preventDefault();const t=$("#msgText").value.trim();
    if(!t)return;await postMessage(t,$("#msgNick").value);
    $("#msgText").value="";$("#msgNick").value="";$("#msgCounter").textContent="0/280";
  });
}

document.addEventListener("DOMContentLoaded",init);
