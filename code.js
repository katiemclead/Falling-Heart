/******************************************************
 ***COMMENTING OUT, BECAUSE NOT APPLICABLE TO MY CODE**
 ******************************************************
var clickCounter = 0;
var clock = 0;*/
//Hit the button
onEvent("button1", "mousedown", function(event) {
  //If the game has not started, start it!
  if (getProperty("button1", "text") == "Start") {
    //Make arrows visible, and give them initial positions
    for(var i = 1; i < 6; i++)
    {
      setPosition("arrow"+i, -150*(6-i),getYPosition("arrow"+i));
      showElement("arrow"+i);
      
    }
    
    //Start heart and arrow movement
    setInterval(function() {
      setPosition("heart", 150, getYPosition("heart") + 5);
      arrowMovement();
      arrowCollider();
      floorCollision();
    }, 100);
    setProperty("button1", "text", "Press");
  } 
  //If the game has already started, move heart up by clicking
  else {
    /******************************************************
 ***COMMENTING OUT, BECAUSE NOT APPLICABLE TO MY CODE**
 ******************************************************
    clickCounter = clickCounter + 1;
    if (clickCounter == 1) {
      //do something to wait for a second click
      doubleClickChecker();
    } else {
      //do what I was going to do with a second click
      setProperty("screen1", "background-color", "green");
    }*/
    setPosition("heart", 150, getYPosition("heart") - 30);
  }

});

//This code doesn't do anything important for me, but tells me what to do when the mouse is up.
onEvent("button1", "mouseup", function(event) {
  //console.log("mouse is up");
});

/******************************************************
 ***COMMENTING OUT, BECAUSE NOT APPLICABLE TO MY CODE**
 ******************************************************
function doubleClickChecker() {
  clock = 1;
  var i = setInterval(function() {
    clock = clock + 1;
    if (clock == 11) {
      clickCounter = 0;
      clearInterval(i);
    }
  }, 100);
}
*/

function arrowMovement() {
  for (var i = 1; i < 6; i++) {
    setPosition("arrow"+i, getXPosition("arrow"+i) + 5, getYPosition("arrow"+i));
    if (getXPosition("arrow"+i) > 325) {
      setPosition("arrow"+i, -15, getYPosition("arrow"+i));
    }
  }
}

//collision checker
function arrowCollider() {
  for(var i = 1; i < 6; i++)
  {
    if(getXPosition("arrow"+i)+getProperty("arrow"+i, "width")>=getXPosition("heart")&&getXPosition("arrow"+i)<=getXPosition("heart")+getProperty("heart", "width"))
    {
      if(getYPosition("arrow"+i)+getProperty("arrow"+i, "height")>=getYPosition("heart") && getYPosition("arrow"+i)<=getYPosition("heart")+getProperty("heart","height"))
      {
      losingScreen();
    }
  }
  }}

function floorCollision() {
  if (getYPosition("heart")+getProperty("heart", "height")>=450) {
     setScreen("losingScreen");
  }
}
//losing sequence
function losingScreen()
{
   setScreen("losingScreen");
   
}
