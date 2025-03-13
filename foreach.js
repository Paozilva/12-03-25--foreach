function contar() { // função de conteo
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); //variàvel de um identificador 
    let divNumeros = document.getElementById("divNumeros"); // recibe los elemento de crear numero //declaraion de variable  //pega los elemento del id
    divNumeros.innerHTML = "";
    for (let i = numero; i <= txtNumeroFinal.value; i++){
        divNumeros.innerHTML += i +"<br />"; // += vai fazer com que a variável receba ele mesma + o valor desejado 
    } 
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13){  //código 13 é quando a tecla enter é teclada
        contar();       
    } else{
    if (
        isNaN(event.key) && 
        event.keyCode != 8 &&  // Código 8 é quando a tecla backspace(apagar à esquerda) é teclado
        event.keyCode != 46 && // Código 46 significa que a tecla delete é teclada
        event.keyCode != 37 && // Código 37 significa que a tecla seta para esquerda é teclada
        event.keyCode != 38 && // Código 38 significa que a tecla seta para cima
        event.keyCode != 39 && // Código 39 significa que a tecla seta para baixo é teclado
        event.keyCode != 40 && // Código 40 significa que a tecla seta para direita do teclado 
        event.keyCode != 35 && // Código 35 significa que a tecla end é teclada
        event.keyCode != 36 // Código 36 significa que a tecla home é teclada
    ) { 
        console.log("Não e numérico");
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não númerica! por favor, tecla uma tecla númerica e tente novamente.";
      }
    }
});   

document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {
     // console.log(this);
     if (this.vale.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999) {
            this.value = 999;
            alerta("O número Máximo permitido é 999!");
        } else {    
            this.value = this.value.subdtring(0,3);
        }    
    }
}); 