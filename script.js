
function randomiser(){
    var imageSources = ["001-yuan","002-wok","003-vase","004-umbrella","005-traditional-medicine","006-tofu","007-tickets","008-temple","009-tea","010-tea-ceremony","011-skyscrapers","012-silk","013-ship","014-rice","015-remedy","016-bonsai","017-yin-yang","018-paper-lantern","019-panda","020-painting","021-noodles","022-music","023-mask","024-martial-arts","025-lotus","026-lantern","027-terracotta-army","028-kite","029-heron","030-hat","031-great-wall-of-china","032-game","033-flag","034-fashion","035-fan","036-dumpling","037-dragon-1","038-dragon","039-cracker","040-compass","041-coin","042-chinese-knot","043-paifang","044-china-1","045-china","046-carp","047-calligraphy","048-calendar","049-bamboo","050-signs"];
    var counters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var activeCards = document.querySelectorAll('.active > .enabled > #card');
    for(var i=0; i<activeCards.length; i++){
        var cardFaces = activeCards[i].children;
        var frontImage = cardFaces[0].children;
        do{
        var index = Math.round(Math.random()*50);
        } while(index >= activeCards.length/2 || counters[index] == 2);
        counters[index]++;
        frontImage[0].setAttribute("src",imageSources[index] + ".png");
    }
}
function tickTock(){
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var stopper = setInterval(function(){
        seconds++;
        if(seconds == 60){
            minutes++;
            seconds=0;
        }
        if(minutes == 60){
            hours++;
            minutes=0;
        }
        document.getElementById("timer").innerHTML = (hours>9?"":"0") + hours + ":" + (minutes>9?"":"0") + minutes + ":" + (seconds>9?"":"0") + seconds;
    },1000);
    document.getElementById("solve").addEventListener("click",function(){
        clearInterval(stopper);
    });
}
function cardFlipping(){
    document.getElementById("size").addEventListener("change",function(){
        if(this.selectedIndex == 0){
            var tableRows = document.getElementById("grid").rows;
            for(var i=0; i<tableRows.length; i++){ 
                var  tableData = tableRows[i].children;
                for(var j=0; j<tableData.length; j++){
                    if(i>=6)
                        tableData[j].className = 'inactive';
                    else{
                        if(j<6)
                            tableData[j].className = 'active';
                        else
                            tableData[j].className = 'inactive';
                    }
                    var containers =  tableData[j].children;
                    containers[0].style.width = "150px";
                    containers[0].style.height = "150px";
                }
            }
        }
        else if(this.selectedIndex == 1){
            var tableRows = document.getElementById("grid").rows;
            for(var i=0; i<tableRows.length; i++){ 
                var  tableData = tableRows[i].children;
                for(var j=0; j<tableData.length; j++){
                    if(i>=8)
                        tableData[j].className = 'inactive';
                    else{
                        if(j<8)
                            tableData[j].className = 'active';
                        else
                            tableData[j].className = 'inactive';
                    }
                    var containers =  tableData[j].children;
                    containers[0].style.width = "112.5px";
                    containers[0].style.height = "112.5px";
                }
            }
        }
        else{
            var tableRows = document.getElementById("grid").rows;
            for(var i=0; i<tableRows.length; i++){ 
                var  tableData = tableRows[i].children;
                for(var j=0; j<tableData.length; j++){
                    if(i>=10)
                        tableData[j].className = 'inactive';
                    else{
                        if(j<10)
                            tableData[j].className = 'active';
                        else
                            tableData[j].className = 'inactive';
                    }
                    var containers =  tableData[j].children;
                    containers[0].style.width = "90px";
                    containers[0].style.height = "90px";
                }
            }
        }
    });
    document.getElementById("start").addEventListener("click", function() {
        var disabledElements = document.querySelectorAll('.disabled');
        for(var i=0; i<disabledElements.length; i++){
            disabledElements[i].className = 'enabled';
        }
        document.getElementById("size").className = 'disabled';
        this.innerHTML = '<span style="font-weight:bold; font-size:20px; font-family:Tahoma;">Restart</span>';
        this.addEventListener("click", function(){location.reload(true);});
        randomiser();
        tickTock();
    });
    var cards = document.querySelectorAll('#card');
    for(var i=0; i<cards.length; i++){
        cards[i].addEventListener("click", function() {
            var flippedCards = document.querySelectorAll('.flipped');
            if(flippedCards.length == 2){
                flippedCards[0].className = flippedCards[1].className = 'unflipped';
            }
            this.className = "flipped";
            flips++;
            var flippedCards = document.querySelectorAll('.flipped');
            if(flippedCards.length == 2){
                var cardFaces = flippedCards[0].children;
                var frontImageFirst = cardFaces[0].children;
                var imageSourceFirst = frontImageFirst[0].getAttribute("src");
                var cardFaces = flippedCards[1].children;
                var frontImageSecond = cardFaces[0].children;
                var imageSourceSecond = frontImageSecond[0].getAttribute("src");
                if(imageSourceFirst == imageSourceSecond){
                    frontImageFirst[0].className = 'vanish';
                    frontImageSecond[0].className = 'vanish';
                    setTimeout(function(){flippedCards[0].style.display = 'none';},1500);
                    setTimeout(function(){flippedCards[1].style.display = 'none';},1500);
                }
            }
         }
        );
    }
    document.getElementById("solve").addEventListener("click",function(){
        for(var i=0; i<cards.length; i++){
            cards[i].className = 'flipped';
        }
    });
}
window.onload = cardFlipping;