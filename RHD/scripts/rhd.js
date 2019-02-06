function cardClass(stem){$('.card').toggleClass(stem+'down')};

function bgColour(element,hex){
  document.getElementById(element).style.backgroundColor=hex;
};

function openCard(trigger){
  if(trigger!=currentCard){
    if(trigger!='gallery'){
      if(currentCard=='gallery'){cardClass(trigger)}
      else{setTimeout(function(){cardClass(trigger)},450)}};
    cardClass(currentCard);
    bgColour((trigger+'bar'),'#DDDDDD');
    bgColour((currentCard+'bar'),'#FFFFFF');
    currentCard=trigger;
  }
};

function currentCheck(hovbarIcon){
  if (((hovbarIcon.getAttribute('id')).slice(0,-3))!=currentCard){
    return 'True';
  }
};

$('#hovbar>div').hover(function(){
  if (currentCheck(this)){bgColour((this.getAttribute('id')),'#EEEEEE')}
  }, function(){
  if (currentCheck(this)){bgColour((this.getAttribute('id')),'#FFFFFF')}
});

var currentCard='gallery';

setTimeout((function(){openCard('about')}),500);

$('#hovbar').mouseover();

/*setTimeout((function(){$('#hovbar').mouseenter()}),1000);*/
