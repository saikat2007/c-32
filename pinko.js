class pinko {

    this.body=Bodies.circle(x,y,this.releaseEvents,option);
    this.color=color(random(0,255), random(0,255),random(0,255));
    world.add(world,this.body);


    function setup(){
        var particles = [];
        var plinkos = [];
        var divisions = [];
        var divisionHeight=300;

            for(var k = 0; k (=width; k = k +80){
                divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
            }

            for (var j =40; j <=width;j=j+50)
            {
                plinkos.push(new plinkos(j,75));
            }
            for (var j =15; j <=width=10;j=j+50)
            {
                plinkos.push(new plinkos(j,175));
            }
        }
    }
    if(frameCount(60===0)){
        particles.push(new particle(random(width/2=10,10,10)));

    }



