function drawTriangle(lines,symbol) {
    for(var i = 1; i <= lines; i++) {  
	 var col = 2 * i - 1;
	 var str="";
	 for(var j = 0; j < col; j++){		
		 str += symbol;		
	 }
	console.log(str)
}
}
drawTriangle(5,'*')