function renderListaCarti(carti){
        root.innerHTML += `<h2> Carti : </h2> <ul id = "lista-carti"></ul>`;

        carti.forEach( function(carte){
            const carteDeAfisat = new Carte(carte.nume, carte.pret);
            carteDeAfisat.renderCarte();
        });
}
