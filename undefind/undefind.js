
var classes = {
    paddings: ['font-1','font-2','font-3','font-4','font-5','font-6'],
    text: ['My clothes', 'My hair', 'My flowers', "My pets", "My favorite games","My job"],
    colors: ['yellow', 'blue', 'purple', 'red', 'green','pink', 'orange']
}

for ( var i = 0; i < 40; i++) {
    var div  = document.createElement('div')
    var spanElem = document.createElement('span');
    function random () {
        return Math.floor(Math.random() * (6));
    }

    spanElem.className = (classes.paddings[random()] + ' hide-color');
    spanElem.innerHTML = classes.text[random()];

    for (var y = 0; y < classes.text.length; y++) {
        if (spanElem.innerHTML == classes.text[y]) {
            spanElem.style.color = classes.colors[y];
        }
    }
     main.appendChild(spanElem)
    }


function setColor (event) {   
        var current = random();
        var elem = event.target
        var text = elem.innerHTML 

        var elements = document.getElementsByTagName('span');

        for (var x = 0; x < elements.length; x++) {
            if (elements[x].innerHTML == text)
            elements[x].className = elem.classList[0];
        }
    }

    main.addEventListener('click', setColor);

