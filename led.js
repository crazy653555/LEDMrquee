//test3.html?color=#ff0000&fontsize=10em&scrollAmount=30&text=台北%20高雄
(function () {

    var url = location.href; //取得網址
    var getPara = [];
    var aryPara = []; //存放queryString
    var text = "輸入方式:?color=#ff0000&fontsize=10em&scrollAmount=30&text=跑馬燈內容";
    var color = "#ff0000";
    var fontSize = "5em";
    var scrollAmount = "10";

    //取得queryString參數
    if (url.indexOf("?") != -1) {
        getPara = url.split('?')[1].split('&');

        for (i = 0; i < getPara.length; i++) {
            aryPara.push(getPara[i].split("=")[1]);
        }

        color = aryPara[0]; //字體顏色
        fontSize = aryPara[1]; //字體大小
        scrollAmount = aryPara[2]; //捲動速度
        text = aryPara[3]; //文字
    }


    var led_marquee = document.getElementById("led_marquee");
    led_marquee.innerHTML = decodeURI(text); //跑馬燈內容
    led_marquee.scrollAmount = scrollAmount; //跑馬燈速度

    var ledfont = document.getElementById("ledfont");
    ledfont.style.color = color; //文字顏色
    ledfont.style.fontSize = fontSize; //文字大小
}());