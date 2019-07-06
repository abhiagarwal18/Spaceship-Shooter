alert("Game Begins !");
$(document).ready(function(){
    var spaceship = $("#spaceship");
    var bullet = $("#bullet");
    var target = $("#target");
    var KeyLeft =37;
    var KeyTop =38;
    var KeyRight = 39;
    var KeyDown =40;
    var SpaceshipSpeed = 10;
    var spaceBar = 32;
    let bulletState= "available";
    let score = $("#score");
    spaceship.css({
        position :"absolute",
        top: 50,
        left : 10

    })
    bullet.css({
        position:"absolute",
        display :"none"
    })
    target.css({
        position: "absolute",
        top:0,
        right: 10
    })

    var score= 0;
    var moveUp=false;
    var moveDown=false;
    var moveLeft=false;
    var moveRight=false;
    $(document).on("keydown",function(e){
		e.preventDefault();
		if (e.keyCode == keyLeft){
			moveLeft=true
		}
		if (e.keyCode == keyTop){
			moveUp=true
		
		}
		if (e.keyCode == keyRight){
			moveRight=true
		
		}
		if (e.keyCode == keyDown){
			moveDown=true
		
		}
		if(e.keyCode==spaceBar){
			spaceClicked=true
            }
        })
    $(document).on("keyup",function(e){
    
        e.preventDefault();
        if(e.keyCode==keyLeft){
            moveLeft= true
        }
        if (e.keyCode == keyTop){
			moveUp=false
		
		}
		if (e.keyCode == keyRight){
			moveRight=false
		
		}
		if (e.keyCode == keyDown){
			moveDown=false
		
		}
		if(e.keyCode==spaceBar){
			spaceClicked=false
		}
		function move(){
		
            if(spaceship.position().left >250)
            {
                moveRight = false
            }
            if (spaceship.position().left<0)
            {
                moveLeft=false
            }
            if (spaceship.position().top>500)
            {
                moveDown=false
            }
            if (spaceship.position().top<0)
            {
                moveUp=false
            }
    
            if(moveLeft)
            {
                spaceship.css({
                    left:spaceship.position().left-	spaceshipSpeed+"px"		})
            }
            if(moveRight)
            {
                spaceship.css({
                    left:spaceship.position().left+	spaceshipSpeed+"px"		})
            }
            if(moveDown)
            {
                spaceship.css({
                    top:spaceship.position().top+	spaceshipSpeed+"px"		})
            }
            if(moveUp)
            {
                spaceship.css({
                    top:spaceship.position().top-	spaceshipSpeed+"px"		})
            }
            if(spaceClicked){
            if(bulletState=="available")
            {
                bulletState = "unavailable"
                bullet.css({
                    display:"block",
                    left:spaceship.position().left+50+"px",
                    top:spaceship.position().top+50+"px"
                }).animate({left:1500}, 1000,function(){
                    bulletState= "available"
                })
            }}
    
            
            }



    })
    
        






    })