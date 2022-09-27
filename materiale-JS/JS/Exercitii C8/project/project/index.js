const root = document.querySelector('#root');

const carti=[
    {
    nume:'Crima in Orient Express',
    pret:40
    },
    {
        nume:'Harry Potter',
        pret:60
    },
    {
        nume:'Stapanul Inelelor',
        pret:60
    }
];

function startRendering(){
    renderListaCarti(carti);
}

window.addEventListener('load', startRendering)