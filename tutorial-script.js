function tutorial(){
    var cards = document.querySelectorAll('#card');
    for(var i=0; i<cards.length; i++){
        cards[i].addEventListener("click", function() {
            var flippedCards = document.querySelectorAll('.flipped');
            if(flippedCards.length == 2){
                flippedCards[0].className = flippedCards[1].className = 'unflipped';
            }
            this.className = "flipped";
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
}
window.onload = tutorial;