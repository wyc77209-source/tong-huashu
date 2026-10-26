// 第三留出集：最终未调参评估
const H=[["那你来接我呀","interest"],["行啊 周五晚上我有空","interest"],["你也太可爱了吧哈哈哈","interest"],["睡不着，想跟你聊天","interest"],["下回带我一起呗～","interest"],
["你一个月赚多少","test"],["你一般几点睡","test"],["你会喜欢我这种吗","test"],["你最近在跟谁聊天","test"],["你以前也这样吗","test"],
["少来这套","defend"],["你好像很懂女生哦","defend"],["我不太相信网上的人","defend"],["你先发张照片看看","test"],["说得好听","defend"],
["今天好丧","emo"],["地铁上被挤哭了","emo"],["和我妈吵了一架","emo"],["你都不哄我","emo"],["生理期好痛","emo"],
["嗯呐","blank"],["了解","blank"],["哈哈是吧","blank"],["🙂","blank"],["在上课","blank"],
["这个月都挺忙的","reject"],["我考虑一下","reject"],["可能没时间哦","reject"],["我已经有喜欢的人了","reject"],["不用麻烦了","reject"]];
global.window={};require('./engine.js');let ok=0;const bad=[];for(const[m,k]of H){const g=window.TH.analyze(m).key;g===k?ok++:bad.push(`${m} 期望${k} 得到${g}`)}
console.log(`留出集3 ${ok}/${H.length} = ${(ok/H.length*100).toFixed(1)}%`);console.log(bad.join('\n'));
