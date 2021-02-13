function collison(ob1,ob2){

    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2   && ob2.x -ob1.x<ob1.width/2+ob2.width/2
      && ob1.y-ob2.y<ob1.height/2+ob2.height/2   && ob2.y -ob1.y<ob1.height/2+ob2.height/2)
    {
        return true
      }
      else{
        return false
      }
  }
  function bounce(ob,ob2)
  {
    if(ob.x-ob2.x < ob.width/2+ob2.width/2   && ob2.x-ob.x <ob.width/2+ob2.width/2)
    {
    ob.velocityX=ob.velocityX*-1
    ob2.velocityX=ob2.velocityX*-1
    }
    if(ob.y-ob2.y < ob.height/2+ob2.height/2   && ob2.y-ob.y <ob.height/2+ob2.height/2)
    {
    ob.velocityY=ob.velocityY*-1
    ob2.velocityY=ob2.velocityY*-1;}
  }