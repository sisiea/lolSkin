// 初始化游戏history
var hasLucky = localStorage.getItem('sisiea_lottery_has');
var gameTime = localStorage.getItem('sisiea_lottery_time_1');

if (!hasLucky) {
    localStorage.setItem('sisiea_lottery_has', 0);
}
else {
    hasLucky = parseInt(hasLucky);
}
if (!gameTime) {
    gameTime = 0;
    localStorage.setItem('sisiea_lottery_time_1', gameTime);
}
else {
    gameTime = parseInt(gameTime);
}

//内地结果

var preResult = ['images/scratch_no.png','images/scratch_no.png','images/card_awards.png'];

var overTime = 'images/overtime.png';



var img = new Image()
img.src = 'images/placeholder.jpg'
img.onload = function () {
    var lottery = new LotteryCard(document.getElementById('js_lottery'), { // eslint-disable-line
        cover: img
    })
    lottery.on('start', function () {
        if(gameTime>2){
            lottery.setResult(overTime);
        }else{
            lottery.setResult(preResult[gameTime]);
        }
        gameTime++;
        localStorage.setItem('sisiea_lottery_time_1', gameTime);
        
    })
    lottery.on('end', function () {
    })
    window.lottery = lottery
}