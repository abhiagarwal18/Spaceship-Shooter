alert("game loaded");
$(document).ready(function(){ // simply waits for the whole html to load before it loads the js 
	var spaceship = $("#spaceship");
	var bullet= $("#bullet");
	var target=$("#target");
	let keyLeft= 37;
	let keyTop= 38;
	let keyRight= 39;
	let keyDown = 40;
	let spaceshipSpeed=10;
	let spaceBar= 32;
	let bulletState= "available";
	let score = $("#score");
	
	spaceship.css({
		position:"absolute",
		top:50,
		left: 100,
	})

	bullet.css({
		position:"absolute",
		
		display:"none"
	})      

	target.css({
		position: "absolute",
		top:0,
		right: 10
		
	})

	var points=0;
	let moveLeft= false;
	
	let moveRight= false;
	let moveUp= false;
	let moveDown= false;
	let spaceClicked=false;
	
	
	
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
		if (e.keyCode == keyLeft){
			moveLeft=false
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
		
				 

	})

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
var moveRef=setInterval(move,10)  
var moveObstacleRef= setInterval(moveObstacle,800) // setinterval calls the function by reference theredore () not reqd also time here same as animate() 
								// so that the transition is smooth, else it would have some waiting time

// to make a game of 30 secs max
setTimeout(over,30000);

var pointchecker=setInterval(overlapCheck,10)

function overlapCheck(){
        var d1_offset             = $("#bullet").offset();
        var d1_height             = $("#bullet").outerHeight( true );
        var d1_width              = $("#bullet").outerWidth( true );
        var d1_distance_from_top  = d1_offset.top + d1_height;
        var d1_distance_from_left = d1_offset.left + d1_width;
    
        // Div 2 data
        var d2_offset             = $("#target").offset();
        var d2_height             = $("#target").outerHeight( true );
        var d2_width              = $("#target").outerWidth( true );
        var d2_distance_from_top  = d2_offset.top + d2_height;
        var d2_distance_from_left = d2_offset.left + d2_width;
    
        var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );
    
        // Return whether it IS colliding
        if( ! not_colliding ){
		points++
		document.getElementById("score").innerHTML= points;
    }
    else{return false}
}
    
 
function over(){
	clearInterval(moveObstacleRef)
	clearInterval(moveRef)
	clearInterval(overlapCheck)
	$("#over").css({
		display:"block"
	})
}



function moveObstacle(){
	if($("#target").position().top == 0){
	$("#target").animate({top:500}, 800, function(){
		console.log("Reached");
		
	})}
	else if ($("#target").position().top == 500){
		$("#target").animate({top:0}, 800, function(){
			console.log("Reached");
			
		})	
	}
}

})

