
var classes = {
    paddings:['font-1','font-2','font-3','font-4','font-5','font-6']
}

for ( var i = 0; i < 40; i++) {
    var div  = document.createElement('div')
    var span = document.createElement('span');
    function random () {
        return Math.floor(Math.random() * (6));
    }
    span.className = classes.paddings[random()]
    span.innerHTML = "My anything";
    main.appendChild(span)
    }