// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArray = [];
  for (let i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  let i = 0;
  let newArray = [];
  while (i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}


function increment(num){
 num++;
 
}

function iLoveTheBeatles(num){
  let newArray = [];
  do{
    ["I love the Beatles!", ...newArray];
    num++;
  } while (increment(num) < 15)
  return newArray;
}