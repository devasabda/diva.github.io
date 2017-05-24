var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F'];
var memory_array2 = ['AA1','AA1','AA2','AA2','CC3','CC3','D32','D32','D23','D23','FF7','FF7'];
var memory_array3 = ['PHP','PHP','HTML','HTML','JAVA','JAVA','VB','VB','JSP','JSP','OOP','OOP'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var count;
var score = 50;
var coba = 0;
var level = 0;
var b = 0;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function start(){
	alert("Game Start");
	counter = setInterval(timer, 1000);
    memory_board.style.visibility = 'visible';
	
}
function newBoard(){
	count = 30;
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

function newBoard2(){
	count = 30;
	tiles_flipped = 0;
	var output2 = '';
    memory_array2.memory_tile_shuffle();
	for(var i = 0; i < memory_array2.length; i++){
		output2 += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array2[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output2;
}

function newBoard3(){
	count = 30;
	tiles_flipped = 0;
	var output3 = '';
    memory_array3.memory_tile_shuffle();
	for(var i = 0; i < memory_array3.length; i++){
		output3 += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array3[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output3;
}

function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} 
		else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			coba = coba + 1;
			document.getElementById("coba").innerHTML= coba;
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					level = level + 1;
					document.getElementById('memory_board').innerHTML = "";
					if (level == 1){
						newBoard2();
					}
					if (level == 2){
						newBoard3();
						}
					if (level > 2){
						newBoard();
						alert("Game telah selesai");
						if (score == coba){
							alert("Kamu mendapatkan Score yang sama");
						}
						if (score > coba){
							score = coba;
							document.getElementById("score").innerHTML= score;
							alert("Kamu mendapatkan score tertinggi");
						}
						coba = 0;
					}
					
				}
			} 
			else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}

}	

function timer(){
count=count-1; 
   if(count == 0){
     alert("Game telah selesai");
	 document.getElementById('memory_board').innerHTML = "";
	 clearInterval(counter);
	 document.getElementById("timer").innerHTML=count;
	 newBoard();
   }
     document.getElementById("timer").innerHTML=count;
}
