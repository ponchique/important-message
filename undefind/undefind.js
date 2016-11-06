
var classes = {
    paddings: ['font-1','font-2','font-3','font-4','font-5','font-6'],
    text: ['My clothes', 'My hair', 'My flowers', "My pets", "My favorite games","My job"]
}

for ( var i = 0; i < 40; i++) {
    var div  = document.createElement('div')
    var span = document.createElement('span');
    function random () {
        return Math.floor(Math.random() * (6));
    }
    span.className = classes.paddings[random()]
    span.innerHTML = classes.text[random()];
    main.appendChild(span)

    function setColor (event) {
        console.log(event.target)
    }

    main.addEventListener('click', setColor) 
     
    }


