class Carte{
    constructor(nume, pret){
        this.nume = nume;
        this.pret = pret;
    }
    renderCarte(){
       const listaDeAfisat = document.querySelector('#lista-carti');
       listaDeAfisat.innerHTML += `<li><p>Nume: ${this.nume}</p><p>Pret: ${this.pret}</p></li>`
    }
}