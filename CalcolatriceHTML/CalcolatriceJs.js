	document.getElementById("testo").oninput = function aggiornaTesto () {
		var numeriInArray = testo.value.split(/[+\-*/]/);
		var ultimoCarattere=document.getElementById("testo").value.slice(-1);	
		if(isNaN(ultimoCarattere) || eval(testo.value)===undefined){
			document.getElementById("risultato").innerHTML="";	
		} 
		if(numeriInArray.length>1){
			document.getElementById("risultato").innerHTML = eval(testo.value);								
		} else if(eval(testo.value)===undefined){
			document.getElementById("risultato").innerHTML = "";	
		}
		if(risultato.value==104){
			document.getElementById("criceto").style.display ="block";
			document.getElementById("titolo").innerHTML="Calcolatrice  &#9855";
		}else if(risultato.value!=104){
			document.getElementById("criceto").style.display ="none";
			document.getElementById("titolo").innerHTML="Calcolatrice";
		}
	
	}
	
	
				 																								
			
	function numeroDaBottone(numero){	
	var numeriInArray = testo.value.split(/[+\-*/]/);	

		if(numero=="reset"){
			document.getElementById("testo").value =" ";
			document.getElementById("risultato").innerHTML=" ";
		} else {
			document.getElementById("testo").value = testo.value+numero;
			if(numeriInArray.length>1){
				document.getElementById("risultato").innerHTML = eval(testo.value);			
			}
		}
		if(risultato.value==104){
			document.getElementById("criceto").style.display ="block";
			document.getElementById("titolo").innerHTML="Calcolatrice  &#9855";
		}else if(risultato.value!=104){
			document.getElementById("criceto").style.display ="none";
			document.getElementById("titolo").innerHTML="Calcolatrice";
		}
	}
	
	function resetRisultato(){
		document.getElementById("risultato").innerHTML=" ";			
	}
	

	function validate(evt) {
		var theEvent = evt || window.event;

		if (theEvent.type === "paste") {
			key = event.clipboardData.getData("text/plain");
		} else {

			var key = theEvent.keyCode || theEvent.which;
			key = String.fromCharCode(key);
		}
		var regex = /[()0-9-*/+]|\./;
		if (!regex.test(key)) {
			theEvent.returnValue = false;
			if (theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	