// 标注测试集：[消息, 期望信号key]  node tests.js
const T=[
["周六可以呀，几点？","interest"],["好呀好呀 去哪吃","interest"],["哈哈哈哈哈笑死我了","interest"],["你好好笑啊😂","interest"],["想你了","interest"],["晚安呀❤️","interest"],["我也喜欢猫！你养的什么","interest"],["真的吗？然后呢","interest"],["那你请我喝奶茶🧋","interest"],["下次带我去呗","interest"],["早安～今天好冷","interest"],["你明天有空吗","interest"],["好啊，我请你","interest"],["可以呀 我周末都在","interest"],
["你有女朋友吗","test"],["你是不是对每个女生都这么说","defend"],["你喜欢什么样的女生","test"],["你怎么才回我","test"],["在干嘛","test"],["你照片是本人吗","test"],["我是不是胖了","test"],["你谈过几个","test"],["你会做饭吗？","test"],["你为什么加我","defend"],["你平时都这么撩吗","defend"],["如果我不理你你会怎样","test"],["你多高","test"],["你是做什么工作的？","test"],
["你好油腻","defend"],["渣男吧你","defend"],["你是谁","defend"],["我们认识吗？","defend"],["别套路我","defend"],["你好会啊，练过吧","defend"],["我不随便见网友的","defend"],["先聊聊吧，不急着见面","defend"],["我不加微信的哦","defend"],["感觉你挺花心的","defend"],
["今天被老板骂了好烦","emo"],["好累啊不想上班","emo"],["我心情不好","emo"],["哼 不理你了","emo"],["气死我了！！外卖又洒了","emo"],["呜呜呜想哭","emo"],["emo了","emo"],["烦死了，和闺蜜吵架了","emo"],["加班到现在 崩溃","emo"],["我好难过😭","emo"],
["嗯","blank"],["嗯嗯","blank"],["哦","blank"],["哈哈","blank"],["呵呵","blank"],["在吗","blank"],["hi","blank"],["好的","blank"],["刚下班","blank"],["吃了","blank"],["👍","blank"],["。","blank"],["哈","blank"],["ok","blank"],
["最近有点忙，改天吧","reject"],["这周没空诶","reject"],["下次吧","reject"],["再说吧","reject"],["你是个好人","reject"],["我们还是做朋友吧","reject"],["我最近不想谈恋爱","reject"],["不太方便","reject"],["算了吧","reject"],["我有男朋友了","reject"],["看情况吧","reject"],["不用了谢谢","reject"],["不是不想见，就是这周真的忙","reject"],["我不忙呀，周六可以","interest"],["没有不想理你啦","interest"],["不讨厌你","interest"]
];
if(typeof module!=='undefined'){global.window={};require('./engine.js');let ok=0;const bad=[];
for(const[m,k]of T){const r=window.TH.analyze(m);const g=r.blocked?'blocked':r.key;g===k?ok++:bad.push(`${m} 期望${k} 得到${g}`)}
console.log(`准确率 ${ok}/${T.length} = ${(ok/T.length*100).toFixed(1)}%`);console.log(bad.join('\n'));}
