function isTouching(obj1, obj2){
    if(obj1.x - obj2.x <= obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x <= obj2.width/2 + obj1.width/2 
      && obj1.y-obj2.y <=obj2.height/2+obj1.height/2
      && obj2.y-obj1.y <=obj2.height/2+obj1.height/2){
      return true;
    }
    else{
      return false;
    }
  }  
  function bounceOff(param1,param2){
    if( param1.y-param2.y <=param2.height/2+param1.height/2
      &&param2.y-param1.y <=param2.height/2+param1.height/2){
      param1.velocityY=-1*((param1.velocityY));
      param2.velocityY=-1*(param2.velocityY);
    }
    if(param1.x - param2.x <= param2.width/2 + param1.width/2
      && param2.x - param1.x <= param2.width/2 + param1.width/2 ){
        param1.velocityX=-1*(param1.velocityX);
        param2.velocityX=-1*(param2.velocityX);
    }
  
  }
  