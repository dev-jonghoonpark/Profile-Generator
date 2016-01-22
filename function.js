//https://flatuicolors.com/
const color1 = '#1abc9c';
const color2 = '#2ecc71';
const color3 = '#3498db';
const color4 = '#9b59b6';
const color5 = '#34495e';
const color6 = '#f1c40f';
const color7 = '#e67e22';
const color8 = '#e74c3c';
const color9 = '#bdc3c7';
const color10 = '#95a5a6';

window.onload = function(){
	var colorElements = document.getElementsByClassName('color');

	for(var i = 0; i < colorElements.length; i++){
		var temp = colorElements[i].id;
		colorElements[i].addEventListener('click',function(){
			colorSelect(this.id);
		});
	}
}

function colorSelect(id){
	var profile = document.getElementById("profile");
	
	switch(id){
		case "color1":
			profile.style.backgroundColor = color1;
			break;	
		case "color2":
			profile.style.backgroundColor = color2;
			break;
		case "color3":
			profile.style.backgroundColor = color3;
			break;
		case "color4":
			profile.style.backgroundColor = color4;
			break;
		case "color5":
			profile.style.backgroundColor = color5;
			break;
		case "color6":
			profile.style.backgroundColor = color6;
			break;
		case "color7":
			profile.style.backgroundColor = color7;
			break;
		case "color8":
			profile.style.backgroundColor = color8;
			break;
		case "color9":
			profile.style.backgroundColor = color9;
			break;
		case "color10":
			profile.style.backgroundColor = color10;
			break;
		default:
			console.log(id);
	}
}

function onKeyUp(){
	var text = document.getElementById("text");
	var inputText = document.getElementById("input_text");

	var value = inputText.value;
	//console.log(value);
	
	if(value==""){
		text.style.visibility = "hidden";
	}else{
		text.style.visibility = "visible";
		text.innerHTML = value.charAt(0)+value.charAt(1);		
	}
}

function down(){
	var profile = document.getElementById("profile");
	
	html2canvas(profile, {
		onrendered: function(canvas) {
		    var link = document.createElement("a");
			link.download = 'profile.png';
			link.href = canvas.toDataURL();
			link.click();
		
			//document.body.appendChild(canvas);
		},
	})
}