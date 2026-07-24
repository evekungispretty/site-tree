// Literal sitemap.txt tree, preserved as-is (including its duplicate-listing quirks)
export const SITE_TREE = [
  {u:'/', l:'首頁', children:[
    // /about was removed as a page in sitemap.txt — its former children now sit as flat URLs.
    {u:'/about-sor', l:'什麼是 Science of Reading'},
    {u:'/certification', l:'SoR testing 認證架構'},
    {u:'/founder', l:'創辦人介紹:蕭文乾博士'},
    {u:'/news', l:'最新消息'},
    {u:'/kids', l:'所有兒童課程', children:[
      {u:'/kids/phonics', l:'SoR 拼讀小達人'},
      {u:'/kids/vocabulary', l:'SoR 單字小達人'},
      {u:'/kids/reading', l:'SoR 閱讀小達人'},
      {u:'/kids/online', l:'線上課程'},
      {u:'/kids/online-info', l:'線上方案'},
      {u:'/kids/reading-assessment-center', l:'教材展示中心'},
      {u:'/locations', l:'旗艦殿', children:[
        {u:'/locations/taipei', l:'台北旗艦殿'},
        {u:'/locations/taoyuan', l:'桃園旗艦殿'},
        {u:'/locations/changhua', l:'彰化旗艦殿'},
        {u:'/locations/kaohsiung', l:'高雄旗艦殿'},
      ]},
      {u:'/kids/highlights', l:'高光時刻'},
      {u:'/kids/faq', l:'常見問題'},
    ]},
    {u:'/adults', l:'成人課程', children:[
      {u:'/adults/pronunciation', l:'發音聽力三秒教'},
      {u:'/adults/master-class', l:'蕭博士專利語調課'},
      {u:'/adults/phonics', l:'專利字典拼讀班'},
      {u:'/adults/adult-pronunciation', l:'發音聽力矯正班'},
      {u:'/adults/teacher-training', l:'師資培訓(正音師之路)'},
      {u:'/adults/highlights', l:'高光時刻'},
      {u:'/adults/faq', l:'常見問題'},
    ]},
    {u:'/resources', l:'免費資源', children:[
      {u:'/resources/kids', l:'兒童學習資源（免費課程/免費試上）'},
      {u:'/resources/adults', l:'成人學習資源（免費課程/免費試上）'},
    ]},
    {u:'/blog', l:'部落格', children:[
      {u:'/blog/latest', l:'公告'},
      {u:'/blog/article', l:'冷流量文章'},
      {u:'/blog/events', l:'活動紀錄', dup:true},
      {u:'/blog/media', l:'媒體報導'},
      {u:'/blog/testimonials/kids', l:'學員見證（兒童）', note:'原兒童課程學員見證，搬遷自 /kids/outcome'},
      {u:'/blog/testimonials/adults', l:'學員見證（成人）', note:'原成人課程學員見證，搬遷自 /adults/outcome'},
    ]},
    {u:'/shop', l:'SoR 原創教材商店'},
    {u:'/vocab-toolkit', l:'背單字工具組'},
    {u:'/mi-pen', l:'點讀專區'},
    {u:'/support/errata', l:'勘誤專區'},
    {u:'/member', l:'會員專區(需登入)'},
  ]}
];