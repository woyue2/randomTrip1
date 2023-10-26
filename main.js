const shouGong = [];
const xiuXian = [];
const huWai = [];
const yunDong = [];
const jinJie = [];
shouGong.push(
    "做陶艺",
    "烘培饼干",
    "做蛋糕",
    "摘草莓",
    "做手工钱包",
    "种盆栽",
    "DIY香薰蜡烛",
    "做手工肥皂"
    )
xiuXian.push(
    "逛公园",
    "泡温泉",
    "足疗",
    "汗蒸",
    "书店看书",
    "喝咖啡",
    "撸猫",
    "清吧喝酒听歌"
)
huWai.push(
    "放风筝",
    "荡秋千",
    "躺草地看星星",
    "坐船出海钓鱼",
    "野餐露营",
    "坐摩天轮",
    "滑雪",
    "骑单车远行"
)
yunDong.push(
    "滑雪",
    "射箭馆",
    "保龄球",
    "游泳馆",
    "真人cs",
    "开卡丁车",
    "皮划艇",
    "看日出",
    "爬山",
    "去海边"
)
jinJie.push(
    "密室逃脱",
    "VR游戏体验馆",
    "鬼屋探险",
    "游戏厅抓娃娃",
    "看话剧",
    "看舞台剧",
    "逛蜡像馆",
    "野生动物园",
    "逛水族馆",
    "一起过音乐节",
    "一起看演唱会",
    "看画展",
    "博物馆"
)
const collection = [];

collection.push(
    shouGong, xiuXian, huWai, yunDong, jinJie
)
let output = [];
for (var i=0; i< collection.length; i++){
    let order = Math.floor(collection[i].length*Math.random())
    output.push(collection[i][order]);
}
// console.log(output)

let listElement = document.getElementById("myList");
output.forEach(function(fruit){
    let listItem = document.createElement('li');
    listItem.textContent = fruit;
    listElement.appendChild(listItem);
})

