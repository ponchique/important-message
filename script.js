/**
 * Created by ponchique on 19.09.16.
 */



var stroke = document.getElementById('stroke')
var timer = document.getElementById('timer')

var p = '&nbsp;&#9679;&nbsp;'
var d = '&nbsp;&#8211;&nbsp;'
var s = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
var b = '<b>';
var bc = '</b>';
var sb = '<sub>';
var sbc = '</sub>';

msg = {
    'fw': d +ss +p +p +p +p +ss +p, 
    'tw': d +d +d +ss +d +p,
    'sw': [
        [d +p +d +p +ss +p +p +d +ss +p +d +d +p], 
        [d +p +p +p +ss +d +d +d +ss +d +d +d +ss +d +p +d], 
        [d +p +p +p +ss +d +d +d +ss +d +p +p +d] 

    ], 
    'lw': [
        [d +ss +p +d +ss +d +p +p +p +ss +p +d +p +p +ss +p],
        [p +p +p +ss +d +ss +p +d +ss +d +p +ss +d +p +p], 
        [p +d +d +ss +p +p +ss +d +p +ss +d +p +p +ss +d +d +d +ss +p +d +d] 
    ],
    'k': d +d +d +p +p 
};

stroke.innerHTML = msg.fw + s + b + msg.sw[0] + bc + sb + 0 + sbc + bc + s + msg.tw + s + msg.fw + s + b + msg.lw[0] + bc + sb + 0 + sbc + bc + s + s + msg.k + msg.k;

var c = 3
    var count = setInterval(function () {
    if (c == 2) clearInterval(count)
    timer.innerHTML = c;
    c--;
},1000)

var i = 0;

    setInterval(function () {
        if (i == 3) {
            i = 0;
        }
        stroke.innerHTML = msg.fw + s + b + msg.sw[i] + bc + sb + (i + 1) + sbc + bc + s + msg.tw + s + msg.fw + s + b + msg.lw[i] + bc + sb + (i + 1) + sbc + bc + s + s + msg.k + msg.k;
        i++;
    }, 3000)

//todo: to mark first stroke
