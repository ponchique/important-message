
var classes = {
    paddings: ['font-1','font-2','font-3','font-4','font-5','font-6'],
    text: ['My clothes', 'My hair', 'My flowers', "My pets", "My favorite games","My job"],
    colors: ['yellow', 'blue', 'purple', 'red', 'green','pink', 'orange']
}

for ( var i = 0; i < 40; i++) {
    debugger;
    var div  = document.createElement('div')
    var span = document.createElement('span');
    function random () {
        return Math.floor(Math.random() * (6));
    }

    span.className = (classes.paddings[random()] + ' hide-color');
    span.innerHTML = classes.text[random()];

    for (var y = 0; y < classes.text.length; y++) {
    if (span.innerHTML == classes.text[y]) {
    span.style.color = classes.colors[y];
      }
    }
     main.appendChild(span)
    }


function setColor (event) {   
        var current = random();
        var elem = event.target
        var text = elem.innerHTML
        elem.classList.splice(1,1)
        console.log(elem.classList)
      
        
    }

    main.addEventListener('click', setColor);

