/*
Sa se creeze o aplicatie JS care tine evidenta cartilor si persoanele care imprumuta carti dintr-o biblioteca.
Fiecare carte este definita prin titlu, autor si numar exemplare.
Fiecare persoana dispune de un card de biblioteca(nr card, data valabilitate) si o lista de carti pe care le-a imprumutat).
Sa se creeze obiectele pentru aplicatie avand in vedere cerintele de mai sus.
Sa se creeze o metoda care afiseaza toate cartile imprumutate de o anumita persoana. ex: Andrei Popescu a imprumutat: Poezii de Mihai Eminescu, Purgatoriul de Dante Alighieri si Crima si Pedeapsa de F.M. Dostoievski.
Sa se creeze o metoda care afiseaza toate persoanele care au cardul de biblioteca expirat(un card este expirat daca data de azi a depasit data de valabilitate), folositi : 
let today = new Date().toLocaleDateString()
Sa se creeze o metoda care modifica numarul de exemplare pentru o anumita carte in functie de un parametru dat: primeste un singur parametru care va inlocui numarul de exemplare deja existent.
*/


class Carte{

	constructor(titlu, autor, nrExemplare){
		this.titlu = titlu;
		this.autor = autor;
		this.nrExemplare = nrExemplare;
	}
  
  updateNrExemplare(noulNr){
    this.nrExemplare = noulNr;
  }

}

class CardDeBiblioteca{

	constructor(nrCard, dataValabilitate){
		this.nrCard = nrCard;
		this.dataValabilitate = dataValabilitate;
	}

	valabilitate(){
    /*
    Compararea datelor se face ca orice alt tip de comparare, folosind >/<
    daca datax < datay, inseamna ca datax este mai recenta, deci datay este mai veche
    */
		let today = new Date().toLocaleDateString();
    if(today < this.dataValabilitate)
      return false;
    else
      return true;
    
	}
}

class Persoana{

	constructor(card, carti, nume){
		this.card = new CardDeBiblioteca(card.nrCard, card.dataValabilitate);//Am apelat constructorul pentru cardul de biblioteca si am trimis ca parametri informatiile din variabila card
		this.carti = carti;
		this.nume = nume;
	}

	afisareCarti(){
    //Vom crea un string de carti si autori pentru a putea afisa informatiile din obiect intr-o singura linie
    //daca am da cate un console.log pentru fiecare titlu si autor am avea informatiile afisate pe mai multe linii
    //daca am afisa direct informatiile(console.log(carte)) atunci in consola am vedea [Object object]
		let cartiString ="";
		this.carti.forEach(carte => cartiString = cartiString + ', ' + carte.titlu +' de '+ carte.autor);
		console.log(this.nume + ' a imprumutat: ' + cartiString);
	}
  

	verificareCardValabilitate(){
		if(this.card.valabilitate() == false)
			return 'Cardul a expirat la data de ' + this.card.dataValabilitate ;
		else
			return 'Cardul este inca valabil pana la data de ' + this.card.dataValabilitate;
	}
}


let today = new Date().toLocaleDateString()

let card1 = new CardDeBiblioteca(12412, "14/12/2022");
let card2 = new CardDeBiblioteca(12412, "15/02/2023");
let card3 = new CardDeBiblioteca(12412, "24/08/2022");
let card4 = new CardDeBiblioteca(12412, "1/2/2023");

let carte1 = new Carte("Poezii", "Mihai Eminescu", 49);
let carte2 = new Carte("Purgatoriul", "Dante Alighieri", 21);
let carte3 = new Carte("In Search of Lost Time", "Marcel Proust", 25);
let carte4 = new Carte("Ulysses", "James Joyce", 4);
let carte5 = new Carte("Don Quixote", "Miguel de Cervantes", 9);
let carte6 = new Carte("The Great Gatsby", "F. Scott Fitzgerald", 49);
let carte7 = new Carte("Moby Dick", "Herman Melville", 49);
let carte8 = new Carte("War and Peace", "Leo Tolstoi", 49);
let carte9 = new Carte("Hamlet", "William Shakespeare", 49);

let persoana1 = new Persoana(card1, [carte1, carte5, carte3, carte2], "Cosmin Epure");
let persoana2 = new Persoana(card3, [carte5, carte6, carte9, carte4, carte8], "Florin Salam");

console.log(persoana1.verificareCardValabilitate());
console.log(persoana2.verificareCardValabilitate());

persoana2.afisareCarti();
carte1.updateNrExemplare(20);
console.log(carte1);