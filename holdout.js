// 留出集：写完分类器后新写、未用于调参
const H=[["哈哈哈哈你太逗了吧","interest"],["那周日下午？","interest"],["好想吃火锅啊 你请吗","interest"],["嘿嘿 想你啦","interest"],["你那边下雪了吗","interest"],["真的假的！我也去过那家","interest"],
["你平时周末干嘛呀？","test"],["你几岁啊","test"],["你身边女生很多吧","defend"],["你前女友漂亮吗","test"],["你是不是在跟很多人聊","defend"],["你喜欢长发还是短发","test"],
["我又不认识你","defend"],["你嘴真甜，是不是对谁都这样","defend"],["我还不太了解你","defend"],["网友见面有点怕","defend"],["你这话术哪学的","defend"],
["今天真的好倒霉","emo"],["我失眠了睡不着","emo"],["好烦 不想说话","emo"],["我感冒了好难受","emo"],["老板又让我加班 无语","emo"],
["嗯呢","blank"],["哈哈哈","interest"],["噢噢","blank"],["好吧","blank"],["😅","blank"],["在呢","blank"],["还好吧","blank"],
["这周末要陪家人","reject"],["最近在忙考试","reject"],["到时候再看吧","reject"],["不了不了","reject"],["我暂时不考虑这些","reject"],["你人挺好的，但是…","reject"],["改天一定","reject"]];
global.window={};require('./engine.js');let ok=0;const bad=[];for(const[m,k]of H){const g=window.TH.analyze(m).key;g===k?ok++:bad.push(`${m} 期望${k} 得到${g}`)}
console.log(`留出集 ${ok}/${H.length} = ${(ok/H.length*100).toFixed(1)}%`);console.log(bad.join('\n'));
