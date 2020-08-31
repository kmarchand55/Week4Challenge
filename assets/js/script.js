 
var questions = [ {q: "Which of the following is not a Javascript data type? ",
                    b1: "Numeric",
                    b2: "String",
                    b3: "Quantum",
                    b4: "Boolean",
                  bc1: "wrong",
                  bc2: "wrong",
                  bc3: "correct",
                  bc4: "wrong"}
                  
                  
                ,
                    {q: "What is Javascript commonly used for?",
                    b1: "Creating dynamic web pages",
                    b2: "Creating Windows desktop applications",
                    b3: "Creating Word documents",
                    b4: "Any of the above",
                    bc1: "correct",
                    bc2: "wrong",
                    bc3: "wrong",
                    bc4: "wrong"}
                    ]
var button1 = "b1E1"
var button2 = "b1E2"
var button3 = "b1E3"
var button4 = "b1E4"
var body = document.body
var i = 0
console.log(questions[1].bc1)

var h1E1 = document.createElement('h1')
h1E1.textContent=questions[1].q
body.appendChild(h1E1)
console.log(questions[1].bc1)

var button1=document.createElement('button')
button1.textContent=questions[1].b1
body.appendChild(button1)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button2=document.createElement('button')
button2.textContent=questions[1].b2
body.appendChild(button2)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button3=document.createElement('button')
button3.textContent=questions[1].b3
body.appendChild(button3)

var newNode = document.createElement('p');
body.appendChild(newNode)

var button4=document.createElement('button')
button4.textContent=questions[1].b4
body.appendChild(button4)

var newNode = document.createElement('p');
body.appendChild(newNode)

button1.addEventListener('click',alert("Correct"));
                
button2.addEventListener('click',checkanswer());
button3.addEventListener('click',checkanswer());
button4.addEventListener('click',checkanswer());




//console.log(questions[0].bc1)
function checkanswer(){
    if (questions[1].bc1 == "correct")
    {alertOK()}
   else
   {alertWrong()}
   if (questions[1].bc2 == "correct")
    {alertOK()}
   else
   {alertWrong()}
   if (questions[1].bc3 == "correct")
    {alertOK()}
   else
   {alertWrong()}
   if (questions[1].bc4 == "correct")
    {alertOK()}
   else
   {alertWrong()}
    //else if (questions[0].bc2 == "correct")
   // {alertOK()}
   // else if (questions[0].bc3 == "correct")
   // {alertOK()}
   // else if (questions[0].bc4 == "correct")
   // {alertOK()}
   // else
   // {alertWrong()}
   
       
function alertOK(){
    var newNode = document.createElement('p');
    newNode.textContent="Right"
    body.appendChild(newNode)
    console.log(newNode.textContent)
    //body.removeChild(button1)
    //body.removeChild(button2)
    //body.removeChild(button3)
    //body.removeChild(button4)
    }
    
    function alertWrong(){
        var newNode = document.createElement('p');
        newNode.textContent="Wrong"
        body.appendChild(newNode);
        //body.removeChild(button1)
        //body.removeChild(button2)
        //body.removeChild(button3)
        //body.removeChild(button4)
           }

           
            }
    

        