function personne(sonNom, sonPrenom, sonAge, sonSexe, passions) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
    this.hobbies = passions;

    //Texte avec toute les propriétés
    this.text = function () {
        return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", elle a " + this.age + " ans et est de sexe " + this.sexe + ", elle aime " + this.hobbies;
    }

    //Changer deux propriétés
    this.change = function (nouveauNom, nouveauHobbies) {
        this.nom = (nouveauNom);
        this.hobbies = (nouveauHobbies);
    }
}

//Création d'une première personne
let jill = new personne('Bine', 'Jill', 43, 'Masculin', ' le Handballe');
document.getElementById('propriete1').innerText = jill.nom;
document.getElementById('propriete2').innerText = jill.prenom;
document.getElementById('propriete3').innerText = jill.age;
document.getElementById('propriete4').innerText = jill.sexe;
document.getElementById('propriete5').innerText = jill.hobbies;
document.getElementById('method1').innerText = jill.text();
jill.change('Vone', 'le Footballe');
document.getElementById('method2').innerText = jill.text();

//Création d'une deuxième personne
let sandra = new personne('Market', 'Sandra', 28, 'Féminin', 'le Tennis');
document.getElementById('proprieteA').innerText = sandra.nom;
document.getElementById('proprieteB').innerText = sandra.prenom;
document.getElementById('proprieteC').innerText = sandra.age;
document.getElementById('proprieteD').innerText = sandra.sexe;
document.getElementById('proprieteE').innerText = sandra.hobbies;
document.getElementById('methodA').innerText = sandra.text();
sandra.change('Tork', 'la Natation');
document.getElementById('methodB').innerText = sandra.text();

//Création d'un tableau avec des nouvelles personnes
let tableau = [
    maxime = new personne('Pomme', 'Maxime', 31, 'Masculin', 'la Marche'),
    lili = new personne('Mone', 'Lili', 34, 'Féminin', 'la Danse'),
    patric = new personne('Canne', 'Patric', 25, 'Masculin', ' le Chant'),
    sandrine = new personne('Pive', 'Sandrine', 36, 'Féminin', 'la Lecture'),
    gustave = new personne('Fime', 'Gustave',41, 'Masculin', 'le Basket')
];

let body = document.querySelector('body');
for(let i = 0; i < tableau.length; i++) {
    let bloc = document.createElement('div');
    bloc.innerHTML = tableau[i].nom + "<br>";
    bloc.innerHTML += tableau[i].prenom + "<br>";
    bloc.innerHTML += tableau[i].age + "<br>";
    bloc.innerHTML += tableau[i].sexe + "<br>";
    bloc.innerHTML += tableau[i].hobbies + "<br>";
    bloc.innerHTML += tableau[i].text() + "<br>";
    tableau[i].change('Varne', ' la Gyms');
    bloc.innerHTML += tableau[i].text();
    body.append(bloc);
}
