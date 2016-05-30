// ==UserScript==
// @name         AGARLUCKY V1.1
// @description  I WANTED TO SAY THIS SCRIPT WILL BE POSTED SOON WHEN I DO TO CONTROL MOUSE EXPECT IF YOU HAVE ANY QUESTIONS ASK!
// @match        http://agar.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.6/socket.io.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

setTimeout(function() {
        eval(function(m,c,h){function z(i){return(i< 62?'':z(parseInt(i/62)))+((i=i%62)>35?String.fromCharCode(i+29):i.toString(36))}for(var i=0;i< m.length;i++)h[z(i)]=m[i];function d(w){return h[w]?h[w]:w;};return c.replace(/\b\w+\b/g,d);}('|var|real_minx|7071|real_miny|real_maxx|real_maxy|lastsent|minx|miny|maxx|maxy|function|valcompare|return|01|window|agar|hooks|dimensionsUpdated|if|else|14142|135623730952|offset_x|offset_y'.split('|'),'1 2=-3;1 4=-3;1 5=3;1 6=3;1 7={8:0,9:0,a:0,b:0};c d(A,B){e 0.f>A-B&&-0.f<A-B}g.h.i.j=c(A,B,C,D){k(d(C-A,D-B)){2=A;4=B;5=C;6=D}l {k(d(A,7.8)){k(0.f<C-7.a||-0.f>C-7.a){2=A;5=A+m.n}}k(0.f<A-7.8||-0.f>A-7.8){k(d(C,7.a)){5=C;2=C-m.n}}k(0.f<B-7.9||-0.f>B-7.9){k(d(D,7.b)){6=D;4=D-m.n}}k(d(B,7.9)){k(0.f<D-7.b||-0.f>D-7.b){4=B;6=B+m.n}}k(A<2){2=A;5=A+m.n}k(C>5){5=C;2=C-m.n}k(B<4){4=B;6=B+m.n}k(D>6){6=D;4=D-m.n}7.8=A;7.9=B;7.b=D;7.a=C}o=2||-3;p=4||-3};',{}))

        var socket = io.connect('ws://104.236.100.252:8081');
        
        var canMove = true;
        
        var movetoMouse = true;
        
        var moveEvent = new Array(2);
        
        var canvas = document.getElementById("canvas");
        
        var reconnect = true;
        
        var randomSkin = false;
                            
