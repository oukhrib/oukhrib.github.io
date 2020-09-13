var Scr = document.getElementById("Screen");
var Obj = document.getElementById("Obj");
var Err = document.createElement("img");
var War = document.createElement("img");
var points = document.getElementById("Points");var Pts = 0;
var Errors = document.getElementById("Errors");var Errs = 0;
var Warnings = document.getElementById("Warnings");var Wars = 0;
Err.style.bottom = "49px";
Err.style.right = "0px";
Err.style.transition = "0.5s";
Err.setAttribute("src","ER.png");
Scr.appendChild(Err);
War.style.bottom = "49px";
War.style.right = "0px";
War.style.transition = "0.5s";
War.setAttribute("src","WR.png");
Scr.appendChild(War);
var isLife = 1;
var canJump = true;
var canLeft = true;
var canRight = true;
var left = 50;
var objSp = 50;
var Actions = function(){
	var imgs = ["1.png","2.png","3.png","2.png"];
	this.runing = function(mode){
		var ErrRet = 0;
		var ErrMove = 0;
		var ErrSp = 15;
		var WarRet = 0;
		var WarMove = 0;
		var WarSp = 25;
		var i = 0;
		var moving = setInterval(function(){
			Pts++;
			points.innerHTML = Pts + " : Points";
			Obj.setAttribute("src",imgs[i]);
			Err.style.transform = "rotate(" + ErrRet + "deg)";
			Err.style.right = ErrMove + "px";
			ErrRet-=ErrSp;
			ErrMove+=ErrSp;
			
			War.style.transform = "rotate(" + WarRet + "deg)";
			War.style.right = WarMove + "px";
			WarRet-=WarSp;
			WarMove+=WarSp;
			Scr.style.backgroundPositionX = -Pts + "px";
			if(isLife == 1){
				i++;
				if(i>3)i=0;
			}else if (isLife == 0){
				Obj.setAttribute("src",imgs[1]);
			}
			
			//console.log(Err.offsetLeft , ", ", Obj.offsetLeft );
			if((Err.offsetLeft <= Obj.offsetLeft + Obj.width-30) 
			   && (Err.offsetLeft + Err.width >= Obj.offsetLeft+30) 
			   && (Err.offsetTop <= Obj.offsetTop + Obj.height-40)){
				if(Obj.style.filter != "hue-rotate(150deg)"){
				   	Errors.innerHTML = ++Errs + " : Errors";
					Obj.style.filter = "hue-rotate(150deg)"
					Err.style.transition = "unset";
					ErrMove-=500;
					Err.style.transition = "0.5s";
					Message(1);
				}
				setTimeout(function(){
					Obj.style.filter = "hue-rotate(0deg)";
				},5000)
				
			}
			
			if((War.offsetLeft <= Obj.offsetLeft + Obj.width-30) 
			   && (War.offsetLeft + War.width >= Obj.offsetLeft+30) 
			   && (War.offsetTop <= Obj.offsetTop + Obj.height-40)){
				if(Obj.style.filter != "hue-rotate(180deg)"){
				   	Warnings.innerHTML = ++Wars + " : Warnings";
					Obj.style.filter = "hue-rotate(180deg)";
					War.style.transition = "unset";
					WarMove-=500;
					War.style.transition = "0.5s";
					Message(2);
				}
				setTimeout(function(){
					Obj.style.filter = "hue-rotate(0deg)";
				},5000)
				
			}
			
			if(ErrMove-150 > window.innerWidth){
				Err.style.transition = "unset";
				ErrMove = - Math.random() * 1000;
			}
			if(WarMove-150 > window.innerWidth){
				War.style.transition = "unset";
				WarMove = - Math.random() * 1500;
			}
			
		},100);
		if(!mode){
			clearInterval(moving);
		}
	}
	this.Jump = function(){
		isLife = 0;
		canLeft=false;
		canRight=false;
		canJump = false;
		var jumping = true;
		var top = 46;
		var sp = 15;
		var up = setInterval(function(){
			Obj.style.bottom = top + "px";
			if(jumping){top+=sp;}
			else top+=sp;
			if(top>200)jumping = false;
			if(top<46){
				isLife = true;
				canJump = true;
				canLeft=true;
				canRight=true;
				objSp=50;
				clearInterval(up);
			}
			sp--;
		},objSp);
	}
	
}
var act = new Actions();
act.runing(true);

document.addEventListener('click',function(){
    if(canJump)act.Jump();
});

document.onkeydown = function(e) {

    e = e || window.event;
	if (e.keyCode == '37') {
		//left
		if(canLeft){
			isLife = 0;
			Obj.style.left = left-=3;
		}
    }
    if (e.keyCode == '38') {
		//up
		if(canJump)act.Jump();
    }
	if (e.keyCode == '39') {
		//right
		if(canRight){
			Obj.style.left = left+=5;
		}
		
    }
	if (e.keyCode == '40') {
		if(!isLife)objSp-=10;
		
    }
}
document.onkeyup = function(e) {
	e = e || window.event;
	if (e.keyCode == '37') {
		//left
		if(canJump)isLife = 1;
			
    }
}
function Message(type){
	var M = document.getElementById("Message");
	M.style.opacity ="1";
	if(type==0){
		M.innerHTML = "Welcome To Developer Game :)";
		M.style.backgroundColor = "#03A9F4";
	}
	if(type==1){
		M.innerHTML = "Error :(";
		M.style.backgroundColor = "#F44433";
	}
	if(type==2){
		M.innerHTML = "Warnong :/";
		M.style.backgroundColor = "#FF9900";
	}
	setTimeout(function(){M.style.opacity ="0";},3000);
}
Message(0);
function hack(){
	console.log("This Game is Hacked");
	setInterval(function(){
    if((Err.offsetLeft < Obj.offsetLeft + Obj.width + 90 && Err.offsetLeft + Err.width >= Obj.offsetLeft+200)
 || (War.offsetLeft < Obj.offsetLeft + Obj.width + 200 && War.offsetLeft + War.width >= Obj.offsetLeft+300) ){
		
        if(canJump){
			act.Jump();
			console.log("WOW");
		}
    }
},50);
}
