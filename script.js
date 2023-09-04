// definição do script 

// Recuperação de dados da pagina 

const dados = document.querySelector('#health');

dados.addEventListener('submit',function(e){
    e.preventDefault();
    setMensagem('Funciona');
})

function getImc(){
    const inPeso = document.querySelector('#peso');
    const inAltura = document.querySelector('#altura');

    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    console.log(peso, altura);
    
}

function setMensagem(teste) {
    const msg = document.querySelector('#resultado');
    //Limpa a região
    msg.innerHTML = '';

    // Crie um elemento p - paragrafo
    const frase = document.createElement('p');

    // inserindo um objeto filho na árvore
    frase.classList.add('certo');
   msg.appendChild(frase);
   frase.innerHTML = teste;
}
