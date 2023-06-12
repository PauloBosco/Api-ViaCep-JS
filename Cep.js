export default class Cep{
    #cep;
    #logradouro;
    #complemento;
    #bairro;
    #uf;
    #ddd;

    constructor(cep, logradouro, complemento, bairro, uf, ddd){
        this.#cep = cep;
        this.#logradouro = logradouro;
        this.#complemento = complemento;
        this.#bairro = bairro;
        this.#uf = uf;
        this.#ddd = ddd;
    }

    get cep(){
        return this.#cep;
    }

    set cep(cep){
        this.#cep = cep;
    }

    get logradouro(){
        return this.#logradouro;
    }

    set logradouro(logradouro){
        this.#logradouro = logradouro;
    }

    get complemento(){
        return this.#complemento;
    }
    set complemento(complemento){
        this.#complemento = complemento;
    }

    get bairro(){
        return this.#bairro;
    }
    
    set bairro(bairro){
        this.#bairro = bairro;
    }

    get uf(){
        return this.#uf;
    }

    set uf(uf){
        this.#uf = uf;
    }

    get ddd(){
        return this.#ddd;
    }

    set ddd(ddd){
        this.#ddd = ddd;
    }
}