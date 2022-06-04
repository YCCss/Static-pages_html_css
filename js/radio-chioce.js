
function $(Nid){
    return document.getElementById(Nid);
}
// 计数器
var count = 0
function chioce() {
    if (count % 4 == 0) $("button1").click();
    else if (count % 4 == 1) $("button2").click();
    else if (count % 4 == 2) $("button3").click();
    else $("button2").click();

    if (count == 100) count = 0;
    count = count + 1;
}

// 设置5s运行一次
setInterval(chioce,5000);