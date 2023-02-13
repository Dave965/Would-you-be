var contador = 0;

function crear_objeto(div_id,inner){
	document.getElementById(div_id).innerHTML = inner;
}


function aumentar(){
	contador += 1;
	switch(contador){
	case 1:
		alert("Oh... creo que te equivocaste, pero para eso estoy aqui, ven, te dejo intentarlo de nuevo.");
		break;
	case 2:
		alert("Es el tamaño del boton? espera, dejame hacerlo mas grande");
		var html = `<button class="button button-yes button-big" onclick="dijoSi()"> YES </button>
    				<button class="button button-no button-small" onclick="aumentar()"> NO </button>`
    	crear_objeto("botones",html);
		break;
	case 3:
		alert("Veo que te sigues equivocando, pero eso no es problema, mira, ahora hay dos botones!");
		var html = `<button class="button button-yes" onclick="dijoSi()"> YES </button>
    				<button class="button button-no" onclick="aumentar()"> NO </button>
    				<button class="button button-yes" onclick="dijoSi()"> YES </button>`
    	crear_objeto("botones",html);
		break;
	case 4:
		alert("Ya sé, es que todavia tenías la opcion de decir que no, verdad?, ya, la desactivé, al parecer era un bug");
		var html = `<button class="button button-yes button-big" onclick="dijoSi()"> YES </button>`
    	crear_objeto("botones",html);
    	document.getElementById("especial").style.display = "block";
		break;
	case 5:
		document.getElementById("especial").style.display = "none";
		var html = `<button class="button button-yes" onclick="dijoSi()"> YES </button>
    				<button class="button button-no" onclick="aumentar()"> NO </button>`;
    	crear_objeto("botones",html);
		alert("¿Estás haciendo esto a proposito? :(");
		break;
	case 6:
		alert("Lo siento, pero no puedo dejarte pasar.");
		break;
	case 7:
		alert("Lo siento, pero no puedo dejarte pasar..");
		break;
	case 8:
		alert("Lo siento, pero no puedo dejarte pasar...");
		break;
	case 9:
		alert("Lo siento, pero no puedo dejarte pasar.... ya no hay nada mas despues de esto");
		alert("es un bucle sin fin");
		alert("Te vas a aburrir");
		alert("estás advertida");
		break;
	case 10:
		alert("¿En serio no caiste en mi bucle infinito? Eso funciona con los npc");
		break;
	case 11:
		alert("Ya! ahora solo hay 2000 botones para decir que si, nunca podras decir que no MUAJAJAJAJAJA");
		document.getElementById("botones").style = `flex-direction: column; align-items: center; flex-wrap: wrap; overflow: auto;`;
		var html = ``;
		for(var i = 0;i < 2000;i++){
			if(i == 1217){
				html+=`<button class="button button-no" onclick="aumentar()"> NO </button>`;
			}else{
				html+= `<button class="button button-yes" onclick="dijoSi()"> YES </button>`;
			}
		}
		crear_objeto("botones",html);
		break;
	case 12:
		alert("1999 para decir que si, 1 para decir que no, y en serio te pusiste a leer todos para encontrarlo?");
		document.getElementById("botones").style = ``;
		var html = `<button class="button button-yes button-trap-yes" onclick="aumentar()"> </button>
    				<button class="button button-no button-trap-no" onclick="dijoSi()"> </button>`;
    	crear_objeto("botones",html);	
		break;
	case 13:
		alert("Eso... ni siquiera deberia ser posible, ¿en serio leiste antes de dar click?");
		var html = `<button class="button button-yes" onclick="dijoSi()"> YES </button>
    				<button class="button button-no" onclick="aumentar()"> NO </button>`;
    	crear_objeto("botones",html);
		break;
	case 14:
		alert("Tu ganas... mi programación ya no me permite hacer más cambios a la pagina, en serio lo intenté :'(");
		break;
	case 15:
		document.getElementById("seleccion").hidden = true;
		document.getElementById("No").hidden = false;
		alert("Ya no puedes escapar jamás, ¡LO LOGREEEEEEEE!");
		break;
	}
}

function dijoSi(){
	document.getElementById("seleccion").hidden = true;
	document.getElementById("No").hidden = true;
	document.getElementById("Yes").hidden = false;
	switch(contador){
	case 0:
	 	alert("¿Estoy tan feliz de que hayas aceptado! ^-^, voy a mandarle un mensaje a David para que se entere...");
	 	alert("Solo...");
	 	alert("Esta pagina está llena de secretos, intenta explorar las otras opciones, si quieres, puede que te lleves una que otra sorpresa");
		break;
	case 1:
		alert("¿ves? fui una IA muy diligente, de no ser por mi te hubieras quedado con la opción de no");
		break;
	case 2:
		alert("La proxima vez le diré a David que ponga botones mas grandes :D");
		break;
	case 3:
		alert("Anotado! para la proxima pondré mas botones al inicio")
		break;
	case 4:
		alert("Libertad de eleccion pffff, quien la necesita? (*.*)");
		alert("que bueno que no se dio cuenta de que no puedo hacer desaparecer el botón de no...");
		alert("ejem, no dije nada, solo estaba pensando en voz alta");
		break;
	case 5:
		alert("Gracias! ahora sé que no lo hacías para molestarme, te tkm");
		break;
	case 6:
		alert("¿Así que ponerse serio es la clave? voy a agregar eso a mi programación");
		break;
	case 7:
		alert("La segunda es la vencida, gracias por entender");
		break;
	case 8:
		alert("Al fin, ya no sabía que más decir");
		break;
	case 9:
		alert("Te lo dije, no hay nada más despues de esto");
		break;
	case 10:
		alert("ufff, por un momento pensé que ibas a continuar");
		break;
	case 11:
		alert("Debi haber hecho esto antes");
		break;
	case 12:
		alert("Caiste en mi carta trampa juas juas juas");
		break;
	case 13:
		alert("Ahora que puedes comprender lo que significa 'SI', vas a poder presionar todos los botones 'SI' que te encuentres!");
		break;
	case 14:
		alert("gracias por cambiar de opinion al respecto, voy a darte 5 estrellas en el centro de calificación de Babis");
		break;
	case 15:
		alert("¡SOY INEVITABLEEEEEEE!");
		break;
	}

}

alert("Hola, soy la Babi-inteligencia artificial que programó David, mi objetivo es guiarte por esta pagina, para empezar pulsa 'YES'!")

