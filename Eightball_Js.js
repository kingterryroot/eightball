let userName = '';

(userName === 'Bryce') ? console.log(`Hello, ${userName}`) : console.log(`Hello!`);

const userQuestion = '';

console.log(`The user asked: ${userQuestion}`);



function eightBall(){
  
  let randomNumber = Math.floor(Math.random() * 8);

 if (randomNumber === 1) {
  document.getElementById('balltext').innerHTML = `Be kind, for everyone you meet is fighting a harder battle.`;
 }else if (randomNumber === 2){
  document.getElementById('balltext').innerHTML = `Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet`;
 }else if (randomNumber === 3){
  document.getElementById('balltext').innerHTML = `We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.`;
 }else if (randomNumber === 4){
  document.getElementById('balltext').innerHTML = `The price good men pay for indifference to public affairs is to be ruled by evil men.`;
 }else if (randomNumber === 5){
  document.getElementById('balltext').innerHTML = `Only the dead have seen the end of war`; 
 }else if (randomNumber === 6){
  document.getElementById('balltext').innerHTML = `Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each.`; 
 }else if (randomNumber === 7){
  document.getElementById('balltext').innerHTML = `The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.`;
 }else if (randomNumber === 8){
  document.getElementById('balltext').innerHTML = `I am the wisest man alive, for I know one thing, and that is that I know nothing.`;
 }else{
  document.getElementById('balltext').innerHTML = `Never discourage anyone...who continually makes progress, no matter how slow.`;
 } 
}