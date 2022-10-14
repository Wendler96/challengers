
const inputTexto = document.querySelector(".textarea1");
const mensagem = document.querySelector(".textarea2");


function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
	document.querySelector(".lupa").style.display = 'none';
	document.querySelector(".msg1").style.display = 'none';
	document.querySelector(".msg2").style.display = 'none';

}

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase();
	
	for(let i=0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])){
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptada;

}

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensagem.value = textoDesencriptado;
}


function desencriptar(stringDesencriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();
	
	for(let i=0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])){
			stringEncriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDesencriptada;

}

function btncopiar() {
	let copiarTexto = document.querySelector(".textarea2");
	copiarTexto.select();
	document.execCommand("copy");
	alert("Texto copiado para a área de transferência.");
}
