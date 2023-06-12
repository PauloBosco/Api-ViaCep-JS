import Cep from "./Cep.js";

const btn = document.querySelector('#btnEnviar');
const inputCep = document.querySelector('#inputCep');

async function buscaCep(){
    const cep1 = inputCep.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep1}/json/`);
    const cepData = await response.json();
    
    return cepData;
}

async function buscaPelaRua(){
    const cep2 = inputCep.value;
    const response = await fetch(`https://viacep.com.br/ws/MG/Juiz%20de%20Fora/${cep2}/json/`);
    const cepData = await response.json();  

    return cepData;
}

function mostrarDadosCep(dados){
    const resposta = document.querySelector('#resposta');
    resposta.innerText = `Logradouro: ${dados.logradouro}
                        Complemento: ${dados.complemento?dados.complemento:"Sem complemento."}
                        Bairro: ${dados.bairro}
                        UF: ${dados.uf}
                        DDD: ${dados.ddd}`
}

// function mostrarDadosRua(dados){
//     const resposta = document.querySelector('#resposta');
//     for (let i = 0; i < dados.length; i++) {
//         resposta.innerText += `CEP: ${dados[i].cep}
//         Logradouro: ${dados[i].logradouro}
//         Complemento: ${dados[i].complemento?dados[i].complemento:"Sem complemento."}
//         Bairro: ${dados[i].bairro}
//         UF: ${dados[i].uf}
//         DDD: ${dados[i].ddd}
        
//         `
//     }
// }

async function mostrarDadosRua() {
    const dados = await buscaPelaRua();
    const resposta = document.querySelector('#resposta');
    const ceps = [];
  
    if (!dados.erro) {
      for (let i = 0; i < dados.length; i++) {
        const cepObj = new Cep(
          dados[i].cep,
          dados[i].logradouro,
          dados[i].complemento ? dados[i].complemento : "Sem complemento.",
          dados[i].bairro,
          dados[i].uf,
          dados[i].ddd
        );
        ceps.push(cepObj);
  
        resposta.innerText += `CEP: ${cepObj.cep}
        Logradouro: ${cepObj.logradouro}
        Complemento: ${cepObj.complemento}
        Bairro: ${cepObj.bairro}
        UF: ${cepObj.uf}
        DDD: ${cepObj.ddd}

        `;
      }
    } else {
      resposta.innerText = "CEP não encontrado.";
    }
  
    return ceps;
  }

function limparTela() {
    const resposta = document.querySelector('#resposta');
    resposta.innerText = "";
  }

btn.addEventListener('click', async()=>{
    limparTela();
    const cepInput = inputCep.value;

    if(!isNaN(cepInput)){
        const cepData = await buscaCep();
        mostrarDadosCep(cepData);
    }else{
        const cepData = await buscaPelaRua();
        mostrarDadosRua(cepData);
    }
    document.querySelector('#inputCep').focus();
    document.querySelector('#inputCep').value = "";
        
});
  