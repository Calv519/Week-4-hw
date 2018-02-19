console.log("calvin is connected")




/*3. If the temperature is above 60 degrees Farenheit, the background should be red
4. If the background image is between 30 and 60 degrees Farenheit, the background should be grey 
5. If the background image is below 30 degrees Farenheit, the background should be blue*/



document.querySelector('#convert').addEventListener("click", conv)
document.querySelector('#convert').addEventListener("click", output)


function conv(){
	var result = document.querySelector("#num").value
	console.log(result)
	var deg = (result * 1.8) + 32
	console.log(deg)
	if(deg > 60) {
		document.querySelector("body").style.backgroundColor = "red";
	}
	else if (deg > 30 && deg < 60){
		document.querySelector("body").style.backgroundColor = "gray";
	}
	else{
		document.querySelector("body").style.backgroundColor = "blue";
	}
}

function output(){
	var result = document.querySelector("#num").value
	console.log(result)
	var deg = (result * 1.8) + 32
	document.querySelector('#result').innerHTML = deg + " degrees"
}

