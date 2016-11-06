
var classes = {
    paddings: ['font-1','font-2','font-3','font-4','font-5','font-6'],
    text: ['My clothes', 'My hair', 'My flowers', "My pets", "My favorite games","My job"],
    colors: ['yellow', 'blue', 'purpule', 'red', 'lightgreeen','pink']
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
    }


function setColor (event) {   
        debugger;     
        //var current = random();
        var elem = event.target
        console.log(elem.className)

        
        var currentClass = document.querySelectorAll("." + elem.className)
        console.log(currentClass)
        for (var i = 0; i < currentClass.length; i++) {
            currentClass[i].style.color = 
        }
      
        
    }

    main.addEventListener('click', setColor);

