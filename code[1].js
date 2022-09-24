var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["31e184da-8bc6-4c0a-b78d-94b46eff39b2","223af5bb-25fb-4200-9851-ed0602ca7a6a","58ea3ef1-dc01-4fed-8c48-0870c53649b5","a9df01f6-e42e-4da6-ab19-a1e9049f12f9","c1f919f6-c039-4d0c-82f8-af331540bb11","e20d024f-305e-4b4f-967e-3488b80a03d9","c6ccf4a4-98ed-49b7-969d-23309387d1bb","cd97dcef-19f9-47cf-afa8-85e87db25976","64dbb22b-92f7-4e9c-9305-b89184c0e874"],"propsByKey":{"31e184da-8bc6-4c0a-b78d-94b46eff39b2":{"name":"knife_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hFtvES6NehYvlIVdAMbXo3IorcOC6ueD/category_household_objects/knife_blue.png","frameSize":{"x":92,"y":132},"frameCount":1,"looping":true,"frameDelay":2,"version":"hFtvES6NehYvlIVdAMbXo3IorcOC6ueD","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":132},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hFtvES6NehYvlIVdAMbXo3IorcOC6ueD/category_household_objects/knife_blue.png"},"223af5bb-25fb-4200-9851-ed0602ca7a6a":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":333,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"LCWBhLH6Cj2edWPDH6oIbSkXn2tmrHC_","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":399},"rootRelativePath":"assets/223af5bb-25fb-4200-9851-ed0602ca7a6a.png"},"58ea3ef1-dc01-4fed-8c48-0870c53649b5":{"name":"fruit2","sourceUrl":"assets/api/v1/animation-library/gamelab/xO471iI0IELRmM4VXYoSs6mweRS1Pmuo/category_food/bannana.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"xO471iI0IELRmM4VXYoSs6mweRS1Pmuo","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xO471iI0IELRmM4VXYoSs6mweRS1Pmuo/category_food/bannana.png"},"a9df01f6-e42e-4da6-ab19-a1e9049f12f9":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/zOmWoZPTJJmhzXFse3SE7TVcZPxUy7TE/category_food/orange.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"zOmWoZPTJJmhzXFse3SE7TVcZPxUy7TE","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zOmWoZPTJJmhzXFse3SE7TVcZPxUy7TE/category_food/orange.png"},"c1f919f6-c039-4d0c-82f8-af331540bb11":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/dpIqYf6R4NOtQjnX9K1QG3SgwHSWgbUH/category_food/watermelon.png","frameSize":{"x":387,"y":349},"frameCount":1,"looping":true,"frameDelay":2,"version":"dpIqYf6R4NOtQjnX9K1QG3SgwHSWgbUH","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":349},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dpIqYf6R4NOtQjnX9K1QG3SgwHSWgbUH/category_food/watermelon.png"},"e20d024f-305e-4b4f-967e-3488b80a03d9":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bfxFC6lQDf81xfDtt202eXLh6u.CkcP6/category_fantasy/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"bfxFC6lQDf81xfDtt202eXLh6u.CkcP6","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bfxFC6lQDf81xfDtt202eXLh6u.CkcP6/category_fantasy/pink_monster.png"},"c6ccf4a4-98ed-49b7-969d-23309387d1bb":{"name":"gradient_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3RTQ7JCCwARUka_u91BBU07yebnrpLNZ/category_backgrounds/gradient_02.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"3RTQ7JCCwARUka_u91BBU07yebnrpLNZ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3RTQ7JCCwARUka_u91BBU07yebnrpLNZ/category_backgrounds/gradient_02.png"},"cd97dcef-19f9-47cf-afa8-85e87db25976":{"name":"axe_bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oHI1vskAYfnuPak.OUFHvyuSDRrTsgtH/category_tools/axe_bronze.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"oHI1vskAYfnuPak.OUFHvyuSDRrTsgtH","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oHI1vskAYfnuPak.OUFHvyuSDRrTsgtH/category_tools/axe_bronze.png"},"64dbb22b-92f7-4e9c-9305-b89184c0e874":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"LBlP81tVFOe5pivbH48aq_4zoApgk97p","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// gamestates
var play=1;
var end=0;
var gamestate=play;


//create scene
var scene =createSprite(0,0,400,400);
scene.setAnimation("gradient_02_1");
scene.scale=7;
scene.velocityX = -2;
scene.x=scene.width/2;


//create knife sprite
var knife = createSprite(200,200,20,20);
knife.setAnimation("axe_bronze_1");
knife.scale=0.62;


//create fruit and enemy group
var fruitgroup=createGroup();
var enemygroup=createGroup();


//score
textSize(20);
var score=0;
fill("black");






function draw(){

// make the scene repeat with les than 0
if (scene.x<0) {
scene.x=scene.width/2;}  

  

  
if (gamestate===play){
spawnfruits();
spawnenemy();


if (fruitgroup.isTouching(knife))
{fruitgroup.destroyEach();
score=score+2;
playSound("assets/category_whoosh/heavy_blade_whoosh_3.mp3");
}


if (knife.isTouching(enemygroup)) {
gamestate=end;
knife.destroy();
enemygroup.destroyEach();
fruitgroup.destroyEach();
playSound("assets/category_female_voiceover/game_over_female.mp3");
}
}



else if (gamestate===end) {
fruitgroup.setVelocityXEach(0);
enemygroup.setVelocityXEach(0);

scene.velocityX=0;
fruitgroup.setLifetimeEach(-1);
enemygroup.setLifetimeEach(-1);
   
var gameover=createSprite(200,200,20,20);
gameover.setAnimation("textGameOver_1");
gameover.scale=0.5;

      
}

//make the knife move with x and y position of mouse  
knife.y=World.mouseY;
knife.x=World.mouseX;





drawSprites();


//display score
text("Score: "+score,270, 35);
  
}




function spawnfruits(){
if(World.frameCount%80===0){
var fruit = createSprite(400,200,20,20);
fruit.velocityX=-7;

var rand= randomNumber(1,4);
console.log(rand);

fruit.setAnimation("fruit"+rand);
fruit.scale=0.16;
fruit.y=randomNumber(50,340);


var position=randomNumber(1,2);

if (position===1){
fruit.x=400;
fruit.velocityX=-(7+(score/4));
}

else
if (position===2){
fruit.x=0;
fruit.velocityX=7+(score/4);
}

fruit.lifetime=100;

fruitgroup.add(fruit);

fruit.depth=knife.depth;
knife.depth=knife.depth+1;
}
}


function spawnenemy(){
if( World.frameCount%200===0){
var monster =createSprite(400,200,20,20);
monster.setAnimation("pink_monster_1");
monster.scale=0.20;

monster.y=randomNumber(100,300);
monster.velocityX=-8;
monster.setLifetime=50;

enemygroup.add(monster);

enemygroup.depth=knife.depth;
knife.depth=knife.depth+1;
}
}



    

  
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
