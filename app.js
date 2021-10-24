
document.querySelector('.button').addEventListener('click',function(){
var boy_name=document.querySelector('.boyname').value;
var girl_name=document.querySelector('.girlname').value;

var boy_name=boy_name.toLowerCase();
var girl_name= girl_name.toLowerCase();
var combine = boy_name+girl_name;
t=(combine.match(/t/g) || []).length;
r=(combine.match(/r/g) || []).length;
u=(combine.match(/u/g) || []).length;
e=(combine.match(/e/g) || []).length;
l=(combine.match(/l/g) || []).length;
o=(combine.match(/o/g) || []).length;
v=(combine.match(/v/g) || []).length;
e=(combine.match(/e/g) || []).length;

count_right = t+r+u+e;
count_left = l+o+v+e;
if(count_left>10 && count_right<10){
  count_right++;
  count_left=0;
}
else if(count_left<10 && count_right>10){
  count_right=10;
  count_left=0;
}
else if(count_right>10 && count_left>10){
  count_left=0;
  count_right=10;
}

total_per=String(count_right)+String(count_left)+'%';
document.querySelector('.appearone').classList.remove('invisible');
document.querySelector('.per_disp').innerHTML=total_per;
total_per=parseInt(total_per);
if( total_per >= 90){
  document.querySelector('.appeartwo').classList.remove('invisible');

  document.querySelector('.appeartwo').innerHTML= '<p><img class="quoteone" src="give-love.png">You are made for each other. True Love<img class="quoteone" src="give-love.png"></p>';
}
else if(total_per >=80){
  document.querySelector('.appeartwo').classList.remove('invisible');

  document.querySelector('.appeartwo').innerHTML= '<p><img class="quoteone" src="heartred.png">You both are more than friends. Try to hang out with each other.<img class="quoteone" src="heartred.png"></p>';

}
else if(total_per >=60){
  document.querySelector('.appeartwo').classList.remove('invisible');

  document.querySelector('.appeartwo').innerHTML= '<p><img class="quoteone" src="heart.png">Work on relationship. Still Far to go<img class="quoteone" src="heart.png"></p>';

}
else if(total_per >=40){
  document.querySelector('.appeartwo').classList.remove('invisible');

  document.querySelector('.appeartwo').innerHTML= '<p><img class="quoteone" src="heart-attack.png">One sided love. Try to tell them about your feelings<img class="quoteone" src="heart-attack.png"></p>';
}
else {
  document.querySelector('.appeartwo').classList.remove('invisible');

  document.querySelector('.appeartwo').innerHTML= "<p><img class='quoteone' src='broken-heart.png'>Ther's nothing between you. Stop fooling Yourself.<img class='quoteone' src='broken-heart.png'></p>";
}
});
