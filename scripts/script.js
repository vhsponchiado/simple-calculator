// Função Inserir
function insert(value){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+value;
}

// Função limpar
function clean(){
    document.getElementById('resultado').innerHTML ="";
}

// Função Excluir 1 número(backspace)
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// Função Calcular
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = '0';   
    }
}