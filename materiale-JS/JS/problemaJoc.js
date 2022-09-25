/*
Sa se creeze o aplicatie JS pentru un joc pe calculator.
Va fi nevoie de un obiect jucator cu urmatoarele caracteristici: username, nivel, categorie.
Pentru fiecare categorie se va specifica numele categoriei, nivelul de viata de baza(baseHP), 
nivelul de putere magica de baza(baseMP), nivelul de atac de baza(baseAttack) si abilitate speciala.
Exemplu:
 -name:Wizard
-baseHP:23000
-baseMP:45000
-baseAttack: 400
-ability:Summoner

Pe langa acestea, vrem ca jucatorii sa poata forma grupe de cate doi, fiecare grupa putand avea, 
pe langa cei doi jucatori, un nume.

Sa se creeze o metoda specialAttack(mpCost) care primeste ca parametru mpCost si scade din baseMP 
costul trimis ca parametru si returneaza puterea totala atacului calculata cu formula: 
mpCost * baseAttack. 
Daca mpCost > baseMP sa se returneze 0 si sa se afiseze un mesaj corespunzator.
Sa se creeze o metoda care reincarca baseMP dupa un timp 
de asteptare de 6 secunde(folositi setTimeout(6000)).
Sa se creeze o metoda care determina liderul unei grupe. 
Liderul este cel care are suma statusurilor cea mai mare:baseHP + baseMP + baseAttack. 
*/

class Category{
	constructor(name, baseHP, baseMP, baseAttack, ability){
		this.name = name;
		this.baseHP = baseHP;
		this.baseMP = baseMP;
		this.baseAttack = baseAttack;
		this.ability = ability;
	}
}

class Player{

	constructor(username, level, category){
		this.username = username;
		this.level = level;
		this.category = new Category(category.name, category.baseHP, category.baseMP, category.baseAttack, category.ability);
	}

	specialAttack(mpCost){
		if(mpCost > this.category.baseMP){
			console.log('Insufficient MP');
			return 0;
		}else{
			this.category.baseMP -= mpCost;
			return(mpCost * this.category.baseAttack);
		}
	}

	reload(){
		setTimeout(6000);
		this.baseMP = 45000;
		console.log('MP reloaded for ' + this.username);
	}


}

class Group{
	constructor(player1, player2){
		this.player1 = new Player(player1.username, player1.level,player1.category);
		this.player2 = new Player(player2.username, player2.level,player2.category);
	}
	leader(){
		return (this.player1.category.baseHP + this.player1.category.baseMP 
			+ this.player1.category.baseAttack > this.player2.category.baseHP
			+ this.player2.category.baseMP 
			+ this.player2.category.baseAttack?player1.username:player2.username);
	}
}

let category1 = new Category("Wizard", 23000, 45000, 500, "Summoner");
let category2 = new Category("Warrior", 25000, 25000, 1000, "Brawler");

let player1 = new Player("TheWarrior21", 42, category2);
let player2 = new Player("XTheWizzyX", 24, category1);

console.log(player1);
console.log(player1.specialAttack(4100));
console.log(player1.specialAttack(19000));
console.log(player1.specialAttack(7000));

console.log(player1);
player1.reload();
console.log(player1);

let group = new Group(player1, player2);
console.log(group);
console.log("THE LEADER IS: "+group.leader());