var button1 = "b1E1"
var button2 = "b1E2"
var button3 = "b1E3"
var body = document.body
var h1E1 = document.createElement('h1')
h1E1.textContent="Which of the following is not a Javascript data type?"
body.appendChild(h1E1)

var button1=document.createElement('button')
button1.textContent="String"
body.appendChild(button1)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button2=document.createElement('button')
button2.textContent="Numeric"
body.appendChild(button2)

var newNode = document.createElement('p');
body.appendChild(newNode)

var b1E3=document.createElement('button')
b1E3.textContent="Quantum"
body.appendChild(b1E3)

var newNode = document.createElement('p');
body.appendChild(newNode)

var b1E4=document.createElement('button')
b1E4.textContent="Boolean"
body.appendChild(b1E4)

var newNode = document.createElement('p');
body.appendChild(newNode)

button1.addEventListener('click',alertWrong,false);
button2.addEventListener('click',alertWrong,false);
b1E3.addEventListener('click', alertOK, false);
b1E4.addEventListener('click',alertWrong,false)

function alertOK(){
var newNode = document.createElement('p');
newNode.textContent="Right"
body.appendChild(newNode)
}

function alertWrong(){
    var newNode = document.createElement('p');
    newNode.textContent="Wrong"
    body.appendChild(newNode)
    }
