function calcular(){

let ingreso = Number(document.getElementById("ingreso").value);
let gastos = Number(document.getElementById("gastos").value);
let meta = Number(document.getElementById("meta").value);
let meses = Number(document.getElementById("meses").value);
let sueno = document.getElementById("sueno").value;

let disponible = ingreso - gastos;

let ahorroMensual = meta / meses;

let resultado = "";

if(disponible <= 0){

resultado = "Tus gastos superan tus ingresos. Debes reducir gastos.";

}

else if(ahorroMensual > disponible){

resultado = "Tu meta no es posible en ese tiempo. Ajusta meses o gastos.";

}

else{

resultado = "Debes ahorrar $" + ahorroMensual.toFixed(2) + " cada mes.";

}

document.getElementById("resultado").innerText = resultado;

let imagen = "";

if(sueno == "viaje"){

imagen = "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

}

if(sueno == "casa"){

imagen = "https://images.unsplash.com/photo-1568605114967-8130f3a36994";

}

if(sueno == "carro"){

imagen = "https://images.unsplash.com/photo-1503376780353-7e6692767b70";

}

if(sueno == "estudio"){

imagen = "https://images.unsplash.com/photo-1523240795612-9a054b0db644";

}

if(sueno == "tecnologia"){

imagen = "https://images.unsplash.com/photo-1518770660439-4636190af475";

}

document.getElementById("imagenMeta").src = imagen;

}
