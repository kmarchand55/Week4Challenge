
var questions = [ {q: "Which of the following is not a Javascript data type? ",
                    b1: "Numeric",
                    b2: "String",
                    b3: "Quantum",
                    b4: "Boolean",
                    bc1: false,
                    bc2: false,
                    bc3: true,
                    bc4: false
                },
                    {q: "What is Javascript commonly used for?",
                    b1: "Creating dynamic web pages",
                    b2: "Creating Windows desktop applications",
                    b3: "Creating Word documents",
                    b4: "Any of the above"}
                    ]
var isAnswered = false;

var button1 = "b1E1"
var button2 = "b1E2"
var button3 = "b1E3"
var button4 = "b1E4"
var body = document.body

for (i=0;i<questions.length;i++){

var h1E1 = document.createElement('h1')
h1E1.textContent=questions[0].q
body.appendChild(h1E1)

var button1=document.createElement('button')
button1.textContent=questions[0].b1
body.appendChild(button1)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button2=document.createElement('button')
button2.textContent=questions[0].b2
body.appendChild(button2)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button3=document.createElement('button')
button3.textContent=questions[0].b3
body.appendChild(button3)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button4=document.createElement('button')
button4.textContent=questions[0].b4
body.appendChild(button4)

var newNode = document.createElement('p');
body.appendChild(newNode)

button1.addEventListener('click',alertWrong,true);                                            
button2.addEventListener('click',alertWrong, true);
button3.addEventListener('click',alertOK, true);
button4.addEventListener('click',alertWrong,true);



function alertOK(){
var newNode = document.createElement('p');
newNode.textContent="Right"
body.appendChild(newNode)
body.removeChild(button1)
body.removeChild(button2)
body.removeChild(button3)
body.removeChild(button4)
return;
}

function alertWrong(){
    var newNode = document.createElement('p');
    newNode.textContent="Wrong"
    body.appendChild(newNode);
    body.removeChild(button1)
    body.removeChild(button2)
    body.removeChild(button3)
    body.removeChild(button4)
    return;
    }


}
