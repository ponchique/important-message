
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

    span.className = classes.paddings[random()]
    span.innerHTML = classes.text[random()];

    for (var y = 0; y < classes.text.length; y++) {
    if (span.innerHTML == classes.text[y]) {
    span.className = classes.colors[y];
      }
    }
     main.appendChild(span)
    }

    



function setColor (event) {   
        var current = random();
        var elem = event.target
        var text = elem.innerHTML
        console.log(elem.className)

        
        var currentClass = document.querySelectorAll("." + elem.className)
        console.log(currentClass)
        for (var i = 0; i < currentClass.length; i++) {
            console.log(elem.innerHTML)
            if (elem.innerHTML == classes.text[0])
            currentClass[i].style.color = classes.colors[0];
            if (elem.innerHTML == classes.text[1])
            currentClass[i].style.color = classes.colors[1];
            if (elem.innerHTML == classes.text[2])
            currentClass[i].style.color = classes.colors[2];
            if (elem.innerHTML == classes.text[3])
            currentClass[i].style.color = classes.colors[3];
            if (elem.innerHTML == classes.text[4])
            currentClass[i].style.color = classes.colors[4];
            if (elem.innerHTML == classes.text[5])
            currentClass[i].style.color = classes.colors[5];
        }
      
        
    }

    main.addEventListener('click', setColor);

