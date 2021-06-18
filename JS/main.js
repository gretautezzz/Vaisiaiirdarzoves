var cards = document.getElementsByClassName("card");
var btn = document.getElementById ("btn")
console.log(cards[0].getAttribute("id"));
console.log(cards[1].getAttribute("id"));

var manoforma = document.forms["input"];

manoforma.addEventListener("submit", function(e) {
    e.preventDefault();
var input = manoforma["input2"].value;
console.log(input);
    for (var i=0; i < cards.length; i++ ){
        var id = cards[i].getAttribute("id");
        console.log(cards[i].getAttribute("id"));
    }
})

