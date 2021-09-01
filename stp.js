var data = {
    'stone' : document.getElementById('stone'),
    'paper' : document.getElementById('paper'),
    'scissor':document.getElementById('scissor')
}



var stone1 = document.createElement('img');
var paper1 = document.createElement('img');
var scissor1 = document.createElement('img');

stone1.setAttribute('id','stone1');
paper1.setAttribute('id','paper1');
scissor1.setAttribute('id','scissor1');

var human;

stone1.src = './pic/stone.png';
paper1.src = "./pic/paper.png";
scissor1.src = "./pic/scissor.jpg";

var sound1 = document.getElementById('sound1');
var sound2 = document.getElementById('sound2');
var sound3 = document.getElementById('sound3');


function StonePaperScissor(mychoice){
     
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
   
    randomNumber = Math.floor(Math.random()*4);
    
    human = mychoice.id ;
    var humanchoice = data[human]  ;
    


    if( randomNumber === 1){
        document.getElementById('Container-Image').appendChild(humanchoice); 
        document.getElementById('Container-Image').appendChild(stone1);
    }
    else if( randomNumber === 2){
    document.getElementById('Container-Image').appendChild(humanchoice); 
     document.getElementById('Container-Image').appendChild(paper1);
    }
    else{
    document.getElementById('Container-Image').appendChild(humanchoice);
     document.getElementById('Container-Image').appendChild(scissor1);
    }




    if(randomNumber === 1 && human === 'paper' || randomNumber === 2 && human === 'scissor' || randomNumber === 3 && human === 'stone'||randomNumber === 0 && human === 'stone'){
    sound1.play();   
    var yourScore1 = document.getElementById('yourScore1');
    var yourScore2 = yourScore1.textContent;
    yourScore1.innerText = parseFloat(  yourScore2) + 1  ;
    ScoreEnd();
    }
    else if(randomNumber === 1 && human === 'scissor' || randomNumber === 3 && human === 'paper' || randomNumber === 2 && human === 'stone'  || randomNumber === 0 && human === 'paper'){
    sound2.play();
    var  myScore1 = document.getElementById('myScore1');
    var myScore2 = myScore1.textContent;
    myScore1.innerText = parseFloat(myScore2)+1;   
    ScoreEnd();
    }
    else if(randomNumber === 1 && human === 'stone' || randomNumber === 3 && human === 'scissor' || randomNumber === 2 && human === 'paper'  || randomNumber === 0 && human === 'scissor'){
    sound3.play();
    }
    
}

function nextBtn(){ 
    sound3.play();
    if(human === 'stone'){ 
        document.getElementById('stone').remove();
    }
     if(human === 'paper'){ 
        document.getElementById('paper').remove();
    }
  
     if(human === 'scissor'){ 
        document.getElementById('scissor').remove();
    }
    if(randomNumber === 1){
        document.getElementById('stone1').remove();
    }
      if(randomNumber === 2){
        document.getElementById('paper1').remove();
    }
     if(randomNumber === 3){
        document.getElementById('scissor1').remove();
    }
     if(randomNumber === 0){
        document.getElementById('scissor1').remove();
    }
    document.getElementById('Container-Image').appendChild(data['stone'])
    document.getElementById('Container-Image').appendChild(data['paper'])
    document.getElementById('Container-Image').appendChild(data['scissor'])
}

  


function ScoreEnd(){
    
    if(myScore1.innerText === '3' ){
        
        document.getElementById('Container-Image').remove();
        document.getElementById('tableScore').remove();  
        document.getElementById('Next').remove();
        document.getElementById('text').remove();
        
        document.getElementById('Result').innerText = 'YOU LOSE';
       
        var refresh = document.createElement('button');
        refresh.innerHTML = 'Try Again'
        
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(refresh);
        }
       
       else if(yourScore1.innerText === '3' ){
       document.getElementById('Container-Image').remove();
       document.getElementById('tableScore').remove();  
       document.getElementById('Result').innerText = 'YOU WON';
       document.getElementById('Next').remove();
       document.getElementById('text').remove();
       
       var refresh = document.createElement('button');
       refresh.innerHTML = 'Play Again'
       
       var body = document.getElementsByTagName('body')[0];
       body.appendChild(refresh);
       }
       
       refresh.addEventListener('click',function(){
       location.reload();
       
       
    });
}