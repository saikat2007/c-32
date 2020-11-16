class Divisions {
     constructor{X,y,w,h} {
         var options = {

            isStatic:true 
            


         }
         this.body = Bodies.rectangle(x,y,w,h,options);
         this.w = w;
         this.w = w;
         world.add{world,this.body};
        }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("white");
            rect(pos.x,pos.y,this.w,this.h);
        }
    };
    
    for (var j = 0; j < particles.length; j++){

        particles[j].display();
    }
    for(var k = 0; k < display.length;k++){

        divisions[k].display();
    }
    
