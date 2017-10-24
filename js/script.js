const chess = document.getElementById("chess");
var context = chess.getContext('2d');
var me = true; 	// 預設黑子

let logo = new Image();
logo.src = "images/logo.png";
logo.onload = function(){
//	context.drawImage(logo,0,0,450,450);
	drawChessBoard();

}

var chessBoard = [];
 for(let i =0;i<15;i++){
 	chessBoard[i] = [];
 	for(let j = 0;j < 15;j++){
 		chessBoard[i][j] = 0;
 	}
 }


// 畫出棋盤
let drawChessBoard = function(){
	for(let i =0;i<15;i++){
		context.moveTo(15 + i*30 ,15);
		context.lineTo(15 + i*30,435);
		context.stroke();	
		context.moveTo(15,15 + i*30);
		context.lineTo(435,15 + i*30);
		context.stroke();
	}
}

//設置棋子的樣式	
let oneStep = function(i,j,me) {
	context.beginPath();
	context.arc(15 + i*30 ,15 + j*30 ,13,0,2 * Math.PI);
	context.closePath();
	let gradient = context.createRadialGradient(15 + i*30 +2,15 + j*30 - 2,13 ,15 + i*30 +2,15 + j*30 - 2,0);
	if(me){
		gradient.addColorStop(0,"#0A0A0A");
		gradient.addColorStop(1,"#636766");
	}else{
		gradient.addColorStop(0,"#D1D1D1");
		gradient.addColorStop(1,"#F9F9F9");
	}
	context.fillStyle = gradient;
	context.fill();
}

//棋子版面的onclick事件
  chess.onclick = function(e){
	let x = e.offsetX;
	let y = e.offsetY;
	let i = Math.floor(x/30);
	let j = Math.floor(y/30);

	if(chessBoard[i][j] == 0 ){	
		oneStep(i , j, me);
		if(me){
			chessBoard[i][j] = 1;
		}else{
			chessBoard[i][j] = 2;
		}
		me = !me;	
	}
}