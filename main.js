const play=document.querySelector('button.play');
play.addEventListener('click',start);

function start(event){
  const finalResult=document.querySelector('.result')
let playScore=0;
let compScore=0;
let round=0;
let RoundNumber=Number(document.querySelector('input#Number').value);
  const option=document.querySelectorAll('button.cards');
  option.forEach(card=>{
    card.addEventListener('click',event=>{
      roundPlayed=playRound(event.target.id.toLowerCase(),computerSelection());
    if(roundPlayed.search(playScore)>0)playScore++;
    if(roundPlayed.search(compScore)>0)compScore++;
    round++
finalResult.textContent=`Round ${round}\n`+roundPlayed;

if(round>RoundNumber-1){
    if(playScore>compScore){
    finalResult.textContent=`You win\n Score:${playScore}-${compScore}`;
}
else if(playScore<compScore){
  finalResult.textContent=`You loss\n Score:${playScore}-${compScore}`;
}
else{
  finalResult.textContent=`It's a tie!`
}
}
    });
  });
  function playRound(playSelection,computerSelection){
    if(playSelection===computerSelection){
        return `it's tie ${playScore}:${compScore}`;
    }
    else if(((computerSelection==="rock")&&(playSelection==="scissor"))||((computerSelection==="paper")&&(playSelection==="rock"))||((computerSelection==="scissor")&&(playSelection==="rock"))){
        compScore++;
        return `You lose:Computer ${compScore}beats${playScore}Player`; 
    }
    else{
        playScore++;
        return `You win:Player ${playScore}beats${compScore}`;
    }
   
}
function computerSelection(){
  let comp=['rock','paper','scissor'];
  return comp[(Math.floor(Math.random()*comp.length))];
}
}