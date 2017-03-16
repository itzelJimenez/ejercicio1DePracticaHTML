


function convertirAfarenheit(){
	//return alert("Lala");
	var celsius=document.getElementById('celsius').value

	var farenheit = document.getElementById('farenheit');
	var resultado = celsius*9/5 + 32;
   
 		farenheit.value=resultado;
}

function convertirAcelsius(){
	var celsius=document.getElementById('celsius');
	var farenheit = document.getElementById('farenheit').value;
	var resultado = (farenheit-32) * 5/9;
		celsius.value=resultado;
}
//		farenheit-32*5/1		