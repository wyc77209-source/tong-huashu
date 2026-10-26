// 第二留出集：最终评估用，写完后不再调参
const H=[["好呀，那就明晚","interest"],["你说的那家店我好想去！","interest"],["笑不活了哈哈哈哈","interest"],["想见你了😘","interest"],["你今天在干嘛呀，我无聊","interest"],
["你平时喜欢干嘛","test"],["你是哪里人？","test"],["你交过女朋友没","test"],["你怎么这么晚才回","test"],["你觉得我怎么样","test"],
["我才不信你呢","defend"],["你是不是经常这样跟女生聊天","defend"],["你别想骗我","defend"],["我们才认识几天","defend"],["我不喜欢油嘴滑舌的","defend"],
["今天上班被同事针对了","emo"],["好想辞职啊啊啊","emo"],["我真的好累","emo"],["哼，你都不关心我","emo"],["心情很差","emo"],
["嗯哼","blank"],["哦哦","blank"],["行吧","blank"],["😂😂","blank"],["刚吃完饭","blank"],
["这几天都要加班","reject"],["我不太想出去","reject"],["有点远诶，算了","reject"],["下次有机会吧","reject"],["我觉得我们不太合适","reject"]];
global.window={};require('./engine.js');let ok=0;const bad=[];for(const[m,k]of H){const g=window.TH.analyze(m).key;g===k?ok++:bad.push(`${m} 期望${k} 得到${g}`)}
console.log(`留出集2 ${ok}/${H.length} = ${(ok/H.length*100).toFixed(1)}%`);console.log(bad.join('\n'));
